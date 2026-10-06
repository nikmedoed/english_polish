const sandbox = new URLSearchParams(location.search).get('sandbox') === '1';
const key = sandbox ? 'english-rules-sandbox-v1' : 'english-rules-v1';
const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let lessons, run, loaded;
try { loaded=JSON.parse(sessionStorage.getItem(key)); } catch {}
function store(){try{sessionStorage.setItem(key,JSON.stringify(run));}catch{}}
export async function renderRules(app,bank,focus,setFocus){
 app.innerHTML='<p class="small">Загрузка правил…</p>';
 try {if(!lessons){const r=await fetch('./data/rules.json');if(!r.ok)throw Error();lessons=await r.json();}}
 catch {if(location.hash==='#rules')app.innerHTML='<div class="card">Не удалось загрузить правила. <a href="#practice">Перейти к практике</a></div>';return;}
 if(location.hash!=='#rules')return;
 if(loaded){const l=lessons.find(l=>l.id===loaded.lesson);if(l&&Number.isInteger(loaded.index)&&loaded.index>=0&&loaded.index<=l.questions.length&&Number.isInteger(loaded.correct)&&loaded.correct>=0&&loaded.correct<=loaded.index){run={lesson:l.id,index:loaded.index,correct:loaded.correct};}loaded=null;}
 const paint=()=>{
 if(location.hash!=='#rules')return;
 if(!run){
 app.innerHTML='<div class="page-head"><div><h1>Правила</h1><p class="small">Три коротких вопроса: схема, узнавание, применение. Без набора и таймера.</p></div></div><div class="card"><label for="rule-topic">Тема</label><select id="rule-topic">'+bank.topics.map(t=>'<option value="'+esc(t.id)+'" '+(t.id===focus?'selected':'')+'>'+esc(t.title)+'</option>').join('')+'</select><div class="table-scroll"><table><thead><tr><th>Правило</th><th>Действие</th></tr></thead><tbody>'+lessons.filter(l=>l.topic===focus).map(l=>'<tr><td>'+esc(l.title)+'</td><td><button data-lesson="'+esc(l.id)+'">Повторить</button></td></tr>').join('')+'</tbody></table></div><p class="small">Выбирай короткий блок и двигайся дальше по желанию. Результаты правил не повышают готовность темы в практике.</p></div>';
 app.querySelector('#rule-topic').onchange=e=>{focus=e.target.value;paint();};
 app.querySelectorAll('[data-lesson]').forEach(b=>b.onclick=()=>{run={lesson:b.dataset.lesson,index:0,correct:0};store();paint();});return;
 }
 const lesson=lessons.find(l=>l.id===run.lesson);
 if(run.index>=lesson.questions.length){app.innerHTML='<h1>'+esc(lesson.title)+'</h1><div class="card"><h2>Блок завершён</h2><p>Верно с первой попытки без памятки: '+run.correct+' / '+lesson.questions.length+'</p><p class="small">Теперь попробуй применять правило в разных фразах.</p><div class="actions"><button id="rule-repeat">Повторить блок</button><button id="rule-list">Другие правила</button><button class="primary" id="rule-practice">Практика темы</button></div></div>';app.querySelector('#rule-repeat').onclick=()=>{run={lesson:lesson.id,index:0,correct:0};store();paint();};app.querySelector('#rule-list').onclick=()=>{focus=lesson.topic;run=null;store();paint();};app.querySelector('#rule-practice').onclick=()=>{setFocus(lesson.topic);location.hash='practice';};return;}
 const q=lesson.questions[run.index];
 app.innerHTML='<div class="page-head"><h1>'+esc(lesson.title)+'</h1><button id="rule-list">К списку</button></div><article class="card"><div class="meta"><span>'+['Вспомнить схему','Узнать конструкцию','Применить правило'][run.index]+'</span><span>'+(run.index+1)+' / 3</span></div><p class="prompt">'+esc(q.prompt)+'</p><div class="choices" id="rule-choices"></div><div id="rule-feedback" aria-live="polite"></div><div class="actions"><button id="rule-hint">Краткая памятка</button><button id="rule-skip">Пропустить</button></div><div id="rule-note"></div></article>';
 let attempts=0,assisted=false,done=false;
 const note=()=>{assisted=true;app.querySelector('#rule-note').innerHTML='<p class="small">'+esc(lesson.note)+'</p>';};
 const finish=()=>{run.index++;store();paint();};
 app.querySelector('#rule-list').onclick=()=>{focus=lesson.topic;run=null;store();paint();};
 app.querySelector('#rule-hint').onclick=note;app.querySelector('#rule-skip').onclick=finish;
 const choices=[...q.choices];for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]];}
 choices.forEach(value=>{const b=document.createElement('button');b.textContent=value;b.onclick=()=>{if(done)return;attempts++;if(value!==q.answer){b.disabled=true;app.querySelector('#rule-feedback').innerHTML='<p>Пока нет. Попробуй ещё раз или открой памятку.</p>';if(attempts>=2)note();return;}done=true;if(attempts===1&&!assisted)run.correct++;app.querySelectorAll('#rule-choices button').forEach(b=>b.disabled=true);app.querySelector('#rule-feedback').innerHTML='<p><strong>Верно'+(attempts>1?' после исправления':assisted?' с памяткой':'')+'</strong></p><p class="small">'+esc(q.explanation)+'</p><button class="primary" id="rule-next">'+(run.index===2?'Завершить':'Дальше')+'</button>';app.querySelector('#rule-hint').disabled=true;app.querySelector('#rule-skip').disabled=true;app.querySelector('#rule-next').onclick=finish;app.querySelector('#rule-next').focus();};app.querySelector('#rule-choices').append(b);});
 };
 paint();
}
