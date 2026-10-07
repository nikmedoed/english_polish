// Authored material for patterns-modal. Keep families in ascending numeric order.
export const skillId = "patterns-modal";
export const legacy = [
  {
    "id": "patterns-001",
    "family": "patterns-1",
    "topic": "patterns",
    "skill": "patterns-modal",
    "prompt": "You should ___ a break.",
    "answer": "take",
    "distractor": "to take",
    "explanation": "После should: начальная форма без to.",
    "cue": "Тебе стоит сделать перерыв.",
    "base": "take",
    "alternatives": []
  },
  {
    "id": "patterns-005",
    "family": "patterns-5",
    "topic": "patterns",
    "skill": "patterns-modal",
    "prompt": "He might ___ later.",
    "answer": "arrive",
    "distractor": "to arrive",
    "explanation": "Might + V без to.",
    "cue": "Возможно, он приедет позже.",
    "base": "arrive",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "patterns-modal-101-repair",
    "family": "patterns-modal-101",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "You should to ask before making a change.",
    "answers": [
      "You should ask before making a change."
    ],
    "model": "You should ask before making a change.",
    "explanation": "После should: ask без to. После before: making.",
    "cue": "You should to ask before making a change.",
    "base": ""
  },
  {
    "id": "patterns-modal-102-transform",
    "family": "patterns-modal-102",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "She wants to explain the difference.",
    "answers": [
      "She can explain the difference."
    ],
    "model": "She can explain the difference.",
    "explanation": "При смене модели убирается to.",
    "cue": "She wants to explain the difference.",
    "base": "",
    "task": "Замени wants to на can."
  },
  {
    "id": "patterns-modal-103-repair",
    "family": "patterns-modal-103",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "The revised tool can to identify duplicate entries.",
    "answers": [
      "The revised tool can identify duplicate entries."
    ],
    "model": "The revised tool can identify duplicate entries.",
    "explanation": "После can используется начальная форма identify без to.",
    "cue": "The revised tool can to identify duplicate entries.",
    "base": ""
  },
  {
    "id": "patterns-modal-104-transform",
    "family": "patterns-modal-104",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The service responds to urgent requests within one hour.",
    "answers": [
      "The service must respond to urgent requests within one hour."
    ],
    "model": "The service must respond to urgent requests within one hour.",
    "explanation": "После must используется начальная форма respond; окончание -s убирается.",
    "cue": "The service responds to urgent requests within one hour.",
    "base": "",
    "task": "Добавь must перед основным глаголом, сохрани остальные слова."
  },
  {
    "id": "patterns-modal-105-translate",
    "family": "patterns-modal-105",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Возможно, курьер прибудет до полудня.",
    "answers": [
      "The courier might arrive before noon."
    ],
    "model": "The courier might arrive before noon.",
    "explanation": "После might используется начальная форма arrive без to.",
    "cue": "Возможно, курьер прибудет до полудня.",
    "base": "the courier / might / arrive / before noon",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-modal-106-contrast",
    "family": "patterns-modal-106",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "В обоих случаях выбери начальную форму после модального глагола.",
    "answers": [
      "explain | answer"
    ],
    "model": "The guide should explain each safety step. The guide can answer questions afterward.",
    "explanation": "После should и can основной глагол остаётся в начальной форме, без to и без -s.",
    "cue": "В обоих случаях выбери начальную форму после модального глагола.",
    "base": "",
    "parts": [
      {
        "prompt": "The guide should ___ each safety step.",
        "base": "explain",
        "answer": "explain"
      },
      {
        "prompt": "The guide can ___ questions afterward.",
        "base": "answer",
        "answer": "answer"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-modal-107-repair",
    "family": "patterns-modal-107",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "Passengers must to remain behind the yellow line.",
    "answers": [
      "Passengers must remain behind the yellow line."
    ],
    "model": "Passengers must remain behind the yellow line.",
    "explanation": "После must используется начальная форма remain без to.",
    "cue": "Passengers must to remain behind the yellow line.",
    "base": ""
  },
  {
    "id": "patterns-modal-108-transform",
    "family": "patterns-modal-108",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The staff can open the side entrance.",
    "answers": [
      "The staff should open the side entrance."
    ],
    "model": "The staff should open the side entrance.",
    "explanation": "После should нужен глагол в начальной форме без to.",
    "cue": "The staff can open the side entrance.",
    "base": "",
    "task": "Замени can на should, сохрани глагол и остальную часть."
  },
  {
    "id": "patterns-modal-109-translate",
    "family": "patterns-modal-109",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Вам нельзя оставлять велосипед у аварийного выхода.",
    "answers": [
      "You must not leave a bicycle by the emergency exit."
    ],
    "model": "You must not leave a bicycle by the emergency exit.",
    "explanation": "После must not используется начальная форма leave.",
    "cue": "Вам нельзя оставлять велосипед у аварийного выхода.",
    "base": "you / must not / leave / a bicycle / by the emergency exit",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-modal-110-contrast",
    "family": "patterns-modal-110",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни формы после модальных глаголов и после want.",
    "answers": [
      "inspect | to inspect"
    ],
    "model": "The crew should inspect the ropes before departure. The crew wants to inspect the ropes before departure.",
    "explanation": "После should: начальная форма без to; want требует to + глагол.",
    "cue": "Сравни формы после модальных глаголов и после want.",
    "base": "",
    "parts": [
      {
        "prompt": "The crew should ___ the ropes before departure.",
        "base": "inspect",
        "answer": "inspect"
      },
      {
        "prompt": "The crew wants ___ the ropes before departure.",
        "base": "inspect",
        "answer": "to inspect"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-modal-111-gap",
    "family": "patterns-modal-111",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "You ___ not feed the animals in this area. (запрет)",
    "answers": [
      "must"
    ],
    "model": "must",
    "explanation": "Для запрета используется must not + начальная форма feed.",
    "cue": "В этой зоне нельзя кормить животных. Используй сильный запрет.",
    "base": "modal prohibition",
    "choices": [
      "must",
      "should"
    ]
  },
  {
    "id": "patterns-modal-112-repair",
    "family": "patterns-modal-112",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "Could you to lower the screen before the presentation?",
    "answers": [
      "Could you lower the screen before the presentation?"
    ],
    "model": "Could you lower the screen before the presentation?",
    "explanation": "После could в вежливой просьбе используется начальная форма lower без to.",
    "cue": "Could you to lower the screen before the presentation?",
    "base": ""
  },
  {
    "id": "patterns-modal-113-transform",
    "family": "patterns-modal-113",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The supervisor will approve the updated checklist.",
    "answers": [
      "Will the supervisor approve the updated checklist?"
    ],
    "model": "Will the supervisor approve the updated checklist?",
    "explanation": "Вопрос образуется перестановкой will перед подлежащим; approve остаётся в начальной форме.",
    "cue": "The supervisor will approve the updated checklist.",
    "base": "",
    "task": "Сделай вопрос, сохрани will и остальную лексику."
  },
  {
    "id": "patterns-modal-114-translate",
    "family": "patterns-modal-114",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Сотрудникам следует носить защитные очки в мастерской.",
    "answers": [
      "Employees should wear safety glasses in the workshop."
    ],
    "model": "Employees should wear safety glasses in the workshop.",
    "explanation": "После should: начальная форма wear; glasses употребляется во множественном числе.",
    "cue": "Сотрудникам следует носить защитные очки в мастерской.",
    "base": "employees / should / wear / safety glasses / in the workshop",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-modal-115-contrast",
    "family": "patterns-modal-115",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери форму глагола после might в утверждении и отрицании.",
    "answers": [
      "arrive | arrive"
    ],
    "model": "The delivery might arrive before noon. The delivery might not arrive before noon.",
    "explanation": "И после might, и после might not употребляется начальная форма arrive.",
    "cue": "Выбери форму глагола после might в утверждении и отрицании.",
    "base": "",
    "parts": [
      {
        "prompt": "The delivery might ___ before noon.",
        "base": "arrive",
        "answer": "arrive"
      },
      {
        "prompt": "The delivery might not ___ before noon.",
        "base": "arrive",
        "answer": "arrive"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-modal-116-choice",
    "family": "patterns-modal-116",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери грамматически правильное предупреждение о хрупкой посылке.",
    "answers": [
      "The courier must handle this package carefully."
    ],
    "model": "The courier must handle this package carefully.",
    "explanation": "После must используется начальная форма handle.",
    "cue": "Выбери грамматически правильное предупреждение о хрупкой посылке.",
    "base": "",
    "task": "Выбери верную форму после модального глагола.",
    "choices": [
      "The courier must handle this package carefully.",
      "The courier must handles this package carefully.",
      "The courier must to handle this package carefully."
    ]
  },
  {
    "id": "patterns-modal-117-repair",
    "family": "patterns-modal-117",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "Does the venue can open an hour earlier on Sundays?",
    "answers": [
      "Can the venue open an hour earlier on Sundays?"
    ],
    "model": "Can the venue open an hour earlier on Sundays?",
    "explanation": "В вопросе с can вспомогательный do не используется.",
    "cue": "Does the venue can open an hour earlier on Sundays?",
    "base": ""
  },
  {
    "id": "patterns-modal-118-transform",
    "family": "patterns-modal-118",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The staff are required to keep the side gate closed.",
    "answers": [
      "The staff must keep the side gate closed."
    ],
    "model": "The staff must keep the side gate closed.",
    "explanation": "После must используется начальная форма keep без to.",
    "cue": "The staff are required to keep the side gate closed.",
    "base": "",
    "task": "Передай требование с must."
  },
  {
    "id": "patterns-modal-119-translate",
    "family": "patterns-modal-119",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Тебе не нужно устанавливать отдельное приложение: сервис работает в браузере.",
    "answers": [
      "You do not have to install a separate app; the service works in the browser."
    ],
    "model": "You do not have to install a separate app; the service works in the browser.",
    "explanation": "Do not have to означает отсутствие необходимости; оно не равно must not.",
    "cue": "Тебе не нужно устанавливать отдельное приложение: сервис работает в браузере.",
    "base": "you / not have to / install / a separate app / the service / work / in the browser",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-modal-120-contrast",
    "family": "patterns-modal-120",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни запрет и отсутствие необходимости.",
    "answers": [
      "must not | do not have to"
    ],
    "model": "You must not touch the sealed archive boxes. You do not have to bring a printed ticket; the QR code is enough.",
    "explanation": "Must not запрещает; do not have to сообщает, что действие необязательно.",
    "cue": "Сравни запрет и отсутствие необходимости.",
    "base": "",
    "parts": [
      {
        "prompt": "You ___ touch the sealed archive boxes.",
        "base": "must not",
        "answer": "must not"
      },
      {
        "prompt": "You ___ bring a printed ticket; the QR code is enough.",
        "base": "not have to",
        "answer": "do not have to"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-modal-121-gap",
    "family": "patterns-modal-121",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "You ___ submit a second copy; one signed form is enough.",
    "answers": [
      "do not have to"
    ],
    "model": "do not have to",
    "explanation": "Контекст указывает на отсутствие необходимости, а не на запрет.",
    "cue": "Вам не нужно подавать второй экземпляр: одной формы достаточно.",
    "base": "not be required to",
    "choices": [
      "do not have to",
      "must not"
    ]
  },
  {
    "id": "patterns-modal-122-repair",
    "family": "patterns-modal-122",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "We will can collect the badges after the briefing.",
    "answers": [
      "We will be able to collect the badges after the briefing."
    ],
    "model": "We will be able to collect the badges after the briefing.",
    "explanation": "В английском обычно не ставят два модальных глагола подряд: после will здесь используется be able to.",
    "cue": "We will can collect the badges after the briefing.",
    "base": ""
  },
  {
    "id": "patterns-modal-123-transform",
    "family": "patterns-modal-123",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The visitors are permitted to use the reading room.",
    "answers": [
      "The visitors may use the reading room."
    ],
    "model": "The visitors may use the reading room.",
    "explanation": "May выражает разрешение; после него используется начальная форма use.",
    "cue": "The visitors are permitted to use the reading room.",
    "base": "",
    "task": "Передай разрешение с may."
  },
  {
    "id": "patterns-modal-124-translate",
    "family": "patterns-modal-124",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Возможно, рейс задержат из-за тумана.",
    "answers": [
      "The flight may be delayed because of the fog."
    ],
    "model": "The flight may be delayed because of the fog.",
    "explanation": "После may используется начальная форма be; далее: причастие в пассивной конструкции.",
    "cue": "Возможно, рейс задержат из-за тумана.",
    "base": "the flight / may / delay / because of the fog",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-modal-125-contrast",
    "family": "patterns-modal-125",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи уверенный прогноз и возможность.",
    "answers": [
      "will | may"
    ],
    "model": "The published timetable says the ferry will leave at six. The fog is clearing, so the ferry may leave before six, but it is uncertain.",
    "explanation": "Will сообщает о расписании как уверенном факте; may оставляет возможность неопределённой.",
    "cue": "Различи уверенный прогноз и возможность.",
    "base": "",
    "parts": [
      {
        "prompt": "The published timetable says the ferry ___ leave at six.",
        "base": "will",
        "answer": "will"
      },
      {
        "prompt": "The fog is clearing, so the ferry ___ leave before six, but it is uncertain.",
        "base": "may",
        "answer": "may"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-modal-126-gap",
    "family": "patterns-modal-126",
    "topic": "patterns",
    "skill": "patterns-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "The technician should ___ the power supply before opening the panel.",
    "answers": [
      "disconnect"
    ],
    "model": "disconnect",
    "explanation": "После should используется начальная форма без to: disconnect.",
    "cue": "Технику следует отключить питание перед открытием панели.",
    "base": "disconnect",
    "choices": [
      "disconnect",
      "to disconnect"
    ]
  }
];
