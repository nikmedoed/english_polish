import {mkdir,writeFile,cp,rm,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
import {makeBank} from '../content/bank-source.mjs';
import {ruleLessons} from '../content/rules.mjs';
import {validateRules} from './check-rules.mjs';
import {validateBank} from './check-content.mjs';

const root=fileURLToPath(new URL('../',import.meta.url));
const source=join(root,'public');
const output=join(root,'dist');
const bank=makeBank();
validateBank(bank);
validateRules(ruleLessons);

await rm(output,{recursive:true,force:true});
await mkdir(join(output,'data'),{recursive:true});
// Explicit allowlist: private source files can never be deployed by this build.
const files=['index.html','style.css','app.js','core.js','rules.js','sw.js','manifest.webmanifest'];
const sources=new Map(await Promise.all(files.map(async file=>[file,await readFile(join(source,file),'utf8')])));
const bankJson=JSON.stringify(bank,null,2);
const hash=createHash('sha256');
for(const file of files)hash.update(file).update('\0').update(sources.get(file)).update('\0');
hash.update(bankJson).update(JSON.stringify(ruleLessons));
const buildId=hash.digest('hex').slice(0,12);

for(const file of files) {
 const content=file==='app.js'
  ?sources.get(file).replace("const BUILD_ID='development';",`const BUILD_ID='${buildId}';`)
  :file==='sw.js'
   ?sources.get(file).replace(/const CACHE='[^']+';/,`const CACHE='english-focus-${buildId}';`)
   :sources.get(file);
 await writeFile(join(output,file),content);
}
await writeFile(join(output,'data','bank.json'),bankJson);
await writeFile(join(output,'data','rules.json'),JSON.stringify(ruleLessons));
await writeFile(join(output,'build-id.json'),JSON.stringify({id:buildId}));
console.log(`Built ${bank.exercises.length} exercises (${new Set(bank.exercises.map(e=>e.family)).size} distinct examples).`);


