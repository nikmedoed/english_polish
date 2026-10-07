// Authored material for verbs-agreement. Keep families in ascending numeric order.
export const skillId = "verbs-agreement";
export const legacy = [
  {
    "id": "verbs-001",
    "family": "verbs-1",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "prompt": "She ___ the reports every Friday.",
    "answer": "checks",
    "distractor": "check",
    "explanation": "Каждую пятницу: регулярное действие, поэтому Present Simple. С she используется checks. Для процесса прямо сейчас: She is checking the reports.",
    "cue": "Она проверяет отчёты каждую пятницу.",
    "base": "check",
    "alternatives": []
  },
  {
    "id": "verbs-002",
    "family": "verbs-2",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "prompt": "He ___ work on Sundays.",
    "answer": "doesn't",
    "distractor": "don't",
    "explanation": "Он обычно не работает по воскресеньям: отрицание привычки, а не действие в конкретный момент. He does not work; после does окончание -s уже не нужно.",
    "cue": "Он не работает по воскресеньям.",
    "base": "do",
    "alternatives": []
  },
  {
    "id": "verbs-006",
    "family": "verbs-6",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "prompt": "My colleague ___ two monitors.",
    "answer": "has",
    "distractor": "have",
    "explanation": "У коллеги есть два монитора: обладание, поэтому has. My colleague означает одного человека. Для вопроса: Does my colleague have two monitors?",
    "cue": "У моего коллеги два монитора.",
    "base": "have",
    "alternatives": []
  },
  {
    "id": "verbs-008",
    "family": "verbs-8",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "prompt": "Does she ___ here?",
    "answer": "work",
    "distractor": "works",
    "explanation": "Спрашиваем о месте постоянной работы, поэтому Present Simple. Does she work here? Для временной работы сейчас: Is she working here?",
    "cue": "Она работает здесь?",
    "base": "work",
    "alternatives": []
  },
  {
    "id": "verbs-011",
    "family": "verbs-11",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "prompt": "My manager ___ a short call every day.",
    "answer": "holds",
    "distractor": "hold",
    "explanation": "Every day описывает повторяющееся действие: Present Simple. Один руководитель, поэтому holds. Сейчас в процессе было бы is holding a call.",
    "cue": "Мой руководитель проводит короткий звонок каждый день.",
    "base": "hold",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "verbs-agreement-101-transform",
    "family": "verbs-agreement-101",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "The supplier delivers the parts on Fridays.",
    "answers": [
      "The supplier doesn't deliver the parts on Fridays."
    ],
    "model": "The supplier doesn't deliver the parts on Fridays.",
    "explanation": "Does not уже выражает третье лицо: deliver без -s.",
    "cue": "The supplier delivers the parts on Fridays.",
    "base": "",
    "task": "Сделай отрицание. Остальные слова сохрани."
  },
  {
    "id": "verbs-agreement-102-transform",
    "family": "verbs-agreement-102",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "Your colleague handles urgent requests.",
    "answers": [
      "Does your colleague handle urgent requests?"
    ],
    "model": "Does your colleague handle urgent requests?",
    "explanation": "Does + subject + base verb.",
    "cue": "Your colleague handles urgent requests.",
    "base": "",
    "task": "Сделай общий вопрос."
  },
  {
    "id": "verbs-agreement-103-transform",
    "family": "verbs-agreement-103",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "The contractor checks the invoice and sends a copy.",
    "answers": [
      "The contractors check the invoice and send a copy."
    ],
    "model": "The contractors check the invoice and send a copy.",
    "explanation": "При смене числа меняются оба глагола.",
    "cue": "The contractor checks the invoice and sends a copy.",
    "base": "",
    "task": "Замени The contractor на The contractors."
  },
  {
    "id": "verbs-agreement-104-repair",
    "family": "verbs-agreement-104",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "Why does the backup process stops every night?",
    "answers": [
      "Why does the backup process stop every night?"
    ],
    "model": "Why does the backup process stop every night?",
    "explanation": "После does форма stop, не stops.",
    "cue": "Why does the backup process stops every night?",
    "base": ""
  },
  {
    "id": "verbs-agreement-105-translate",
    "family": "verbs-agreement-105",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "Она не согласна с предложением.",
    "answers": [
      "She doesn't agree with the proposal."
    ],
    "model": "She doesn't agree with the proposal.",
    "explanation": "Agree не требует be: does not agree.",
    "cue": "Она не согласна с предложением.",
    "base": "she / agree / with the proposal",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-106-contrast",
    "family": "verbs-agreement-106",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Каждая группа действует регулярно. Впиши формы глаголов.",
    "answers": [
      "checks | check"
    ],
    "model": "Each analyst checks the figures before the call. The analysts check the figures before the call.",
    "explanation": "Each analyst: singular; the analysts: plural.",
    "cue": "Каждая группа действует регулярно. Впиши формы глаголов.",
    "base": "",
    "parts": [
      {
        "prompt": "Each analyst ___ the figures before the call.",
        "base": "check",
        "answer": "checks"
      },
      {
        "prompt": "The analysts ___ the figures before the call.",
        "base": "check",
        "answer": "check"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-107-repair",
    "family": "verbs-agreement-107",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "How often does the service sends a status update?",
    "answers": [
      "How often does the service send a status update?"
    ],
    "model": "How often does the service send a status update?",
    "explanation": "В вопросе does уже несёт форму третьего лица; после него send без -s.",
    "cue": "How often does the service sends a status update?",
    "base": ""
  },
  {
    "id": "verbs-agreement-108-transform",
    "family": "verbs-agreement-108",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "The help desk answers urgent requests before noon.",
    "answers": [
      "The help desk doesn't answer urgent requests before noon."
    ],
    "model": "The help desk doesn't answer urgent requests before noon.",
    "explanation": "В отрицании does not показывает третье лицо, поэтому answer без -s.",
    "cue": "The help desk answers urgent requests before noon.",
    "base": "",
    "task": "Сделай отрицание, сохрани остальные слова."
  },
  {
    "id": "verbs-agreement-109-contrast",
    "family": "verbs-agreement-109",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни одного специалиста и нескольких специалистов.",
    "answers": [
      "completes | complete"
    ],
    "model": "Each technician completes the safety check before work. The technicians complete the safety check before work.",
    "explanation": "Each technician: единственное число; technicians: множественное. Форма глагола меняется вместе с подлежащим.",
    "cue": "Сравни одного специалиста и нескольких специалистов.",
    "base": "",
    "parts": [
      {
        "prompt": "Each technician ___ the safety check before work.",
        "base": "complete",
        "answer": "completes"
      },
      {
        "prompt": "The technicians ___ the safety check before work.",
        "base": "complete",
        "answer": "complete"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-110-translate",
    "family": "verbs-agreement-110",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "Почему этот прибор останавливается после каждого цикла?",
    "answers": [
      "Why does this device stop after each cycle?"
    ],
    "model": "Why does this device stop after each cycle?",
    "explanation": "В вопросе с this device нужен does, а основной глагол остаётся в начальной форме.",
    "cue": "Почему этот прибор останавливается после каждого цикла?",
    "base": "why / this device / stop / after each cycle",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-111-gap",
    "family": "verbs-agreement-111",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "gap",
    "level": 2,
    "prompt": "Each request ___ a confirmation email within one minute.",
    "answers": [
      "receives"
    ],
    "model": "receives",
    "explanation": "После подлежащего в единственном числе в Present Simple нужен глагол с -s.",
    "cue": "Каждая заявка получает письмо-подтверждение в течение минуты.",
    "base": "receive",
    "choices": [
      "receives",
      "receive"
    ]
  },
  {
    "id": "verbs-agreement-112-repair",
    "family": "verbs-agreement-112",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "The supervisor reviews each request and approve the final changes.",
    "answers": [
      "The supervisor reviews each request and approves the final changes."
    ],
    "model": "The supervisor reviews each request and approves the final changes.",
    "explanation": "Оба глагола относятся к единственному числу supervisor: reviews и approves.",
    "cue": "The supervisor reviews each request and approve the final changes.",
    "base": ""
  },
  {
    "id": "verbs-agreement-113-repair",
    "family": "verbs-agreement-113",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "One of the labels show the wrong date.",
    "answers": [
      "One of the labels shows the wrong date."
    ],
    "model": "One of the labels shows the wrong date.",
    "explanation": "Грамматическое подлежащее: one, поэтому нужен глагол shows.",
    "cue": "One of the labels show the wrong date.",
    "base": ""
  },
  {
    "id": "verbs-agreement-114-transform",
    "family": "verbs-agreement-114",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "The night clerk checks every entry.",
    "answers": [
      "The night clerks check every entry."
    ],
    "model": "The night clerks check every entry.",
    "explanation": "С множественным подлежащим clerk исчезает окончание -s: check.",
    "cue": "The night clerk checks every entry.",
    "base": "",
    "task": "Замени The night clerk на The night clerks и согласуй глагол."
  },
  {
    "id": "verbs-agreement-115-translate",
    "family": "verbs-agreement-115",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "Почему этот маршрут проходит через центр?",
    "answers": [
      "Why does this route pass through the center?"
    ],
    "model": "Why does this route pass through the center?",
    "explanation": "В вопросе с this route нужен does; после него используется pass без -s.",
    "cue": "Почему этот маршрут проходит через центр?",
    "base": "why / this route / pass / through the center",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-116-contrast",
    "family": "verbs-agreement-116",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни одну ячейку и все ячейки.",
    "answers": [
      "has | have"
    ],
    "model": "Each drawer has a number on the inside. All the drawers have numbers on the inside.",
    "explanation": "Each drawer: единственное число: has. All the drawers: множественное: have.",
    "cue": "Сравни одну ячейку и все ячейки.",
    "base": "",
    "parts": [
      {
        "prompt": "Each drawer ___ a number on the inside.",
        "base": "have",
        "answer": "has"
      },
      {
        "prompt": "All the drawers ___ numbers on the inside.",
        "base": "have",
        "answer": "have"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-117-gap",
    "family": "verbs-agreement-117",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "gap",
    "level": 2,
    "prompt": "The booking system ___ each reservation automatically.",
    "answers": [
      "confirms"
    ],
    "model": "confirms",
    "explanation": "В Present Simple booking system: единственное число, поэтому глагол получает -s.",
    "cue": "Система автоматически подтверждает каждое бронирование.",
    "base": "confirm",
    "choices": [
      "confirms",
      "confirm"
    ]
  },
  {
    "id": "verbs-agreement-118-repair",
    "family": "verbs-agreement-118",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "The printer, together with the scanners, need regular maintenance.",
    "answers": [
      "The printer, together with the scanners, needs regular maintenance."
    ],
    "model": "The printer, together with the scanners, needs regular maintenance.",
    "explanation": "Фраза together with не меняет подлежащее: printer в единственном числе, поэтому needs.",
    "cue": "The printer, together with the scanners, need regular maintenance.",
    "base": ""
  },
  {
    "id": "verbs-agreement-119-transform",
    "family": "verbs-agreement-119",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "The museum keeps the original records.",
    "answers": [
      "Does the museum keep the original records?"
    ],
    "model": "Does the museum keep the original records?",
    "explanation": "Does согласуется с museum; после does используется keep без -s.",
    "cue": "The museum keeps the original records.",
    "base": "",
    "task": "Сделай общий вопрос, сохрани остальные слова."
  },
  {
    "id": "verbs-agreement-120-translate",
    "family": "verbs-agreement-120",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "Каждый кандидат заполняет анкету и прикладывает два документа.",
    "answers": [
      "Each candidate completes the form and attaches two documents."
    ],
    "model": "Each candidate completes the form and attaches two documents.",
    "explanation": "Each candidate: единственное число; оба глагола получают -s.",
    "cue": "Каждый кандидат заполняет анкету и прикладывает два документа.",
    "base": "each candidate / complete / the form / and / attach / two documents",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-121-contrast",
    "family": "verbs-agreement-121",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь один маршрут и несколько маршрутов.",
    "answers": [
      "runs | run"
    ],
    "model": "One of the routes runs through the tunnel. Both routes run through the tunnel.",
    "explanation": "One of the routes: единственное число: runs. Both routes: множественное: run.",
    "cue": "Сопоставь один маршрут и несколько маршрутов.",
    "base": "",
    "parts": [
      {
        "prompt": "One of the routes ___ through the tunnel.",
        "base": "run",
        "answer": "runs"
      },
      {
        "prompt": "Both routes ___ through the tunnel.",
        "base": "run",
        "answer": "run"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-122-contrast",
    "family": "verbs-agreement-122",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни действие одной страницы после сканирования и работу нескольких страниц.",
    "answers": [
      "updates | update"
    ],
    "model": "The tracking page updates the parcel status after each scan. The tracking pages update the parcel status after each scan.",
    "explanation": "Page в единственном числе требует updates; pages во множественном: update.",
    "cue": "Сравни действие одной страницы после сканирования и работу нескольких страниц.",
    "base": "",
    "parts": [
      {
        "prompt": "The tracking page ___ the parcel status after each scan.",
        "base": "update",
        "answer": "updates"
      },
      {
        "prompt": "The tracking pages ___ the parcel status after each scan.",
        "base": "update",
        "answer": "update"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-123-repair",
    "family": "verbs-agreement-123",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "Each of the two entry rows point to a different file.",
    "answers": [
      "Each of the two entry rows points to a different file."
    ],
    "model": "Each of the two entry rows points to a different file.",
    "explanation": "Each задаёт единственное число, даже если после of стоит существительное во множественном числе.",
    "cue": "Each of the two entry rows point to a different file.",
    "base": ""
  },
  {
    "id": "verbs-agreement-124-transform",
    "family": "verbs-agreement-124",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "The maintenance team records every temperature reading.",
    "answers": [
      "Does the maintenance team record every temperature reading?"
    ],
    "model": "Does the maintenance team record every temperature reading?",
    "explanation": "В вопросе с подлежащим team используется does, а после него: record без -s.",
    "cue": "The maintenance team records every temperature reading.",
    "base": "",
    "task": "Сделай общий вопрос."
  },
  {
    "id": "verbs-agreement-125-translate",
    "family": "verbs-agreement-125",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "Большинство пассажиров носит бумажные билеты.",
    "answers": [
      "Most passengers carry paper tickets."
    ],
    "model": "Most passengers carry paper tickets.",
    "explanation": "Most passengers: множественное число, поэтому carry без -s.",
    "cue": "Большинство пассажиров носит бумажные билеты.",
    "base": "most / passenger / carry / paper tickets",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-126-contrast",
    "family": "verbs-agreement-126",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни количество людей и само количество людей.",
    "answers": [
      "apply | grows"
    ],
    "model": "A number of applicants apply for the evening course. The number of applicants grows each year.",
    "explanation": "A number of + plural noun требует plural verb; the number of: singular subject.",
    "cue": "Сравни количество людей и само количество людей.",
    "base": "",
    "parts": [
      {
        "prompt": "A number of applicants ___ for the evening course.",
        "base": "apply",
        "answer": "apply"
      },
      {
        "prompt": "The number of applicants ___ each year.",
        "base": "grow",
        "answer": "grows"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-127-gap",
    "family": "verbs-agreement-127",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "gap",
    "level": 2,
    "prompt": "A pair of insulated gloves ___ in the top compartment.",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Главное подлежащее: pair в единственном числе, поэтому нужна форма is.",
    "cue": "Пара утеплённых перчаток находится в верхнем отделении.",
    "base": "be",
    "choices": [
      "is",
      "are"
    ]
  },
  {
    "id": "verbs-agreement-128-repair",
    "family": "verbs-agreement-128",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "Why does either route leads to the service entrance?",
    "answers": [
      "Why does either route lead to the service entrance?"
    ],
    "model": "Why does either route lead to the service entrance?",
    "explanation": "После does используется начальная форма lead без -s.",
    "cue": "Why does either route leads to the service entrance?",
    "base": ""
  },
  {
    "id": "verbs-agreement-129-transform",
    "family": "verbs-agreement-129",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "The final shuttle leaves at 9:15.",
    "answers": [
      "What time does the final shuttle leave?"
    ],
    "model": "What time does the final shuttle leave?",
    "explanation": "В вопросе Present Simple: does + subject + leave.",
    "cue": "The final shuttle leaves at 9:15.",
    "base": "",
    "task": "Спроси, во сколько отправляется последний шаттл."
  },
  {
    "id": "verbs-agreement-130-translate",
    "family": "verbs-agreement-130",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "Ни один ключ не подходит к этому замку.",
    "answers": [
      "Neither key fits this lock."
    ],
    "model": "Neither key fits this lock.",
    "explanation": "Neither key трактуется как единственное число; в Present Simple нужен fits.",
    "cue": "Ни один ключ не подходит к этому замку.",
    "base": "neither key / fit / this lock",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-131-contrast",
    "family": "verbs-agreement-131",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни неисчисляемое news и исчисляемые headlines.",
    "answers": [
      "is | are"
    ],
    "model": "The news from the island is encouraging. The headlines are encouraging.",
    "explanation": "News имеет форму на -s, но употребляется как singular; headlines: plural.",
    "cue": "Сравни неисчисляемое news и исчисляемые headlines.",
    "base": "",
    "parts": [
      {
        "prompt": "The news from the island ___ encouraging.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The headlines ___ encouraging.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-132-gap",
    "family": "verbs-agreement-132",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "gap",
    "level": 2,
    "prompt": "The set of spare keys ___ inside the blue cabinet.",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Грамматическое подлежащее: set в единственном числе; keys входит в предложную группу.",
    "cue": "Комплект запасных ключей находится в синем шкафу.",
    "base": "be",
    "choices": [
      "is",
      "are"
    ]
  },
  {
    "id": "verbs-agreement-133-repair",
    "family": "verbs-agreement-133",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "The color of the warning lights are hard to see.",
    "answers": [
      "The color of the warning lights is hard to see."
    ],
    "model": "The color of the warning lights is hard to see.",
    "explanation": "Главное подлежащее: color; оборот of the warning lights не меняет единственное число.",
    "cue": "The color of the warning lights are hard to see.",
    "base": ""
  },
  {
    "id": "verbs-agreement-134-transform",
    "family": "verbs-agreement-134",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "The inspectors check the exits before opening.",
    "answers": [
      "Each inspector checks the exits before opening."
    ],
    "model": "Each inspector checks the exits before opening.",
    "explanation": "Each inspector: единственное число, поэтому нужен checks.",
    "cue": "The inspectors check the exits before opening.",
    "base": "",
    "task": "Замени подлежащее на Each inspector."
  },
  {
    "id": "verbs-agreement-135-translate",
    "family": "verbs-agreement-135",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "Одна из панелей не подключена правильно.",
    "answers": [
      "One of the panels is not connected correctly."
    ],
    "model": "One of the panels is not connected correctly.",
    "explanation": "В конструкции one of the panels грамматическое подлежащее: one.",
    "cue": "Одна из панелей не подключена правильно.",
    "base": "one / the panels / not / connect / correctly",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-136-contrast",
    "family": "verbs-agreement-136",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери форму по главному слову подлежащего.",
    "answers": [
      "is | are"
    ],
    "model": "The final set of keys is in the cabinet. The keys are in the cabinet.",
    "explanation": "В первой части главное слово: set; во второй: keys.",
    "cue": "Выбери форму по главному слову подлежащего.",
    "base": "",
    "parts": [
      {
        "prompt": "The final set of keys ___ in the cabinet.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The keys ___ in the cabinet.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-137-gap",
    "family": "verbs-agreement-137",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "gap",
    "level": 2,
    "prompt": "Every item in these boxes ___ a label.",
    "answers": [
      "has"
    ],
    "model": "has",
    "explanation": "Every item: единственное число, поэтому требуется has.",
    "cue": "У каждого предмета в этих коробках есть этикетка.",
    "base": "have",
    "choices": [
      "has",
      "have"
    ]
  },
  {
    "id": "verbs-agreement-138-repair",
    "family": "verbs-agreement-138",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "A number of customers has asked for a printed receipt.",
    "answers": [
      "A number of customers have asked for a printed receipt."
    ],
    "model": "A number of customers have asked for a printed receipt.",
    "explanation": "A number of означает несколько клиентов; глагол согласуется с plural noun customers.",
    "cue": "A number of customers has asked for a printed receipt.",
    "base": ""
  },
  {
    "id": "verbs-agreement-139-transform",
    "family": "verbs-agreement-139",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "Both delivery vans need a safety check.",
    "answers": [
      "Each delivery van needs a safety check."
    ],
    "model": "Each delivery van needs a safety check.",
    "explanation": "Each delivery van: единственное число, поэтому need меняется на needs.",
    "cue": "Both delivery vans need a safety check.",
    "base": "",
    "task": "Перестрой предложение, начав с Each delivery van."
  },
  {
    "id": "verbs-agreement-140-translate",
    "family": "verbs-agreement-140",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "Большинство писем требует ответа до пятницы.",
    "answers": [
      "Most of the letters require a reply before Friday."
    ],
    "model": "Most of the letters require a reply before Friday.",
    "explanation": "Подлежащее letters стоит во множественном числе: require.",
    "cue": "Большинство писем требует ответа до пятницы.",
    "base": "most / the letters / require / a reply / before Friday",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-141-contrast",
    "family": "verbs-agreement-141",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи число как показатель количества и конструкцию со значением «несколько».",
    "answers": [
      "is | are"
    ],
    "model": "The number of damaged boxes is increasing. A number of damaged boxes are in the loading area.",
    "explanation": "The number: единственное число; a number of + plural noun: множественное.",
    "cue": "Различи число как показатель количества и конструкцию со значением «несколько».",
    "base": "",
    "parts": [
      {
        "prompt": "The number of damaged boxes ___ increasing.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "A number of damaged boxes ___ in the loading area.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-142-gap",
    "family": "verbs-agreement-142",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "gap",
    "level": 2,
    "prompt": "The total cost of all repairs ___ above our estimate.",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Главное слово подлежащего: cost; предложная группа of all repairs не делает его множественным.",
    "cue": "Общая стоимость всех ремонтных работ превышает нашу оценку.",
    "base": "be",
    "choices": [
      "is",
      "are"
    ]
  },
  {
    "id": "verbs-agreement-143-repair",
    "family": "verbs-agreement-143",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "repair",
    "level": 2,
    "prompt": "Each of the two switches control one lamp.",
    "answers": [
      "Each of the two switches controls one lamp."
    ],
    "model": "Each of the two switches controls one lamp.",
    "explanation": "Each требует глагол в единственном числе, несмотря на plural noun switches после of.",
    "cue": "Each of the two switches control one lamp.",
    "base": ""
  },
  {
    "id": "verbs-agreement-144-transform",
    "family": "verbs-agreement-144",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "transform",
    "level": 3,
    "prompt": "All the emergency exits are unlocked during the drill.",
    "answers": [
      "Each emergency exit is unlocked during the drill."
    ],
    "model": "Each emergency exit is unlocked during the drill.",
    "explanation": "После Each emergency exit нужна форма is.",
    "cue": "All the emergency exits are unlocked during the drill.",
    "base": "",
    "task": "Перефразируй с Each emergency exit."
  },
  {
    "id": "verbs-agreement-145-translate",
    "family": "verbs-agreement-145",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "translate",
    "level": 3,
    "prompt": "У каждого из десяти участников есть отдельный код.",
    "answers": [
      "Each of the ten participants has a separate code."
    ],
    "model": "Each of the ten participants has a separate code.",
    "explanation": "В конструкции each of глагол согласуется с each: has.",
    "cue": "У каждого из десяти участников есть отдельный код.",
    "base": "each / the ten participants / have / a separate code",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-agreement-146-contrast",
    "family": "verbs-agreement-146",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни одного представителя группы и всю группу.",
    "answers": [
      "is | are"
    ],
    "model": "One of the replacement parts is missing. The replacement parts are missing.",
    "explanation": "В первом подлежащем главное слово one; во втором: parts.",
    "cue": "Сравни одного представителя группы и всю группу.",
    "base": "",
    "parts": [
      {
        "prompt": "One of the replacement parts ___ missing.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The replacement parts ___ missing.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-agreement-147-gap",
    "family": "verbs-agreement-147",
    "topic": "verbs",
    "skill": "verbs-agreement",
    "mode": "gap",
    "level": 2,
    "prompt": "The only copy of the records ___ in the top drawer.",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Главное слово подлежащего: copy; records находится в предложной группе of the records.",
    "cue": "Единственная копия записей находится в верхнем ящике.",
    "base": "be",
    "choices": [
      "is",
      "are"
    ]
  }
];
