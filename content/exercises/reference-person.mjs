// Authored material for reference-person. Keep families in ascending numeric order.
export const skillId = "reference-person";
export const legacy = [
  {
    "id": "reference-001",
    "family": "reference-1",
    "topic": "reference",
    "skill": "reference-person",
    "prompt": "The woman ___ called is our manager.",
    "answer": "who",
    "distractor": "which",
    "explanation": "Who относится к человеку.",
    "cue": "Женщина, которая позвонила, работает у нас руководителем.",
    "base": "местоимение для человека",
    "alternatives": [
      "that"
    ]
  },
  {
    "id": "reference-003",
    "family": "reference-3",
    "topic": "reference",
    "skill": "reference-person",
    "prompt": "Anna has a bike. ___ rides it daily.",
    "answer": "She",
    "distractor": "He",
    "explanation": "Местоимение относится к Anna.",
    "cue": "У Анны есть велосипед. Она ездит на нём каждый день.",
    "base": "личное местоимение",
    "alternatives": []
  },
  {
    "id": "reference-004",
    "family": "reference-4",
    "topic": "reference",
    "skill": "reference-person",
    "prompt": "Tom has two dogs. He feeds ___ daily.",
    "answer": "them",
    "distractor": "it",
    "explanation": "Two dogs: множественное число.",
    "cue": "У Тома две собаки. Он кормит их каждый день.",
    "base": "объектное местоимение",
    "alternatives": []
  },
  {
    "id": "reference-005",
    "family": "reference-5",
    "topic": "reference",
    "skill": "reference-person",
    "prompt": "This is my bag. It belongs to ___.",
    "answer": "me",
    "distractor": "I",
    "explanation": "После предлога: объектная форма me.",
    "cue": "Это моя сумка. Она принадлежит мне.",
    "base": "I",
    "alternatives": []
  },
  {
    "id": "reference-006",
    "family": "reference-6",
    "topic": "reference",
    "skill": "reference-person",
    "prompt": "We built the shelves ___.",
    "answer": "ourselves",
    "distractor": "themselves",
    "explanation": "Подлежащее we: ourselves.",
    "cue": "Мы сами собрали полки.",
    "base": "we",
    "alternatives": []
  },
  {
    "id": "reference-007",
    "family": "reference-7",
    "topic": "reference",
    "skill": "reference-person",
    "prompt": "The students brought ___ books.",
    "answer": "their",
    "distractor": "his",
    "explanation": "Students: множественное число: their.",
    "cue": "Ученики принесли свои книги.",
    "base": "they",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "reference-person-101-repair",
    "family": "reference-person-101",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "repair",
    "level": 2,
    "prompt": "The people which asked for help received it.",
    "answers": [
      "The people who asked for help received it.",
      "The people that asked for help received it."
    ],
    "model": "The people who asked for help received it.",
    "explanation": "Для людей: who (также допустимо that).",
    "cue": "The people which asked for help received it.",
    "base": ""
  },
  {
    "id": "reference-person-102-transform",
    "family": "reference-person-102",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "transform",
    "level": 3,
    "prompt": "The client sent his comments. We replied to him.",
    "answers": [
      "The clients sent their comments. We replied to them."
    ],
    "model": "The clients sent their comments. We replied to them.",
    "explanation": "Меняются референты his → their, him → them.",
    "cue": "The client sent his comments. We replied to him.",
    "base": "",
    "task": "Замени The client на The clients."
  },
  {
    "id": "reference-person-103-repair",
    "family": "reference-person-103",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "repair",
    "level": 2,
    "prompt": "The coordinator spoke to the attendees who arrived early before the guide let they enter the archive.",
    "answers": [
      "The coordinator spoke to the attendees who arrived early before the guide let them enter the archive.",
      "The coordinator spoke to the attendees that arrived early before the guide let them enter the archive."
    ],
    "model": "The coordinator spoke to the attendees who arrived early before the guide let them enter the archive.",
    "explanation": "После let местоимение стоит в форме дополнения: let them enter. Who относится к attendees; also that допустимо.",
    "cue": "The coordinator spoke to the attendees who arrived early before the guide let they enter the archive.",
    "base": ""
  },
  {
    "id": "reference-person-104-contrast",
    "family": "reference-person-104",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "contrast",
    "level": 3,
    "prompt": "Соотнеси форму с людьми и их ролью в предложении.",
    "answers": [
      "who | they",
      "that | they"
    ],
    "model": "The applicant who called this morning left a message. We thanked the applicants because they stayed late.",
    "explanation": "Who относится к человеку в относительном предложении; they заменяет нескольких людей как подлежащее.",
    "cue": "Соотнеси форму с людьми и их ролью в предложении.",
    "base": "",
    "parts": [
      {
        "prompt": "The applicant ___ called this morning left a message.",
        "base": "who",
        "answer": "who"
      },
      {
        "prompt": "We thanked the applicants because ___ stayed late.",
        "base": "they",
        "answer": "they"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-person-105-translate",
    "family": "reference-person-105",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "translate",
    "level": 3,
    "prompt": "Сотрудники, которые завершили проверку, отправили нам результаты.",
    "answers": [
      "The employees who finished the review sent us the results.",
      "The employees that finished the review sent us the results."
    ],
    "model": "The employees who finished the review sent us the results.",
    "explanation": "Who относится к людям; сотрудники и два действия во множественном числе в прошлом: finished, sent. Также допустимо that.",
    "cue": "Сотрудники, которые завершили проверку, отправили нам результаты.",
    "base": "the employees / who / finish / the review / send / us / the results",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-person-106-transform",
    "family": "reference-person-106",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "transform",
    "level": 3,
    "prompt": "The reviewer said she would send her notes by noon.",
    "answers": [
      "The reviewers said they would send their notes by noon."
    ],
    "model": "The reviewers said they would send their notes by noon.",
    "explanation": "После смены референта на множественное число нужны they и their.",
    "cue": "The reviewer said she would send her notes by noon.",
    "base": "",
    "task": "Замени The reviewer на The reviewers и согласуй все местоимения."
  },
  {
    "id": "reference-person-107-repair",
    "family": "reference-person-107",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "repair",
    "level": 2,
    "prompt": "The volunteers which live nearby will meet us at the gate.",
    "answers": [
      "The volunteers who live nearby will meet us at the gate.",
      "The volunteers that live nearby will meet us at the gate."
    ],
    "model": "The volunteers who live nearby will meet us at the gate.",
    "explanation": "Для людей в определительном придаточном используется who (возможен также that).",
    "cue": "The volunteers which live nearby will meet us at the gate.",
    "base": ""
  },
  {
    "id": "reference-person-108-transform",
    "family": "reference-person-108",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "transform",
    "level": 3,
    "prompt": "Mina called the electrician. The electrician repaired the hallway light.",
    "answers": [
      "Mina called the electrician who repaired the hallway light."
    ],
    "model": "Mina called the electrician who repaired the hallway light.",
    "explanation": "Who вводит придаточное о человеке electrician.",
    "cue": "Mina called the electrician. The electrician repaired the hallway light.",
    "base": "",
    "task": "Объедини в одно предложение с who."
  },
  {
    "id": "reference-person-109-translate",
    "family": "reference-person-109",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "translate",
    "level": 3,
    "prompt": "Врач, который принял меня утром, работает в этой клинике.",
    "answers": [
      "The doctor who saw me this morning works at this clinic."
    ],
    "model": "The doctor who saw me this morning works at this clinic.",
    "explanation": "Who относится к человеку; see в завершённом прошлом: saw, work согласуется с doctor.",
    "cue": "Врач, который принял меня утром, работает в этой клинике.",
    "base": "the doctor / who / see / me / this morning / work / at this clinic",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-person-110-contrast",
    "family": "reference-person-110",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "contrast",
    "level": 3,
    "prompt": "Подбери форму, которая подходит по роли: относительное местоимение или объектное личное местоимение.",
    "answers": [
      "who | them",
      "that | them"
    ],
    "model": "The chef who prepared our meal came to the table. We thanked them after the meal.",
    "explanation": "Who вводит придаточное о человеке; после глагола thanked нужен объектный падеж them.",
    "cue": "Подбери форму, которая подходит по роли: относительное местоимение или объектное личное местоимение.",
    "base": "",
    "parts": [
      {
        "prompt": "The chef ___ prepared our meal came to the table.",
        "base": "who",
        "answer": "who"
      },
      {
        "prompt": "We thanked ___ after the meal.",
        "base": "they",
        "answer": "them"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-person-111-gap",
    "family": "reference-person-111",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "gap",
    "level": 2,
    "prompt": "The applicant ___ called this morning left a second message.",
    "answers": [
      "who",
      "that"
    ],
    "model": "who",
    "explanation": "Who относится к человеку applicant и является подлежащим called.",
    "cue": "Кандидат, который звонил сегодня утром, оставил второе сообщение.",
    "base": "applicant",
    "choices": [
      "who",
      "which"
    ]
  },
  {
    "id": "reference-person-112-repair",
    "family": "reference-person-112",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "repair",
    "level": 2,
    "prompt": "The children brought their coats, and the teacher helped they carry the bags.",
    "answers": [
      "The children brought their coats, and the teacher helped them carry the bags.",
      "The children brought their coats, and the teacher helped them carry the bags."
    ],
    "model": "The children brought their coats, and the teacher helped them carry the bags.",
    "explanation": "После helped нужен объектный падеж them, а не subject form they.",
    "cue": "The children brought their coats, and the teacher helped they carry the bags.",
    "base": ""
  },
  {
    "id": "reference-person-113-transform",
    "family": "reference-person-113",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "transform",
    "level": 3,
    "prompt": "I spoke with the musicians. The musicians performed after the show.",
    "answers": [
      "I spoke with the musicians who performed after the show."
    ],
    "model": "I spoke with the musicians who performed after the show.",
    "explanation": "Who относится к людям musicians и заменяет повторённое подлежащее второго предложения.",
    "cue": "I spoke with the musicians. The musicians performed after the show.",
    "base": "",
    "task": "Объедини в одно предложение с who."
  },
  {
    "id": "reference-person-114-translate",
    "family": "reference-person-114",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "translate",
    "level": 3,
    "prompt": "Те, кто дежурят сегодня вечером, могут взять дополнительный перерыв.",
    "answers": [
      "Those who work tonight can take an extra break."
    ],
    "model": "Those who work tonight can take an extra break.",
    "explanation": "Those обозначает группу людей; who вводит придаточное о них.",
    "cue": "Те, кто дежурят сегодня вечером, могут взять дополнительный перерыв.",
    "base": "those / who / work / tonight / can / take / an extra break",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-person-115-contrast",
    "family": "reference-person-115",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери форму для человека: относительное местоимение и личное местоимение-подлежащее.",
    "answers": [
      "who | she",
      "that | she"
    ],
    "model": "The consultant who designed the survey will present the results. I thanked the consultant after she presented the results.",
    "explanation": "Who: относительное местоимение, подлежащее в придаточном; she: личное местоимение в роли подлежащего после after.",
    "cue": "Выбери форму для человека: относительное местоимение и личное местоимение-подлежащее.",
    "base": "",
    "parts": [
      {
        "prompt": "The consultant ___ designed the survey will present the results.",
        "base": "who",
        "answer": "who"
      },
      {
        "prompt": "I thanked the consultant after ___ presented the results.",
        "base": "she",
        "answer": "she"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-person-116-choice",
    "family": "reference-person-116",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери предложение с ясной ссылкой на двух женщин и одного мужчину.",
    "answers": [
      "Rosa and Mei met Dan, and they gave him the keys."
    ],
    "model": "Rosa and Mei met Dan, and they gave him the keys.",
    "explanation": "They относится к Rosa и Mei, him: к Dan.",
    "cue": "Выбери предложение с ясной ссылкой на двух женщин и одного мужчину.",
    "base": "",
    "task": "Выбери вариант с корректными местоименными референтами.",
    "choices": [
      "Rosa and Mei met Dan, and they gave him the keys.",
      "Rosa and Mei met Dan, and he gave them the keys.",
      "Rosa and Mei met Dan, and it gave him the keys."
    ]
  },
  {
    "id": "reference-person-117-repair",
    "family": "reference-person-117",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "repair",
    "level": 2,
    "prompt": "The architect which designed the library also restored the theatre.",
    "answers": [
      "The architect who designed the library also restored the theatre.",
      "The architect that designed the library also restored the theatre."
    ],
    "model": "The architect who designed the library also restored the theatre.",
    "explanation": "Для человека в определительном придаточном используется who; that также допустимо.",
    "cue": "The architect which designed the library also restored the theatre.",
    "base": ""
  },
  {
    "id": "reference-person-118-transform",
    "family": "reference-person-118",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "transform",
    "level": 3,
    "prompt": "I met a musician. Her album won an award.",
    "answers": [
      "I met a musician whose album won an award."
    ],
    "model": "I met a musician whose album won an award.",
    "explanation": "Whose показывает принадлежность album человеку musician.",
    "cue": "I met a musician. Her album won an award.",
    "base": "",
    "task": "Объедини предложения с whose."
  },
  {
    "id": "reference-person-119-translate",
    "family": "reference-person-119",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "translate",
    "level": 3,
    "prompt": "Я пригласил их, и они принесли свои билеты.",
    "answers": [
      "I invited them, and they brought their tickets."
    ],
    "model": "I invited them, and they brought their tickets.",
    "explanation": "Them: объект после invited; they: подлежащее brought; their: принадлежность.",
    "cue": "Я пригласил их, и они принесли свои билеты.",
    "base": "I / invite / them / and / they / bring / their tickets",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-person-120-contrast",
    "family": "reference-person-120",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери местоименную форму для подлежащего и дополнения.",
    "answers": [
      "I | me"
    ],
    "model": "The volunteers and I delivered the boxes. The coordinator thanked the volunteers and me.",
    "explanation": "I: подлежащая форма; after thanked нужен объектный падеж me.",
    "cue": "Выбери местоименную форму для подлежащего и дополнения.",
    "base": "",
    "parts": [
      {
        "prompt": "The volunteers and ___ delivered the boxes.",
        "base": "I",
        "answer": "I"
      },
      {
        "prompt": "The coordinator thanked the volunteers and ___.",
        "base": "I",
        "answer": "me"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-person-121-gap",
    "family": "reference-person-121",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "gap",
    "level": 2,
    "prompt": "Each participant should bring ___ own water bottle.",
    "answers": [
      "their",
      "his or her"
    ],
    "model": "their",
    "explanation": "Для человека неизвестного пола в современном английском допустимо singular they/their.",
    "cue": "Каждый участник должен принести свою бутылку воды.",
    "base": "they",
    "choices": [
      "their",
      "them"
    ]
  },
  {
    "id": "reference-person-122-repair",
    "family": "reference-person-122",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "repair",
    "level": 2,
    "prompt": "My aunt arrived with a new portfolio. He left it at reception.",
    "answers": [
      "My aunt arrived with a new portfolio. She left it at reception.",
      "My aunt arrived with a new portfolio. She left it at reception."
    ],
    "model": "My aunt arrived with a new portfolio. She left it at reception.",
    "explanation": "Местоимение должно согласоваться с названным референтом aunt.",
    "cue": "My aunt arrived with a new portfolio. He left it at reception.",
    "base": ""
  },
  {
    "id": "reference-person-123-transform",
    "family": "reference-person-123",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "transform",
    "level": 3,
    "prompt": "A visitor left a lunch box. The visitor can collect it at reception.",
    "answers": [
      "A visitor left a lunch box. They can collect it at reception."
    ],
    "model": "A visitor left a lunch box. They can collect it at reception.",
    "explanation": "Singular they может относиться к одному человеку неизвестного пола.",
    "cue": "A visitor left a lunch box. The visitor can collect it at reception.",
    "base": "",
    "task": "Замени повтор человека на singular they."
  },
  {
    "id": "reference-person-124-translate",
    "family": "reference-person-124",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "translate",
    "level": 3,
    "prompt": "Все сотрудники должны принести свои пропуска.",
    "answers": [
      "All the employees should bring their passes."
    ],
    "model": "All the employees should bring their passes.",
    "explanation": "Employees: plural antecedent; для них подходят they/their.",
    "cue": "Все сотрудники должны принести свои пропуска.",
    "base": "all the employees / should / bring / their passes",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-person-125-contrast",
    "family": "reference-person-125",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери форму I/me по роли в предложении.",
    "answers": [
      "I | me"
    ],
    "model": "Ravi and I will lead the morning tour. Please send the schedule to Ravi and me.",
    "explanation": "I используется как subject; после to нужен object pronoun me.",
    "cue": "Выбери форму I/me по роли в предложении.",
    "base": "",
    "parts": [
      {
        "prompt": "Ravi and ___ will lead the morning tour.",
        "base": "I",
        "answer": "I"
      },
      {
        "prompt": "Please send the schedule to Ravi and ___.",
        "base": "I",
        "answer": "me"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-person-126-gap",
    "family": "reference-person-126",
    "topic": "reference",
    "skill": "reference-person",
    "mode": "gap",
    "level": 2,
    "prompt": "Please hand the marked copies to Priya and ___.",
    "answers": [
      "me"
    ],
    "model": "me",
    "explanation": "После предлога to нужен объектный падеж me.",
    "cue": "Передай отмеченные копии Прие и мне.",
    "base": "I",
    "choices": [
      "me",
      "I"
    ]
  }
];
