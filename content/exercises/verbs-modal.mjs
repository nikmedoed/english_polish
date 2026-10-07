// Authored material for verbs-modal. Keep families in ascending numeric order.
export const skillId = "verbs-modal";
export const legacy = [
  {
    "id": "verbs-004",
    "family": "verbs-4",
    "topic": "verbs",
    "skill": "verbs-modal",
    "prompt": "We will ___ the results tomorrow.",
    "answer": "discuss",
    "distractor": "discussing",
    "explanation": "Обсуждение произойдёт завтра: сообщаем о будущем действии, не о процессе в заданный момент. Will + discuss. Для процесса: We will be discussing the results at noon.",
    "cue": "Мы обсудим результаты завтра.",
    "base": "discuss",
    "alternatives": []
  },
  {
    "id": "verbs-012",
    "family": "verbs-12",
    "topic": "verbs",
    "skill": "verbs-modal",
    "prompt": "He will be ___ at noon.",
    "answer": "working",
    "distractor": "work",
    "explanation": "В полдень он будет в процессе работы: мы мысленно смотрим на действие в определённый будущий момент, а не сообщаем время его начала. Поэтому will be working. He will work at noon просто сообщает о будущем действии; длительность и завершение эта фраза не уточняет.",
    "cue": "В полдень он будет работать.",
    "base": "work",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "verbs-modal-101-transform",
    "family": "verbs-modal-101",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "She explains the delay to the client.",
    "answers": [
      "She might explain the delay to the client."
    ],
    "model": "She might explain the delay to the client.",
    "explanation": "Might + explain без -s и без to.",
    "cue": "She explains the delay to the client.",
    "base": "",
    "task": "Добавь might. Остальные слова сохрани."
  },
  {
    "id": "verbs-modal-102-transform",
    "family": "verbs-modal-102",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "He will send the updated schedule tonight.",
    "answers": [
      "He won't send the updated schedule tonight."
    ],
    "model": "He won't send the updated schedule tonight.",
    "explanation": "Will not + send, без дополнительного do.",
    "cue": "He will send the updated schedule tonight.",
    "base": "",
    "task": "Сделай отрицание."
  },
  {
    "id": "verbs-modal-103-repair",
    "family": "verbs-modal-103",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "The replacement part might to arrive tomorrow.",
    "answers": [
      "The replacement part might arrive tomorrow."
    ],
    "model": "The replacement part might arrive tomorrow.",
    "explanation": "После might инфинитив без to.",
    "cue": "The replacement part might to arrive tomorrow.",
    "base": ""
  },
  {
    "id": "verbs-modal-104-translate",
    "family": "verbs-modal-104",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Им следует проверить цифры перед встречей.",
    "answers": [
      "They should check the figures before the meeting."
    ],
    "model": "They should check the figures before the meeting.",
    "explanation": "Should + check.",
    "cue": "Им следует проверить цифры перед встречей.",
    "base": "they / should / check / the figures / before the meeting",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-105-contrast",
    "family": "verbs-modal-105",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Результат завтра и процесс в определённое время.",
    "answers": [
      "prepare | preparing"
    ],
    "model": "She will prepare the summary tomorrow. At ten tomorrow, she will be preparing the summary.",
    "explanation": "Will + V для действия. Will be + -ing для процесса в момент будущего.",
    "cue": "Результат завтра и процесс в определённое время.",
    "base": "",
    "parts": [
      {
        "prompt": "She will ___ the summary tomorrow.",
        "base": "prepare",
        "answer": "prepare"
      },
      {
        "prompt": "At ten tomorrow, she will be ___ the summary.",
        "base": "prepare",
        "answer": "preparing"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-106-transform",
    "family": "verbs-modal-106",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The team can solve the problem today.",
    "answers": [
      "Can the team solve the problem today?"
    ],
    "model": "Can the team solve the problem today?",
    "explanation": "Can перед подлежащим, solve сохраняется.",
    "cue": "The team can solve the problem today.",
    "base": "",
    "task": "Сделай вопрос."
  },
  {
    "id": "verbs-modal-107-repair",
    "family": "verbs-modal-107",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "Each analyst should checks the figures before the call.",
    "answers": [
      "Each analyst should check the figures before the call."
    ],
    "model": "Each analyst should check the figures before the call.",
    "explanation": "После should используется начальная форма check, даже если подлежащее в единственном числе.",
    "cue": "Each analyst should checks the figures before the call.",
    "base": ""
  },
  {
    "id": "verbs-modal-108-transform",
    "family": "verbs-modal-108",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The technician explains the delay to the client.",
    "answers": [
      "The technician might explain the delay to the client."
    ],
    "model": "The technician might explain the delay to the client.",
    "explanation": "После might используется начальная форма explain без -s и без to.",
    "cue": "The technician explains the delay to the client.",
    "base": "",
    "task": "Добавь might перед основным глаголом. Остальные слова сохрани."
  },
  {
    "id": "verbs-modal-109-translate",
    "family": "verbs-modal-109",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Завтра нам необходимо проверить цифры до встречи.",
    "answers": [
      "We must check the figures before the meeting tomorrow."
    ],
    "model": "We must check the figures before the meeting tomorrow.",
    "explanation": "Must выражает необходимость; после модального глагола используется начальная форма check.",
    "cue": "Завтра нам необходимо проверить цифры до встречи.",
    "base": "we / must / check / the figures / before the meeting tomorrow",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-110-contrast",
    "family": "verbs-modal-110",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни действие завтра и процесс ровно в десять часов завтра.",
    "answers": [
      "prepare | preparing"
    ],
    "model": "Nora will prepare the summary tomorrow. At ten tomorrow, Nora will be preparing the summary.",
    "explanation": "Для действия подойдёт will prepare; для процесса в конкретный будущий момент: will be preparing.",
    "cue": "Сравни действие завтра и процесс ровно в десять часов завтра.",
    "base": "",
    "parts": [
      {
        "prompt": "Nora will ___ the summary tomorrow.",
        "base": "prepare",
        "answer": "prepare"
      },
      {
        "prompt": "At ten tomorrow, Nora will be ___ the summary.",
        "base": "prepare",
        "answer": "preparing"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-111-gap",
    "family": "verbs-modal-111",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "The revised model may ___ less energy during the night.",
    "answers": [
      "use"
    ],
    "model": "use",
    "explanation": "После may используется начальная форма глагола без to.",
    "cue": "Обновлённая модель может потреблять меньше энергии ночью.",
    "base": "use",
    "choices": [
      "use",
      "to use"
    ]
  },
  {
    "id": "verbs-modal-112-transform",
    "family": "verbs-modal-112",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The driver will call the warehouse after lunch.",
    "answers": [
      "Will the driver call the warehouse after lunch?"
    ],
    "model": "Will the driver call the warehouse after lunch?",
    "explanation": "В вопросе will ставится перед подлежащим; call остаётся в начальной форме.",
    "cue": "The driver will call the warehouse after lunch.",
    "base": "",
    "task": "Сделай общий вопрос, сохрани остальные слова."
  },
  {
    "id": "verbs-modal-113-repair",
    "family": "verbs-modal-113",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "The revised schedule may includes a short maintenance window.",
    "answers": [
      "The revised schedule may include a short maintenance window."
    ],
    "model": "The revised schedule may include a short maintenance window.",
    "explanation": "После may используется начальная форма include без -s.",
    "cue": "The revised schedule may includes a short maintenance window.",
    "base": ""
  },
  {
    "id": "verbs-modal-114-transform",
    "family": "verbs-modal-114",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The safety guide explains each step.",
    "answers": [
      "The safety guide can explain each step."
    ],
    "model": "The safety guide can explain each step.",
    "explanation": "После can основной глагол используется в начальной форме: explain.",
    "cue": "The safety guide explains each step.",
    "base": "",
    "task": "Добавь can перед основным глаголом."
  },
  {
    "id": "verbs-modal-115-translate",
    "family": "verbs-modal-115",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Вероятно, курьер доставит коробку до конца дня.",
    "answers": [
      "The courier may deliver the box by the end of the day."
    ],
    "model": "The courier may deliver the box by the end of the day.",
    "explanation": "После may используется начальная форма deliver без to.",
    "cue": "Вероятно, курьер доставит коробку до конца дня.",
    "base": "the courier / may / deliver / the box / by the end of the day",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-116-contrast",
    "family": "verbs-modal-116",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери начальную форму после разных модальных глаголов.",
    "answers": [
      "issue | calculate"
    ],
    "model": "The assistant must issue a receipt for every payment. The system might calculate the total automatically.",
    "explanation": "После must и might используется начальная форма глагола без to и без окончания -s.",
    "cue": "Выбери начальную форму после разных модальных глаголов.",
    "base": "",
    "parts": [
      {
        "prompt": "The assistant must ___ a receipt for every payment.",
        "base": "issue",
        "answer": "issue"
      },
      {
        "prompt": "The system might ___ the total automatically.",
        "base": "calculate",
        "answer": "calculate"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-117-gap",
    "family": "verbs-modal-117",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "Visitors should ___ their badges at the main desk.",
    "answers": [
      "show"
    ],
    "model": "show",
    "explanation": "После should нужен глагол в начальной форме без to.",
    "cue": "Посетителям следует показать пропуска у главной стойки.",
    "base": "show",
    "choices": [
      "show",
      "to show"
    ]
  },
  {
    "id": "verbs-modal-118-repair",
    "family": "verbs-modal-118",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "Will the technician checks each valve tomorrow?",
    "answers": [
      "Will the technician check each valve tomorrow?"
    ],
    "model": "Will the technician check each valve tomorrow?",
    "explanation": "В вопросе will ставится перед подлежащим, а после него нужен check без -s.",
    "cue": "Will the technician checks each valve tomorrow?",
    "base": ""
  },
  {
    "id": "verbs-modal-119-transform",
    "family": "verbs-modal-119",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The warehouse can store the extra boxes.",
    "answers": [
      "Can the warehouse store the extra boxes?"
    ],
    "model": "Can the warehouse store the extra boxes?",
    "explanation": "Вопрос с can образуется перестановкой can перед подлежащим; store не меняется.",
    "cue": "The warehouse can store the extra boxes.",
    "base": "",
    "task": "Сделай общий вопрос."
  },
  {
    "id": "verbs-modal-120-translate",
    "family": "verbs-modal-120",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Завтра в это время специалисты будут следить за системой.",
    "answers": [
      "At this time tomorrow, the specialists will be monitoring the system."
    ],
    "model": "At this time tomorrow, the specialists will be monitoring the system.",
    "explanation": "Задан будущий момент наблюдения за процессом: will be monitoring.",
    "cue": "Завтра в это время специалисты будут следить за системой.",
    "base": "at this time tomorrow / the specialists / monitor / the system",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-121-contrast",
    "family": "verbs-modal-121",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Отличи будущее действие от процесса в конкретный момент.",
    "answers": [
      "revise | revising"
    ],
    "model": "I will revise the first draft tonight. At nine tonight, I will be revising the second draft.",
    "explanation": "Will + revise сообщает о действии; will be + revising показывает процесс ровно в девять.",
    "cue": "Отличи будущее действие от процесса в конкретный момент.",
    "base": "",
    "parts": [
      {
        "prompt": "I will ___ the first draft tonight.",
        "base": "revise",
        "answer": "revise"
      },
      {
        "prompt": "At nine tonight, I will be ___ the second draft.",
        "base": "revise",
        "answer": "revising"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-122-contrast",
    "family": "verbs-modal-122",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни возможность оставить дверь открытой и вопрос о строгом правиле.",
    "answers": [
      "leave | leave"
    ],
    "model": "The cook may leave the service door open briefly. Must the cook leave the service door locked overnight?",
    "explanation": "После may и must используется начальная форма leave.",
    "cue": "Сравни возможность оставить дверь открытой и вопрос о строгом правиле.",
    "base": "",
    "parts": [
      {
        "prompt": "The cook may ___ the service door open briefly.",
        "base": "leave",
        "answer": "leave"
      },
      {
        "prompt": "Must the cook ___ the service door locked overnight?",
        "base": "leave",
        "answer": "leave"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-123-repair",
    "family": "verbs-modal-123",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "You mustn't to connect the device to a wet outlet.",
    "answers": [
      "You mustn't connect the device to a wet outlet."
    ],
    "model": "You mustn't connect the device to a wet outlet.",
    "explanation": "После mustn't глагол стоит в начальной форме без to.",
    "cue": "You mustn't to connect the device to a wet outlet.",
    "base": ""
  },
  {
    "id": "verbs-modal-124-transform",
    "family": "verbs-modal-124",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "Every passenger is required to keep the receipt.",
    "answers": [
      "Every passenger must keep the receipt."
    ],
    "model": "Every passenger must keep the receipt.",
    "explanation": "Must выражает обязательное требование; после него используется начальная форма keep.",
    "cue": "Every passenger is required to keep the receipt.",
    "base": "",
    "task": "Передай это правило с помощью must."
  },
  {
    "id": "verbs-modal-125-translate",
    "family": "verbs-modal-125",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Тебе не нужно печатать билет: покажи QR-код.",
    "answers": [
      "You do not have to print the ticket; show the QR code."
    ],
    "model": "You do not have to print the ticket; show the QR code.",
    "explanation": "Отсутствие необходимости выражается do not have to; это не запрет.",
    "cue": "Тебе не нужно печатать билет: покажи QR-код.",
    "base": "you / not have to / print / the ticket / show / the QR code",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-126-contrast",
    "family": "verbs-modal-126",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни прямой запрет и отсутствие необходимости.",
    "answers": [
      "must not | do not have to"
    ],
    "model": "Flash photography is forbidden here. You must not use it in this archive room. The lecture uses unreserved seating, so you do not have to reserve a seat.",
    "explanation": "Must not запрещает действие; do not have to сообщает, что действие необязательно.",
    "cue": "Сравни прямой запрет и отсутствие необходимости.",
    "base": "",
    "parts": [
      {
        "prompt": "Flash photography is forbidden here. You ___ use it in this archive room.",
        "base": "must not",
        "answer": "must not"
      },
      {
        "prompt": "The lecture uses unreserved seating, so you ___ reserve a seat.",
        "base": "not have to",
        "answer": "do not have to"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-127-gap",
    "family": "verbs-modal-127",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "You ___ bring any food; catering is included in the ticket.",
    "answers": [
      "do not have to"
    ],
    "model": "do not have to",
    "explanation": "Здесь указано отсутствие необходимости, а не запрет: do not have to.",
    "cue": "Вам не нужно приносить еду: питание включено в билет.",
    "base": "not be required to",
    "choices": [
      "do not have to",
      "must not"
    ]
  },
  {
    "id": "verbs-modal-128-repair",
    "family": "verbs-modal-128",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "Might the crew to move the equipment after closing?",
    "answers": [
      "Might the crew move the equipment after closing?"
    ],
    "model": "Might the crew move the equipment after closing?",
    "explanation": "В вопросе после might используется начальная форма move без to.",
    "cue": "Might the crew to move the equipment after closing?",
    "base": ""
  },
  {
    "id": "verbs-modal-129-transform",
    "family": "verbs-modal-129",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The engineer may be using the backup system now.",
    "answers": [
      "The engineer may not be using the backup system now."
    ],
    "model": "The engineer may not be using the backup system now.",
    "explanation": "May not отрицает возможность; конструкция Continuous остаётся be using.",
    "cue": "The engineer may be using the backup system now.",
    "base": "",
    "task": "Сделай утверждение отрицательным, сохрани возможность."
  },
  {
    "id": "verbs-modal-130-translate",
    "family": "verbs-modal-130",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Завтра в полдень мы будем осматривать северное крыло.",
    "answers": [
      "At noon tomorrow, we will be inspecting the north wing."
    ],
    "model": "At noon tomorrow, we will be inspecting the north wing.",
    "explanation": "At noon tomorrow задаёт момент будущего процесса: will be + -ing.",
    "cue": "Завтра в полдень мы будем осматривать северное крыло.",
    "base": "at noon tomorrow / we / inspect / the north wing",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-131-contrast",
    "family": "verbs-modal-131",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи обязательное действие и действие, которое не требуется.",
    "answers": [
      "must | do not have to"
    ],
    "model": "Applicants must submit the signed form by Friday. Applicants do not have to send a paper copy; a digital upload is sufficient.",
    "explanation": "Must означает обязательность; do not have to: отсутствие дополнительной необходимости.",
    "cue": "Различи обязательное действие и действие, которое не требуется.",
    "base": "",
    "parts": [
      {
        "prompt": "Applicants ___ submit the signed form by Friday.",
        "base": "must",
        "answer": "must"
      },
      {
        "prompt": "Applicants ___ send a paper copy; a digital upload is sufficient.",
        "base": "not have to",
        "answer": "do not have to"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-132-gap",
    "family": "verbs-modal-132",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "You ___ ask the desk for a spare key; it is only a recommendation.",
    "answers": [
      "should"
    ],
    "model": "should",
    "explanation": "Здесь выражается совет, а не обязательное требование.",
    "cue": "Вам следует попросить запасной ключ у стойки; это только рекомендация.",
    "base": "should",
    "choices": [
      "should",
      "must"
    ]
  },
  {
    "id": "verbs-modal-133-repair",
    "family": "verbs-modal-133",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "Every passenger must to show a ticket before boarding.",
    "answers": [
      "Every passenger must show a ticket before boarding."
    ],
    "model": "Every passenger must show a ticket before boarding.",
    "explanation": "После must используется начальная форма без to: show.",
    "cue": "Every passenger must to show a ticket before boarding.",
    "base": ""
  },
  {
    "id": "verbs-modal-134-transform",
    "family": "verbs-modal-134",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "The site requires staff to wear protective glasses.",
    "answers": [
      "Staff must wear protective glasses on the site."
    ],
    "model": "Staff must wear protective glasses on the site.",
    "explanation": "Must выражает обязательность; после него используется wear без to.",
    "cue": "The site requires staff to wear protective glasses.",
    "base": "",
    "task": "Передай требование с помощью must."
  },
  {
    "id": "verbs-modal-135-translate",
    "family": "verbs-modal-135",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Вам запрещено фотографировать архивные документы.",
    "answers": [
      "You must not photograph the archive documents."
    ],
    "model": "You must not photograph the archive documents.",
    "explanation": "Must not выражает запрет; после must используется начальная форма photograph.",
    "cue": "Вам запрещено фотографировать архивные документы.",
    "base": "you / must not / photograph / the archive documents",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-136-contrast",
    "family": "verbs-modal-136",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи запрет и отсутствие необходимости.",
    "answers": [
      "must not | do not have to"
    ],
    "model": "You must not enter the marked area; the floor is still wet. You do not have to print your ticket; your phone screen is accepted.",
    "explanation": "Must not запрещает вход; do not have to говорит, что печатать билет необязательно.",
    "cue": "Различи запрет и отсутствие необходимости.",
    "base": "",
    "parts": [
      {
        "prompt": "You ___ enter the marked area; the floor is still wet.",
        "base": "must not",
        "answer": "must not"
      },
      {
        "prompt": "You ___ print your ticket; your phone screen is accepted.",
        "base": "not have to",
        "answer": "do not have to"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-137-gap",
    "family": "verbs-modal-137",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "The crew ___ checking the emergency lights at 6 p.m. tomorrow.",
    "answers": [
      "will be"
    ],
    "model": "will be",
    "explanation": "At 6 p.m. tomorrow указывает на будущий процесс: will be + -ing.",
    "cue": "Завтра в шесть вечера бригада будет проверять аварийное освещение.",
    "base": "will",
    "choices": [
      "will be",
      "will"
    ]
  },
  {
    "id": "verbs-modal-138-repair",
    "family": "verbs-modal-138",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "The staff should to notify the supervisor before moving the equipment.",
    "answers": [
      "The staff should notify the supervisor before moving the equipment."
    ],
    "model": "The staff should notify the supervisor before moving the equipment.",
    "explanation": "После should используется начальная форма notify без to.",
    "cue": "The staff should to notify the supervisor before moving the equipment.",
    "base": ""
  },
  {
    "id": "verbs-modal-139-transform",
    "family": "verbs-modal-139",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "Perhaps the guide will explain the delay after the tour.",
    "answers": [
      "The guide may explain the delay after the tour."
    ],
    "model": "The guide may explain the delay after the tour.",
    "explanation": "May выражает возможность; после него используется начальная форма explain.",
    "cue": "Perhaps the guide will explain the delay after the tour.",
    "base": "",
    "task": "Перефразируй с may, сохранив значение возможности."
  },
  {
    "id": "verbs-modal-140-translate",
    "family": "verbs-modal-140",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Завтра в это время мы будем проводить инструктаж.",
    "answers": [
      "Tomorrow at this time, we will be conducting the briefing."
    ],
    "model": "Tomorrow at this time, we will be conducting the briefing.",
    "explanation": "Задан момент будущего процесса: will be conducting.",
    "cue": "Завтра в это время мы будем проводить инструктаж.",
    "base": "tomorrow at this time / we / conduct / the briefing",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-141-contrast",
    "family": "verbs-modal-141",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери требование и рекомендацию по контексту.",
    "answers": [
      "must | should"
    ],
    "model": "Visitors must show identification at the security gate; it is required. You should call ahead if you arrive after six; it is good advice.",
    "explanation": "Must выражает обязательное правило, should: совет.",
    "cue": "Выбери требование и рекомендацию по контексту.",
    "base": "",
    "parts": [
      {
        "prompt": "Visitors ___ show identification at the security gate; it is required.",
        "base": "must",
        "answer": "must"
      },
      {
        "prompt": "You ___ call ahead if you arrive after six; it is good advice.",
        "base": "should",
        "answer": "should"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-142-gap",
    "family": "verbs-modal-142",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "Drivers ___ leave the engine running inside the tunnel; this is prohibited.",
    "answers": [
      "must not"
    ],
    "model": "must not",
    "explanation": "This is prohibited явно задаёт запрет: must not.",
    "cue": "Водителям нельзя оставлять двигатель работающим внутри тоннеля: это запрещено.",
    "base": "not be allowed to",
    "choices": [
      "must not",
      "do not have to"
    ]
  },
  {
    "id": "verbs-modal-143-repair",
    "family": "verbs-modal-143",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "repair",
    "level": 2,
    "prompt": "The team won't can use the main entrance during repairs.",
    "answers": [
      "The team will not be able to use the main entrance during repairs."
    ],
    "model": "The team will not be able to use the main entrance during repairs.",
    "explanation": "После will нельзя поставить can; для будущей возможности используется will be able to.",
    "cue": "The team won't can use the main entrance during repairs.",
    "base": ""
  },
  {
    "id": "verbs-modal-144-transform",
    "family": "verbs-modal-144",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "transform",
    "level": 3,
    "prompt": "A printed copy is optional; the digital version is enough.",
    "answers": [
      "You do not have to bring a printed copy; the digital version is enough."
    ],
    "model": "You do not have to bring a printed copy; the digital version is enough.",
    "explanation": "Do not have to передаёт отсутствие необходимости, не запрет.",
    "cue": "A printed copy is optional; the digital version is enough.",
    "base": "",
    "task": "Обратись к участникам и используй do not have to."
  },
  {
    "id": "verbs-modal-145-translate",
    "family": "verbs-modal-145",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "translate",
    "level": 3,
    "prompt": "Техники обязаны отключить питание до того, как снимут крышку.",
    "answers": [
      "The technicians must disconnect the power before they remove the cover."
    ],
    "model": "The technicians must disconnect the power before they remove the cover.",
    "explanation": "Must выражает обязательность; после before здесь следует полное придаточное с подлежащим и глаголом.",
    "cue": "Техники обязаны отключить питание до того, как снимут крышку.",
    "base": "the technicians / must / disconnect / the power / before / they / remove / the cover",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-modal-146-contrast",
    "family": "verbs-modal-146",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи обязательное правило и способность предмета.",
    "answers": [
      "must | can"
    ],
    "model": "Staff must wear closed shoes in the workshop; it is a safety rule. The auditorium can hold 500 people comfortably.",
    "explanation": "Must выражает обязательность; can здесь обозначает возможность или способность.",
    "cue": "Различи обязательное правило и способность предмета.",
    "base": "",
    "parts": [
      {
        "prompt": "Staff ___ wear closed shoes in the workshop; it is a safety rule.",
        "base": "must",
        "answer": "must"
      },
      {
        "prompt": "The auditorium ___ hold 500 people comfortably.",
        "base": "can",
        "answer": "can"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-modal-147-gap",
    "family": "verbs-modal-147",
    "topic": "verbs",
    "skill": "verbs-modal",
    "mode": "gap",
    "level": 2,
    "prompt": "The shuttle ___ leave at 8:20 tomorrow according to the printed timetable.",
    "answers": [
      "will"
    ],
    "model": "will",
    "explanation": "Расписание задаёт будущее событие; will ставится перед начальной формой leave.",
    "cue": "Согласно расписанию, завтра шаттл отправится в 8:20.",
    "base": "leave",
    "choices": [
      "will",
      "would"
    ]
  }
];
