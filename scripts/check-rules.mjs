import {ruleLessons} from '../content/rules.mjs';
import {skills} from '../content/curriculum.mjs';
import {rawContent} from './check-privacy.mjs';
export function validateRules(lessons){
 const ids=new Set();
 for(const l of lessons){
  if(!l.id||ids.has(l.id)||!skills.some(s=>s.topic===l.topic)||!l.title||!l.note||l.questions.length!==3)throw Error('Invalid rule lesson: '+l.id);
  ids.add(l.id);
  for(const q of l.questions){if(!q.id||ids.has(q.id)||!q.prompt||!q.explanation||new Set(q.choices).size!==q.choices.length||q.choices.length<2||q.choices.filter(c=>c===q.answer).length!==1)throw Error('Invalid rule question: '+q.id);ids.add(q.id);}
  if(rawContent(JSON.stringify(l)))throw Error('Private content in rule lesson');
 }
 return lessons.length;
}
if(process.argv[1]?.replaceAll('\\','/').endsWith('/check-rules.mjs'))console.log('Rules checked:',validateRules(ruleLessons));
