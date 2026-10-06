import test from 'node:test';
import assert from 'node:assert/strict';
import {ruleLessons} from '../content/rules.mjs';
import {validateRules} from '../scripts/check-rules.mjs';
import {skills} from '../content/curriculum.mjs';
test('rule drills cover all topic groups and validate authored options',()=>{assert.equal(validateRules(ruleLessons),20);for(const s of skills)assert.ok(ruleLessons.some(l=>l.topic===s.topic));});
test('duplicate or ambiguous accepted choices fail validation',()=>{const l=structuredClone(ruleLessons);l[0].questions[0].choices.push(l[0].questions[0].answer);assert.throws(()=>validateRules(l));});
