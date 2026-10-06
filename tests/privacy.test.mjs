import test from 'node:test';
import assert from 'node:assert/strict';
import {blockedPaths,rawContent} from '../scripts/check-privacy.mjs';
test('privacy allows analytics but excludes sources, environment and personal progress',()=>{assert.deepEqual(blockedPaths(['materials/errors/97-verb-forms.md','materials/monitoring/2026-10-02.md','materials/docs/ВВОДНЫЕ.md','content/bank-source.mjs']),[]);assert.equal(blockedPaths(['materials/private/archive/batch/source.txt','materials/examples/raw/source.txt','private/archive/batch/source.txt','examples/raw/source.txt','.env','exports/progress-test.json','source.vtt','.code-review-graph/source.json']).length,8);});
test('raw speaker records and subtitle timestamps are detected',()=>{assert.ok(rawContent('[Я] example'));assert.ok(rawContent('00:00:01,000 --> 00:00:02,000'));assert.equal(rawContent('Критичность 97. Глагольные формы нуждаются в практике.'),false);});
