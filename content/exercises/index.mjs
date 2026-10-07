import * as chunksFixed from "./chunks-fixed.mjs";
import * as chunksObject from "./chunks-object.mjs";
import * as lexiconForm from "./lexicon-form.mjs";
import * as lexiconWord from "./lexicon-word.mjs";
import * as nounsCount from "./nouns-count.mjs";
import * as nounsNumber from "./nouns-number.mjs";
import * as patternsInf from "./patterns-inf.mjs";
import * as patternsModal from "./patterns-modal.mjs";
import * as referenceObject from "./reference-object.mjs";
import * as referencePerson from "./reference-person.mjs";
import * as structureLinks from "./structure-links.mjs";
import * as structureQuestion from "./structure-question.mjs";
import * as verbsAgreement from "./verbs-agreement.mjs";
import * as verbsAspect from "./verbs-aspect.mjs";
import * as verbsBe from "./verbs-be.mjs";
import * as verbsModal from "./verbs-modal.mjs";
import * as verbsPast from "./verbs-past.mjs";
import * as verbsTime from "./verbs-time.mjs";

export const exerciseSources = [
  chunksFixed,
  chunksObject,
  lexiconForm,
  lexiconWord,
  nounsCount,
  nounsNumber,
  patternsInf,
  patternsModal,
  referenceObject,
  referencePerson,
  structureLinks,
  structureQuestion,
  verbsAgreement,
  verbsAspect,
  verbsBe,
  verbsModal,
  verbsPast,
  verbsTime,
];

export function advancedExercises() {
  const result = [];
  for (const source of exerciseSources) {
    for (const original of source.exercises) {
      const task = { ...original, answers: [...original.answers] };
      result.push(task);
      if (task.mode === "translate")
        result.push({ ...task, id: task.id.replace(/-translate$/, "-speak"), mode: "speak", answers: [task.model] });
    }
  }
  return result;
}
