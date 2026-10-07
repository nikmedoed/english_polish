// Authored material for verbs-time. Keep families in ascending numeric order.
export const skillId = "verbs-time";
export const legacy = [];
export const exercises = [
  {
    "id": "verbs-time-101-contrast",
    "family": "verbs-time-101",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "В первом случае Past Simple. Во втором передай результат через Present Perfect; впиши всю глагольную группу.",
    "answers": [
      "released | have released"
    ],
    "model": "We released the fix yesterday. We have released the fix already.",
    "explanation": "Yesterday задаёт законченное прошлое. Have already требует past participle. Формы здесь совпадают, конструкции различаются.",
    "cue": "В первом случае Past Simple. Во втором передай результат через Present Perfect; впиши всю глагольную группу.",
    "base": "",
    "parts": [
      {
        "prompt": "We ___ the fix yesterday.",
        "base": "release",
        "answer": "released"
      },
      {
        "prompt": "We ___ the fix already.",
        "base": "release",
        "answer": "have released"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-102-translate",
    "family": "verbs-time-102",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Они ещё не отправили документы.",
    "answers": [
      "They haven't sent the documents yet."
    ],
    "model": "They haven't sent the documents yet.",
    "explanation": "Yet в таком отрицании: have not + sent.",
    "cue": "Они ещё не отправили документы.",
    "base": "they / send / the documents / yet",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-103-repair",
    "family": "verbs-time-103",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "I have met the supplier last Tuesday.",
    "answers": [
      "I met the supplier last Tuesday."
    ],
    "model": "I met the supplier last Tuesday.",
    "explanation": "Last Tuesday задаёт конкретный, уже закончившийся момент: «в прошлый вторник». Поэтому I met, без have. Present Perfect оставил бы связь с настоящим, которой здесь нет.",
    "cue": "Я встретился с поставщиком в прошлый вторник.",
    "base": "",
    "task": "Проверь, как глагол оформляет событие, закончившееся во вторник. Исправь только форму глагола."
  },
  {
    "id": "verbs-time-104-transform",
    "family": "verbs-time-104",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "She has already approved the changes.",
    "answers": [
      "Has she already approved the changes?"
    ],
    "model": "Has she already approved the changes?",
    "explanation": "В Present Perfect перемещается has.",
    "cue": "She has already approved the changes.",
    "base": "",
    "task": "Сделай общий вопрос."
  },
  {
    "id": "verbs-time-105-contrast",
    "family": "verbs-time-105",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи завершённое прошлое и результат к настоящему.",
    "answers": [
      "spoke | spoken"
    ],
    "model": "Yesterday, I spoke to the new supplier. I have already spoken to the new supplier.",
    "explanation": "Past Simple: spoke. Present Perfect: have spoken.",
    "cue": "Различи завершённое прошлое и результат к настоящему.",
    "base": "",
    "parts": [
      {
        "prompt": "Yesterday, I ___ to the new supplier.",
        "base": "speak",
        "answer": "spoke"
      },
      {
        "prompt": "I have already ___ to the new supplier.",
        "base": "speak",
        "answer": "spoken"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-106-translate",
    "family": "verbs-time-106",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Когда вы получили окончательное подтверждение?",
    "answers": [
      "When did you receive the final confirmation?"
    ],
    "model": "When did you receive the final confirmation?",
    "explanation": "When спрашивает о завершённом событии: did + receive.",
    "cue": "Когда вы получили окончательное подтверждение?",
    "base": "when / you / receive / the final confirmation",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-107-contrast",
    "family": "verbs-time-107",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "В первой части укажи законченное событие вчера; во второй обязательно используй Present Perfect, чтобы сообщить о результате сейчас.",
    "answers": [
      "installed | have installed"
    ],
    "model": "We installed the security update yesterday. We have installed the security update already, so the system is protected now.",
    "explanation": "Yesterday задаёт Past Simple. Во второй части условие прямо требует Present Perfect для актуального результата: have installed.",
    "cue": "В первой части укажи законченное событие вчера; во второй обязательно используй Present Perfect, чтобы сообщить о результате сейчас.",
    "base": "",
    "parts": [
      {
        "prompt": "We ___ the security update yesterday.",
        "base": "install",
        "answer": "installed"
      },
      {
        "prompt": "We ___ the security update already, so the system is protected now.",
        "base": "install",
        "answer": "have installed"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-108-repair",
    "family": "verbs-time-108",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "They have submitted the signed form at 3 p.m. yesterday.",
    "answers": [
      "They submitted the signed form at 3 p.m. yesterday."
    ],
    "model": "They submitted the signed form at 3 p.m. yesterday.",
    "explanation": "Фраза говорит о подаче формы вчера в 3 часа: событие завершено в точно указанное время. Поэтому They submitted, без have.",
    "cue": "Они подали подписанную форму вчера в три часа дня.",
    "base": "",
    "task": "Проверь форму глагола для завершённого события в точно указанное время. Исправь только форму глагола."
  },
  {
    "id": "verbs-time-109-translate",
    "family": "verbs-time-109",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Аудиторы уже закончили проверку; результаты доступны сейчас. Используй Present Perfect.",
    "answers": [
      "The auditors have already finished the inspection, and the results are available now."
    ],
    "model": "The auditors have already finished the inspection, and the results are available now.",
    "explanation": "Условие требует Present Perfect для проверки с актуальным результатом: have finished.",
    "cue": "Аудиторы уже закончили проверку; результаты доступны сейчас. Используй Present Perfect.",
    "base": "the auditors / already / finish / the inspection / and / the results / be available now",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-110-repair",
    "family": "verbs-time-110",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "Have you received the access code last Tuesday?",
    "answers": [
      "Did you receive the access code last Tuesday?"
    ],
    "model": "Did you receive the access code last Tuesday?",
    "explanation": "Last Tuesday означает «в прошлый вторник» и задаёт законченное прошлое. Поэтому вопрос строится с did, а после did глагол receive остаётся в начальной форме.",
    "cue": "Ты получил код доступа в прошлый вторник?",
    "base": "",
    "task": "Проверь форму вопроса о событии в прошлый вторник. Исправь только глагольную группу."
  },
  {
    "id": "verbs-time-111-transform",
    "family": "verbs-time-111",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "I have used this archive before.",
    "answers": [
      "Have you ever used this archive?"
    ],
    "model": "Have you ever used this archive?",
    "explanation": "Опыт до настоящего момента без конкретной даты передаётся через Have you ever + причастие.",
    "cue": "I have used this archive before.",
    "base": "",
    "task": "Спроси собеседника, пользовался ли он этим архивом когда-либо."
  },
  {
    "id": "verbs-time-112-gap",
    "family": "verbs-time-112",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "gap",
    "level": 2,
    "prompt": "We have not ___ the updated schedule yet.",
    "answers": [
      "received"
    ],
    "model": "received",
    "explanation": "В Present Perfect после have not используется past participle; yet связывает ситуацию с настоящим.",
    "cue": "Мы пока не получили обновлённое расписание.",
    "base": "receive",
    "choices": [
      "received",
      "receive"
    ]
  },
  {
    "id": "verbs-time-113-repair",
    "family": "verbs-time-113",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "I have sent the final invoice at eight yesterday morning.",
    "answers": [
      "I sent the final invoice at eight yesterday morning."
    ],
    "model": "I sent the final invoice at eight yesterday morning.",
    "explanation": "Указано точное законченное время: вчера в восемь утра. Поэтому I sent, без have.",
    "cue": "Я отправил итоговый счёт вчера в восемь утра.",
    "base": "",
    "task": "Проверь форму глагола для события в точно указанное время вчера. Исправь только форму глагола."
  },
  {
    "id": "verbs-time-114-transform",
    "family": "verbs-time-114",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "The lab has already tested the new material.",
    "answers": [
      "What has the lab already tested?"
    ],
    "model": "What has the lab already tested?",
    "explanation": "Для результата к настоящему моменту используется Present Perfect; в вопросе has стоит перед подлежащим.",
    "cue": "The lab has already tested the new material.",
    "base": "",
    "task": "Спроси, что именно лаборатория уже проверила."
  },
  {
    "id": "verbs-time-115-translate",
    "family": "verbs-time-115",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Мы никогда не пользовались этим терминалом.",
    "answers": [
      "We have never used this terminal."
    ],
    "model": "We have never used this terminal.",
    "explanation": "Опыт за период до настоящего момента без конкретной даты передаётся через have never + причастие.",
    "cue": "Мы никогда не пользовались этим терминалом.",
    "base": "we / never / use / this terminal",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-116-contrast",
    "family": "verbs-time-116",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Отличи действие с указанным временем от результата, важного сейчас.",
    "answers": [
      "made | has made"
    ],
    "model": "The receptionist made a duplicate key an hour ago. The receptionist has made a replacement key, so the office is accessible now.",
    "explanation": "An hour ago задаёт Past Simple: made. Текущий результат задаёт Present Perfect: has made.",
    "cue": "Отличи действие с указанным временем от результата, важного сейчас.",
    "base": "",
    "parts": [
      {
        "prompt": "The receptionist ___ a duplicate key an hour ago.",
        "base": "make",
        "answer": "made"
      },
      {
        "prompt": "The receptionist ___ a replacement key, so the office is accessible now.",
        "base": "make",
        "answer": "has made"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-117-gap",
    "family": "verbs-time-117",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "gap",
    "level": 2,
    "prompt": "The contractors have not ___ the final measurements yet.",
    "answers": [
      "taken"
    ],
    "model": "taken",
    "explanation": "После have not нужен past participle; take → taken.",
    "cue": "Подрядчики пока не сняли окончательные размеры.",
    "base": "take",
    "choices": [
      "taken",
      "took"
    ]
  },
  {
    "id": "verbs-time-118-repair",
    "family": "verbs-time-118",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "I haven't spoke to the coordinator yet.",
    "answers": [
      "I haven't spoken to the coordinator yet."
    ],
    "model": "I haven't spoken to the coordinator yet.",
    "explanation": "Yet показывает, что речь о результате к настоящему: «я ещё не поговорил». После have not нужна форма spoken; spoke употребляется в обычном прошедшем времени без have.",
    "cue": "Я ещё не поговорил с координатором.",
    "base": "",
    "task": "Проверь форму основного глагола после have not."
  },
  {
    "id": "verbs-time-119-transform",
    "family": "verbs-time-119",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "The lab ran this experiment in March.",
    "answers": [
      "Has the lab ever run this experiment before?"
    ],
    "model": "Has the lab ever run this experiment before?",
    "explanation": "Ever before спрашивает об опыте до настоящего момента: has + past participle run.",
    "cue": "The lab ran this experiment in March.",
    "base": "",
    "task": "Спроси, запускала ли лаборатория этот эксперимент когда-либо раньше."
  },
  {
    "id": "verbs-time-120-translate",
    "family": "verbs-time-120",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Кто-нибудь уже подтвердил бронирование?",
    "answers": [
      "Has anyone confirmed the booking already?",
      "Has anyone already confirmed the booking?"
    ],
    "model": "Has anyone confirmed the booking already?",
    "explanation": "Для результата, актуального сейчас, нужен Present Perfect; anyone требует has.",
    "cue": "Кто-нибудь уже подтвердил бронирование?",
    "base": "anyone / confirm / the booking / already",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-121-contrast",
    "family": "verbs-time-121",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни точный день в прошлом и результат без указанной даты.",
    "answers": [
      "read | have read"
    ],
    "model": "I read the reminder yesterday. I have read the reminder already, so I can respond now.",
    "explanation": "Yesterday: Past Simple. Во второй части выбран Present Perfect, чтобы связать прочтение с возможностью ответить сейчас.",
    "cue": "Сравни точный день в прошлом и результат без указанной даты.",
    "base": "",
    "parts": [
      {
        "prompt": "I ___ the reminder yesterday.",
        "base": "read",
        "answer": "read"
      },
      {
        "prompt": "I ___ the reminder already, so I can respond now.",
        "base": "read",
        "answer": "have read"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-122-contrast",
    "family": "verbs-time-122",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни завершённый момент вчера и результат к настоящему времени.",
    "answers": [
      "took | taken"
    ],
    "model": "She took a copy of the form yesterday. She has already taken a copy of the form.",
    "explanation": "Yesterday требует Past Simple took; после has нужен past participle taken.",
    "cue": "Сравни завершённый момент вчера и результат к настоящему времени.",
    "base": "",
    "parts": [
      {
        "prompt": "She ___ a copy of the form yesterday.",
        "base": "take",
        "answer": "took"
      },
      {
        "prompt": "She has already ___ a copy of the form.",
        "base": "take",
        "answer": "taken"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-123-repair",
    "family": "verbs-time-123",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "We have just saw the updated seating plan.",
    "answers": [
      "We have just seen the updated seating plan."
    ],
    "model": "We have just seen the updated seating plan.",
    "explanation": "Just здесь означает «только что», результат актуален сейчас. После have нужна форма seen; saw: форма для самостоятельного прошедшего события без have.",
    "cue": "Мы только что увидели обновлённый план рассадки.",
    "base": "",
    "task": "Проверь форму основного глагола после have."
  },
  {
    "id": "verbs-time-124-transform",
    "family": "verbs-time-124",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "The technician has repaired this model before.",
    "answers": [
      "Has the technician repaired this model before?"
    ],
    "model": "Has the technician repaired this model before?",
    "explanation": "Present Perfect спрашивает об опыте до настоящего момента; has переносится перед подлежащим.",
    "cue": "The technician has repaired this model before.",
    "base": "",
    "task": "Сделай общий вопрос об опыте до настоящего момента."
  },
  {
    "id": "verbs-time-125-translate",
    "family": "verbs-time-125",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "С момента переезда мы ещё не познакомились с соседями.",
    "answers": [
      "We have not met the neighbors since moving."
    ],
    "model": "We have not met the neighbors since moving.",
    "explanation": "Since moving связывает ситуацию с настоящим; после have not используется met.",
    "cue": "С момента переезда мы ещё не познакомились с соседями.",
    "base": "we / not meet / the neighbors / since moving",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-126-contrast",
    "family": "verbs-time-126",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни опыт до настоящего и период, который закончился в прошлом.",
    "answers": [
      "have worked | worked"
    ],
    "model": "I have worked at the city clinic for six years, and I still work there. I worked at the city clinic for six years before moving abroad.",
    "explanation": "Первый период продолжается сейчас: have worked. Во втором он завершился до переезда: worked.",
    "cue": "Сравни опыт до настоящего и период, который закончился в прошлом.",
    "base": "",
    "parts": [
      {
        "prompt": "I ___ at the city clinic for six years, and I still work there.",
        "base": "work",
        "answer": "have worked"
      },
      {
        "prompt": "I ___ at the city clinic for six years before moving abroad.",
        "base": "work",
        "answer": "worked"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-127-gap",
    "family": "verbs-time-127",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "gap",
    "level": 2,
    "prompt": "The order ___ at the warehouse already.",
    "answers": [
      "has arrived"
    ],
    "model": "has arrived",
    "explanation": "Уже полученный результат актуален сейчас; order требует has + past participle arrived.",
    "cue": "Заказ уже прибыл на склад.",
    "base": "arrive",
    "choices": [
      "has arrived",
      "arrived"
    ]
  },
  {
    "id": "verbs-time-128-repair",
    "family": "verbs-time-128",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "Have you ever went to the northern observatory?",
    "answers": [
      "Have you ever gone to the northern observatory?"
    ],
    "model": "Have you ever gone to the northern observatory?",
    "explanation": "Ever спрашивает об опыте к настоящему: «Ты когда-нибудь бывал…?» После have нужна форма gone, а не went.",
    "cue": "Ты когда-нибудь бывал в северной обсерватории?",
    "base": "",
    "task": "Проверь форму основного глагола после have в вопросе об опыте."
  },
  {
    "id": "verbs-time-129-transform",
    "family": "verbs-time-129",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "I moved to Bristol in 2022.",
    "answers": [
      "I have lived in Bristol since 2022."
    ],
    "model": "I have lived in Bristol since 2022.",
    "explanation": "Действие началось в прошлом и продолжается сейчас: have lived since 2022.",
    "cue": "I moved to Bristol in 2022.",
    "base": "",
    "task": "Передай, что я живу там с того времени и до сих пор, используя since."
  },
  {
    "id": "verbs-time-130-translate",
    "family": "verbs-time-130",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Он пока не ответил на моё письмо.",
    "answers": [
      "He has not replied to my email yet."
    ],
    "model": "He has not replied to my email yet.",
    "explanation": "Yet в отрицании о результате к настоящему требует has not + past participle.",
    "cue": "Он пока не ответил на моё письмо.",
    "base": "he / not reply / to my email / yet",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-131-contrast",
    "family": "verbs-time-131",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь длительность до настоящего и отдельный завершённый период.",
    "answers": [
      "has operated | operated"
    ],
    "model": "The studio has operated at this address since 2018. The studio operated at its former address until 2018.",
    "explanation": "Since 2018 связывает работу с настоящим; until 2018 обозначает законченный период.",
    "cue": "Сопоставь длительность до настоящего и отдельный завершённый период.",
    "base": "",
    "parts": [
      {
        "prompt": "The studio ___ at this address since 2018.",
        "base": "operate",
        "answer": "has operated"
      },
      {
        "prompt": "The studio ___ at its former address until 2018.",
        "base": "operate",
        "answer": "operated"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-132-gap",
    "family": "verbs-time-132",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "gap",
    "level": 2,
    "prompt": "Since the exhibition opened, attendance ___ steadily.",
    "answers": [
      "has grown"
    ],
    "model": "has grown",
    "explanation": "Since задаёт период до настоящего; attendance: singular, grow → has grown.",
    "cue": "С открытия выставки посещаемость постепенно растёт.",
    "base": "grow",
    "choices": [
      "has grown",
      "grew"
    ]
  },
  {
    "id": "verbs-time-133-repair",
    "family": "verbs-time-133",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "I have emailed the diagram last Wednesday.",
    "answers": [
      "I emailed the diagram last Wednesday."
    ],
    "model": "I emailed the diagram last Wednesday.",
    "explanation": "Past Simple: «Я отправил схему в прошлую среду». Last Wednesday означает «в прошлую среду», законченный момент прошлого. Поэтому I emailed без have.\n\nКогда уместно have emailed (Present Perfect): I have emailed the diagram. «Я отправил схему», например, сообщаю коллеге, что она уже в почте. Важен результат сейчас; точный законченный момент не указан. С last Wednesday эта форма не сочетается.",
    "cue": "Я отправил схему по электронной почте в прошлую среду.",
    "base": "",
    "task": "Проверь форму глагола для события в закончившийся период прошлого."
  },
  {
    "id": "verbs-time-134-transform",
    "family": "verbs-time-134",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "I started working at the clinic in 2020, and I still work there.",
    "answers": [
      "I have worked at the clinic since 2020."
    ],
    "model": "I have worked at the clinic since 2020.",
    "explanation": "Работа продолжается до настоящего; since задаёт начальную точку, а задание требует Simple.",
    "cue": "I started working at the clinic in 2020, and I still work there.",
    "base": "",
    "task": "Объедини, используя Present Perfect Simple и since."
  },
  {
    "id": "verbs-time-135-translate",
    "family": "verbs-time-135",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Ты когда-нибудь видел северное сияние?",
    "answers": [
      "Have you ever seen the northern lights?"
    ],
    "model": "Have you ever seen the northern lights?",
    "explanation": "Вопрос об опыте до настоящего: have + subject + past participle seen.",
    "cue": "Ты когда-нибудь видел северное сияние?",
    "base": "have / you / ever / see / the northern lights",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-136-contrast",
    "family": "verbs-time-136",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни период, продолжающийся до настоящего, и законченный период. В первом используй Present Perfect Simple, во втором Past Simple.",
    "answers": [
      "has served | served"
    ],
    "model": "The cafe has served breakfast in the side room since the renovation began. The cafe served breakfast there from 2020 to 2022.",
    "explanation": "Since задаёт период до настоящего: has served; период from 2020 to 2022 завершён: served.",
    "cue": "Сравни период, продолжающийся до настоящего, и законченный период. В первом используй Present Perfect Simple, во втором Past Simple.",
    "base": "",
    "parts": [
      {
        "prompt": "The cafe ___ breakfast in the side room since the renovation began.",
        "base": "serve",
        "answer": "has served"
      },
      {
        "prompt": "The cafe ___ breakfast there from 2020 to 2022.",
        "base": "serve",
        "answer": "served"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-137-gap",
    "family": "verbs-time-137",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "gap",
    "level": 2,
    "prompt": "The technicians have ___ three batches so far, and two are still pending.",
    "answers": [
      "inspected"
    ],
    "model": "inspected",
    "explanation": "После have требуется past participle inspected; so far описывает итог на текущий момент.",
    "cue": "Техники уже проверили три партии, а две ещё ожидают проверки.",
    "base": "inspect",
    "choices": [
      "inspected",
      "inspect"
    ]
  },
  {
    "id": "verbs-time-138-repair",
    "family": "verbs-time-138",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "Has he left the building yesterday?",
    "answers": [
      "Did he leave the building yesterday?"
    ],
    "model": "Did he leave the building yesterday?",
    "explanation": "Yesterday задаёт завершённое прошлое, поэтому вопрос начинается с did. После did используется начальная форма leave, не left.",
    "cue": "Он покинул здание вчера?",
    "base": "",
    "task": "Проверь форму вопроса о завершённом вчера событии. После исправления сохрани время и смысл."
  },
  {
    "id": "verbs-time-139-transform",
    "family": "verbs-time-139",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "The library opened in 1998 and is still open.",
    "answers": [
      "The library has been open since 1998."
    ],
    "model": "The library has been open since 1998.",
    "explanation": "Состояние продолжается до настоящего; since указывает начало в прошлом.",
    "cue": "The library opened in 1998 and is still open.",
    "base": "",
    "task": "Перефразируй с Present Perfect Simple и since."
  },
  {
    "id": "verbs-time-140-translate",
    "family": "verbs-time-140",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Я живу здесь пять лет и всё ещё работаю в том же офисе.",
    "answers": [
      "I have lived here for five years and I still work in the same office."
    ],
    "model": "I have lived here for five years and I still work in the same office.",
    "explanation": "For five years задаёт длительность до настоящего; задание отдельно просит Present Simple для обычного факта о работе.",
    "cue": "Я живу здесь пять лет и всё ещё работаю в том же офисе.",
    "base": "I / live / here / for five years / and / still / work / in the same office",
    "task": "Переведи. Для длительности до настоящего используй Present Perfect Simple; для обычного факта: Present Simple."
  },
  {
    "id": "verbs-time-141-contrast",
    "family": "verbs-time-141",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь период до настоящего и законченный срок. В первом используй Present Perfect Simple, во втором Past Simple.",
    "answers": [
      "has operated | operated"
    ],
    "model": "The studio has operated from this address since 2018. The studio operated from its former address until 2018.",
    "explanation": "Since 2018 связывает работу с настоящим; until 2018 обозначает закончившийся период.",
    "cue": "Сопоставь период до настоящего и законченный срок. В первом используй Present Perfect Simple, во втором Past Simple.",
    "base": "",
    "parts": [
      {
        "prompt": "The studio ___ from this address since 2018.",
        "base": "operate",
        "answer": "has operated"
      },
      {
        "prompt": "The studio ___ from its former address until 2018.",
        "base": "operate",
        "answer": "operated"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-142-gap",
    "family": "verbs-time-142",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "gap",
    "level": 2,
    "prompt": "Marta ___ the museum three times since the renovation began.",
    "answers": [
      "has visited"
    ],
    "model": "has visited",
    "explanation": "Since задаёт период до настоящего; Marta требует has + visited.",
    "cue": "С начала ремонта Марта уже трижды посетила музей.",
    "base": "visit",
    "choices": [
      "has visited",
      "visited"
    ]
  },
  {
    "id": "verbs-time-143-repair",
    "family": "verbs-time-143",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "repair",
    "level": 2,
    "prompt": "We have known the curator since five years.",
    "answers": [
      "We have known the curator for five years."
    ],
    "model": "We have known the curator for five years.",
    "explanation": "We have known the curator означает «мы знаем куратора и сейчас». Five years отвечает на вопрос «как долго?», это длительность, поэтому for five years. Since указывает начало периода. Например, since 2021 значит «с 2021 года».",
    "cue": "Мы знаем куратора уже пять лет и всё ещё знакомы.",
    "base": "",
    "hint": "For + длительность (for two weeks). Since + начальная точка (since Monday). Посмотри на слова после предлога: это срок или момент начала?",
    "task": "Исправь слово перед длительностью «пять лет». Остальную фразу сохрани."
  },
  {
    "id": "verbs-time-144-transform",
    "family": "verbs-time-144",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "transform",
    "level": 3,
    "prompt": "The last time I used this printer was three months ago.",
    "answers": [
      "I have not used this printer for three months."
    ],
    "model": "I have not used this printer for three months.",
    "explanation": "Период без использования продолжается до настоящего: have not used for three months.",
    "cue": "The last time I used this printer was three months ago.",
    "base": "",
    "task": "Передай, что с тех пор я им не пользовался; используй Present Perfect Simple и for."
  },
  {
    "id": "verbs-time-145-translate",
    "family": "verbs-time-145",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "translate",
    "level": 3,
    "prompt": "Когда вы впервые встретили нового директора?",
    "answers": [
      "When did you first meet the new director?"
    ],
    "model": "When did you first meet the new director?",
    "explanation": "When спрашивает о завершённой встрече; используется did + meet.",
    "cue": "Когда вы впервые встретили нового директора?",
    "base": "when / you / first / meet / the new director",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-time-146-contrast",
    "family": "verbs-time-146",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни постепенное изменение с начала периода и событие во вторник. В первом используй Present Perfect Simple, во втором Past Simple.",
    "answers": [
      "has risen | rose"
    ],
    "model": "The average temperature has risen steadily since June. It rose sharply on Tuesday.",
    "explanation": "Since June связывает изменение с настоящим; Tuesday задаёт завершённый момент прошлого.",
    "cue": "Сравни постепенное изменение с начала периода и событие во вторник. В первом используй Present Perfect Simple, во втором Past Simple.",
    "base": "",
    "parts": [
      {
        "prompt": "The average temperature ___ steadily since June.",
        "base": "rise",
        "answer": "has risen"
      },
      {
        "prompt": "It ___ sharply on Tuesday.",
        "base": "rise",
        "answer": "rose"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-time-147-gap",
    "family": "verbs-time-147",
    "topic": "verbs",
    "skill": "verbs-time",
    "mode": "gap",
    "level": 2,
    "prompt": "The old ticket system ___ in service until 2021; the new system replaced it afterward.",
    "answers": [
      "remained"
    ],
    "model": "remained",
    "explanation": "Until 2021 задаёт закончившийся период, поэтому нужен Past Simple remained.",
    "cue": "Старая система билетов работала до 2021 года; после этого её заменили.",
    "base": "remain",
    "choices": [
      "remained",
      "has remained"
    ]
  }
];
