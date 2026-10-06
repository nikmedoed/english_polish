import {skills,advancedExercises} from './curriculum.mjs';
// Public examples are authored teaching material, never copied from transcripts.
export const topics = [
 ['verbs','Формы глагола',97,'Согласование, did + начальная форма, will + глагол.'],
 ['structure','Каркас предложения',94,'Вопросы и порядок слов в косвенных вопросах.'],
 ['nouns','Число и определители',88,'Another / other, исчисляемость и артикли.'],
 ['patterns','Глагольные модели',82,'Modal + V, to + V, предлог + V-ing.'],
 ['chunks','Предлоги и сочетания',78,'Учить сочетание целиком.'],
 ['lexicon','Точность слов',70,'Выбор слова в однозначном контексте.'],
 ['reference','Местоимения',66,'Согласование местоимения и его референта.']
].map(([id,title,priority,rule])=>({id,title,priority,rule}));
// [sentence with blank, correct gap, distractor, explanation]
export const seeds = {
 verbs:[
 ['She ___ the reports every Friday.','checks','check','Каждую пятницу: регулярное действие, поэтому Present Simple. С she используется checks. Для процесса прямо сейчас: She is checking the reports.'],
 ['He ___ work on Sundays.',"doesn't","don't",'Он обычно не работает по воскресеньям: отрицание привычки, а не действие в конкретный момент. He does not work; после does окончание -s уже не нужно.'],
 ['When did they ___ the office?','leave','left','Спрашиваем, когда они уехали: завершённое событие в прошлом. Did уже обозначает прошлое, поэтому leave, не left.'],
 ['We will ___ the results tomorrow.','discuss','discussing','Обсуждение произойдёт завтра: сообщаем о будущем действии, не о процессе в заданный момент. Will + discuss. Для процесса: We will be discussing the results at noon.'],
 ['The documents ___ ready yesterday.','were','was','Документы были готовы вчера: описываем состояние в прошлом. Documents во множественном числе, поэтому were. Это состояние, а не действие с did.'],
 ['My colleague ___ two monitors.','has','have','У коллеги есть два монитора: обладание, поэтому has. My colleague означает одного человека. Для вопроса: Does my colleague have two monitors?'],
 ['They ___ the meeting last Monday.','cancelled','cancel','Встречу отменили в конкретный законченный день: last Monday. Поэтому Past Simple, cancelled. Present Perfect здесь не подходит: дата события уже задана.'],
 ['Does she ___ here?','work','works','Спрашиваем о месте постоянной работы, поэтому Present Simple. Does she work here? Для временной работы сейчас: Is she working here?'],
 ['I ___ reading right now.','am','do','Чтение идёт прямо сейчас: показываем процесс, поэтому I am reading. I read означало бы привычку, например I read every evening.'],
 ['We ___ finish it yesterday.',"didn't","don't",'Вчера завершить не удалось: отрицание события в законченном прошлом. Did not + finish, без прошедшего окончания у finish.'],
 ['My manager ___ a short call every day.','holds','hold','Every day описывает повторяющееся действие: Present Simple. Один руководитель, поэтому holds. Сейчас в процессе было бы is holding a call.'],
 ['He will be ___ at noon.','working','work','В полдень он будет в процессе работы: мы мысленно смотрим на действие в определённый будущий момент, а не сообщаем время его начала. Поэтому will be working. He will work at noon просто сообщает о будущем действии; длительность и завершение эта фраза не уточняет.']
 ],
 structure:[
 ['Do you know where ___?','she lives','does she live','В косвенном вопросе прямой порядок слов.'],
 ['Where ___ you work?','do','are','Вопрос Present Simple: do + подлежащее + V.'],
 ['I wonder what ___.','he wants','does he want','После I wonder нет вопросительной инверсии.'],
 ['Why ___ she leave yesterday?','did','does','Прошлое: did + подлежащее + V.'],
 ['How often ___ they meet?','do','are','Meet — смысловой глагол: do.'],
 ['Can you tell me when ___?','the train leaves','does the train leave','Косвенный вопрос: when + подлежащее + глагол.'],
 ['I stayed home ___ I was tired.','because','so','Because вводит причину.'],
 ['I was tired, ___ I stayed home.','so','because','So вводит следствие.']
 ],
 nouns:[
 ['We need ___ chair.','another','other','Another + единственное число.'],
 ['The ___ chairs are in the hall.','other','another','Other + множественное число.'],
 ['___ people prefer tea.','Most','Most of','Обобщение: most people; конкретная группа: most of the people.'],
 ['She gave me useful ___.','advice','advices','Advice — неисчисляемое существительное.'],
 ['___ problems need attention.','These','This','These согласуется с множественным числом.'],
 ['Every ___ has a name.','file','files','Every + единственное число.'],
 ['He is ___ engineer.','an','a','Перед гласным звуком: an.'],
 ['We have a lot ___ questions.','of','for','A lot of + существительное.']
 ],
 patterns:[
 ['You should ___ a break.','take','to take','После should — начальная форма без to.'],
 ['They decided ___ early.','to leave','leaving','Decide + to + V.'],
 ['She is interested in ___ languages.','learning','learn','После предлога in — -ing.'],
 ['We want ___ the process.','to improve','improving','Want + to + V.'],
 ['He might ___ later.','arrive','to arrive','Might + V без to.'],
 ['I enjoy ___ in the morning.','walking','to walk','Enjoy + -ing.'],
 ['She is good at ___ ideas.','explaining','explain','At + -ing.'],
 ['They tried ___ the door, but it was locked.','to open','open','Попытаться: try to + V.']
 ],
 chunks:[
 ['We talked ___ the next step.','about','on','Talk about a topic.'],
 ['She applied ___ a job.','for','to','Apply for a job; apply to a company.'],
 ['It depends ___ the weather.','on','of','Depend on.'],
 ['Please listen ___ the instructions.','to','at','Listen to.'],
 ['We arrived ___ the station.','at','to','Arrive at a station.'],
 ['He is responsible ___ this project.','for','of','Responsible for.'],
 ['They moved ___ a new city.','to','in','Направление: move to.'],
 ['Let us focus ___ one task.','on','in','Focus on.']
 ],
 lexicon:[
 ['Please ___ me your laptop for an hour.','lend','borrow','Lend — дать взаймы; borrow — взять.'],
 ['Can I ___ your pen?','borrow','lend','Взять у другого: borrow.'],
 ['We need to ___ a decision.','make','do','Устойчивое сочетание: make a decision.'],
 ['She will ___ us a story.','tell','say','Tell someone a story.'],
 ['Please ___ your homework first.','do','make','Do homework.'],
 ['I ___ the train and arrived late.','missed','lost','Miss a train — не успеть на поезд.'],
 ['The price will ___ next month.','rise','raise','Rise не требует прямого дополнения.'],
 ['They will ___ the price.','raise','rise','Raise + прямое дополнение.']
 ],
 reference:[
 ['The woman ___ called is our manager.','who','which','Who относится к человеку.'],
 ['The device ___ broke is old.','which','who','Which относится к предмету.'],
 ['Anna has a bike. ___ rides it daily.','She','He','Местоимение относится к Anna.'],
 ['Tom has two dogs. He feeds ___ daily.','them','it','Two dogs — множественное число.'],
 ['This is my bag. It belongs to ___.','me','I','После предлога: объектная форма me.'],
 ['We built the shelves ___.','ourselves','themselves','Подлежащее we: ourselves.'],
 ['The students brought ___ books.','their','his','Students — множественное число: their.'],
 ['The company changed ___ logo.','its','their','Здесь company — единая организация: its.']
 ]
};
const bases = {"verbs":["check","do","leave","discuss","be","have","cancel","work","be","do","hold","work"],"structure":["she / live","do","he / want","do","do","the train / leave","связка причины","связка следствия"],"nouns":["another / other","another / other","most","advice","this","file","a / an","предлог"],"patterns":["take","leave","learn","improve","arrive","walk","explain","open"],"chunks":["предлог в устойчивом сочетании","предлог в устойчивом сочетании","предлог в устойчивом сочетании","предлог в устойчивом сочетании","предлог в устойчивом сочетании","предлог в устойчивом сочетании","предлог в устойчивом сочетании","предлог в устойчивом сочетании"],"lexicon":["одолжить кому-то","взять взаймы","make / do","tell / say","do / make","не успеть на транспорт","rise / raise","raise / rise"],"reference":["местоимение для человека","местоимение для предмета","личное местоимение","объектное местоимение","I","we","they","it"]};
const cues = {
  "verbs": [
    "Она проверяет отчёты каждую пятницу.",
    "Он не работает по воскресеньям.",
    "Когда они вышли из офиса?",
    "Мы обсудим результаты завтра.",
    "Документы были готовы вчера.",
    "У моего коллеги два монитора.",
    "Они отменили встречу в прошлый понедельник.",
    "Она работает здесь?",
    "Я сейчас читаю.",
    "Мы не закончили это вчера.",
    "Мой руководитель проводит короткий звонок каждый день.",
    "В полдень он будет работать."
  ],
  "structure": [
    "Ты знаешь, где она живёт?",
    "Где ты работаешь?",
    "Интересно, чего он хочет.",
    "Почему она ушла вчера?",
    "Как часто они встречаются?",
    "Ты можешь сказать, когда отправляется поезд?",
    "Я остался дома, потому что устал.",
    "Я устал, поэтому остался дома."
  ],
  "nouns": [
    "Нам нужен ещё один стул.",
    "Остальные стулья в холле.",
    "Большинство людей предпочитает чай.",
    "Она дала мне полезный совет.",
    "Эти проблемы требуют внимания.",
    "У каждого файла есть имя.",
    "Он инженер.",
    "У нас много вопросов."
  ],
  "patterns": [
    "Тебе стоит сделать перерыв.",
    "Они решили уйти пораньше.",
    "Ей интересно изучать языки.",
    "Мы хотим улучшить процесс.",
    "Возможно, он приедет позже.",
    "Мне нравится гулять по утрам.",
    "Она хорошо объясняет идеи.",
    "Они попытались открыть дверь, но она была заперта."
  ],
  "chunks": [
    "Мы поговорили о следующем шаге.",
    "Она подала заявку на работу.",
    "Это зависит от погоды.",
    "Пожалуйста, послушай инструкции.",
    "Мы прибыли на станцию.",
    "Он отвечает за этот проект.",
    "Они переехали в новый город.",
    "Давай сосредоточимся на одной задаче."
  ],
  "lexicon": [
    "Пожалуйста, одолжи мне свой ноутбук на час.",
    "Можно взять твою ручку?",
    "Нам нужно принять решение.",
    "Она расскажет нам историю.",
    "Сначала сделай домашнее задание.",
    "Я не успел на поезд и приехал поздно.",
    "Цена вырастет в следующем месяце.",
    "Они поднимут цену."
  ],
  "reference": [
    "Женщина, которая позвонила, — наш руководитель.",
    "Устройство, которое сломалось, старое.",
    "У Анны есть велосипед. Она ездит на нём каждый день.",
    "У Тома две собаки. Он кормит их каждый день.",
    "Это моя сумка. Она принадлежит мне.",
    "Мы сами собрали полки.",
    "Ученики принесли свои книги.",
    "Компания изменила свой логотип."
  ]
};
export function makeBank() {
 const exercises=[];
 for(const topic of topics) seeds[topic.id].forEach(([prompt,answer,wrong,explanation],i)=>{
  const full=prompt.replace('___',answer);
  for(const mode of ['choice','gap','repair','order','speak']) exercises.push({id:`${topic.id}-${String(i+1).padStart(3,'0')}-${mode}`,family:`${topic.id}-${i+1}`,topic:topic.id,mode,prompt:mode==='repair'?prompt.replace('___',wrong):mode==='order'||mode==='speak'?full:prompt,answers:[mode==='repair'||mode==='order'?full:answer],choices:[answer,wrong],explanation,model:full,cue:cues[topic.id][i],base:bases[topic.id][i]});
 });
 // Accepted alternatives preserve meaning; never make two valid answers opposing choices.
 for(const e of exercises){
  const alternate=e.family==='verbs-7'?'canceled':e.family==='reference-1'||e.family==='reference-2'?'that':null;
  if(alternate){const seed=seeds[e.topic][Number(e.family.split('-').at(-1))-1];e.answers.push(e.mode==='gap'||e.mode==='choice'?alternate:e.model.replace(seed[1],alternate));}
 }
 const byTopic={verbs:['verbs-agreement','verbs-agreement','verbs-past','verbs-modal','verbs-be','verbs-agreement','verbs-past','verbs-agreement','verbs-aspect','verbs-past','verbs-agreement','verbs-modal'],structure:['structure-question','structure-question','structure-question','structure-question','structure-question','structure-question','structure-links','structure-links'],nouns:['nouns-number','nouns-number','nouns-number','nouns-count','nouns-number','nouns-number','nouns-count','nouns-count'],patterns:['patterns-modal','patterns-inf','patterns-inf','patterns-inf','patterns-modal','patterns-inf','patterns-inf','patterns-inf'],chunks:['chunks-fixed','chunks-object','chunks-fixed','chunks-fixed','chunks-object','chunks-fixed','chunks-object','chunks-fixed'],lexicon:Array(8).fill('lexicon-word'),reference:['reference-person','reference-object','reference-person','reference-person','reference-person','reference-person','reference-person','reference-object']};
 for(const e of exercises){e.skill=byTopic[e.topic][Number(e.family.split('-').at(-1))-1];e.level=['choice','order'].includes(e.mode)?1:e.mode==='speak'?3:2;}
 exercises.push(...advancedExercises());
 for(const e of exercises){
  const tokens=v=>v.toLowerCase().replace(/[.,!?;]/g,'').split(/\s+/);
  const answerTokens=tokens(e.model),sourceTokens=tokens(e.prompt);
  e.protectedWords=e.mode==='translate'?tokens(e.base).flatMap(w=>[w,w+'s',w+'ed',w+'ing']):answerTokens.filter(w=>!sourceTokens.includes(w));
 }
 for(const e of [...exercises].filter(e=>e.level>=2&&['transform','repair','contrast'].includes(e.mode)&&e.family.startsWith(e.skill+'-'))){
  if(e.mode==='contrast'){exercises.push({...e,id:e.id.replace(/-contrast$/,'-match'),mode:'match',prompt:e.prompt.replace(/впиши[^.]*[.]?/i,'выбери подходящие формы.'),task:'Сопоставь контексты с правильными формами.',choices:[...new Set(e.parts.map(p=>p.answer))]});}
  else exercises.push({...e,id:e.id.replace(/-(transform|repair)$/,'-choice'),mode:'choice',task:e.task||'Выбери исправленную фразу.',choices:[e.model,e.prompt],answers:[e.model]});
 }
 return {version:3,topics,skills,exercises};
}
