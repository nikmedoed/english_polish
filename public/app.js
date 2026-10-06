import { renderRules } from './rules.js';
import { fresh, validate, merge, check, summary, pick, dueFamilies, familyOf, MODES, assess, pickContinuous, hintUsed, feedbackStatus, shouldAutoAdvance } from './core.js';
const BUILD_ID='development';
let updateShown=false;
async function checkForUpdate(){
  if(document.hidden||updateShown||BUILD_ID==='development')return;
  try{
    const response=await fetch('./build-id.json',{cache:'no-store'});if(!response.ok)return;
    const latest=await response.json();if(latest.id===BUILD_ID)return;
    updateShown=true;
    const status=document.querySelector('#storage-status');
    status.textContent='Есть новая версия. ';
    const button=document.createElement('button');button.className='quiet';button.textContent='Обновить';
    button.onclick=()=>{rememberSession();location.reload();};status.append(button);
  }catch{/* Keep the current practice working offline. */}
}
window.addEventListener('focus',checkForUpdate);
setInterval(checkForUpdate,30000);

const sandbox = new URLSearchParams(location.search).get('sandbox') === '1';
const KEY = sandbox ? 'english-focus-sandbox-v1' : 'english-focus-v1';
const SESSION_KEY = sandbox ? 'english-focus-sandbox-session-v2' : 'english-focus-session-v2';
const app = document.querySelector('#app');
const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
function markedWord(value,other){
 let prefix=0,suffix=0;
 while(prefix<Math.min(value.length,other.length)&&value[prefix]===other[prefix])prefix++;
 while(suffix<Math.min(value.length,other.length)-prefix&&value[value.length-1-suffix]===other[other.length-1-suffix])suffix++;
 return escape(value.slice(0,prefix))+'<mark>'+escape(value.slice(prefix,value.length-suffix)||'∅')+'</mark>'+escape(suffix?value.slice(-suffix):'');
}
function typoDetails(typo){
 return `<div class="typo-details"><span>Опечатка, ответ принят</span><div><span>Ты написал: <strong>${markedWord(typo.typed,typo.wanted)}</strong></span><span>Правильно: <strong>${markedWord(typo.wanted,typo.typed)}</strong></span></div></div>`;
}
function revealedDifference(ex,result){
 const value=session.repairDraft||result.answer||session.draft;
 if(!value||!result.revealed||result.ok||result.recovered)return '';
 const typed=value.trim().split(/\s+/),correct=ex.answers[0].trim().split(/\s+/);
 if(typed.length!==correct.length)return `<p class="small">Твой ответ: ${escape(value)}</p>`;
 const canonical=w=>w.toLowerCase().replace(/[.,!?]/g,'');
 const indices=typed.map((w,i)=>canonical(w)!==canonical(correct[i])?i:-1).filter(i=>i>=0);
 if(!indices.length)return '';
 return `<div class="answer-difference"><span class="small">Отличия в твоём ответе</span><p>${typed.map((w,i)=>indices.includes(i)?markedWord(w,correct[i]):escape(w)).join(' ')}</p><p class="small">${indices.map(i=>markedWord(typed[i],correct[i])+' → '+markedWord(correct[i],typed[i])).join('; ')}</p></div>`;
}
const modeNames = { match:'Сопоставление', choice:'Выбор формы', gap:'Вспомнить форму', repair:'Исправить фразу', order:'Собрать предложение', speak:'Перенести в речь',transform:'Преобразование',translate:'Из смысла в фразу',contrast:'Контрастные контексты' };
let state = fresh(), bank, session = null, started = Date.now(), visibleSince = Date.now(), activeMs = 0, transitionTimer = null, focusNext = false;

