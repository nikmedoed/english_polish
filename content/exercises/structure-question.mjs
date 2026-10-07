// Authored material for structure-question. Keep families in ascending numeric order.
export const skillId = "structure-question";
export const legacy = [
  {
    "id": "structure-001",
    "family": "structure-1",
    "topic": "structure",
    "skill": "structure-question",
    "prompt": "Do you know where ___?",
    "answer": "she lives",
    "distractor": "does she live",
    "explanation": "В косвенном вопросе прямой порядок слов.",
    "cue": "Ты знаешь, где она живёт?",
    "base": "she / live",
    "alternatives": []
  },
  {
    "id": "structure-002",
    "family": "structure-2",
    "topic": "structure",
    "skill": "structure-question",
    "prompt": "Where ___ you work?",
    "answer": "do",
    "distractor": "are",
    "explanation": "Вопрос Present Simple: do + подлежащее + V.",
    "cue": "Где ты работаешь?",
    "base": "do",
    "alternatives": []
  },
  {
    "id": "structure-003",
    "family": "structure-3",
    "topic": "structure",
    "skill": "structure-question",
    "prompt": "I wonder what ___.",
    "answer": "he wants",
    "distractor": "does he want",
    "explanation": "После I wonder нет вопросительной инверсии.",
    "cue": "Интересно, чего он хочет.",
    "base": "he / want",
    "alternatives": []
  },
  {
    "id": "structure-004",
    "family": "structure-4",
    "topic": "structure",
    "skill": "structure-question",
    "prompt": "Why ___ she leave yesterday?",
    "answer": "did",
    "distractor": "does",
    "explanation": "Прошлое: did + подлежащее + V.",
    "cue": "Почему она ушла вчера?",
    "base": "do",
    "alternatives": []
  },
  {
    "id": "structure-005",
    "family": "structure-5",
    "topic": "structure",
    "skill": "structure-question",
    "prompt": "How often ___ they meet?",
    "answer": "do",
    "distractor": "are",
    "explanation": "Meet: смысловой глагол: do.",
    "cue": "Как часто они встречаются?",
    "base": "do",
    "alternatives": []
  },
  {
    "id": "structure-006",
    "family": "structure-6",
    "topic": "structure",
    "skill": "structure-question",
    "prompt": "Can you tell me when ___?",
    "answer": "the train leaves",
    "distractor": "does the train leave",
    "explanation": "Косвенный вопрос: when + подлежащее + глагол.",
    "cue": "Ты можешь сказать, когда отправляется поезд?",
    "base": "the train / leave",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "structure-question-101-repair",
    "family": "structure-question-101",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "Can you tell me why did they reject the proposal?",
    "answers": [
      "Can you tell me why they rejected the proposal?"
    ],
    "model": "Can you tell me why they rejected the proposal?",
    "explanation": "Внутри косвенного вопроса: they rejected без did.",
    "cue": "Can you tell me why did they reject the proposal?",
    "base": ""
  },
  {
    "id": "structure-question-102-transform",
    "family": "structure-question-102",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "Where does the next meeting take place?",
    "answers": [
      "Do you know where the next meeting takes place?"
    ],
    "model": "Do you know where the next meeting takes place?",
    "explanation": "В косвенном вопросе исчезает does; takes согласуется с meeting.",
    "cue": "Where does the next meeting take place?",
    "base": "",
    "task": "Начни с Do you know, сохрани остальную лексику."
  },
  {
    "id": "structure-question-103-repair",
    "family": "structure-question-103",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "Could you explain why does the scanner stop after page ten?",
    "answers": [
      "Could you explain why the scanner stops after page ten?"
    ],
    "model": "Could you explain why the scanner stops after page ten?",
    "explanation": "Внутри косвенного вопроса порядок слов прямой: the scanner stops, без does.",
    "cue": "Could you explain why does the scanner stop after page ten?",
    "base": ""
  },
  {
    "id": "structure-question-104-transform",
    "family": "structure-question-104",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "Why is the printer unavailable today?",
    "answers": [
      "Do you know why the printer is unavailable today?"
    ],
    "model": "Do you know why the printer is unavailable today?",
    "explanation": "После Do you know используется порядок подлежащего и сказуемого: the printer is.",
    "cue": "Why is the printer unavailable today?",
    "base": "",
    "task": "Начни с Do you know. Остальную лексику сохрани."
  },
  {
    "id": "structure-question-105-translate",
    "family": "structure-question-105",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "translate",
    "level": 3,
    "prompt": "Ты можешь сказать мне, когда заканчивается регистрация?",
    "answers": [
      "Can you tell me when registration ends?"
    ],
    "model": "Can you tell me when registration ends?",
    "explanation": "Внутри косвенного вопроса нет инверсии: registration ends. Также нормативно: Can you tell me when the registration ends?",
    "cue": "Ты можешь сказать мне, когда заканчивается регистрация?",
    "base": "can / you / tell / me / when / registration / end",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-question-106-contrast",
    "family": "structure-question-106",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни прямой вопрос и тот же вопрос внутри вежливой фразы.",
    "answers": [
      "does | the archive stores"
    ],
    "model": "Where does the archive store older invoices? Could you tell me where the archive stores older invoices?",
    "explanation": "Прямой вопрос использует does the archive store; внутри could you tell me нужен порядок the archive stores.",
    "cue": "Сравни прямой вопрос и тот же вопрос внутри вежливой фразы.",
    "base": "",
    "parts": [
      {
        "prompt": "Where ___ the archive store older invoices?",
        "base": "do",
        "answer": "does"
      },
      {
        "prompt": "Could you tell me where ___ older invoices?",
        "base": "store",
        "answer": "the archive stores"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-question-107-gap",
    "family": "structure-question-107",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "gap",
    "level": 2,
    "prompt": "Could you tell me when the morning train ___?",
    "answers": [
      "leaves"
    ],
    "model": "leaves",
    "explanation": "Внутри косвенного вопроса используется прямой порядок слов; после the morning train глагол получает -s.",
    "cue": "Ты можешь сказать, когда отправляется утренний поезд?",
    "base": "leave",
    "choices": [
      "leaves",
      "does the morning train leave"
    ]
  },
  {
    "id": "structure-question-108-repair",
    "family": "structure-question-108",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "Do you know where is the nearest print shop?",
    "answers": [
      "Do you know where the nearest print shop is?"
    ],
    "model": "Do you know where the nearest print shop is?",
    "explanation": "Внутри Do you know используется порядок слов утверждения: подлежащее перед is.",
    "cue": "Do you know where is the nearest print shop?",
    "base": ""
  },
  {
    "id": "structure-question-109-transform",
    "family": "structure-question-109",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "When does the evening class begin?",
    "answers": [
      "Could you tell me when the evening class begins?"
    ],
    "model": "Could you tell me when the evening class begins?",
    "explanation": "В косвенном вопросе нет инверсии; begin согласуется с class: begins.",
    "cue": "When does the evening class begin?",
    "base": "",
    "task": "Встрой прямой вопрос после Could you tell me."
  },
  {
    "id": "structure-question-110-translate",
    "family": "structure-question-110",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "translate",
    "level": 3,
    "prompt": "Я не знаю, принял ли банк перевод.",
    "answers": [
      "I do not know whether the bank received the transfer.",
      "I do not know whether the bank has received the transfer."
    ],
    "model": "I do not know whether the bank received the transfer.",
    "explanation": "После whether порядок слов прямой; выбрана форма received.",
    "cue": "Я не знаю, принял ли банк перевод.",
    "base": "I / not know / whether / the bank / receive / the transfer",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-question-111-contrast",
    "family": "structure-question-111",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни прямой вопрос и тот же вопрос внутри Do you remember.",
    "answers": [
      "are | are"
    ],
    "model": "Where are the spare batteries? Do you remember where the spare batteries are?",
    "explanation": "В прямом вопросе are стоит перед подлежащим; внутри косвенного вопроса порядок подлежащее + are.",
    "cue": "Сравни прямой вопрос и тот же вопрос внутри Do you remember.",
    "base": "",
    "parts": [
      {
        "prompt": "Where ___ the spare batteries?",
        "base": "be",
        "answer": "are"
      },
      {
        "prompt": "Do you remember where the spare batteries ___?",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-question-112-gap",
    "family": "structure-question-112",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "gap",
    "level": 2,
    "prompt": "Could you explain why the printer ___ making this noise?",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Это косвенный вопрос: после why идёт прямой порядок слов, the printer is.",
    "cue": "Можете объяснить, почему принтер издаёт этот шум?",
    "base": "be",
    "choices": [
      "is",
      "does"
    ]
  },
  {
    "id": "structure-question-113-repair",
    "family": "structure-question-113",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "The guide asked us what did we need for the hike.",
    "answers": [
      "The guide asked us what we needed for the hike."
    ],
    "model": "The guide asked us what we needed for the hike.",
    "explanation": "В косвенном вопросе what we needed сохраняет прямой порядок слов; прошедшее время согласуется с asked.",
    "cue": "The guide asked us what did we need for the hike.",
    "base": ""
  },
  {
    "id": "structure-question-114-transform",
    "family": "structure-question-114",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "Who manages the evening shift?",
    "answers": [
      "Do you know who manages the evening shift?"
    ],
    "model": "Do you know who manages the evening shift?",
    "explanation": "Who здесь подлежащее придаточной части; порядок слов остаётся who manages.",
    "cue": "Who manages the evening shift?",
    "base": "",
    "task": "Начни с Do you know, сохрани вопрос косвенным."
  },
  {
    "id": "structure-question-115-translate",
    "family": "structure-question-115",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "translate",
    "level": 3,
    "prompt": "Спросите, когда начинается регистрация.",
    "answers": [
      "Ask when registration begins."
    ],
    "model": "Ask when registration begins.",
    "explanation": "После ask используется косвенный порядок слов: registration begins.",
    "cue": "Спросите, когда начинается регистрация.",
    "base": "ask / when / registration / begin",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-question-116-contrast",
    "family": "structure-question-116",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "contrast",
    "level": 3,
    "prompt": "Один вопрос сначала задаётся напрямую, затем включается в предложение.",
    "answers": [
      "does | takes"
    ],
    "model": "How long does the trip take? We need to find out how long the trip takes .",
    "explanation": "Прямой вопрос требует does перед подлежащим; в косвенной части: the trip takes.",
    "cue": "Один вопрос сначала задаётся напрямую, затем включается в предложение.",
    "base": "",
    "parts": [
      {
        "prompt": "How long ___ the trip take?",
        "base": "do",
        "answer": "does"
      },
      {
        "prompt": "We need to find out how long the trip ___ .",
        "base": "take",
        "answer": "takes"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-question-117-choice",
    "family": "structure-question-117",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери грамматически верную просьбу узнать номер платформы.",
    "answers": [
      "Could you tell me which platform the train leaves from?"
    ],
    "model": "Could you tell me which platform the train leaves from?",
    "explanation": "Внутри косвенного вопроса используется прямой порядок слов: the train leaves.",
    "cue": "Выбери грамматически верную просьбу узнать номер платформы.",
    "base": "",
    "task": "Выбери корректный косвенный вопрос.",
    "choices": [
      "Could you tell me which platform the train leaves from?",
      "Could you tell me which platform does the train leave from?",
      "Could you tell me which platform the train leaves from does?"
    ]
  },
  {
    "id": "structure-question-118-repair",
    "family": "structure-question-118",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "Do you know did the east gallery close at five?",
    "answers": [
      "Do you know if the east gallery closed at five?"
    ],
    "model": "Do you know if the east gallery closed at five?",
    "explanation": "После if в косвенном вопросе используется прямой порядок слов, без did.",
    "cue": "Do you know did the east gallery close at five?",
    "base": ""
  },
  {
    "id": "structure-question-119-transform",
    "family": "structure-question-119",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "Where can I collect the visitor badge?",
    "answers": [
      "Do you know where I can collect the visitor badge?"
    ],
    "model": "Do you know where I can collect the visitor badge?",
    "explanation": "Внутри косвенного вопроса сохраняется порядок subject + can + verb.",
    "cue": "Where can I collect the visitor badge?",
    "base": "",
    "task": "Встрой вопрос после Do you know."
  },
  {
    "id": "structure-question-120-translate",
    "family": "structure-question-120",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "translate",
    "level": 3,
    "prompt": "Я не уверен, открыт ли музей по понедельникам.",
    "answers": [
      "I am not sure whether the museum is open on Mondays."
    ],
    "model": "I am not sure whether the museum is open on Mondays.",
    "explanation": "Whether вводит косвенный вопрос; после него порядок слов прямой: the museum is.",
    "cue": "Я не уверен, открыт ли музей по понедельникам.",
    "base": "I / not sure / whether / the museum / be / open / on Mondays",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-question-121-contrast",
    "family": "structure-question-121",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни прямой вопрос и тот же вопрос внутри другой фразы.",
    "answers": [
      "does | closes"
    ],
    "model": "What time does the café close? Do you know what time the café closes?",
    "explanation": "В прямом вопросе вспомогательный does стоит перед подлежащим; в косвенной части: the café closes.",
    "cue": "Сравни прямой вопрос и тот же вопрос внутри другой фразы.",
    "base": "",
    "parts": [
      {
        "prompt": "What time ___ the café close?",
        "base": "do",
        "answer": "does"
      },
      {
        "prompt": "Do you know what time the café ___?",
        "base": "close",
        "answer": "closes"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-question-122-gap",
    "family": "structure-question-122",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "gap",
    "level": 2,
    "prompt": "Could you check whether the file ___ attached?",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Whether вводит косвенный вопрос, внутри которого сохраняется прямой порядок слов: the file is.",
    "cue": "Можете проверить, прикреплён ли файл?",
    "base": "be",
    "choices": [
      "is",
      "does"
    ]
  },
  {
    "id": "structure-question-123-repair",
    "family": "structure-question-123",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "Who did design the emblem on the old ferry?",
    "answers": [
      "Who designed the emblem on the old ferry?"
    ],
    "model": "Who designed the emblem on the old ferry?",
    "explanation": "Who здесь подлежащее; вспомогательный did не нужен, используется Past Simple designed.",
    "cue": "Who did design the emblem on the old ferry?",
    "base": ""
  },
  {
    "id": "structure-question-124-transform",
    "family": "structure-question-124",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "Do you know where the shuttle stops?",
    "answers": [
      "Where does the shuttle stop?"
    ],
    "model": "Where does the shuttle stop?",
    "explanation": "В прямом вопросе Present Simple вспомогательный does ставится перед подлежащим.",
    "cue": "Do you know where the shuttle stops?",
    "base": "",
    "task": "Сделай из встроенного вопроса прямой вопрос."
  },
  {
    "id": "structure-question-125-translate",
    "family": "structure-question-125",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "translate",
    "level": 3,
    "prompt": "Спроси, нужна ли предварительная регистрация.",
    "answers": [
      "Ask whether advance registration is required.",
      "Ask if advance registration is required."
    ],
    "model": "Ask whether advance registration is required.",
    "explanation": "Whether вводит косвенный вопрос с прямым порядком слов: registration is required.",
    "cue": "Спроси, нужна ли предварительная регистрация.",
    "base": "ask / whether / advance registration / be / required",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-question-126-contrast",
    "family": "structure-question-126",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни вопрос о человеке, который выполнил действие, и о человеке, которому позвонили.",
    "answers": [
      "met | meet"
    ],
    "model": "Who met the island guide at the pier? Who did the island guide meet at the pier?",
    "explanation": "Если who: подлежащее, did не нужен: who met. Если who: дополнение, нужен did + meet.",
    "cue": "Сравни вопрос о человеке, который выполнил действие, и о человеке, которому позвонили.",
    "base": "",
    "parts": [
      {
        "prompt": "Who ___ the island guide at the pier?",
        "base": "meet",
        "answer": "met"
      },
      {
        "prompt": "Who did the island guide ___ at the pier?",
        "base": "meet",
        "answer": "meet"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-question-127-gap",
    "family": "structure-question-127",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "gap",
    "level": 2,
    "prompt": "Do you remember where the return desk ___?",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Это косвенный вопрос после Do you remember; внутри: прямой порядок the return desk is.",
    "cue": "Ты помнишь, где находится стойка возврата?",
    "base": "be",
    "choices": [
      "is",
      "does"
    ]
  },
  {
    "id": "structure-question-128-repair",
    "family": "structure-question-128",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "Could you tell me when does the museum open?",
    "answers": [
      "Could you tell me when the museum opens?"
    ],
    "model": "Could you tell me when the museum opens?",
    "explanation": "После Could you tell me начинается косвенный вопрос с прямым порядком слов.",
    "cue": "Could you tell me when does the museum open?",
    "base": ""
  },
  {
    "id": "structure-question-129-transform",
    "family": "structure-question-129",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "Where did the driver leave the keys?",
    "answers": [
      "Do you know where the driver left the keys?"
    ],
    "model": "Do you know where the driver left the keys?",
    "explanation": "В косвенной части where the driver left используется прямой порядок, без did.",
    "cue": "Where did the driver leave the keys?",
    "base": "",
    "task": "Начни с Do you know; встроенный вопрос оставь в косвенном порядке."
  },
  {
    "id": "structure-question-130-translate",
    "family": "structure-question-130",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "translate",
    "level": 3,
    "prompt": "Не могли бы вы узнать, когда отправляется следующий поезд?",
    "answers": [
      "Could you find out when the next train leaves?"
    ],
    "model": "Could you find out when the next train leaves?",
    "explanation": "После when внутри косвенного вопроса сохраняется порядок the train leaves.",
    "cue": "Не могли бы вы узнать, когда отправляется следующий поезд?",
    "base": "could you / find out / when / the next train / leave",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-question-131-contrast",
    "family": "structure-question-131",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни вопрос о том, кто закрыл ворота, и вопрос о том, кого проверил инспектор.",
    "answers": [
      "closed | question"
    ],
    "model": "Who closed the south gate during the inspection? Which guard did the inspector question outside the south gate?",
    "explanation": "В первой части who: подлежащее, поэтому closed без did. Во второй guard: подлежащее, после did нужен question.",
    "cue": "Сравни вопрос о том, кто закрыл ворота, и вопрос о том, кого проверил инспектор.",
    "base": "",
    "parts": [
      {
        "prompt": "Who ___ the south gate during the inspection?",
        "base": "close",
        "answer": "closed"
      },
      {
        "prompt": "Which guard did the inspector ___ outside the south gate?",
        "base": "question",
        "answer": "question"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-question-132-gap",
    "family": "structure-question-132",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "gap",
    "level": 2,
    "prompt": "Do you know whether the side entrance ___ open on Sundays?",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Whether вводит косвенный вопрос, внутри которого порядок слов прямой: entrance is.",
    "cue": "Ты знаешь, открыт ли боковой вход по воскресеньям?",
    "base": "be",
    "choices": [
      "is",
      "does"
    ]
  },
  {
    "id": "structure-question-133-repair",
    "family": "structure-question-133",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "I wonder what does this signal mean.",
    "answers": [
      "I wonder what this signal means."
    ],
    "model": "I wonder what this signal means.",
    "explanation": "После I wonder используется прямой порядок слов: this signal means, без does.",
    "cue": "I wonder what does this signal mean.",
    "base": ""
  },
  {
    "id": "structure-question-134-transform",
    "family": "structure-question-134",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "Where did the visitors leave their bags?",
    "answers": [
      "Could you tell me where the visitors left their bags?"
    ],
    "model": "Could you tell me where the visitors left their bags?",
    "explanation": "Встроенная часть использует порядок subject + verb: the visitors left.",
    "cue": "Where did the visitors leave their bags?",
    "base": "",
    "task": "Встрой вопрос после Could you tell me."
  },
  {
    "id": "structure-question-135-translate",
    "family": "structure-question-135",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "translate",
    "level": 3,
    "prompt": "Я не уверен, получил ли офис мой запрос.",
    "answers": [
      "I am not sure whether the office received my request."
    ],
    "model": "I am not sure whether the office received my request.",
    "explanation": "Whether вводит косвенный вопрос; внутри сохраняется прямой порядок the office received.",
    "cue": "Я не уверен, получил ли офис мой запрос.",
    "base": "I / not sure / whether / the office / receive / my request",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-question-136-contrast",
    "family": "structure-question-136",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни прямой вопрос о расписании и тот же вопрос внутри другой фразы.",
    "answers": [
      "does | departs"
    ],
    "model": "What time does the last ferry depart? Do you know what time the last ferry departs?",
    "explanation": "В прямом вопросе используется does перед подлежащим; внутри косвенного: the ferry departs.",
    "cue": "Сравни прямой вопрос о расписании и тот же вопрос внутри другой фразы.",
    "base": "",
    "parts": [
      {
        "prompt": "What time ___ the last ferry depart?",
        "base": "do",
        "answer": "does"
      },
      {
        "prompt": "Do you know what time the last ferry ___?",
        "base": "depart",
        "answer": "departs"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-question-137-gap",
    "family": "structure-question-137",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "gap",
    "level": 2,
    "prompt": "Do you remember who ___ the spare key?",
    "answers": [
      "found"
    ],
    "model": "found",
    "explanation": "Who: подлежащее придаточной части, поэтому используется found без did.",
    "cue": "Ты помнишь, кто нашёл запасной ключ?",
    "base": "find",
    "choices": [
      "found",
      "did find"
    ]
  },
  {
    "id": "structure-question-138-repair",
    "family": "structure-question-138",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "repair",
    "level": 2,
    "prompt": "Who did replace the damaged sign before the event?",
    "answers": [
      "Who replaced the damaged sign before the event?"
    ],
    "model": "Who replaced the damaged sign before the event?",
    "explanation": "Who спрашивает о подлежащем; вспомогательный did не нужен.",
    "cue": "Who did replace the damaged sign before the event?",
    "base": ""
  },
  {
    "id": "structure-question-139-transform",
    "family": "structure-question-139",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "transform",
    "level": 3,
    "prompt": "The supervisor called the electrician at noon.",
    "answers": [
      "Who did the supervisor call at noon?"
    ],
    "model": "Who did the supervisor call at noon?",
    "explanation": "Who здесь дополнение; в Past Simple используется did + начальная форма call.",
    "cue": "The supervisor called the electrician at noon.",
    "base": "",
    "task": "Задай вопрос о человеке, которому позвонил supervisor."
  },
  {
    "id": "structure-question-140-translate",
    "family": "structure-question-140",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "translate",
    "level": 3,
    "prompt": "Спроси, будет ли офис открыт завтра.",
    "answers": [
      "Ask whether the office will be open tomorrow."
    ],
    "model": "Ask whether the office will be open tomorrow.",
    "explanation": "Whether вводит косвенный вопрос с прямым порядком: the office will be.",
    "cue": "Спроси, будет ли офис открыт завтра.",
    "base": "ask / whether / the office / be open / tomorrow",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-question-141-contrast",
    "family": "structure-question-141",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "contrast",
    "level": 3,
    "prompt": "Преобразуй прямой вопрос во встроенный, не меняя время.",
    "answers": [
      "did the ferry dock | the ferry docked"
    ],
    "model": "Where did the ferry dock yesterday? Do you know where the ferry docked yesterday?",
    "explanation": "В прямом вопросе нужна инверсия did the ferry dock; во встроенном: the ferry docked.",
    "cue": "Преобразуй прямой вопрос во встроенный, не меняя время.",
    "base": "",
    "parts": [
      {
        "prompt": "Where ___ yesterday?",
        "base": "the ferry / dock",
        "answer": "did the ferry dock"
      },
      {
        "prompt": "Do you know where ___ yesterday?",
        "base": "the ferry / dock",
        "answer": "the ferry docked"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-question-142-gap",
    "family": "structure-question-142",
    "topic": "structure",
    "skill": "structure-question",
    "mode": "gap",
    "level": 2,
    "prompt": "Please tell me what the new label ___.",
    "answers": [
      "says"
    ],
    "model": "says",
    "explanation": "После tell me идёт косвенная часть с прямым порядком: the label says.",
    "cue": "Скажи, пожалуйста, что написано на новой этикетке.",
    "base": "say",
    "choices": [
      "says",
      "does say"
    ]
  }
];
