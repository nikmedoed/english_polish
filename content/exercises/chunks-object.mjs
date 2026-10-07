// Authored material for chunks-object. Keep families in ascending numeric order.
export const skillId = "chunks-object";
export const legacy = [
  {
    "id": "chunks-002",
    "family": "chunks-2",
    "topic": "chunks",
    "skill": "chunks-object",
    "prompt": "She applied ___ a job.",
    "answer": "for",
    "distractor": "to",
    "explanation": "Apply for a job; apply to a company.",
    "cue": "Она подала заявку на работу.",
    "base": "предлог в устойчивом сочетании",
    "alternatives": []
  },
  {
    "id": "chunks-005",
    "family": "chunks-5",
    "topic": "chunks",
    "skill": "chunks-object",
    "prompt": "We arrived ___ the station.",
    "answer": "at",
    "distractor": "to",
    "explanation": "Arrive at a station.",
    "cue": "Мы прибыли на станцию.",
    "base": "предлог в устойчивом сочетании",
    "alternatives": []
  },
  {
    "id": "chunks-007",
    "family": "chunks-7",
    "topic": "chunks",
    "skill": "chunks-object",
    "prompt": "They moved ___ a new city.",
    "answer": "to",
    "distractor": "in",
    "explanation": "Направление: move to.",
    "cue": "Они переехали в новый город.",
    "base": "предлог в устойчивом сочетании",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "chunks-object-101-repair",
    "family": "chunks-object-101",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "repair",
    "level": 2,
    "prompt": "We discussed about the proposal and applied to the vacancy.",
    "answers": [
      "We discussed the proposal and applied for the vacancy."
    ],
    "model": "We discussed the proposal and applied for the vacancy.",
    "explanation": "Discuss без about; apply for a vacancy.",
    "cue": "We discussed about the proposal and applied to the vacancy.",
    "base": ""
  },
  {
    "id": "chunks-object-102-translate",
    "family": "chunks-object-102",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Она подала заявку в эту компанию.",
    "answers": [
      "She applied to this company."
    ],
    "model": "She applied to this company.",
    "explanation": "Apply to компанию; apply for должность.",
    "cue": "Она подала заявку в эту компанию.",
    "base": "she / apply / to / this company",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-object-103-repair",
    "family": "chunks-object-103",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "repair",
    "level": 2,
    "prompt": "The committee discussed about two possible launch dates.",
    "answers": [
      "The committee discussed two possible launch dates."
    ],
    "model": "The committee discussed two possible launch dates.",
    "explanation": "Discuss уже означает обсуждать что-либо и берёт прямое дополнение без about.",
    "cue": "The committee discussed about two possible launch dates.",
    "base": ""
  },
  {
    "id": "chunks-object-104-translate",
    "family": "chunks-object-104",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Она подала заявку в исследовательский институт на летнюю стажировку.",
    "answers": [
      "She applied to the research institute for a summer internship."
    ],
    "model": "She applied to the research institute for a summer internship.",
    "explanation": "Apply to обозначает организацию; apply for: место или возможность, на которую подают заявку.",
    "cue": "Она подала заявку в исследовательский институт на летнюю стажировку.",
    "base": "she / apply / to / the research institute / for / a summer internship",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-object-105-contrast",
    "family": "chunks-object-105",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери предлог по тому, что следует за apply.",
    "answers": [
      "for | to"
    ],
    "model": "Rina applied for a summer placement. Rina applied to the design studio.",
    "explanation": "Apply for ставится перед местом или программой; apply to: перед организацией.",
    "cue": "Выбери предлог по тому, что следует за apply.",
    "base": "",
    "parts": [
      {
        "prompt": "Rina applied ___ a summer placement.",
        "base": "apply",
        "answer": "for"
      },
      {
        "prompt": "Rina applied ___ the design studio.",
        "base": "apply",
        "answer": "to"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-object-106-gap",
    "family": "chunks-object-106",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "gap",
    "level": 2,
    "prompt": "After the renovation, the archive moved ___ a larger room.",
    "answers": [
      "to"
    ],
    "model": "to",
    "explanation": "Move to обозначает перемещение в новое место.",
    "cue": "После ремонта архив переехал в более просторную комнату.",
    "base": "move",
    "choices": [
      "to",
      "at"
    ]
  },
  {
    "id": "chunks-object-107-repair",
    "family": "chunks-object-107",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "repair",
    "level": 2,
    "prompt": "Please explain me the new booking procedure.",
    "answers": [
      "Please explain the new booking procedure to me."
    ],
    "model": "Please explain the new booking procedure to me.",
    "explanation": "Explain принимает предмет объяснения напрямую; адресат вводится через to.",
    "cue": "Please explain me the new booking procedure.",
    "base": ""
  },
  {
    "id": "chunks-object-108-transform",
    "family": "chunks-object-108",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "transform",
    "level": 3,
    "prompt": "I will contact with the regional office tomorrow.",
    "answers": [
      "I will contact the regional office tomorrow."
    ],
    "model": "I will contact the regional office tomorrow.",
    "explanation": "Contact употребляется с прямым дополнением без with.",
    "cue": "I will contact with the regional office tomorrow.",
    "base": "",
    "task": "Убери лишний предлог, сохрани остальную фразу."
  },
  {
    "id": "chunks-object-109-translate",
    "family": "chunks-object-109",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Попроси координатора повторить номер рейса.",
    "answers": [
      "Ask the coordinator to repeat the flight number."
    ],
    "model": "Ask the coordinator to repeat the flight number.",
    "explanation": "Модель ask + person + to-infinitive; после coordinator нужно to repeat.",
    "cue": "Попроси координатора повторить номер рейса.",
    "base": "ask / the coordinator / repeat / the flight number",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-object-110-contrast",
    "family": "chunks-object-110",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери предлог после apply в двух разных контекстах.",
    "answers": [
      "for | to"
    ],
    "model": "Rina applied for a position at the museum. Rina applied to the museum directly.",
    "explanation": "Apply for: просить о должности; apply to: подавать заявление в организацию.",
    "cue": "Выбери предлог после apply в двух разных контекстах.",
    "base": "",
    "parts": [
      {
        "prompt": "Rina applied ___ a position at the museum.",
        "base": "for",
        "answer": "for"
      },
      {
        "prompt": "Rina applied ___ the museum directly.",
        "base": "to",
        "answer": "to"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-object-111-gap",
    "family": "chunks-object-111",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "gap",
    "level": 2,
    "prompt": "The intern borrowed a reference book ___ the campus library.",
    "answers": [
      "from"
    ],
    "model": "from",
    "explanation": "Borrow something from a source; нужен предлог from.",
    "cue": "Стажёр взял справочник в библиотеке кампуса.",
    "base": "borrow",
    "choices": [
      "from",
      "to"
    ]
  },
  {
    "id": "chunks-object-112-repair",
    "family": "chunks-object-112",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "repair",
    "level": 2,
    "prompt": "The guide described us the safest route to the waterfall.",
    "answers": [
      "The guide described the safest route to us."
    ],
    "model": "The guide described the safest route to us.",
    "explanation": "Describe принимает описываемый предмет напрямую; получатель вводится через to.",
    "cue": "The guide described us the safest route to the waterfall.",
    "base": ""
  },
  {
    "id": "chunks-object-113-transform",
    "family": "chunks-object-113",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "transform",
    "level": 3,
    "prompt": "Could you send the schedule to the volunteers?",
    "answers": [
      "Could you send the volunteers the schedule?"
    ],
    "model": "Could you send the volunteers the schedule?",
    "explanation": "Send допускает конструкцию send + recipient + object без to.",
    "cue": "Could you send the schedule to the volunteers?",
    "base": "",
    "task": "Перестрой с косвенным дополнением сразу после send."
  },
  {
    "id": "chunks-object-114-translate",
    "family": "chunks-object-114",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Положите ключи в маленький ящик у стойки.",
    "answers": [
      "Put the keys in the small box by the desk."
    ],
    "model": "Put the keys in the small box by the desk.",
    "explanation": "Put требует объект keys; место выражается in the small box.",
    "cue": "Положите ключи в маленький ящик у стойки.",
    "base": "put / the keys / in / the small box / by the desk",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-object-115-contrast",
    "family": "chunks-object-115",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь направление движения и просьбу занять место.",
    "answers": [
      "to | over"
    ],
    "model": "The hikers moved to the shelter before sunset. The host asked the guests to move over and make room.",
    "explanation": "Move to + место обозначает направление; move over значит подвинуться в сторону.",
    "cue": "Сопоставь направление движения и просьбу занять место.",
    "base": "",
    "parts": [
      {
        "prompt": "The hikers moved ___ the shelter before sunset.",
        "base": "to",
        "answer": "to"
      },
      {
        "prompt": "The host asked the guests to move ___ and make room.",
        "base": "over",
        "answer": "over"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-object-116-choice",
    "family": "chunks-object-116",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери фразу со стандартным управлением глагола discuss.",
    "answers": [
      "They discussed the safety plan before the trip."
    ],
    "model": "They discussed the safety plan before the trip.",
    "explanation": "Discuss принимает тему напрямую, без предлога about.",
    "cue": "Выбери фразу со стандартным управлением глагола discuss.",
    "base": "",
    "task": "Выбери правильную конструкцию с discuss.",
    "choices": [
      "They discussed the safety plan before the trip.",
      "They discussed about the safety plan before the trip.",
      "They discussed on the safety plan before the trip."
    ]
  },
  {
    "id": "chunks-object-117-repair",
    "family": "chunks-object-117",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "repair",
    "level": 2,
    "prompt": "Visitors must enter to the glass pavilion through the east door.",
    "answers": [
      "Visitors must enter the glass pavilion through the east door."
    ],
    "model": "Visitors must enter the glass pavilion through the east door.",
    "explanation": "Enter в значении «войти в помещение» принимает прямое дополнение без to.",
    "cue": "Visitors must enter to the glass pavilion through the east door.",
    "base": ""
  },
  {
    "id": "chunks-object-118-transform",
    "family": "chunks-object-118",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "transform",
    "level": 3,
    "prompt": "The driver arrived at the hotel before dark.",
    "answers": [
      "The driver reached the hotel before dark."
    ],
    "model": "The driver reached the hotel before dark.",
    "explanation": "Reach принимает место напрямую, без предлога at.",
    "cue": "The driver arrived at the hotel before dark.",
    "base": "",
    "task": "Замени arrived at the hotel на глагол reach."
  },
  {
    "id": "chunks-object-119-translate",
    "family": "chunks-object-119",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Я объяснил правила новым участникам.",
    "answers": [
      "I explained the rules to the new participants."
    ],
    "model": "I explained the rules to the new participants.",
    "explanation": "Explain + предмет объяснения; адресат вводится через to.",
    "cue": "Я объяснил правила новым участникам.",
    "base": "I / explain / the rules / to the new participants",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-object-120-contrast",
    "family": "chunks-object-120",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи дать вещь другому и взять её у другого.",
    "answers": [
      "to | from"
    ],
    "model": "Could you lend your notes to me? May I borrow the notes from you?",
    "explanation": "Lend something to someone; borrow something from someone.",
    "cue": "Различи дать вещь другому и взять её у другого.",
    "base": "",
    "parts": [
      {
        "prompt": "Could you lend your notes ___ me?",
        "base": "to",
        "answer": "to"
      },
      {
        "prompt": "May I borrow the notes ___ you?",
        "base": "from",
        "answer": "from"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-object-121-gap",
    "family": "chunks-object-121",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "gap",
    "level": 2,
    "prompt": "The venue provides each guest ___ a reusable cup.",
    "answers": [
      "with"
    ],
    "model": "with",
    "explanation": "Provide someone with something: после человека используется with.",
    "cue": "Площадка предоставляет каждому гостю многоразовый стакан.",
    "base": "provide",
    "choices": [
      "with",
      "for"
    ]
  },
  {
    "id": "chunks-object-122-repair",
    "family": "chunks-object-122",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "repair",
    "level": 2,
    "prompt": "The permit lets visitors to enter the greenhouse before opening.",
    "answers": [
      "The permit lets visitors enter the greenhouse before opening."
    ],
    "model": "The permit lets visitors enter the greenhouse before opening.",
    "explanation": "После let + object используется начальная форма без to.",
    "cue": "The permit lets visitors to enter the greenhouse before opening.",
    "base": ""
  },
  {
    "id": "chunks-object-123-transform",
    "family": "chunks-object-123",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "transform",
    "level": 3,
    "prompt": "The technician supplied the crew with protective masks.",
    "answers": [
      "The technician supplied protective masks to the crew."
    ],
    "model": "The technician supplied protective masks to the crew.",
    "explanation": "Supply допускает обе модели: supply someone with something / supply something to someone.",
    "cue": "The technician supplied the crew with protective masks.",
    "base": "",
    "task": "Перестрой с the masks сразу после supplied."
  },
  {
    "id": "chunks-object-124-translate",
    "family": "chunks-object-124",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Подождите автобус у южного входа.",
    "answers": [
      "Wait for the bus at the south entrance."
    ],
    "model": "Wait for the bus at the south entrance.",
    "explanation": "Wait требует for перед объектом ожидания.",
    "cue": "Подождите автобус у южного входа.",
    "base": "wait / for / the bus / at the south entrance",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "chunks-object-125-contrast",
    "family": "chunks-object-125",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь описание маршрута и сообщение о нём.",
    "answers": [
      "to | about"
    ],
    "model": "The witness described the route to the officer. The witness told the officer about the changed route.",
    "explanation": "Describe something to someone; tell someone about something.",
    "cue": "Сопоставь описание маршрута и сообщение о нём.",
    "base": "",
    "parts": [
      {
        "prompt": "The witness described the route ___ the officer.",
        "base": "to",
        "answer": "to"
      },
      {
        "prompt": "The witness told the officer ___ the changed route.",
        "base": "about",
        "answer": "about"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "chunks-object-126-gap",
    "family": "chunks-object-126",
    "topic": "chunks",
    "skill": "chunks-object",
    "mode": "gap",
    "level": 2,
    "prompt": "Could you remind me ___ the registration deadline?",
    "answers": [
      "about",
      "of"
    ],
    "model": "about",
    "explanation": "Remind me about и remind me of вводят то, о чём нужно напомнить.",
    "cue": "Не мог бы ты напомнить мне о сроке регистрации?",
    "base": "remind",
    "choices": [
      "about",
      "to"
    ]
  }
];
