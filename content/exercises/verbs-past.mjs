// Authored material for verbs-past. Keep families in ascending numeric order.
export const skillId = "verbs-past";
export const legacy = [
  {
    "id": "verbs-003",
    "family": "verbs-3",
    "topic": "verbs",
    "skill": "verbs-past",
    "prompt": "When did they ___ the office?",
    "answer": "leave",
    "distractor": "left",
    "explanation": "Спрашиваем, когда они уехали: завершённое событие в прошлом. Did уже обозначает прошлое, поэтому leave, не left.",
    "cue": "Когда они вышли из офиса?",
    "base": "leave",
    "alternatives": []
  },
  {
    "id": "verbs-007",
    "family": "verbs-7",
    "topic": "verbs",
    "skill": "verbs-past",
    "prompt": "They ___ the meeting last Monday.",
    "answer": "cancelled",
    "distractor": "cancel",
    "explanation": "Встречу отменили в конкретный законченный день: last Monday. Поэтому Past Simple, cancelled. Present Perfect здесь не подходит: дата события уже задана.",
    "cue": "Они отменили встречу в прошлый понедельник.",
    "base": "cancel",
    "alternatives": [
      "canceled"
    ]
  },
  {
    "id": "verbs-010",
    "family": "verbs-10",
    "topic": "verbs",
    "skill": "verbs-past",
    "prompt": "We ___ finish it yesterday.",
    "answer": "didn't",
    "distractor": "don't",
    "explanation": "Вчера завершить не удалось: отрицание события в законченном прошлом. Did not + finish, без прошедшего окончания у finish.",
    "cue": "Мы не закончили это вчера.",
    "base": "do",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "verbs-past-101-transform",
    "family": "verbs-past-101",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The client accepted the revised estimate yesterday.",
    "answers": [
      "Did the client accept the revised estimate yesterday?"
    ],
    "model": "Did the client accept the revised estimate yesterday?",
    "explanation": "Did + accept, не accepted.",
    "cue": "The client accepted the revised estimate yesterday.",
    "base": "",
    "task": "Сделай вопрос."
  },
  {
    "id": "verbs-past-102-transform",
    "family": "verbs-past-102",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "They found the missing receipt last week.",
    "answers": [
      "They didn't find the missing receipt last week."
    ],
    "model": "They didn't find the missing receipt last week.",
    "explanation": "После did not: find, не found.",
    "cue": "They found the missing receipt last week.",
    "base": "",
    "task": "Сделай отрицание."
  },
  {
    "id": "verbs-past-103-repair",
    "family": "verbs-past-103",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "Where did you putted the signed contract?",
    "answers": [
      "Where did you put the signed contract?"
    ],
    "model": "Where did you put the signed contract?",
    "explanation": "Did требует base form; put одинаков во всех трёх формах.",
    "cue": "Where did you putted the signed contract?",
    "base": ""
  },
  {
    "id": "verbs-past-104-translate",
    "family": "verbs-past-104",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Почему она не отправила приглашения вчера?",
    "answers": [
      "Why didn't she send the invitations yesterday?",
      "Why did she not send the invitations yesterday?"
    ],
    "model": "Why didn't she send the invitations yesterday?",
    "explanation": "Вопрос о прошлом: why + did not + she + send.",
    "cue": "Почему она не отправила приглашения вчера?",
    "base": "why / she / send / the invitations / yesterday",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-105-contrast",
    "family": "verbs-past-105",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Одно событие, два типа предложения.",
    "answers": [
      "deleted | delete"
    ],
    "model": "He deleted the old files yesterday. Did he delete the old files yesterday?",
    "explanation": "Утверждение: deleted. После did: delete.",
    "cue": "Одно событие, два типа предложения.",
    "base": "",
    "parts": [
      {
        "prompt": "He ___ the old files yesterday.",
        "base": "delete",
        "answer": "deleted"
      },
      {
        "prompt": "Did he ___ the old files yesterday?",
        "base": "delete",
        "answer": "delete"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-106-transform",
    "family": "verbs-past-106",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The technicians were available yesterday.",
    "answers": [
      "Were the technicians available yesterday?"
    ],
    "model": "Were the technicians available yesterday?",
    "explanation": "С be вспомогательный did не нужен: were перед подлежащим.",
    "cue": "The technicians were available yesterday.",
    "base": "",
    "task": "Сделай вопрос."
  },
  {
    "id": "verbs-past-107-transform",
    "family": "verbs-past-107",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The courier brought the replacement key yesterday.",
    "answers": [
      "The courier didn't bring the replacement key yesterday."
    ],
    "model": "The courier didn't bring the replacement key yesterday.",
    "explanation": "Did not показывает прошедшее время; после него bring, не brought.",
    "cue": "The courier brought the replacement key yesterday.",
    "base": "",
    "task": "Сделай отрицание, сохрани время и остальные слова."
  },
  {
    "id": "verbs-past-108-repair",
    "family": "verbs-past-108",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "Did the supplier sent the updated invoice on Monday?",
    "answers": [
      "Did the supplier send the updated invoice on Monday?"
    ],
    "model": "Did the supplier send the updated invoice on Monday?",
    "explanation": "После did основной глагол стоит в начальной форме: send.",
    "cue": "Did the supplier sent the updated invoice on Monday?",
    "base": ""
  },
  {
    "id": "verbs-past-109-translate",
    "family": "verbs-past-109",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Они выбрали более короткий маршрут и прибыли до темноты.",
    "answers": [
      "They chose a shorter route and arrived before dark."
    ],
    "model": "They chose a shorter route and arrived before dark.",
    "explanation": "Оба события завершились в прошлом: нужны формы chose и arrived.",
    "cue": "Они выбрали более короткий маршрут и прибыли до темноты.",
    "base": "they / choose / a shorter route / and / arrive / before dark",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-110-contrast",
    "family": "verbs-past-110",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни утверждение о прошлом и вопрос с did.",
    "answers": [
      "made | make"
    ],
    "model": "Maya made a backup copy last night. Did Maya make a backup copy last night?",
    "explanation": "В утверждении нужен Past Simple made; did уже задаёт прошедшее время, поэтому после него make.",
    "cue": "Сравни утверждение о прошлом и вопрос с did.",
    "base": "",
    "parts": [
      {
        "prompt": "Maya ___ a backup copy last night.",
        "base": "make",
        "answer": "made"
      },
      {
        "prompt": "Did Maya ___ a backup copy last night?",
        "base": "make",
        "answer": "make"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-111-gap",
    "family": "verbs-past-111",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "gap",
    "level": 2,
    "prompt": "The team ___ the archived files before the audit began.",
    "answers": [
      "saved"
    ],
    "model": "saved",
    "explanation": "Завершённое действие в прошлом требует формы Past Simple saved.",
    "cue": "Команда сохранила архивные файлы до начала проверки.",
    "base": "save",
    "choices": [
      "saved",
      "save"
    ]
  },
  {
    "id": "verbs-past-112-transform",
    "family": "verbs-past-112",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The engineer did not find the source of the fault.",
    "answers": [
      "The engineer found the source of the fault."
    ],
    "model": "The engineer found the source of the fault.",
    "explanation": "В утвердительном Past Simple did not исчезает, а find принимает форму found.",
    "cue": "The engineer did not find the source of the fault.",
    "base": "",
    "task": "Переделай в утвердительное предложение, сохрани остальные слова."
  },
  {
    "id": "verbs-past-113-repair",
    "family": "verbs-past-113",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "The auditors did not found any missing pages.",
    "answers": [
      "The auditors did not find any missing pages."
    ],
    "model": "The auditors did not find any missing pages.",
    "explanation": "После did not используется начальная форма find, а не found.",
    "cue": "The auditors did not found any missing pages.",
    "base": ""
  },
  {
    "id": "verbs-past-114-transform",
    "family": "verbs-past-114",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "They chose a different entrance.",
    "answers": [
      "Did they choose a different entrance?"
    ],
    "model": "Did they choose a different entrance?",
    "explanation": "В вопросе прошедшее время выражает did, поэтому после него choose.",
    "cue": "They chose a different entrance.",
    "base": "",
    "task": "Сделай общий вопрос."
  },
  {
    "id": "verbs-past-115-translate",
    "family": "verbs-past-115",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Сервис отключился, но команда быстро перезапустила его.",
    "answers": [
      "The service shut down, but the team restarted it quickly."
    ],
    "model": "The service shut down, but the team restarted it quickly.",
    "explanation": "Оба события завершились в прошлом: shut down и restarted.",
    "cue": "Сервис отключился, но команда быстро перезапустила его.",
    "base": "the service / shut down / but / the team / restart / it / quickly",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-116-contrast",
    "family": "verbs-past-116",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни утверждение о вчерашнем решении и вопрос с did.",
    "answers": [
      "chose | choose"
    ],
    "model": "Leila chose the revised plan yesterday. Did Leila choose the revised plan yesterday?",
    "explanation": "В утверждении нужна форма chose; в вопросе did уже выражает прошедшее время.",
    "cue": "Сравни утверждение о вчерашнем решении и вопрос с did.",
    "base": "",
    "parts": [
      {
        "prompt": "Leila ___ the revised plan yesterday.",
        "base": "choose",
        "answer": "chose"
      },
      {
        "prompt": "Did Leila ___ the revised plan yesterday?",
        "base": "choose",
        "answer": "choose"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-117-gap",
    "family": "verbs-past-117",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "gap",
    "level": 2,
    "prompt": "At noon yesterday, the courier ___ the documents at reception.",
    "answers": [
      "left"
    ],
    "model": "left",
    "explanation": "Точный завершённый момент в прошлом требует Past Simple: leave → left.",
    "cue": "Вчера в полдень курьер оставил документы у стойки.",
    "base": "leave",
    "choices": [
      "left",
      "leave"
    ]
  },
  {
    "id": "verbs-past-118-repair",
    "family": "verbs-past-118",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "Who did prepare the room before the workshop?",
    "answers": [
      "Who prepared the room before the workshop?"
    ],
    "model": "Who prepared the room before the workshop?",
    "explanation": "Who: подлежащее вопроса; в таком вопросе did не ставится, глагол остаётся в Past Simple.",
    "cue": "Who did prepare the room before the workshop?",
    "base": ""
  },
  {
    "id": "verbs-past-119-transform",
    "family": "verbs-past-119",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The supplier did not replace the damaged cable.",
    "answers": [
      "The supplier replaced the damaged cable."
    ],
    "model": "The supplier replaced the damaged cable.",
    "explanation": "В утверждении did not убирается, а replace принимает форму replaced.",
    "cue": "The supplier did not replace the damaged cable.",
    "base": "",
    "task": "Переделай в утвердительное предложение."
  },
  {
    "id": "verbs-past-120-translate",
    "family": "verbs-past-120",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Где вы нашли инструкцию вчера?",
    "answers": [
      "Where did you find the instructions yesterday?"
    ],
    "model": "Where did you find the instructions yesterday?",
    "explanation": "Yesterday задаёт прошлое; вопрос строится как did + подлежащее + find.",
    "cue": "Где вы нашли инструкцию вчера?",
    "base": "where / you / find / the instructions / yesterday",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-121-contrast",
    "family": "verbs-past-121",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни утвердительную и отрицательную формы одного прошедшего события.",
    "answers": [
      "damaged | damage"
    ],
    "model": "The storm damaged several power lines overnight. The storm did not damage the control room overnight.",
    "explanation": "В утверждении используется damaged; после did not: начальная форма damage.",
    "cue": "Сравни утвердительную и отрицательную формы одного прошедшего события.",
    "base": "",
    "parts": [
      {
        "prompt": "The storm ___ several power lines overnight.",
        "base": "damage",
        "answer": "damaged"
      },
      {
        "prompt": "The storm did not ___ the control room overnight.",
        "base": "damage",
        "answer": "damage"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-122-contrast",
    "family": "verbs-past-122",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни утверждение о прошлом месяце и вопрос с did.",
    "answers": [
      "opened | open"
    ],
    "model": "The gallery opened its west entrance last month. When did the gallery open its west entrance?",
    "explanation": "В утверждении используется opened; после did: начальная форма open.",
    "cue": "Сравни утверждение о прошлом месяце и вопрос с did.",
    "base": "",
    "parts": [
      {
        "prompt": "The gallery ___ its west entrance last month.",
        "base": "open",
        "answer": "opened"
      },
      {
        "prompt": "When did the gallery ___ its west entrance?",
        "base": "open",
        "answer": "open"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-123-repair",
    "family": "verbs-past-123",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "We didn't chose the shorter connection.",
    "answers": [
      "We didn't choose the shorter connection."
    ],
    "model": "We didn't choose the shorter connection.",
    "explanation": "После did not используется начальная форма choose, а не chose.",
    "cue": "We didn't chose the shorter connection.",
    "base": ""
  },
  {
    "id": "verbs-past-124-transform",
    "family": "verbs-past-124",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "Nora took the coastal train yesterday.",
    "answers": [
      "Did Nora take the coastal train yesterday?"
    ],
    "model": "Did Nora take the coastal train yesterday?",
    "explanation": "Did уже выражает Past Simple; после него нужна начальная форма take.",
    "cue": "Nora took the coastal train yesterday.",
    "base": "",
    "task": "Сделай общий вопрос."
  },
  {
    "id": "verbs-past-125-translate",
    "family": "verbs-past-125",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Совет не одобрил пересмотренный бюджет на прошлой неделе.",
    "answers": [
      "The board did not approve the revised budget last week."
    ],
    "model": "The board did not approve the revised budget last week.",
    "explanation": "Last week задаёт завершённое прошлое; отрицание строится как did not + approve.",
    "cue": "Совет не одобрил пересмотренный бюджет на прошлой неделе.",
    "base": "the board / not approve / the revised budget / last week",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-126-contrast",
    "family": "verbs-past-126",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни утверждение и вопрос с did.",
    "answers": [
      "taught | teach"
    ],
    "model": "The instructor taught the safety rules clearly. Did the instructor teach the safety rules clearly?",
    "explanation": "В утверждении Past Simple: taught; после did: начальная форма teach.",
    "cue": "Сравни утверждение и вопрос с did.",
    "base": "",
    "parts": [
      {
        "prompt": "The instructor ___ the safety rules clearly.",
        "base": "teach",
        "answer": "taught"
      },
      {
        "prompt": "Did the instructor ___ the safety rules clearly?",
        "base": "teach",
        "answer": "teach"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-127-gap",
    "family": "verbs-past-127",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "gap",
    "level": 2,
    "prompt": "At 9:15 last night, the guard ___ the side gate.",
    "answers": [
      "locked"
    ],
    "model": "locked",
    "explanation": "At 9:15 last night указывает на завершённое прошлое: locked.",
    "cue": "Вчера в 9:15 охранник запер боковые ворота.",
    "base": "lock",
    "choices": [
      "locked",
      "locks"
    ]
  },
  {
    "id": "verbs-past-128-repair",
    "family": "verbs-past-128",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "Who did bring the printed map to the briefing?",
    "answers": [
      "Who brought the printed map to the briefing?"
    ],
    "model": "Who brought the printed map to the briefing?",
    "explanation": "Who: подлежащее вопроса; вспомогательный did не нужен, используется brought.",
    "cue": "Who did bring the printed map to the briefing?",
    "base": ""
  },
  {
    "id": "verbs-past-129-transform",
    "family": "verbs-past-129",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The editor found a typo in the caption.",
    "answers": [
      "The editor did not find a typo in the caption."
    ],
    "model": "The editor did not find a typo in the caption.",
    "explanation": "В отрицании Past Simple используется did not + find.",
    "cue": "The editor found a typo in the caption.",
    "base": "",
    "task": "Сделай отрицание, сохрани остальные слова."
  },
  {
    "id": "verbs-past-130-translate",
    "family": "verbs-past-130",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Где вы оставили пропуск вчера вечером?",
    "answers": [
      "Where did you leave the pass yesterday evening?"
    ],
    "model": "Where did you leave the pass yesterday evening?",
    "explanation": "Вопрос о завершённом прошлом: did + subject + leave.",
    "cue": "Где вы оставили пропуск вчера вечером?",
    "base": "where / you / leave / the pass / yesterday evening",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-131-contrast",
    "family": "verbs-past-131",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни утверждение и вопрос о завершённых событиях.",
    "answers": [
      "closed | close"
    ],
    "model": "The flood closed the lower path last spring. Did the council close the path again two days ago?",
    "explanation": "В утверждении Past Simple: closed; после did используется начальная форма close.",
    "cue": "Сравни утверждение и вопрос о завершённых событиях.",
    "base": "",
    "parts": [
      {
        "prompt": "The flood ___ the lower path last spring.",
        "base": "close",
        "answer": "closed"
      },
      {
        "prompt": "Did the council ___ the path again two days ago?",
        "base": "close",
        "answer": "close"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-132-gap",
    "family": "verbs-past-132",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "gap",
    "level": 2,
    "prompt": "Nobody ___ the warning bell during the rehearsal.",
    "answers": [
      "heard"
    ],
    "model": "heard",
    "explanation": "Завершённое событие в прошлом; hear → heard.",
    "cue": "Во время репетиции никто не услышал предупредительный звонок.",
    "base": "hear",
    "choices": [
      "heard",
      "hears"
    ]
  },
  {
    "id": "verbs-past-133-repair",
    "family": "verbs-past-133",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "The driver did not noticed the low bridge sign.",
    "answers": [
      "The driver did not notice the low bridge sign."
    ],
    "model": "The driver did not notice the low bridge sign.",
    "explanation": "После did not используется начальная форма notice, а не noticed.",
    "cue": "The driver did not noticed the low bridge sign.",
    "base": ""
  },
  {
    "id": "verbs-past-134-transform",
    "family": "verbs-past-134",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The team found a crack during the inspection.",
    "answers": [
      "The team did not find a crack during the inspection."
    ],
    "model": "The team did not find a crack during the inspection.",
    "explanation": "В отрицании Past Simple используется did not + начальная форма find.",
    "cue": "The team found a crack during the inspection.",
    "base": "",
    "task": "Сделай отрицание в Past Simple."
  },
  {
    "id": "verbs-past-135-translate",
    "family": "verbs-past-135",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Кто принёс ключи к западному входу?",
    "answers": [
      "Who brought the keys to the west entrance?"
    ],
    "model": "Who brought the keys to the west entrance?",
    "explanation": "Who спрашивает о подлежащем; did не нужен, используется Past Simple brought.",
    "cue": "Кто принёс ключи к западному входу?",
    "base": "who / bring / the keys / to the west entrance",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-136-contrast",
    "family": "verbs-past-136",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни утверждение и вопрос о доставке посылки.",
    "answers": [
      "delivered | deliver"
    ],
    "model": "The courier delivered the parcel at noon. Did the courier deliver the parcel at noon?",
    "explanation": "В утверждении ставится Past Simple delivered; после did: начальная форма deliver.",
    "cue": "Сравни утверждение и вопрос о доставке посылки.",
    "base": "",
    "parts": [
      {
        "prompt": "The courier ___ the parcel at noon.",
        "base": "deliver",
        "answer": "delivered"
      },
      {
        "prompt": "Did the courier ___ the parcel at noon?",
        "base": "deliver",
        "answer": "deliver"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-137-gap",
    "family": "verbs-past-137",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "gap",
    "level": 2,
    "prompt": "The mechanic ___ a note beside the repaired pump yesterday.",
    "answers": [
      "left"
    ],
    "model": "left",
    "explanation": "Yesterday задаёт законченное прошлое; leave в Past Simple: left.",
    "cue": "Вчера механик оставил записку возле отремонтированного насоса.",
    "base": "leave",
    "choices": [
      "left",
      "leaves"
    ]
  },
  {
    "id": "verbs-past-138-repair",
    "family": "verbs-past-138",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "Why did the server restarted twice during the update?",
    "answers": [
      "Why did the server restart twice during the update?"
    ],
    "model": "Why did the server restart twice during the update?",
    "explanation": "После did в вопросе используется начальная форма restart.",
    "cue": "Why did the server restarted twice during the update?",
    "base": ""
  },
  {
    "id": "verbs-past-139-transform",
    "family": "verbs-past-139",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The windows were open after the storm.",
    "answers": [
      "Were the windows open after the storm?"
    ],
    "model": "Were the windows open after the storm?",
    "explanation": "С be в Past Simple вопрос образуется перестановкой were; did не нужен.",
    "cue": "The windows were open after the storm.",
    "base": "",
    "task": "Сделай общий вопрос, сохранив Past Simple."
  },
  {
    "id": "verbs-past-140-translate",
    "family": "verbs-past-140",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Почему руководитель отменил проверку утром?",
    "answers": [
      "Why did the supervisor cancel the inspection in the morning?"
    ],
    "model": "Why did the supervisor cancel the inspection in the morning?",
    "explanation": "Завершённое прошлое: did + subject + начальная форма cancel.",
    "cue": "Почему руководитель отменил проверку утром?",
    "base": "why / the supervisor / cancel / the inspection / in the morning",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-141-contrast",
    "family": "verbs-past-141",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи вопрос о том, кто сам выполнил действие, и вопрос об объекте.",
    "answers": [
      "silenced | call"
    ],
    "model": "Who silenced the alarm before sunrise? Who did the night guard call after hearing it?",
    "explanation": "В первом who: подлежащее, поэтому silenced без did. Во втором who: дополнение: did + call.",
    "cue": "Различи вопрос о том, кто сам выполнил действие, и вопрос об объекте.",
    "base": "",
    "parts": [
      {
        "prompt": "Who ___ the alarm before sunrise?",
        "base": "silence",
        "answer": "silenced"
      },
      {
        "prompt": "Who did the night guard ___ after hearing it?",
        "base": "call",
        "answer": "call"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-142-gap",
    "family": "verbs-past-142",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "gap",
    "level": 2,
    "prompt": "One of the visitors ___ the blue notebook on the bench yesterday.",
    "answers": [
      "left"
    ],
    "model": "left",
    "explanation": "Указание yesterday требует Past Simple: leave → left.",
    "cue": "Вчера один из посетителей оставил синюю записную книжку на скамье.",
    "base": "leave",
    "choices": [
      "left",
      "leaves"
    ]
  },
  {
    "id": "verbs-past-143-repair",
    "family": "verbs-past-143",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "repair",
    "level": 2,
    "prompt": "The assistant didn't wrote the new access code on the envelope.",
    "answers": [
      "The assistant didn't write the new access code on the envelope."
    ],
    "model": "The assistant didn't write the new access code on the envelope.",
    "explanation": "После did not нужен инфинитив write, а не форма wrote.",
    "cue": "The assistant didn't wrote the new access code on the envelope.",
    "base": ""
  },
  {
    "id": "verbs-past-144-transform",
    "family": "verbs-past-144",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "transform",
    "level": 3,
    "prompt": "The librarian helped the guest.",
    "answers": [
      "Who did the librarian help?"
    ],
    "model": "Who did the librarian help?",
    "explanation": "Who здесь дополнение; в Past Simple используется did + help.",
    "cue": "The librarian helped the guest.",
    "base": "",
    "task": "Задай вопрос о человеке, которому библиотекарь помог."
  },
  {
    "id": "verbs-past-145-translate",
    "family": "verbs-past-145",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "translate",
    "level": 3,
    "prompt": "Когда техник заменил фильтр?",
    "answers": [
      "When did the technician replace the filter?"
    ],
    "model": "When did the technician replace the filter?",
    "explanation": "Вопрос о завершённом прошлом: when + did + subject + начальная форма replace.",
    "cue": "Когда техник заменил фильтр?",
    "base": "when / the technician / replace / the filter",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-past-146-contrast",
    "family": "verbs-past-146",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "contrast",
    "level": 3,
    "prompt": "Вставь форму глагола в утверждение и в вопрос.",
    "answers": [
      "rejected | reject"
    ],
    "model": "The board rejected the request yesterday. Did the board reject the request yesterday?",
    "explanation": "В утверждении используется rejected; после did: reject.",
    "cue": "Вставь форму глагола в утверждение и в вопрос.",
    "base": "",
    "parts": [
      {
        "prompt": "The board ___ the request yesterday.",
        "base": "reject",
        "answer": "rejected"
      },
      {
        "prompt": "Did the board ___ the request yesterday?",
        "base": "reject",
        "answer": "reject"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-past-147-gap",
    "family": "verbs-past-147",
    "topic": "verbs",
    "skill": "verbs-past",
    "mode": "gap",
    "level": 2,
    "prompt": "At the end of the shift, the guard ___ the side gate and left.",
    "answers": [
      "locked"
    ],
    "model": "locked",
    "explanation": "Оба действия завершились в прошлом; lock получает окончание -ed.",
    "cue": "В конце смены охранник запер боковые ворота и ушёл.",
    "base": "lock",
    "choices": [
      "locked",
      "locks"
    ]
  }
];
