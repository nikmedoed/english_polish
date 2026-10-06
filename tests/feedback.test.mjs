import test from 'node:test';
import assert from 'node:assert/strict';
import {hintUsed,feedbackStatus,shouldAutoAdvance} from '../public/core.js';
test('a hint is counted only for the exercise where it was opened',()=>{
 assert.equal(hintUsed({hint:true,hintExercise:'a'},'b'),false);
 assert.equal(hintUsed({hint:true},'a'),false);
 assert.equal(hintUsed({hint:true,hintExercise:'a'},'a'),true);
});
test('correctness stays explicit with assistance and old assistance flags',()=>{
 assert.equal(feedbackStatus({ok:true,assisted:true,help:'hint'}),'Верно');
 assert.equal(feedbackStatus({ok:false,assisted:true}),'Пока неверно — попробуй исправить');
 assert.equal(feedbackStatus({ok:true,assisted:true}),'Верно');
 assert.equal(feedbackStatus({ok:false,recovered:true}),'Ошибка исправлена самостоятельно');
});
test('long explanations, hints, typos and corrections always wait for the learner',()=>{
 const preferences={autoAdvance:true};
 for(const result of [{ok:true,help:'hint'},{ok:true,assisted:true},{ok:true,typo:{}},{ok:false,recovered:true},{ok:true,autoHeld:true}])assert.equal(shouldAutoAdvance(preferences,result,{}),false);
 assert.equal(shouldAutoAdvance(preferences,{ok:true},{parts:[{},{}]}),false);
 assert.equal(shouldAutoAdvance({autoAdvance:false},{ok:true},{}),false);
 assert.equal(shouldAutoAdvance(preferences,{ok:true},{}),true);
});