function warning(message) {
  const el = document.querySelector('#storage-status');
  el.textContent = message;
  el.className = 'notice';
}
try {
  const raw = localStorage.getItem(KEY);
  if (raw) state = validate(JSON.parse(raw));
} catch { warning('Память недоступна или повреждена. Сделай экспорт перед закрытием.'); }
function save() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = merge(state, JSON.parse(raw));
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch { warning('Не удалось сохранить. Сделай экспорт перед закрытием.'); }
}
function rememberSession() {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(session)); } catch { /* Persistent progress still works without a tab session. */ }
}
function newSession(extra = false) {
  const unresolved=(bank.skills||[]).filter(skill=>skill.topic===state.focus).filter(skill=>{const es=state.events.filter(e=>e.phase!=='correction'&&!e.self&&e.skill===skill.id);return es.length&&!es.at(-1).ok;}).map(skill=>({skill:skill.id,after:0}));
  session = { engine:3,remediation:unresolved,day:new Date().toLocaleDateString('sv-SE'), input:state.preferences.input, focus:state.focus, count:0, correct:0, checked:0, guided:0, skipped:0, seen:[], current:null, answered:false, result:null, hint:false, draft:'', words:[], extra, complete:false, oral:false };
  advance();
}
function stopAuto(){if(transitionTimer!==null){clearTimeout(transitionTimer);transitionTimer=null;}}
function continuePractice(){stopAuto();if(session.oral){session.complete=true;rememberSession();renderComplete();}else{advance();focusNext=true;renderPractice();}}
function advance() {
  stopAuto();
  if(session.current&&session.result)session.previous={exercise:session.current,result:session.result};
  session.remediation=session.remediation||[];
  const remedial=session.remediation.find(x=>x.after<=session.count);
  const recentModes=(session.modes||[]).slice(-2);
  const activeInput=session.input==='mix'&&recentModes.length===2&&recentModes.every(m=>!['choice','order','match'].includes(m))?'tap':session.input==='mix'&&recentModes.length===2&&recentModes.every(m=>['choice','order','match'].includes(m))?'write':session.input;
  let chosen = pickContinuous(bank, {...state, preferences:{...state.preferences,input:activeInput}}, session.current, Date.now(), { usedFamilies:session.seen, extra:session.extra,forceSkill:remedial?.skill });
  if(!chosen&&activeInput!==session.input)chosen=pickContinuous(bank,{...state,preferences:{...state.preferences,input:session.input}},session.current,Date.now(),{usedFamilies:session.seen,extra:session.extra,forceSkill:remedial?.skill});
  if(remedial&&chosen?.skill===remedial.skill)session.remediation=session.remediation.filter(x=>x!==remedial);
  session.current = chosen?.id || null;
  session.complete = !chosen;
  session.answered = false;
  session.result = null;
  session.hint = false;
  session.hintExercise=null;
  session.draft = '';
  session.repairDraft=null;
  session.words = [];
  session.oral = false;
  activeMs = 0;
  visibleSince = Date.now();
  rememberSession();
}
function restoreSession() {
  try {
    const candidate = JSON.parse(sessionStorage.getItem(SESSION_KEY));
    if (candidate && (candidate.engine===3||candidate.draft) && candidate.day === new Date().toLocaleDateString('sv-SE') && ['mix','tap','write'].includes(candidate.input) && candidate.focus === state.focus  && Array.isArray(candidate.seen) && candidate.seen.every(x=>typeof x==='string') && Number.isSafeInteger(candidate.count) && candidate.count>=0 && (candidate.current===null || bank.exercises.some(e=>e.id===candidate.current))) {session = candidate;session.engine=3;if(session.input==='write')session.input='mix';}
  } catch { /* An invalid tab session starts afresh, leaving progress intact. */ }
}
window.addEventListener('storage', e => {
  if (e.key === KEY && e.newValue) {
    try {
      state = merge(state, JSON.parse(e.newValue));
      if (['stats','topics'].includes(location.hash.slice(1))) render();
    } catch { warning('Не удалось прочитать изменения из другой вкладки.'); }
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {activeMs += Date.now()-visibleSince;stopAuto();}
  else {visibleSince = Date.now();if(session?.answered&&!session.complete&&(location.hash.slice(1)||'practice')==='practice')showNext();}
});
const topic = () => bank.topics.find(t => t.id === state.focus);
const exercise = () => bank.exercises.find(e => e.id === session?.current);
document.addEventListener('keydown',event=>{
  if(event.key!=='Enter'||event.repeat||event.isComposing||event.ctrlKey||event.altKey||event.metaKey)return;
  if((location.hash.slice(1)||'practice')!=='practice'||!session?.answered||session.complete)return;
  if(session.result?.ok===false&&!session.result.self&&!session.result.recovered)return;
  if(event.target.closest?.('a,button')&&event.target.id!=='next')return;
  event.preventDefault();continuePractice();
});
function helpNote(result){
 const reason={hint:'Для этого задания ты открыл подсказку.', 'auto-hint':'После повторной ошибки приложение показало подсказку.',answer:'Перед исправлением был показан правильный ответ.'}[result.help];
 return reason?'<p class="help-note">'+reason+'</p>':'';
}
function contextModel(ex){
 if(!ex.parts)return escape(ex.model);
 return ex.parts.map(part=>'<span class="context-answer">'+escape(part.prompt).replace('___','<strong>'+escape(part.answer)+'</strong>')+'</span>').join('');
}
function previousReview(){
 const previous=session?.previous,ex=bank.exercises.find(e=>e.id===previous?.exercise);
 if(!ex)return '';
 const r=previous.result,status=feedbackStatus(r);
 return `<article class="card previous-review" aria-label="Разбор предыдущего задания"><div class="meta"><span>Предыдущее задание</span><strong>${status}</strong></div><p class="previous-question">${escape(ex.prompt||ex.cue)}</p>${r.typo?typoDetails(r.typo):''}${r.answer&&!r.ok?`<p class="small">Твой ответ: ${escape(r.answer)}</p>`:''}${r.skipped?'':`<p class="previous-model">${contextModel(ex)}</p>${helpNote(r)}<p class="previous-explanation">${escape(ex.explanation)}</p>`}</article>`;
}
const plural = (n, one, few, many) => n+' '+(n%100>=11&&n%100<=14?many:n%10===1?one:n%10>=2&&n%10<=4?few:many);
const percentage = n => n===null ? '·' : `${n}%`;
function heading(kicker, title, description) { return `<div class="page-head"><div><h1>${title}</h1>${description?`<p class="small">${description}</p>`:''}</div></div>`; }
function render() {
  stopAuto();
  const route = location.hash.slice(1) || 'practice';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.hash === `#${route}`) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
  if (route==='rules') renderRules(app, bank, state.focus, id=>{state.focus=id;save();});
  else if (route==='topics') renderTopics();
  else if (route==='stats') renderStats();
  else if (route==='settings') renderSettings();
  else renderPractice();
}
function renderPractice() {
  if (!session || session.focus!==state.focus) newSession();
  if (session.complete) { renderComplete(); return; }
  const ex=exercise(), t=topic(), s=summary(state,state.focus);
  app.innerHTML = `<div class="page-head practice-head"><h1>${t.title}</h1><div class="practice-controls"><div class="mode-switch" role="group" aria-label="Режим практики"><button data-mode="mix" aria-pressed="${session.input!=='tap'}">Полная практика</button><button data-mode="tap" aria-pressed="${session.input==='tap'}">Без клавиатуры</button></div><a class="topic-link" href="#rules">Повторить правила</a><a class="topic-link" href="#topics">Сменить тему</a></div></div>
    <div class="layout"><section class="practice-flow"><div class="card" id="exercise">
      <div class="meta"><span>${modeNames[ex.mode]} · ${['','С опорой','Самостоятельно','В контексте'][ex.level||2]}</span><span>Задание ${session.count+1}</span></div>
      <p class="practice-note">${escape(ex.task||instructions(ex.mode))}</p>
      <div class="prompt">${escape(ex.mode==='order'?'':ex.mode==='speak'?ex.cue:ex.prompt)}</div>
      <div id="input-area"></div><div id="feedback" aria-live="polite"></div>
      <div class="actions" id="exercise-actions"></div><div class="actions" id="support-actions"></div>
    </div>${previousReview()}</section><aside class="practice-summary"><div class="card"><h2>Этот подход</h2>
      <dl class="facts"><dt>Выполнено</dt><dd>${session.count}</dd><dt>Верно без подсказки</dt><dd>${session.correct} / ${session.checked}</dd><dt>С подсказкой</dt><dd>${session.guided}</dd><dt>Пропущено</dt><dd>${session.skipped}</dd></dl>
      <hr><dl class="facts"><dt>Повторений к сроку</dt><dd>${dueFamilies(bank,state)}</dd><dt>Воспроизведение</dt><dd>${s.recallCount<6?'Мало данных':percentage(s.recall)}</dd></dl>
      <div class="actions"><a href="#stats" class="small">Весь прогресс</a><a href="#settings" class="small">Настроить подход</a></div>
    </div></aside></div>`;
  document.querySelectorAll('[data-mode]').forEach(button=>button.onclick=()=>{
    if(button.dataset.mode===session.input)return;
    stopAuto();state.preferences.input=button.dataset.mode;save();session.input=button.dataset.mode;
    if(session.answered)continuePractice();else{advance();renderPractice();}
  });
  const input=document.querySelector('#input-area');
  if (session.answered) { showFeedback(); showNext(); return; }
  if (ex.mode==='choice') {
    input.className='choices';
    for (const value of shuffle(ex.choices)) {
      const button=document.createElement('button'); button.textContent=value; button.onclick=()=>grade(value); input.append(button);
    }
  } else if(ex.mode==='match'){
    renderMatch(input,ex,'match',session.draft,grade,value=>{session.draft=value;rememberSession();});
  } else if (ex.mode==='order') {
    input.innerHTML='<div class="feedback" id="assembled" aria-live="polite"></div><div class="word-bank" id="words"></div>';
    const tokens=ex.model.split(' ').map((word,i)=>({word,i}));
    for (const token of shuffle(tokens)) {
      const button=document.createElement('button'); button.textContent=token.word; button.dataset.token=token.i;
      button.disabled=session.words.includes(token.i);
      button.onclick=()=>{session.words.push(token.i);button.disabled=true;updateWords();rememberSession();};
      document.querySelector('#words').append(button);
    }
    updateWords();
    document.querySelector('#exercise-actions').innerHTML='<button id="undo">Убрать последнее</button><button class="primary" id="check">Проверить</button>';
    document.querySelector('#undo').onclick=()=>{const id=session.words.pop();if(id!==undefined)document.querySelector(`[data-token="${id}"]`).disabled=false;updateWords();rememberSession();};
    document.querySelector('#check').onclick=()=>grade(session.words.map(i=>tokens[i].word).join(' '));
  } else if (ex.mode==='speak') {
    input.innerHTML='<p class="small">Затем скажи похожую фразу о себе.</p>';
    document.querySelector('#exercise-actions').innerHTML='<button class="primary" id="reveal">Показать образец</button>';
    document.querySelector('#reveal').onclick=()=>{
      document.querySelector('#feedback').innerHTML=`<div class="feedback"><strong>${escape(ex.model)}</strong><br>${escape(ex.explanation)}<p class="small">Проверь конструкцию. Перевод не обязан совпадать дословно.</p></div>`;
      document.querySelector('#exercise-actions').innerHTML='<button id="yes">Получилось</button><button id="no">Нужна практика</button>';
      document.querySelector('#yes').onclick=()=>record(true,true);
      document.querySelector('#no').onclick=()=>record(false,true);
    };
  } else {
    input.innerHTML=`${ex.mode==='gap'?'<p class="small cue">'+escape(ex.cue)+'<span>Исходное слово: '+escape(ex.base)+'</span></p>':ex.mode==='translate'?'<p class="small cue">Слова: '+escape(ex.base)+'</p>':''}${answerForm(ex,'answer',session.draft)}`;
    bindAnswerForm(ex,'answer',value=>grade(value),value=>{session.draft=value;rememberSession();});
    if(focusNext){document.querySelector('#answer-form input')?.focus({preventScroll:true});focusNext=false;}
  }
  supportButtons();
}
function renderMatch(container,ex,prefix,draft='',submit,onchange){
 const values=(draft||'').split(' | ');
 // Keep canonical indices for grading and drafts; only presentation is shuffled.
 const indices=ex.parts.map((_,i)=>i);
 if(session.matchExercise!==ex.id){session.matchExercise=ex.id;session.matchOrder=null;}
 const order=ex.shuffleParts?(session.matchOrder?.length===indices.length?session.matchOrder:(session.matchOrder=shuffle(indices))):indices;
 container.innerHTML='<form id="'+prefix+'-form" class="match-form">'+order.map(i=>{
  const part=ex.parts[i],pieces=part.prompt.split('___');
  const options=shuffle([...new Set(ex.choices)]);
  const select='<select id="'+prefix+'-'+i+'" data-part="'+i+'" aria-label="Форма в предложении: '+escape(part.prompt)+'" required><option value="">…</option>'+options.map(value=>'<option value="'+escape(value)+'"'+(value===values[i]?' selected':'')+'>'+escape(value)+'</option>').join('')+'</select>';
  return '<label class="match-sentence" for="'+prefix+'-'+i+'">'+escape(pieces[0])+select+escape(pieces.slice(1).join('___'))+'</label>';
 }).join('')+'<div class="actions"><button class="primary">Проверить</button></div></form>';
 const form=container.querySelector('form');
 const answer=()=>{const result=[];form.querySelectorAll('select').forEach(field=>result[Number(field.dataset.part)]=field.value);return result.join(' | ');};
 form.onchange=()=>onchange?.(answer());
 form.onsubmit=event=>{event.preventDefault();submit(answer());};
 rememberSession();
}
function answerForm(ex,prefix,draft=''){
 const values=draft.split(' | ');
 if(ex.mode==='contrast'||ex.mode==='match')return `<form id="${prefix}-form" class="contrast-form">${ex.parts.map((p,i)=>`<label for="${prefix}-${i}">${escape(p.prompt)} <span class="small">(${escape(p.base)})</span></label><input id="${prefix}-${i}" value="${escape(values[i]||'')}" autocomplete="off" autocapitalize="off" spellcheck="false" required>`).join('')}<div class="actions"><button class="primary">Проверить</button></div></form>`;
 return `<form id="${prefix}-form"><label for="${prefix}-0">${prefix==='correction'?(['gap','choice'].includes(ex.mode)?'Введи только правильную форму':'Введи исправленную фразу'):ex.mode==='gap'?'Пропущенная форма':'Твой ответ'}</label><div class="answer-row"><input id="${prefix}-0" value="${escape(draft)}" autocomplete="off" autocapitalize="off" spellcheck="false" required><button class="primary">Проверить</button></div></form>`;
}
function bindAnswerForm(ex,prefix,submit,draft){
 const form=document.querySelector('#'+prefix+'-form');
 const fields=[...form.querySelectorAll('input')];
 const value=()=>fields.map(f=>f.value.trim()).join(' | ');
 for(const field of fields)field.oninput=()=>draft?.(value());
 form.onsubmit=e=>{e.preventDefault();submit(value());};
}
function shuffle(items) { const result=[...items];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result; }
function updateWords() {
  const tokens=exercise().model.split(' ');
  document.querySelector('#assembled').textContent=session.words.map(i=>tokens[i]).join(' ')||'Собранная фраза';
}
function instructions(mode) {
  return {choice:'Нажми на правильную форму.',gap:'Введи пропущенную форму и нажми «Проверить».',repair:'Исправь ошибки в целевой конструкции. Не перефразируй.',order:'Нажимай на слова по порядку, затем «Проверить».',speak:'Скажи по-английски, затем открой образец.',transform:'Преобразуй фразу, сохранив остальные слова.',translate:'Переведи, используя указанные слова.',contrast:'Введи форму для каждого контекста.'}[mode];
}
function supportButtons() {
  const container=document.querySelector('#support-actions');
  container.innerHTML='<button class="quiet" id="hint">Подсказка</button><button class="quiet" id="skip">Пропустить</button><button class="quiet" id="pause">Закончить</button>';
  document.querySelector('#hint').onclick=()=>{
    session.hint=true;session.hintExercise=exercise().id;rememberSession();
    document.querySelector('#feedback').innerHTML=`<div class="feedback">${escape(bank.skills?.find(x=>x.id===exercise().skill)?.rule||topic().rule)}<br><span class="small">Ответ будет учтён как выполненный с подсказкой.</span></div>`;
  };
  document.querySelector('#skip').onclick=()=>{
    if(!session.oral){session.skipped++;session.count++;session.seen.push(exercise().family);}session.answered=true;session.result={skipped:true};rememberSession();continuePractice();
  };
  document.querySelector('#pause').onclick=()=>{session.complete=true;rememberSession();renderComplete();};
}
function grade(value) { if (!session.answered && value.trim()){const result=assess(exercise(),value);record(result.ok,false,value,result.typo);} }
function record(ok,self,answer='',typo) {
  if(session.answered)return;
  const ex=exercise();session.answered=true;
  state.events.push({id:crypto.randomUUID(),exercise:ex.id,topic:ex.topic,at:Date.now(),ok,self,assisted:hintUsed(session,ex.id),skill:ex.skill,level:ex.level||2,phase:'practice',ms:Math.min(86400000,activeMs+(document.hidden?0:Date.now()-visibleSince))});
  save();
  if (!self) {
    session.count++;session.seen.push(ex.family);session.modes=[...(session.modes||[]),ex.mode];
    if(hintUsed(session,ex.id))session.guided++;else{session.checked++;if(ok)session.correct++;}
  }
  if(ok&&!self&&!hintUsed(session,ex.id)&&(ex.level||2)>=2)session.remediation=(session.remediation||[]).filter(x=>x.skill!==ex.skill);
  if(!ok&&!self){session.remediation=session.remediation||[];if(!session.remediation.some(x=>x.skill===ex.skill))session.remediation.push({skill:ex.skill,after:session.count+2});}
  session.result={ok,self,assisted:hintUsed(session,ex.id),help:hintUsed(session,ex.id)?'hint':null,answer,typo};rememberSession();showFeedback(true);showNext();
}
function showFeedback(scroll=false) {
  document.querySelectorAll('#input-area button,#input-area input,#input-area select').forEach(e=>e.disabled=true);
  document.querySelector('#support-actions').innerHTML='';
  const result=session.result, ex=exercise();
  if(result?.ok===false&&!result.self&&!result.recovered)document.querySelector('#input-area').innerHTML='';
  document.querySelector('#feedback').innerHTML=`<div class="feedback ${result?.ok===false&&!result.recovered?'wrong':''}"><strong>${feedbackStatus(result)}</strong>${result?.skipped||(result?.ok===false&&!result.revealed&&!result.recovered)?'':`${result?.typo?typoDetails(result.typo):''}${revealedDifference(ex,result)}<br><span class="answer-model">${contextModel(ex)}</span>${helpNote(result)}<p class="result-explanation">${escape(ex.explanation)}</p>`}</div>`;
  if(scroll){const feedback=document.querySelector('#feedback');feedback.tabIndex=-1;feedback.focus({preventScroll:true});feedback.scrollIntoView({block:'nearest',behavior:'instant'});}
  const facts=document.querySelector('.practice-summary .facts');
  if(facts)facts.innerHTML=`<dt>Выполнено</dt><dd>${session.count}</dd><dt>Верно без подсказки</dt><dd>${session.correct} / ${session.checked}</dd><dt>С подсказкой</dt><dd>${session.guided}</dd><dt>Пропущено</dt><dd>${session.skipped}</dd>`;
}
function showNext() {
  stopAuto();
  const result=session.result;
  if(result?.ok===false&&!result.self&&!result.recovered){showCorrection();return;}
  const done=session.oral;
  const auto=shouldAutoAdvance(state.preferences,result,exercise());
  document.querySelector('#exercise-actions').innerHTML=auto
    ?'<span class="small auto-note">Следующее задание через 8 секунд · Enter: дальше</span><button class="quiet" id="hold">Пауза</button><button class="quiet" id="pause">Закончить</button>'
    :`<button class="primary" id="next">${done?'Завершить подход':'Следующее'}</button><button class="quiet" id="pause">Закончить</button>`;
  if(auto){
    document.querySelector('#hold').onclick=()=>{stopAuto();session.result.autoHeld=true;rememberSession();showNext();};
    transitionTimer=setTimeout(()=>{transitionTimer=null;if((location.hash.slice(1)||'practice')==='practice'&&!document.hidden)continuePractice();},8000);
  }else{
    document.querySelector('#next').onclick=continuePractice;
    // Keep focus on the submitted control so the same Enter cannot activate Next.
  }
  document.querySelector('#pause').onclick=()=>{stopAuto();session.complete=true;rememberSession();renderComplete();};
}
function showCorrection(){
  const ex=exercise(),r=session.result;
  r.retries=r.retries||0;
  if(r.help==='hint')r.retryHint=true;
  const assisted=!!(r.retryHint||r.revealed||r.assisted);
  const note=r.revealed?'Посмотри разбор и попробуй ещё раз.':r.retryHint?'Примени подсказку и исправь ответ.':'Попробуй исправить сам. Ответ пока скрыт.';
  const rule=bank.skills?.find(x=>x.id===ex.skill)?.rule||topic().rule;
  const area=document.querySelector('#exercise-actions');
  area.innerHTML='<div class="correction"><p class="small">'+note+'</p>'+(r.retryHint&&!r.revealed?'<div class="feedback small">'+escape(rule)+'</div>':'')+'<div id="retry-input"></div><div id="correction-status" role="status"></div><div class="actions">'+(!r.retryHint&&!r.revealed?'<button class="quiet" id="retry-hint">Намёк</button>':'')+(!r.revealed&&r.retryHint?'<button class="quiet" id="retry-reveal">Показать ответ и разбор</button>':'')+'<button class="quiet" id="skip-correction">Пропустить</button><button class="quiet" id="pause">Закончить</button></div></div>';
  const retry=value=>{
    const assessment=assess(ex,value);
    if(!assessment.ok){
      r.retries++;session.repairDraft=value;
      if(r.retries===1){r.retryHint=true;r.help='auto-hint';}
      if(r.retries>=2){r.revealed=true;r.help='answer';}
      rememberSession();showFeedback();showCorrection();return;
    }
    state.events.push({id:crypto.randomUUID(),exercise:ex.id,topic:ex.topic,at:Date.now(),ok:true,self:false,assisted,skill:ex.skill,level:ex.level||2,phase:'correction',ms:0});save();
    r.recovered=true;r.help=r.revealed?'answer':r.help||(r.retryHint?'auto-hint':null);r.typo=assessment.typo;session.repairDraft='';session.corrected=(session.corrected||0)+1;rememberSession();
    showFeedback(true);showNext();
  };
  const input=document.querySelector('#retry-input');
  if(session.input==='tap'&&ex.mode==='choice'){
    input.className='choices';for(const value of shuffle(ex.choices)){const button=document.createElement('button');button.textContent=value;button.onclick=()=>retry(value);input.append(button);}
  }else if(ex.mode==='match'){
    renderMatch(input,ex,'retry',session.repairDraft||session.draft,retry,value=>{session.repairDraft=value;rememberSession();});
  }else if(session.input==='tap'){
    input.innerHTML='<p class="small">Проверь порядок слов. Можно продолжить без набора.</p>';
    if(!r.revealed)input.innerHTML+='<button id="retry-order-reveal">Показать разбор</button>';
    document.querySelector('#retry-order-reveal')?.addEventListener('click',()=>{r.revealed=true;r.help='answer';rememberSession();showFeedback();showCorrection();});
  }else{
    input.innerHTML=answerForm(ex,'correction',session.repairDraft??r.answer??'');
    bindAnswerForm(ex,'correction',retry,value=>{session.repairDraft=value;rememberSession();});
    input.querySelector('input')?.focus({preventScroll:true});
  }
  document.querySelector('#retry-hint')?.addEventListener('click',()=>{r.retryHint=true;r.help='hint';rememberSession();showCorrection();});
  document.querySelector('#retry-reveal')?.addEventListener('click',()=>{r.revealed=true;rememberSession();showFeedback();showCorrection();});
  document.querySelector('#skip-correction').onclick=continuePractice;
  document.querySelector('#pause').onclick=()=>{session.complete=true;rememberSession();renderComplete();};
}
function renderComplete() {
  if(session.answered&&session.current&&session.result){session.previous={exercise:session.current,result:session.result};rememberSession();}
  const s=summary(state,state.focus);
  app.innerHTML=heading('', 'Подход завершён',topic().title)+`<div class="card">
    <dl class="facts completion-results"><dt>Выполнено</dt><dd>${session.count}</dd><dt>Верно без подсказки</dt><dd>${session.correct} / ${session.checked}</dd><dt>С подсказкой</dt><dd>${session.guided}</dd><dt>Пропущено</dt><dd>${session.skipped}</dd></dl>
    <p class="small">${s.ready?'Можно проверить применение в собственной речи.':'Повтори тему в другой день, чтобы проверить запоминание.'}</p>
    <div class="actions"><button class="primary" id="oral">Одна фраза вслух</button><a class="button" href="#stats">Прогресс</a><button id="extra">Продолжить тренировку</button></div>
  </div>${previousReview()}`;
  document.querySelector('#extra').onclick=()=>{newSession(true);renderPractice();};
  document.querySelector('#oral').onclick=()=>{
    const family=session.seen.at(-1);
    const ex=bank.exercises.find(e=>e.topic===state.focus&&e.mode==='speak'&&(!family||e.family===family));
    session.current=ex.id;session.oral=true;session.complete=false;session.answered=false;session.result=null;session.hint=false;activeMs=0;visibleSince=Date.now();rememberSession();renderPractice();
  };
}
function renderTopics() {
  app.innerHTML=heading('', 'Темы', 'Выбери одну тему для следующего подхода.')+`<div class="card table-scroll"><table class="topic-table"><thead><tr><th>Тема</th><th class="numeric">Приоритет</th><th class="numeric">Примеры</th><th>Действие</th></tr></thead><tbody>${bank.topics.map(t=>{
    const families=new Set(bank.exercises.filter(e=>e.topic===t.id).map(e=>e.family)).size;
    return `<tr class="${t.id===state.focus?'current':''}"><td><strong>${t.title} ${t.id===state.focus?'<span class="pill">Текущая</span>':''}</strong><span class="small rule">${t.rule}</span></td><td class="numeric">${t.priority}</td><td class="numeric">${families}</td><td><button data-topic="${t.id}">${t.id===state.focus?'Продолжить':'Выбрать'}</button></td></tr>`;
  }).join('')}</tbody></table></div>`;
  document.querySelectorAll('[data-topic]').forEach(button=>button.onclick=()=>{
    if(state.focus!==button.dataset.topic){state.focus=button.dataset.topic;save();session=null;rememberSession();}
    location.hash='practice';
  });
}
function renderStats() {
  const s=summary(state);
  const rows=bank.topics.map(t=>{const v=summary(state,t.id);return `<tr><td>${t.title}</td><td class="numeric">${v.total}</td><td class="numeric">${v.recallCount<6?'·':percentage(v.recall)}</td><td class="numeric">${v.delayed}</td></tr>`;}).join('');
  const dates=Array.from({length:14},(_,i)=>{const d=new Date();d.setDate(d.getDate()-13+i);return d.toLocaleDateString('sv-SE');});
  app.innerHTML=heading('', 'Прогресс', '')+`<div class="metrics"><div class="metric"><strong>${s.total}</strong><span>Ответов без подсказки</span></div><div class="metric"><strong>${s.recallCount<6?'Мало данных':percentage(s.recall)}</strong><span>Верно при вводе</span></div><div class="metric"><strong>${s.days}</strong><span>Дней практики</span></div></div>
    <div class="card table-scroll"><h2>По темам</h2><table><thead><tr><th>Тема</th><th class="numeric">Ответы</th><th class="numeric">Ввод, %</th><th class="numeric">Через день</th></tr></thead><tbody>${rows}</tbody></table>
    <details><summary>За последние 14 дней</summary><table><thead><tr><th>Дата</th><th class="numeric">Ответы</th><th class="numeric">Точность</th></tr></thead><tbody>${dates.map(d=>{const es=state.events.filter(e=>!e.self&&!e.assisted&&new Date(e.at).toLocaleDateString('sv-SE')===d);return `<tr><td>${d}</td><td class="numeric">${es.length}</td><td class="numeric">${percentage(es.length?Math.round(es.filter(e=>e.ok).length/es.length*100):null)}</td></tr>`;}).join('')}</tbody></table></details>
    <details><summary>Как считаются результаты</summary><p class="small">Воспроизведение: ввод, исправление, преобразование, перевод и контраст без опоры. Исправление после показа ответа не повышает результат. Повтор одной фразы в тот же день учитывается один раз. «Через день» показывает разные фразы, успешно проверенные спустя сутки.</p><p class="small">С подсказкой: ${state.events.filter(e=>e.assisted&&!e.self&&e.phase!=='correction').length}. Устных самооценок: ${state.events.filter(e=>e.self).length}.</p></details></div>
    <section class="card transfer"><h2>Перенести прогресс</h2><p>На этом устройстве скачай JSON. На другом открой «Прогресс» и выбери этот файл.</p>
      <div class="actions"><button class="primary" id="export">Экспорт JSON</button><button id="import-button">Импорт JSON</button></div><input class="upload" type="file" id="import" accept="application/json,.json" aria-label="Файл прогресса"><div id="export-area"></div>
      <details><summary>Перенос текстом вместо файла</summary><p class="small">Нажми «Экспорт JSON», раскрой «Показать JSON» и скопируй текст. На другом устройстве вставь его ниже.</p><label for="import-json">JSON из другого браузера</label><textarea id="import-json" spellcheck="false"></textarea><div class="actions"><button id="import-text">Импортировать текст</button></div></details><div id="import-status" role="status"></div>
    </section>`;
  bindTransfer();
}
function renderSettings() {
  app.innerHTML=heading('', 'Настройки', 'Применяются к следующему подходу.')+`<div class="card settings-form"><div class="settings-row"><label for="challenge">Сложность</label><select id="challenge"><option value="adaptive">Адаптивно: начинать с контекста</option><option value="foundation">С опорой</option><option value="challenge">Контекст и преобразования</option></select></div><div class="settings-row"><label for="autoAdvance">После верного ответа</label><select id="autoAdvance"><option value="false">По кнопке «Следующее»</option><option value="true">Через 8 секунд (короткие ответы без подсказки)</option></select></div><div class="actions"><a class="button primary" href="#practice">К практике</a></div></div>`;
  document.querySelector('#challenge').value=state.preferences.challenge;
  document.querySelector('#autoAdvance').value=String(state.preferences.autoAdvance);
  document.querySelector('#challenge').onchange=e=>{state.preferences.challenge=e.target.value;save();};
  document.querySelector('#autoAdvance').onchange=e=>{state.preferences.autoAdvance=e.target.value==='true';save();};
}
function bindTransfer() {
  document.querySelector('#import-button').onclick=()=>document.querySelector('#import').click();
  let exportUrl;
  document.querySelector('#export').onclick=()=>{
    if(exportUrl)URL.revokeObjectURL(exportUrl);
    const json=JSON.stringify(state,null,2);
    exportUrl=URL.createObjectURL(new Blob([json],{type:'application/json'}));
    document.querySelector('#export-area').innerHTML='<div class="actions"><a class="button" id="download">Скачать JSON</a></div><details><summary>Показать JSON</summary><label for="export-json">Скопируй JSON целиком</label><textarea id="export-json" readonly spellcheck="false"></textarea></details>';
    const a=document.querySelector('#download');a.href=exportUrl;a.download='progress-'+new Date().toISOString().slice(0,10)+'.json';
    document.querySelector('#export-json').value=json;
    a.click();
  };
  function importText(text){
    const el=document.querySelector('#import-status');
    try{
      if(text.length>25000000)throw Error('Максимум 25 МБ');
      const imported=validate(JSON.parse(text.replace(/^\uFEFF/,'')));
      if(!bank.topics.some(t=>t.id===imported.focus))throw Error('Неизвестная тема');
      if(imported.events.some(ev=>!bank.topics.some(t=>t.id===ev.topic)||!MODES.includes(ev.exercise.split('-').at(-1))||!ev.exercise.startsWith(ev.topic+'-')))throw Error('Неизвестный формат задания');
      const before=state.events.length;state=merge(state,imported);save();el.textContent='Добавлено: '+(state.events.length-before)+'. Всего: '+state.events.length+'.';
    }catch(err){el.textContent='Импорт не выполнен: '+err.message;}
  }
  document.querySelector('#import-text').onclick=()=>importText(document.querySelector('#import-json').value);
  document.querySelector('#import').onchange=async e=>{
    const file=e.target.files[0];if(!file)return;
    try{if(file.size>25000000)throw Error('Максимум 25 МБ');importText(await file.text());}
    catch(err){document.querySelector('#import-status').textContent='Импорт не выполнен: '+err.message;}
  };
}

window.addEventListener('hashchange',()=>{if(bank)render();});
try {
  const response=await fetch('./data/bank.json');if(!response.ok)throw Error(`HTTP ${response.status}`);
  bank=await response.json();if(!bank.topics.some(t=>t.id===state.focus))state.focus='verbs';restoreSession();render();if(sandbox)warning('Тестовый режим: основная история не меняется.');
  if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>warning('Офлайн-кеш недоступен. Прогресс хранится локально.'));
} catch {
  app.innerHTML='<div class="card"><h1>Не удалось загрузить задания</h1><p>Для первого запуска нужен интернет. Локально: npm run dev.</p><button id="reload">Повторить</button></div>';
  document.querySelector('#reload').onclick=()=>location.reload();
}
