// Authored material for lexicon-form. Keep families in ascending numeric order.
export const skillId = "lexicon-form";
export const legacy = [];
export const exercises = [
  {
    "id": "lexicon-form-101-repair",
    "family": "lexicon-form-101",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "repair",
    "level": 2,
    "prompt": "He wants to become fame and success.",
    "answers": [
      "He wants to become famous and successful."
    ],
    "model": "He wants to become famous and successful.",
    "explanation": "После become нужны прилагательные famous и successful.",
    "cue": "He wants to become fame and success.",
    "base": ""
  },
  {
    "id": "lexicon-form-102-transform",
    "family": "lexicon-form-102",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "transform",
    "level": 3,
    "prompt": "The experiment was a success.",
    "answers": [
      "The experiment was successful."
    ],
    "model": "The experiment was successful.",
    "explanation": "Success: noun; successful: adjective, без a.",
    "cue": "The experiment was a success.",
    "base": "",
    "task": "Начни с The experiment was, используй successful."
  },
  {
    "id": "lexicon-form-103-repair",
    "family": "lexicon-form-103",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "repair",
    "level": 2,
    "prompt": "The pianist became fame after the recording reached a wider audience.",
    "answers": [
      "The pianist became famous after the recording reached a wider audience."
    ],
    "model": "The pianist became famous after the recording reached a wider audience.",
    "explanation": "После became требуется прилагательное famous; fame: существительное.",
    "cue": "The pianist became fame after the recording reached a wider audience.",
    "base": ""
  },
  {
    "id": "lexicon-form-104-contrast",
    "family": "lexicon-form-104",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери часть речи, подходящую к каждому контексту.",
    "answers": [
      "fame | famous | success | successful | famously"
    ],
    "model": "Her fame grew after the documentary aired. She became famous after the documentary aired. The campaign was a major success. The campaign was successful from the beginning. The composer was famously private about the rehearsal process.",
    "explanation": "Fame и success: существительные; famous и successful: прилагательные; famously: наречие.",
    "cue": "Выбери часть речи, подходящую к каждому контексту.",
    "base": "",
    "parts": [
      {
        "prompt": "Her ___ grew after the documentary aired.",
        "base": "fame",
        "answer": "fame"
      },
      {
        "prompt": "She became ___ after the documentary aired.",
        "base": "fame",
        "answer": "famous"
      },
      {
        "prompt": "The campaign was a major ___.",
        "base": "succeed",
        "answer": "success"
      },
      {
        "prompt": "The campaign was ___ from the beginning.",
        "base": "succeed",
        "answer": "successful"
      },
      {
        "prompt": "The composer was ___ private about the rehearsal process.",
        "base": "fame",
        "answer": "famously"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-form-105-translate",
    "family": "lexicon-form-105",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "translate",
    "level": 3,
    "prompt": "Проект оказался успешным с самого начала.",
    "answers": [
      "The project was successful from the beginning."
    ],
    "model": "The project was successful from the beginning.",
    "explanation": "После be нужно прилагательное successful; project в прошедшем времени требует was.",
    "cue": "Проект оказался успешным с самого начала.",
    "base": "the project / be / successful / from the beginning",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-form-106-gap",
    "family": "lexicon-form-106",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "gap",
    "level": 2,
    "prompt": "The team ___ in reducing delivery delays last year.",
    "answers": [
      "succeeded"
    ],
    "model": "succeeded",
    "explanation": "В значении «удалось» succeed: глагол; в прошедшем времени succeeded.",
    "cue": "В прошлом году команде удалось сократить задержки доставки.",
    "base": "succeed",
    "choices": [
      "succeeded",
      "success"
    ]
  },
  {
    "id": "lexicon-form-107-repair",
    "family": "lexicon-form-107",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "repair",
    "level": 2,
    "prompt": "The instructions were so clearly that nobody asked a question.",
    "answers": [
      "The instructions were so clear that nobody asked a question."
    ],
    "model": "The instructions were so clear that nobody asked a question.",
    "explanation": "После were нужен предикативный прилагательный clear, а не наречие clearly.",
    "cue": "The instructions were so clearly that nobody asked a question.",
    "base": ""
  },
  {
    "id": "lexicon-form-108-transform",
    "family": "lexicon-form-108",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "transform",
    "level": 3,
    "prompt": "The editor responded in a careful manner.",
    "answers": [
      "The editor responded carefully."
    ],
    "model": "The editor responded carefully.",
    "explanation": "Carefully: наречие, описывает действие responded.",
    "cue": "The editor responded in a careful manner.",
    "base": "",
    "task": "Замени выделяемую конструкцию наречием carefully."
  },
  {
    "id": "lexicon-form-109-translate",
    "family": "lexicon-form-109",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "translate",
    "level": 3,
    "prompt": "Их решение было неожиданным.",
    "answers": [
      "Their decision was unexpected."
    ],
    "model": "Their decision was unexpected.",
    "explanation": "После притяжательного their нужна форма существительного decision.",
    "cue": "Их решение было неожиданным.",
    "base": "their / decide / be / unexpected",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-form-110-contrast",
    "family": "lexicon-form-110",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери часть речи, которая требуется в позиции.",
    "answers": [
      "clear | clearly"
    ],
    "model": "The guide gave a clear explanation of the route. The guide explained the route clearly.",
    "explanation": "Перед существительным explanation нужно прилагательное clear; глагол explained модифицирует наречие clearly.",
    "cue": "Выбери часть речи, которая требуется в позиции.",
    "base": "",
    "parts": [
      {
        "prompt": "The guide gave a ___ explanation of the route.",
        "base": "clear",
        "answer": "clear"
      },
      {
        "prompt": "The guide explained the route ___.",
        "base": "clear",
        "answer": "clearly"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-form-111-gap",
    "family": "lexicon-form-111",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "gap",
    "level": 2,
    "prompt": "The technician measured the cable ___ before cutting it.",
    "answers": [
      "carefully"
    ],
    "model": "carefully",
    "explanation": "Нужно наречие, описывающее measured: carefully.",
    "cue": "Техник внимательно измерил кабель перед тем, как разрезать его.",
    "base": "careful",
    "choices": [
      "carefully",
      "careful"
    ]
  },
  {
    "id": "lexicon-form-112-repair",
    "family": "lexicon-form-112",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "repair",
    "level": 2,
    "prompt": "The proposal offers a practical solve to the storage problem.",
    "answers": [
      "The proposal offers a practical solution to the storage problem."
    ],
    "model": "The proposal offers a practical solution to the storage problem.",
    "explanation": "После прилагательного practical нужна форма существительного solution.",
    "cue": "The proposal offers a practical solve to the storage problem.",
    "base": ""
  },
  {
    "id": "lexicon-form-113-transform",
    "family": "lexicon-form-113",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "transform",
    "level": 3,
    "prompt": "They were successful in reducing food waste.",
    "answers": [
      "They had success in reducing food waste."
    ],
    "model": "They had success in reducing food waste.",
    "explanation": "Success: существительное; successful: прилагательное.",
    "cue": "They were successful in reducing food waste.",
    "base": "",
    "task": "Перестрой предложение, используй существительное success после had."
  },
  {
    "id": "lexicon-form-114-translate",
    "family": "lexicon-form-114",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "translate",
    "level": 3,
    "prompt": "Новый фильтр эффективно удаляет пыльцу.",
    "answers": [
      "The new filter effectively removes pollen."
    ],
    "model": "The new filter effectively removes pollen.",
    "explanation": "Effective меняется на наречие effectively; глагол removes согласуется с filter.",
    "cue": "Новый фильтр эффективно удаляет пыльцу.",
    "base": "the new filter / effective / remove / pollen",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-form-115-contrast",
    "family": "lexicon-form-115",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи прилагательное и наречие от одного корня.",
    "answers": [
      "calm | calmly"
    ],
    "model": "The nurse spoke in a calm voice. The nurse spoke calmly to the worried child.",
    "explanation": "Перед voice нужен прилагательный calm; глагол spoke описывается наречием calmly.",
    "cue": "Различи прилагательное и наречие от одного корня.",
    "base": "",
    "parts": [
      {
        "prompt": "The nurse spoke in a ___ voice.",
        "base": "calm",
        "answer": "calm"
      },
      {
        "prompt": "The nurse spoke ___ to the worried child.",
        "base": "calm",
        "answer": "calmly"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-form-116-choice",
    "family": "lexicon-form-116",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери нормативное предложение о результате проверки.",
    "answers": [
      "The inspection was thorough and the report was accurate."
    ],
    "model": "The inspection was thorough and the report was accurate.",
    "explanation": "После was нужны прилагательные thorough и accurate, описывающие результаты/предметы.",
    "cue": "Выбери нормативное предложение о результате проверки.",
    "base": "",
    "task": "Выбери вариант с правильными частями речи.",
    "choices": [
      "The inspection was thorough and the report was accurate.",
      "The inspection was thoroughly and the report was accurately.",
      "The inspection was thorough and the report was accurately."
    ]
  },
  {
    "id": "lexicon-form-117-repair",
    "family": "lexicon-form-117",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "repair",
    "level": 2,
    "prompt": "The lecture was bored, so several listeners looked boring.",
    "answers": [
      "The lecture was boring, so several listeners looked bored."
    ],
    "model": "The lecture was boring, so several listeners looked bored.",
    "explanation": "Событие, вызывающее чувство,: boring; люди, испытывающие его,: bored.",
    "cue": "The lecture was bored, so several listeners looked boring.",
    "base": ""
  },
  {
    "id": "lexicon-form-118-transform",
    "family": "lexicon-form-118",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "transform",
    "level": 3,
    "prompt": "The technician repaired the pump in an efficient way.",
    "answers": [
      "The technician repaired the pump efficiently."
    ],
    "model": "The technician repaired the pump efficiently.",
    "explanation": "Efficiently: наречие, описывающее действие repaired.",
    "cue": "The technician repaired the pump in an efficient way.",
    "base": "",
    "task": "Замени выделенную конструкцию наречием efficiently."
  },
  {
    "id": "lexicon-form-119-translate",
    "family": "lexicon-form-119",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "translate",
    "level": 3,
    "prompt": "Посетители были удивлены ранним закрытием.",
    "answers": [
      "The visitors were surprised by the early closure."
    ],
    "model": "The visitors were surprised by the early closure.",
    "explanation": "Для переживающих чувство людей используется форма surprised.",
    "cue": "Посетители были удивлены ранним закрытием.",
    "base": "the visitors / be / surprise / by the early closure",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-form-120-contrast",
    "family": "lexicon-form-120",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи причину чувства и человека, который его испытывает.",
    "answers": [
      "moving | moved"
    ],
    "model": "The final scene was moving. Several viewers were moved by the final scene.",
    "explanation": "Сцена вызывает чувство: moving; зрители испытывают его: moved.",
    "cue": "Различи причину чувства и человека, который его испытывает.",
    "base": "",
    "parts": [
      {
        "prompt": "The final scene was ___.",
        "base": "move",
        "answer": "moving"
      },
      {
        "prompt": "Several viewers were ___ by the final scene.",
        "base": "move",
        "answer": "moved"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-form-121-gap",
    "family": "lexicon-form-121",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "gap",
    "level": 2,
    "prompt": "The instructions were ___ enough for a first-time user.",
    "answers": [
      "clear"
    ],
    "model": "clear",
    "explanation": "После be нужно прилагательное clear; enough следует за ним.",
    "cue": "Инструкции были достаточно понятными для новичка.",
    "base": "clear",
    "choices": [
      "clear",
      "clearly"
    ]
  },
  {
    "id": "lexicon-form-122-repair",
    "family": "lexicon-form-122",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "repair",
    "level": 2,
    "prompt": "The eastern path is more safer than the riverside path.",
    "answers": [
      "The eastern path is safer than the riverside path."
    ],
    "model": "The eastern path is safer than the riverside path.",
    "explanation": "У короткого прилагательного safe используется форма safer; двойное more safer неверно.",
    "cue": "The eastern path is more safer than the riverside path.",
    "base": ""
  },
  {
    "id": "lexicon-form-123-transform",
    "family": "lexicon-form-123",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "transform",
    "level": 3,
    "prompt": "The courier handled the fragile parcels in a careful manner.",
    "answers": [
      "The courier handled the fragile parcels carefully."
    ],
    "model": "The courier handled the fragile parcels carefully.",
    "explanation": "Carefully заменяет конструкцию in a careful manner и описывает handled.",
    "cue": "The courier handled the fragile parcels in a careful manner.",
    "base": "",
    "task": "Перестрой с наречием carefully."
  },
  {
    "id": "lexicon-form-124-translate",
    "family": "lexicon-form-124",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "translate",
    "level": 3,
    "prompt": "Обновлённый насос работает удивительно тихо.",
    "answers": [
      "The updated pump operates surprisingly quietly."
    ],
    "model": "The updated pump operates surprisingly quietly.",
    "explanation": "Quiet описывает operate через наречие quietly; surprising перед наречием меняется на surprisingly.",
    "cue": "Обновлённый насос работает удивительно тихо.",
    "base": "the updated pump / operate / surprising / quiet",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-form-125-contrast",
    "family": "lexicon-form-125",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери adjective или adverb по позиции.",
    "answers": [
      "good | well"
    ],
    "model": "The installer did a good job on the new door. The new door closes well without sticking.",
    "explanation": "Перед job нужен adjective good; действие closes описывается наречием well.",
    "cue": "Выбери adjective или adverb по позиции.",
    "base": "",
    "parts": [
      {
        "prompt": "The installer did a ___ job on the new door.",
        "base": "good",
        "answer": "good"
      },
      {
        "prompt": "The new door closes ___ without sticking.",
        "base": "good",
        "answer": "well"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-form-126-gap",
    "family": "lexicon-form-126",
    "topic": "lexicon",
    "skill": "lexicon-form",
    "mode": "gap",
    "level": 2,
    "prompt": "Of the three batteries, this one is the ___ reliable.",
    "answers": [
      "most"
    ],
    "model": "most",
    "explanation": "Сравниваются три предмета, поэтому перед длинным прилагательным нужен superlative most reliable.",
    "cue": "Из трёх аккумуляторов этот самый надёжный.",
    "base": "reliable",
    "choices": [
      "most",
      "more"
    ]
  }
];
