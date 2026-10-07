// Authored material for structure-links. Keep families in ascending numeric order.
export const skillId = "structure-links";
export const legacy = [
  {
    "id": "structure-007",
    "family": "structure-7",
    "topic": "structure",
    "skill": "structure-links",
    "prompt": "I stayed home ___ I was tired.",
    "answer": "because",
    "distractor": "so",
    "explanation": "Because вводит причину.",
    "cue": "Я остался дома, потому что устал.",
    "base": "связка причины",
    "alternatives": []
  },
  {
    "id": "structure-008",
    "family": "structure-8",
    "topic": "structure",
    "skill": "structure-links",
    "prompt": "I was tired, ___ I stayed home.",
    "answer": "so",
    "distractor": "because",
    "explanation": "So вводит следствие.",
    "cue": "Я устал, поэтому остался дома.",
    "base": "связка следствия",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "structure-links-101-translate",
    "family": "structure-links-101",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Я остался дома, потому что устал.",
    "answers": [
      "I stayed home because I was tired."
    ],
    "model": "I stayed home because I was tired.",
    "explanation": "Because связывает результат с причиной; обе части должны иметь глагол.",
    "cue": "Я остался дома, потому что устал.",
    "base": "I / stay home / because / tired",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-102-transform",
    "family": "structure-links-102",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "I missed the bus because I left home late.",
    "answers": [
      "I left home late, so I missed the bus."
    ],
    "model": "I left home late, so I missed the bus.",
    "explanation": "После so идёт следствие.",
    "cue": "I missed the bus because I left home late.",
    "base": "",
    "task": "Передай причину первой, используя so."
  },
  {
    "id": "structure-links-103-repair",
    "family": "structure-links-103",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "repair",
    "level": 2,
    "prompt": "Because the northern route was closed, so the delivery arrived late.",
    "answers": [
      "Because the northern route was closed, the delivery arrived late.",
      "The northern route was closed, so the delivery arrived late."
    ],
    "model": "Because the northern route was closed, the delivery arrived late.",
    "explanation": "Because уже вводит причину; so здесь лишнее. Сохраняем связь причины и результата одной конструкцией.",
    "cue": "Because the northern route was closed, so the delivery arrived late.",
    "base": ""
  },
  {
    "id": "structure-links-104-transform",
    "family": "structure-links-104",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "We moved the meeting online because the main room was unavailable.",
    "answers": [
      "The main room was unavailable, so we moved the meeting online."
    ],
    "model": "The main room was unavailable, so we moved the meeting online.",
    "explanation": "Причина стоит перед so, после которого следует результат.",
    "cue": "We moved the meeting online because the main room was unavailable.",
    "base": "",
    "task": "Поставь причину первой и соедини части через so."
  },
  {
    "id": "structure-links-105-translate",
    "family": "structure-links-105",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Мы перенесли проверку, потому что один из файлов отсутствовал.",
    "answers": [
      "We postponed the review because one file was missing."
    ],
    "model": "We postponed the review because one file was missing.",
    "explanation": "Because вводит причину; обе части содержат сказуемое в прошлом.",
    "cue": "Мы перенесли проверку, потому что один из файлов отсутствовал.",
    "base": "we / postpone / the review / because / one file / be missing",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-106-contrast",
    "family": "structure-links-106",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери связку по роли части предложения.",
    "answers": [
      "Because | so"
    ],
    "model": "Because the printer was offline, we sent the form by email. The printer was offline, so we sent the form by email.",
    "explanation": "Because вводит причину; so вводит результат. Заглавная буква в начале и пунктуация нормализуются.",
    "cue": "Выбери связку по роли части предложения.",
    "base": "",
    "parts": [
      {
        "prompt": "___ the printer was offline, we sent the form by email.",
        "base": "because",
        "answer": "Because"
      },
      {
        "prompt": "The printer was offline, ___ we sent the form by email.",
        "base": "so",
        "answer": "so"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-links-107-gap",
    "family": "structure-links-107",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "gap",
    "level": 2,
    "prompt": "The road was blocked, ___ the bus took a different route.",
    "answers": [
      "so"
    ],
    "model": "so",
    "explanation": "So вводит результат того, что дорогу перекрыли.",
    "cue": "Дорогу перекрыли, поэтому автобус поехал другим маршрутом.",
    "base": "связка результата",
    "choices": [
      "so",
      "although"
    ]
  },
  {
    "id": "structure-links-108-choice",
    "family": "structure-links-108",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери краткий ответ в порядке тезис → причина → пример → вывод, по одной мысли в каждом предложении. Тема: приложение помогает новичкам освоить процедуру.",
    "answers": [
      "The app is useful for beginners. It presents one action at a time. For example, each stage ends with a short check. This helps new users complete the setup with fewer mistakes."
    ],
    "model": "The app is useful for beginners. It presents one action at a time. For example, each stage ends with a short check. This helps new users complete the setup with fewer mistakes.",
    "explanation": "Сначала назван тезис, затем причина, конкретный пример и вывод. В коротких предложениях проще удержать одну основную мысль.",
    "cue": "Выбери краткий ответ в порядке тезис → причина → пример → вывод, по одной мысли в каждом предложении. Тема: приложение помогает новичкам освоить процедуру.",
    "base": "",
    "task": "Выбери связный ответ.",
    "choices": [
      "The app is useful for beginners. It presents one action at a time. For example, each stage ends with a short check. This helps new users complete the setup with fewer mistakes.",
      "For example, each stage ends with a short check. The app is useful for beginners. It presents one action at a time. This helps new users complete the setup with fewer mistakes.",
      "The app is useful for beginners. The final section has a blue background. Each action appears step by step. This helps new users complete the setup with fewer mistakes."
    ]
  },
  {
    "id": "structure-links-109-repair",
    "family": "structure-links-109",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "repair",
    "level": 2,
    "prompt": "Because the road was icy, so the bus drove slowly.",
    "answers": [
      "Because the road was icy, the bus drove slowly."
    ],
    "model": "Because the road was icy, the bus drove slowly.",
    "explanation": "В этой конструкции достаточно because; перед следствием so не добавляется.",
    "cue": "Because the road was icy, so the bus drove slowly.",
    "base": ""
  },
  {
    "id": "structure-links-110-transform",
    "family": "structure-links-110",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "The clinic was short-staffed, so appointments took longer.",
    "answers": [
      "Appointments took longer because the clinic was short-staffed."
    ],
    "model": "Appointments took longer because the clinic was short-staffed.",
    "explanation": "Because вводит причину; предложение сохраняет исходную причинно-следственную связь.",
    "cue": "The clinic was short-staffed, so appointments took longer.",
    "base": "",
    "task": "Поставь следствие первым и используй because."
  },
  {
    "id": "structure-links-111-translate",
    "family": "structure-links-111",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Автобус опоздал, поэтому мы пропустили начало экскурсии.",
    "answers": [
      "The bus arrived late, so we missed the start of the tour."
    ],
    "model": "The bus arrived late, so we missed the start of the tour.",
    "explanation": "So связывает причину с результатом; оба завершённых действия стоят в Past Simple.",
    "cue": "Автобус опоздал, поэтому мы пропустили начало экскурсии.",
    "base": "the bus / arrive late / so / we / miss / the start of the tour",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-112-contrast",
    "family": "structure-links-112",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "contrast",
    "level": 3,
    "prompt": "Впиши союз, который связывает причину и результат.",
    "answers": [
      "so | because"
    ],
    "model": "The museum was closed, so we visited the nearby gallery instead. We visited the nearby gallery instead because the museum was closed.",
    "explanation": "В первом предложении после so следует результат; во втором because вводит причину.",
    "cue": "Впиши союз, который связывает причину и результат.",
    "base": "",
    "parts": [
      {
        "prompt": "The museum was closed, ___ we visited the nearby gallery instead.",
        "base": "so",
        "answer": "so"
      },
      {
        "prompt": "We visited the nearby gallery instead ___ the museum was closed.",
        "base": "because",
        "answer": "because"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-links-113-gap",
    "family": "structure-links-113",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "gap",
    "level": 2,
    "prompt": "Maya took a taxi ___ she had missed the last bus.",
    "answers": [
      "because"
    ],
    "model": "because",
    "explanation": "Часть после пропуска объясняет причину поездки на такси, поэтому нужен because.",
    "cue": "Майя взяла такси, потому что пропустила последний автобус.",
    "base": "союз причины или следствия",
    "choices": [
      "because",
      "so"
    ]
  },
  {
    "id": "structure-links-114-repair",
    "family": "structure-links-114",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "repair",
    "level": 2,
    "prompt": "The battery was empty, so the camera did not turn on because.",
    "answers": [
      "The battery was empty, so the camera did not turn on."
    ],
    "model": "The battery was empty, so the camera did not turn on.",
    "explanation": "So уже соединяет причину и результат; лишнее because в конце неуместно.",
    "cue": "The battery was empty, so the camera did not turn on because.",
    "base": ""
  },
  {
    "id": "structure-links-115-transform",
    "family": "structure-links-115",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "We started earlier because the forecast predicted heavy snow.",
    "answers": [
      "The forecast predicted heavy snow, so we started earlier."
    ],
    "model": "The forecast predicted heavy snow, so we started earlier.",
    "explanation": "После so ставится результат; исходная причинно-следственная связь сохраняется.",
    "cue": "We started earlier because the forecast predicted heavy snow.",
    "base": "",
    "task": "Передай следствие через so, поставив причину первой."
  },
  {
    "id": "structure-links-116-translate",
    "family": "structure-links-116",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Из-за ремонта мост закрыт, поэтому машины едут в объезд.",
    "answers": [
      "The bridge is closed because of repairs, so cars are taking a detour.",
      "The bridge is closed because of repairs, so cars take a detour."
    ],
    "model": "The bridge is closed because of repairs, so cars are taking a detour.",
    "explanation": "Because of ставится перед существительной группой repairs; so вводит следствие.",
    "cue": "Из-за ремонта мост закрыт, поэтому машины едут в объезд.",
    "base": "the bridge / be closed / because of / repairs / so / cars / take a detour",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-117-contrast",
    "family": "structure-links-117",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь причину и следствие, используя указанный союз.",
    "answers": [
      "because | so"
    ],
    "model": "The team postponed the match because the field was flooded. The field was flooded, so the team postponed the match.",
    "explanation": "Because вводит причину, so вводит результат; смысловая связь в обоих случаях одинакова.",
    "cue": "Сопоставь причину и следствие, используя указанный союз.",
    "base": "",
    "parts": [
      {
        "prompt": "The team postponed the match ___ the field was flooded.",
        "base": "because",
        "answer": "because"
      },
      {
        "prompt": "The field was flooded, ___ the team postponed the match.",
        "base": "so",
        "answer": "so"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-links-118-choice",
    "family": "structure-links-118",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери предложение, где because вводит причину опоздания.",
    "answers": [
      "Nora arrived late because the subway was delayed."
    ],
    "model": "Nora arrived late because the subway was delayed.",
    "explanation": "Subway was delayed: причина; because вводит именно её.",
    "cue": "Выбери предложение, где because вводит причину опоздания.",
    "base": "",
    "task": "Выбери вариант с правильной причинно-следственной связью.",
    "choices": [
      "Nora arrived late because the subway was delayed.",
      "The subway was delayed, because Nora arrived late.",
      "Nora arrived late so the subway was delayed."
    ]
  },
  {
    "id": "structure-links-119-repair",
    "family": "structure-links-119",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "repair",
    "level": 2,
    "prompt": "Because of the train was cancelled, we waited for the replacement bus.",
    "answers": [
      "Because the train was cancelled, we waited for the replacement bus."
    ],
    "model": "Because the train was cancelled, we waited for the replacement bus.",
    "explanation": "Because of вводит существительную группу; перед целым придаточным с подлежащим и глаголом нужен because.",
    "cue": "Because of the train was cancelled, we waited for the replacement bus.",
    "base": ""
  },
  {
    "id": "structure-links-120-transform",
    "family": "structure-links-120",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "Although we had limited time, we completed the inspection.",
    "answers": [
      "Despite the limited time, we completed the inspection."
    ],
    "model": "Despite the limited time, we completed the inspection.",
    "explanation": "Although + clause; despite + noun phrase.",
    "cue": "Although we had limited time, we completed the inspection.",
    "base": "",
    "task": "Перестрой начало с despite и именной группой the limited time."
  },
  {
    "id": "structure-links-121-translate",
    "family": "structure-links-121",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Несмотря на сильный ветер, паром вышел по расписанию.",
    "answers": [
      "Despite the strong wind, the ferry left on schedule."
    ],
    "model": "Despite the strong wind, the ferry left on schedule.",
    "explanation": "Despite стоит перед существительной группой; событие в прошлом: left.",
    "cue": "Несмотря на сильный ветер, паром вышел по расписанию.",
    "base": "despite / the strong wind / the ferry / leave / on schedule",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-122-contrast",
    "family": "structure-links-122",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери связку перед придаточным или существительной группой.",
    "answers": [
      "because | because of"
    ],
    "model": "We delayed the departure because the road was flooded. We delayed the departure because of flooding on the main road.",
    "explanation": "Перед придаточным с подлежащим и глаголом: because; перед существительной группой: because of.",
    "cue": "Выбери связку перед придаточным или существительной группой.",
    "base": "",
    "parts": [
      {
        "prompt": "We delayed the departure ___ the road was flooded.",
        "base": "because",
        "answer": "because"
      },
      {
        "prompt": "We delayed the departure ___ flooding on the main road.",
        "base": "because of",
        "answer": "because of"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-links-123-gap",
    "family": "structure-links-123",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "gap",
    "level": 2,
    "prompt": "___ the heavy rain, the outdoor concert continued.",
    "answers": [
      "Despite"
    ],
    "model": "Despite",
    "explanation": "После пропуска стоит существительная группа the heavy rain, поэтому нужен despite.",
    "cue": "Несмотря на сильный дождь, концерт на открытом воздухе продолжился.",
    "base": "союз перед существительной группой",
    "choices": [
      "Despite",
      "Although"
    ]
  },
  {
    "id": "structure-links-124-repair",
    "family": "structure-links-124",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "repair",
    "level": 2,
    "prompt": "Despite of the storm, the ferry sailed on schedule.",
    "answers": [
      "Despite the storm, the ferry sailed on schedule."
    ],
    "model": "Despite the storm, the ferry sailed on schedule.",
    "explanation": "После despite не ставится of.",
    "cue": "Despite of the storm, the ferry sailed on schedule.",
    "base": ""
  },
  {
    "id": "structure-links-125-transform",
    "family": "structure-links-125",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "Because the pipes froze, the library closed early.",
    "answers": [
      "Because of the frozen pipes, the library closed early."
    ],
    "model": "Because of the frozen pipes, the library closed early.",
    "explanation": "Because вводит придаточное; because of: существительную группу.",
    "cue": "Because the pipes froze, the library closed early.",
    "base": "",
    "task": "Используй because of + the frozen pipes."
  },
  {
    "id": "structure-links-126-translate",
    "family": "structure-links-126",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Школа закрылась из-за ремонта отопления.",
    "answers": [
      "The school closed because of heating repairs."
    ],
    "model": "The school closed because of heating repairs.",
    "explanation": "Because of ставится перед существительной группой heating repairs.",
    "cue": "Школа закрылась из-за ремонта отопления.",
    "base": "the school / close / because of / heating repairs",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-127-contrast",
    "family": "structure-links-127",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сохрани смысл «несмотря на» с двумя разными грамматическими формами.",
    "answers": [
      "Although | Despite"
    ],
    "model": "Although the trail was steep, the hikers reached the lookout. Despite the steep trail, the hikers reached the lookout.",
    "explanation": "Although + clause; despite + noun phrase.",
    "cue": "Сохрани смысл «несмотря на» с двумя разными грамматическими формами.",
    "base": "",
    "parts": [
      {
        "prompt": "___ the trail was steep, the hikers reached the lookout.",
        "base": "although",
        "answer": "Although"
      },
      {
        "prompt": "___ the steep trail, the hikers reached the lookout.",
        "base": "despite",
        "answer": "Despite"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-links-128-gap",
    "family": "structure-links-128",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "gap",
    "level": 2,
    "prompt": "___ waiting in a long queue, visitors stayed for the entire performance.",
    "answers": [
      "Despite"
    ],
    "model": "Despite",
    "explanation": "Перед герундием waiting употребляется despite; although вводит придаточное с подлежащим и личной формой глагола.",
    "cue": "Несмотря на долгое ожидание в очереди, зрители остались до конца спектакля.",
    "base": "несмотря на + -ing",
    "choices": [
      "Despite",
      "Because"
    ]
  },
  {
    "id": "structure-links-129-repair",
    "family": "structure-links-129",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "repair",
    "level": 2,
    "prompt": "Because of the lift was out of service, visitors used the west stairs.",
    "answers": [
      "Because the lift was out of service, visitors used the west stairs."
    ],
    "model": "Because the lift was out of service, visitors used the west stairs.",
    "explanation": "Because of требует существительную группу; перед придаточным с подлежащим и глаголом нужен because.",
    "cue": "Because of the lift was out of service, visitors used the west stairs.",
    "base": ""
  },
  {
    "id": "structure-links-130-transform",
    "family": "structure-links-130",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "Although she was short on time, the analyst checked every entry.",
    "answers": [
      "Despite being short on time, the analyst checked every entry."
    ],
    "model": "Despite being short on time, the analyst checked every entry.",
    "explanation": "Despite может стоять перед -ing; although требует придаточную часть.",
    "cue": "Although she was short on time, the analyst checked every entry.",
    "base": "",
    "task": "Замени Although на despite и используй форму being."
  },
  {
    "id": "structure-links-131-translate",
    "family": "structure-links-131",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Из-за сильного ветра паром отменили, поэтому пассажиры остались в терминале.",
    "answers": [
      "The ferry was cancelled because of strong winds, so the passengers stayed in the terminal.",
      "The ferry was canceled because of strong winds, so the passengers stayed in the terminal."
    ],
    "model": "The ferry was cancelled because of strong winds, so the passengers stayed in the terminal.",
    "explanation": "Because of вводит причину-существительную группу; so вводит следствие.",
    "cue": "Из-за сильного ветра паром отменили, поэтому пассажиры остались в терминале.",
    "base": "the ferry / be cancelled / because of / strong winds / so / the passengers / stay / in the terminal",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-132-contrast",
    "family": "structure-links-132",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери связку перед придаточным и перед существительной группой.",
    "answers": [
      "because | because of"
    ],
    "model": "The match was postponed because the pitch was flooded. The match was postponed because of heavy rain.",
    "explanation": "После because идёт придаточное с глаголом; after because of: существительная группа.",
    "cue": "Выбери связку перед придаточным и перед существительной группой.",
    "base": "",
    "parts": [
      {
        "prompt": "The match was postponed ___ the pitch was flooded.",
        "base": "because",
        "answer": "because"
      },
      {
        "prompt": "The match was postponed ___ heavy rain.",
        "base": "because of",
        "answer": "because of"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-links-133-gap",
    "family": "structure-links-133",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "gap",
    "level": 2,
    "prompt": "___ checking every drawer, the clerk could not find the missing key.",
    "answers": [
      "Despite"
    ],
    "model": "Despite",
    "explanation": "Перед checking используется despite; although требует придаточную часть с подлежащим и личной формой глагола.",
    "cue": "Несмотря на то что служащий проверил каждый ящик, он не смог найти пропавший ключ.",
    "base": "несмотря на + -ing",
    "choices": [
      "Despite",
      "Although"
    ]
  },
  {
    "id": "structure-links-134-repair",
    "family": "structure-links-134",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "repair",
    "level": 2,
    "prompt": "Despite of the roadworks, the shuttle arrived on schedule.",
    "answers": [
      "Despite the roadworks, the shuttle arrived on schedule."
    ],
    "model": "Despite the roadworks, the shuttle arrived on schedule.",
    "explanation": "После despite не ставится of.",
    "cue": "Despite of the roadworks, the shuttle arrived on schedule.",
    "base": ""
  },
  {
    "id": "structure-links-135-transform",
    "family": "structure-links-135",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "Because the sensors were offline, the team used a manual log.",
    "answers": [
      "Because of the sensor outage, the team used a manual log."
    ],
    "model": "Because of the sensor outage, the team used a manual log.",
    "explanation": "Because of ставится перед существительной группой; because вводит придаточную часть.",
    "cue": "Because the sensors were offline, the team used a manual log.",
    "base": "",
    "task": "Замени придаточную причину на because of + the sensor outage."
  },
  {
    "id": "structure-links-136-translate",
    "family": "structure-links-136",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Хотя инструкции были короткими, новый сотрудник понял каждую часть.",
    "answers": [
      "Although the instructions were brief, the new employee understood every section."
    ],
    "model": "Although the instructions were brief, the new employee understood every section.",
    "explanation": "Although вводит придаточную уступки с подлежащим и глаголом.",
    "cue": "Хотя инструкции были короткими, новый сотрудник понял каждую часть.",
    "base": "although / the instructions / be brief / the new employee / understand / every section",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-137-contrast",
    "family": "structure-links-137",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "contrast",
    "level": 3,
    "prompt": "В первом предложении вырази результат, во втором: причину.",
    "answers": [
      "so | because"
    ],
    "model": "The path was flooded, so buses used the tunnel. Buses used the tunnel because the path was flooded.",
    "explanation": "So вводит результат после причины; because вводит причину после результата.",
    "cue": "В первом предложении вырази результат, во втором: причину.",
    "base": "",
    "parts": [
      {
        "prompt": "The path was flooded, ___ buses used the tunnel.",
        "base": "result",
        "answer": "so"
      },
      {
        "prompt": "Buses used the tunnel ___ the path was flooded.",
        "base": "reason",
        "answer": "because"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-links-138-gap",
    "family": "structure-links-138",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "gap",
    "level": 2,
    "prompt": "The route was flooded, ___ the bus took a different road.",
    "answers": [
      "so"
    ],
    "model": "so",
    "explanation": "Вторая часть: следствие затопления маршрута, поэтому используется so.",
    "cue": "Дорогу затопило, поэтому автобус поехал другой дорогой.",
    "base": "связка результата",
    "choices": [
      "so",
      "although"
    ]
  },
  {
    "id": "structure-links-139-repair",
    "family": "structure-links-139",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "repair",
    "level": 2,
    "prompt": "Because the heating failed, so the venue closed early.",
    "answers": [
      "The heating failed, so the venue closed early."
    ],
    "model": "The heating failed, so the venue closed early.",
    "explanation": "Не ставь because и so в одну причинно-следственную конструкцию: оставь cause + so + result.",
    "cue": "Because the heating failed, so the venue closed early.",
    "base": ""
  },
  {
    "id": "structure-links-140-transform",
    "family": "structure-links-140",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "transform",
    "level": 3,
    "prompt": "The heating failed, so the venue closed early.",
    "answers": [
      "The venue closed early because the heating failed."
    ],
    "model": "The venue closed early because the heating failed.",
    "explanation": "Because вводит придаточную причину после главного результата.",
    "cue": "The heating failed, so the venue closed early.",
    "base": "",
    "task": "Поставь причину после результата и используй because."
  },
  {
    "id": "structure-links-141-translate",
    "family": "structure-links-141",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "translate",
    "level": 3,
    "prompt": "Несмотря на задержку, организаторы начали встречу вовремя.",
    "answers": [
      "Despite the delay, the organizers started the meeting on time."
    ],
    "model": "Despite the delay, the organizers started the meeting on time.",
    "explanation": "Despite стоит перед существительной группой the delay; прошедшее время: started.",
    "cue": "Несмотря на задержку, организаторы начали встречу вовремя.",
    "base": "despite / the delay / the organizers / start / the meeting / on time",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "structure-links-142-contrast",
    "family": "structure-links-142",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь уступку с придаточной частью и уступку с существительной группой.",
    "answers": [
      "Although | Despite"
    ],
    "model": "Although the first attempt failed, the team tried a different setting. Despite the failed first attempt, the team tried a different setting.",
    "explanation": "Although стоит перед придаточной частью; despite: перед существительной группой.",
    "cue": "Сопоставь уступку с придаточной частью и уступку с существительной группой.",
    "base": "",
    "parts": [
      {
        "prompt": "___ the first attempt failed, the team tried a different setting.",
        "base": "although",
        "answer": "Although"
      },
      {
        "prompt": "___ the failed first attempt, the team tried a different setting.",
        "base": "despite",
        "answer": "Despite"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "structure-links-143-gap",
    "family": "structure-links-143",
    "topic": "structure",
    "skill": "structure-links",
    "mode": "gap",
    "level": 2,
    "prompt": "___ the main road was closed, the delivery driver still reached the site on time.",
    "answers": [
      "Although"
    ],
    "model": "Although",
    "explanation": "Перед придаточной частью с подлежащим и личной формой глагола используется although; despite требует существительную группу или -ing.",
    "cue": "Хотя главную дорогу закрыли, водитель всё же вовремя добрался до объекта.",
    "base": "уступка + придаточная часть",
    "choices": [
      "Although",
      "Despite"
    ]
  }
];
