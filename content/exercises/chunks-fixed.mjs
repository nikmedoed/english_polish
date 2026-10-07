// Authored material for chunks-fixed. Keep families in ascending numeric order.
export const skillId = "chunks-fixed";
export const legacy = [
  {
    "id": "chunks-001",
    "family": "chunks-1",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "prompt": "We talked ___ the next step.",
    "answer": "about",
    "distractor": "on",
    "explanation": "Talk about a topic.",
    "cue": "Мы поговорили о следующем шаге.",
    "base": "предлог в устойчивом сочетании",
    "alternatives": []
  },
  {
    "id": "chunks-003",
    "family": "chunks-3",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "prompt": "It depends ___ the weather.",
    "answer": "on",
    "distractor": "of",
    "explanation": "Depend on.",
    "cue": "Это зависит от погоды.",
    "base": "предлог в устойчивом сочетании",
    "alternatives": []
  },
  {
    "id": "chunks-004",
    "family": "chunks-4",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "prompt": "Please listen ___ the instructions.",
    "answer": "to",
    "distractor": "at",
    "explanation": "Listen to.",
    "cue": "Пожалуйста, послушай инструкции.",
    "base": "предлог в устойчивом сочетании",
    "alternatives": []
  },
  {
    "id": "chunks-006",
    "family": "chunks-6",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "prompt": "He is responsible ___ this project.",
    "answer": "for",
    "distractor": "of",
    "explanation": "Responsible for.",
    "cue": "Он отвечает за этот проект.",
    "base": "предлог в устойчивом сочетании",
    "alternatives": []
  },
  {
    "id": "chunks-008",
    "family": "chunks-8",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "prompt": "Let us focus ___ one task.",
    "answer": "on",
    "distractor": "in",
    "explanation": "Focus on.",
    "cue": "Давай сосредоточимся на одной задаче.",
    "base": "предлог в устойчивом сочетании",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "chunks-fixed-101-repair",
    "family": "chunks-fixed-101",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "repair",
    "level": 2,
    "prompt": "It depends of the budget, so focus in the main issue.",
    "answers": [
      "It depends on the budget, so focus on the main issue."
    ],
    "model": "It depends on the budget, so focus on the main issue.",
    "explanation": "Depend on и focus on: два устойчивых чанка.",
    "cue": "It depends of the budget, so focus in the main issue.",
    "base": ""
  },
  {
    "id": "chunks-fixed-102-translate",
    "family": "chunks-fixed-102",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "translate",
    "level": 3,
    "prompt": "Мы использовали звонок вместо письма.",
    "answers": [
      "We used a call instead of an email."
    ],
    "model": "We used a call instead of an email.",
    "explanation": "Instead of перед существительным.",
    "cue": "Мы использовали звонок вместо письма.",
    "base": "we / use / a call / instead of / an email",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-fixed-103-repair",
    "family": "chunks-fixed-103",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "repair",
    "level": 2,
    "prompt": "The auditors focused at the largest risk in the report.",
    "answers": [
      "The auditors focused on the largest risk in the report."
    ],
    "model": "The auditors focused on the largest risk in the report.",
    "explanation": "Устойчивое сочетание: focus on.",
    "cue": "The auditors focused at the largest risk in the report.",
    "base": ""
  },
  {
    "id": "chunks-fixed-104-translate",
    "family": "chunks-fixed-104",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "translate",
    "level": 3,
    "prompt": "Итоговый график зависит от поставки оборудования.",
    "answers": [
      "The final schedule depends on the equipment delivery."
    ],
    "model": "The final schedule depends on the equipment delivery.",
    "explanation": "Правильное сочетание: depend on; с schedule в единственном числе используется depends.",
    "cue": "Итоговый график зависит от поставки оборудования.",
    "base": "the final schedule / depend / on / the equipment delivery",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-fixed-105-contrast",
    "family": "chunks-fixed-105",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "contrast",
    "level": 3,
    "prompt": "Подбери продолжение устойчивого сочетания instead of.",
    "answers": [
      "buying | using"
    ],
    "model": "We used the spare scanner instead of buying a new one. We used the spare scanner instead of using a phone.",
    "explanation": "После предлога instead of перед глагольным действием используется -ing: buying, using.",
    "cue": "Подбери продолжение устойчивого сочетания instead of.",
    "base": "",
    "parts": [
      {
        "prompt": "We used the spare scanner instead of ___ a new one.",
        "base": "buy",
        "answer": "buying"
      },
      {
        "prompt": "We used the spare scanner instead of ___ a phone.",
        "base": "using",
        "answer": "using"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-fixed-106-gap",
    "family": "chunks-fixed-106",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "gap",
    "level": 2,
    "prompt": "The interns are interested ___ the results of the field study.",
    "answers": [
      "in"
    ],
    "model": "in",
    "explanation": "Устойчивое сочетание: be interested in.",
    "cue": "Стажёрам интересны результаты полевого исследования.",
    "base": "interested",
    "choices": [
      "in",
      "on"
    ]
  },
  {
    "id": "chunks-fixed-107-gap",
    "family": "chunks-fixed-107",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "gap",
    "level": 2,
    "prompt": "Before choosing a solution, let us think ___ the long-term effects.",
    "answers": [
      "about"
    ],
    "model": "about",
    "explanation": "Think about вводит тему или последствия, которые мы обдумываем.",
    "cue": "Прежде чем выбрать решение, давайте подумаем о долгосрочных последствиях.",
    "base": "think",
    "choices": [
      "about",
      "at"
    ]
  },
  {
    "id": "chunks-fixed-108-repair",
    "family": "chunks-fixed-108",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "repair",
    "level": 2,
    "prompt": "Our new assistant is responsible of the supply cabinet.",
    "answers": [
      "Our new assistant is responsible for the supply cabinet."
    ],
    "model": "Our new assistant is responsible for the supply cabinet.",
    "explanation": "Устойчивое сочетание: responsible for.",
    "cue": "Our new assistant is responsible of the supply cabinet.",
    "base": ""
  },
  {
    "id": "chunks-fixed-109-transform",
    "family": "chunks-fixed-109",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "transform",
    "level": 3,
    "prompt": "The final schedule depends on the weather.",
    "answers": [
      "The final schedule relies on the weather."
    ],
    "model": "The final schedule relies on the weather.",
    "explanation": "Устойчивое сочетание: rely on.",
    "cue": "The final schedule depends on the weather.",
    "base": "",
    "task": "Замени depends на relies, сохрани смысл."
  },
  {
    "id": "chunks-fixed-110-translate",
    "family": "chunks-fixed-110",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "translate",
    "level": 3,
    "prompt": "Команда сосредоточилась на снижении расхода воды.",
    "answers": [
      "The team focused on reducing water consumption."
    ],
    "model": "The team focused on reducing water consumption.",
    "explanation": "После focus on предлог on требует герундий reducing.",
    "cue": "Команда сосредоточилась на снижении расхода воды.",
    "base": "the team / focus / on / reduce / water consumption",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-fixed-111-contrast",
    "family": "chunks-fixed-111",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "contrast",
    "level": 3,
    "prompt": "Впиши предлоги в двух устойчивых сочетаниях.",
    "answers": [
      "for | to"
    ],
    "model": "He apologized for the delay. He apologized to the passengers.",
    "explanation": "Apologize for + действие/проблема; apologize to + человек.",
    "cue": "Впиши предлоги в двух устойчивых сочетаниях.",
    "base": "",
    "parts": [
      {
        "prompt": "He apologized ___ the delay.",
        "base": "for",
        "answer": "for"
      },
      {
        "prompt": "He apologized ___ the passengers.",
        "base": "to",
        "answer": "to"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-fixed-112-gap",
    "family": "chunks-fixed-112",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "gap",
    "level": 2,
    "prompt": "Several volunteers took part ___ the river clean-up.",
    "answers": [
      "in"
    ],
    "model": "in",
    "explanation": "Устойчивое сочетание take part in.",
    "cue": "Несколько добровольцев приняли участие в уборке реки.",
    "base": "take part",
    "choices": [
      "in",
      "on"
    ]
  },
  {
    "id": "chunks-fixed-113-repair",
    "family": "chunks-fixed-113",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "repair",
    "level": 2,
    "prompt": "The audience was satisfied from the sound and the view from the balcony.",
    "answers": [
      "The audience was satisfied with the sound and the view from the balcony."
    ],
    "model": "The audience was satisfied with the sound and the view from the balcony.",
    "explanation": "Устойчивое сочетание: satisfied with.",
    "cue": "The audience was satisfied from the sound and the view from the balcony.",
    "base": ""
  },
  {
    "id": "chunks-fixed-114-transform",
    "family": "chunks-fixed-114",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "transform",
    "level": 3,
    "prompt": "The trainees are familiar with the new safety symbols.",
    "answers": [
      "The trainees are unfamiliar with the new safety symbols."
    ],
    "model": "The trainees are unfamiliar with the new safety symbols.",
    "explanation": "Unfamiliar также сочетается с with.",
    "cue": "The trainees are familiar with the new safety symbols.",
    "base": "",
    "task": "Передай противоположное значение, замени familiar на unfamiliar."
  },
  {
    "id": "chunks-fixed-115-translate",
    "family": "chunks-fixed-115",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "translate",
    "level": 3,
    "prompt": "Местные жители жаловались на шум после полуночи.",
    "answers": [
      "Local residents complained about the noise after midnight."
    ],
    "model": "Local residents complained about the noise after midnight.",
    "explanation": "Complain about + предмет жалобы; событие в прошлом: complained.",
    "cue": "Местные жители жаловались на шум после полуночи.",
    "base": "local residents / complain / about / noise / after midnight",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-fixed-116-contrast",
    "family": "chunks-fixed-116",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи цель интереса и человека, вызвавшего интерес.",
    "answers": [
      "about | to see"
    ],
    "model": "The children are excited about the science fair. The children are excited to see their visiting cousins.",
    "explanation": "Excited about + событие/тема; excited to see + действие, которого ждут.",
    "cue": "Различи цель интереса и человека, вызвавшего интерес.",
    "base": "",
    "parts": [
      {
        "prompt": "The children are excited ___ the science fair.",
        "base": "about",
        "answer": "about"
      },
      {
        "prompt": "The children are excited ___ their visiting cousins.",
        "base": "to see",
        "answer": "to see"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-fixed-117-choice",
    "family": "chunks-fixed-117",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери предложение с правильным устойчивым сочетанием.",
    "answers": [
      "The committee agreed on a date for the public meeting."
    ],
    "model": "The committee agreed on a date for the public meeting.",
    "explanation": "Agree on употребляется при выборе или согласовании конкретного пункта.",
    "cue": "Выбери предложение с правильным устойчивым сочетанием.",
    "base": "",
    "task": "Выбери нормативное сочетание agree.",
    "choices": [
      "The committee agreed on a date for the public meeting.",
      "The committee agreed a date on for the public meeting.",
      "The committee agreed with a date on the public meeting."
    ]
  },
  {
    "id": "chunks-fixed-118-repair",
    "family": "chunks-fixed-118",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "repair",
    "level": 2,
    "prompt": "The caretaker is responsible of locking the side gate.",
    "answers": [
      "The caretaker is responsible for locking the side gate."
    ],
    "model": "The caretaker is responsible for locking the side gate.",
    "explanation": "Устойчивое сочетание: responsible for.",
    "cue": "The caretaker is responsible of locking the side gate.",
    "base": ""
  },
  {
    "id": "chunks-fixed-119-transform",
    "family": "chunks-fixed-119",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "transform",
    "level": 3,
    "prompt": "The train arrives at the airport at 10:20.",
    "answers": [
      "The train arrives in Lisbon at 10:20."
    ],
    "model": "The train arrives in Lisbon at 10:20.",
    "explanation": "С городом обычно используется arrive in; с конкретной точкой вроде airport: arrive at.",
    "cue": "The train arrives at the airport at 10:20.",
    "base": "",
    "task": "Замени the airport на Lisbon и используй arrive in."
  },
  {
    "id": "chunks-fixed-120-translate",
    "family": "chunks-fixed-120",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "translate",
    "level": 3,
    "prompt": "Мы заинтересованы в аренде этого зала.",
    "answers": [
      "We are interested in renting this hall."
    ],
    "model": "We are interested in renting this hall.",
    "explanation": "Interested in + gerund: renting.",
    "cue": "Мы заинтересованы в аренде этого зала.",
    "base": "we / be interested in / rent / this hall",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-fixed-121-contrast",
    "family": "chunks-fixed-121",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери предлог времени для точного часа и для дня недели.",
    "answers": [
      "at | on"
    ],
    "model": "The review starts at noon. The review is scheduled on Thursday morning.",
    "explanation": "At + точное время; on + день или конкретный день недели.",
    "cue": "Выбери предлог времени для точного часа и для дня недели.",
    "base": "",
    "parts": [
      {
        "prompt": "The review starts ___ noon.",
        "base": "at",
        "answer": "at"
      },
      {
        "prompt": "The review is scheduled ___ Thursday morning.",
        "base": "on",
        "answer": "on"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-fixed-122-gap",
    "family": "chunks-fixed-122",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "gap",
    "level": 2,
    "prompt": "The parcel should arrive ___ Monday.",
    "answers": [
      "on"
    ],
    "model": "on",
    "explanation": "Перед днём недели используется on.",
    "cue": "Посылка должна прибыть в понедельник.",
    "base": "day of the week",
    "choices": [
      "on",
      "at"
    ]
  },
  {
    "id": "chunks-fixed-123-repair",
    "family": "chunks-fixed-123",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "repair",
    "level": 2,
    "prompt": "The boat service is dependent of the weather.",
    "answers": [
      "The boat service is dependent on the weather."
    ],
    "model": "The boat service is dependent on the weather.",
    "explanation": "Dependent сочетается с предлогом on.",
    "cue": "The boat service is dependent of the weather.",
    "base": ""
  },
  {
    "id": "chunks-fixed-124-transform",
    "family": "chunks-fixed-124",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "transform",
    "level": 3,
    "prompt": "It is Friday, and the clinic has been open since Monday.",
    "answers": [
      "It is Friday, and the clinic has been open for four days."
    ],
    "model": "It is Friday, and the clinic has been open for four days.",
    "explanation": "For обозначает длительность периода; since вводит точку его начала.",
    "cue": "It is Friday, and the clinic has been open since Monday.",
    "base": "",
    "task": "Передай длительность через for four days."
  },
  {
    "id": "chunks-fixed-125-translate",
    "family": "chunks-fixed-125",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "translate",
    "level": 3,
    "prompt": "Книга лежит на полке между журналами.",
    "answers": [
      "The book is on the shelf between the magazines."
    ],
    "model": "The book is on the shelf between the magazines.",
    "explanation": "Between вводит два или более явно названных ориентира.",
    "cue": "Книга лежит на полке между журналами.",
    "base": "the book / be / on the shelf / between / the magazines",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-fixed-126-contrast",
    "family": "chunks-fixed-126",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи крайний срок и время, до которого место остаётся открытым.",
    "answers": [
      "by | until"
    ],
    "model": "Please return the badge by 6 p.m. The desk remains open until 6 p.m.",
    "explanation": "By: не позднее указанного срока; until: действие продолжается до этого времени.",
    "cue": "Различи крайний срок и время, до которого место остаётся открытым.",
    "base": "",
    "parts": [
      {
        "prompt": "Please return the badge ___ 6 p.m.",
        "base": "by",
        "answer": "by"
      },
      {
        "prompt": "The desk remains open ___ 6 p.m.",
        "base": "until",
        "answer": "until"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-fixed-127-gap",
    "family": "chunks-fixed-127",
    "topic": "chunks",
    "skill": "chunks-fixed",
    "mode": "gap",
    "level": 2,
    "prompt": "Please confirm the change ___ writing before the end of the day.",
    "answers": [
      "in"
    ],
    "model": "in",
    "explanation": "Confirm in writing: устойчивое сочетание.",
    "cue": "Подтвердите изменение письменно до конца дня.",
    "base": "confirm in writing",
    "choices": [
      "in",
      "on"
    ]
  }
];
