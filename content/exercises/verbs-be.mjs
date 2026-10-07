// Authored material for verbs-be. Keep families in ascending numeric order.
export const skillId = "verbs-be";
export const legacy = [
  {
    "id": "verbs-005",
    "family": "verbs-5",
    "topic": "verbs",
    "skill": "verbs-be",
    "prompt": "The documents ___ ready yesterday.",
    "answer": "were",
    "distractor": "was",
    "explanation": "Документы были готовы вчера: описываем состояние в прошлом. Documents во множественном числе, поэтому were. Это состояние, а не действие с did.",
    "cue": "Документы были готовы вчера.",
    "base": "be",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "verbs-be-101-contrast",
    "family": "verbs-be-101",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Подлежащее меняет форму be.",
    "answers": [
      "is | were"
    ],
    "model": "The final version is ready now. The earlier versions were ready yesterday.",
    "explanation": "Version: is; versions в прошлом: were.",
    "cue": "Подлежащее меняет форму be.",
    "base": "",
    "parts": [
      {
        "prompt": "The final version ___ ready now.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The earlier versions ___ ready yesterday.",
        "base": "be",
        "answer": "were"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-102-repair",
    "family": "verbs-be-102",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "The files was available, but the folder were locked.",
    "answers": [
      "The files were available, but the folder was locked."
    ],
    "model": "The files were available, but the folder was locked.",
    "explanation": "Files: were; folder: was. Проверь оба подлежащих.",
    "cue": "The files was available, but the folder were locked.",
    "base": ""
  },
  {
    "id": "verbs-be-103-transform",
    "family": "verbs-be-103",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "The documents were in the shared folder.",
    "answers": [
      "The documents weren't in the shared folder."
    ],
    "model": "The documents weren't in the shared folder.",
    "explanation": "Be образует отрицание без did.",
    "cue": "The documents were in the shared folder.",
    "base": "",
    "task": "Сделай отрицание."
  },
  {
    "id": "verbs-be-104-translate",
    "family": "verbs-be-104",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "Почему эти документы не были готовы вчера?",
    "answers": [
      "Why weren't these documents ready yesterday?",
      "Why were these documents not ready yesterday?"
    ],
    "model": "Why weren't these documents ready yesterday?",
    "explanation": "Множественное число в прошлом: were not.",
    "cue": "Почему эти документы не были готовы вчера?",
    "base": "why / these documents / ready / yesterday",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-105-transform",
    "family": "verbs-be-105",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "The new instructions are clear.",
    "answers": [
      "The new instruction is clear."
    ],
    "model": "The new instruction is clear.",
    "explanation": "Единственное instruction требует is.",
    "cue": "The new instructions are clear.",
    "base": "",
    "task": "Замени The new instructions на The new instruction."
  },
  {
    "id": "verbs-be-106-repair",
    "family": "verbs-be-106",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "Does the equipment is ready for the demonstration?",
    "answers": [
      "Is the equipment ready for the demonstration?"
    ],
    "model": "Is the equipment ready for the demonstration?",
    "explanation": "Equipment неисчисляемо. Вопрос с is не требует does.",
    "cue": "Does the equipment is ready for the demonstration?",
    "base": ""
  },
  {
    "id": "verbs-be-107-repair",
    "family": "verbs-be-107",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "The receipts is ready, but the invoice are still missing.",
    "answers": [
      "The receipts are ready, but the invoice is still missing."
    ],
    "model": "The receipts are ready, but the invoice is still missing.",
    "explanation": "Форму be согласуй с каждым подлежащим отдельно: receipts are, invoice is.",
    "cue": "The receipts is ready, but the invoice are still missing.",
    "base": ""
  },
  {
    "id": "verbs-be-108-transform",
    "family": "verbs-be-108",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "The reports were in the archive yesterday.",
    "answers": [
      "Were the reports in the archive yesterday?"
    ],
    "model": "Were the reports in the archive yesterday?",
    "explanation": "С was/were вопрос образуется перестановкой be перед подлежащим, без did.",
    "cue": "The reports were in the archive yesterday.",
    "base": "",
    "task": "Сделай общий вопрос, сохрани остальные слова."
  },
  {
    "id": "verbs-be-109-translate",
    "family": "verbs-be-109",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "Почему новый специалист доступен только по понедельникам?",
    "answers": [
      "Why is the new specialist available only on Mondays?"
    ],
    "model": "Why is the new specialist available only on Mondays?",
    "explanation": "Единственное число и настоящее время требуют is; в вопросе is стоит перед подлежащим.",
    "cue": "Почему новый специалист доступен только по понедельникам?",
    "base": "why / the new specialist / available / only on Mondays",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-110-contrast",
    "family": "verbs-be-110",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Подбери be по числу подлежащего и времени.",
    "answers": [
      "is | were"
    ],
    "model": "The final version is ready now. The earlier versions were ready yesterday.",
    "explanation": "Version в настоящем: is; versions во вчерашней ситуации: were.",
    "cue": "Подбери be по числу подлежащего и времени.",
    "base": "",
    "parts": [
      {
        "prompt": "The final version ___ ready now.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The earlier versions ___ ready yesterday.",
        "base": "be",
        "answer": "were"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-111-gap",
    "family": "verbs-be-111",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "gap",
    "level": 2,
    "prompt": "All the equipment ___ inspected before each demonstration.",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Equipment обычно неисчисляемое существительное в единственном числе, поэтому здесь is.",
    "cue": "Всё оборудование проверяют перед каждой демонстрацией.",
    "base": "be",
    "choices": [
      "is",
      "are"
    ]
  },
  {
    "id": "verbs-be-112-repair",
    "family": "verbs-be-112",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "Were the revised schedule available to all departments?",
    "answers": [
      "Was the revised schedule available to all departments?"
    ],
    "model": "Was the revised schedule available to all departments?",
    "explanation": "Подлежащее schedule в единственном числе, поэтому в прошедшем времени нужно was.",
    "cue": "Were the revised schedule available to all departments?",
    "base": ""
  },
  {
    "id": "verbs-be-113-repair",
    "family": "verbs-be-113",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "The printouts from each branch was on the table.",
    "answers": [
      "The printouts from each branch were on the table."
    ],
    "model": "The printouts from each branch were on the table.",
    "explanation": "Подлежащее printouts во множественном числе, поэтому в прошедшем времени нужно were.",
    "cue": "The printouts from each branch was on the table.",
    "base": ""
  },
  {
    "id": "verbs-be-114-transform",
    "family": "verbs-be-114",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "The storage room was locked overnight.",
    "answers": [
      "Was the storage room locked overnight?"
    ],
    "model": "Was the storage room locked overnight?",
    "explanation": "В вопросе вспомогательный глагол be ставится перед подлежащим.",
    "cue": "The storage room was locked overnight.",
    "base": "",
    "task": "Сделай общий вопрос."
  },
  {
    "id": "verbs-be-115-translate",
    "family": "verbs-be-115",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "Где были запасные ключи до ремонта?",
    "answers": [
      "Where were the spare keys before the renovation?"
    ],
    "model": "Where were the spare keys before the renovation?",
    "explanation": "Spare keys: множественное число; в прошедшем времени используется were.",
    "cue": "Где были запасные ключи до ремонта?",
    "base": "where / the spare keys / be / before the renovation",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-116-contrast",
    "family": "verbs-be-116",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Подбери be к разным подлежащим и временам.",
    "answers": [
      "is | were"
    ],
    "model": "The demonstration is ready now. The demonstrations were cancelled yesterday.",
    "explanation": "Единственное число сейчас: is; множественное число в прошлом: were.",
    "cue": "Подбери be к разным подлежащим и временам.",
    "base": "",
    "parts": [
      {
        "prompt": "The demonstration ___ ready now.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The demonstrations ___ cancelled yesterday.",
        "base": "be",
        "answer": "were"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-117-gap",
    "family": "verbs-be-117",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "gap",
    "level": 2,
    "prompt": "The public entrance ___ closed on Sundays.",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Entrance: единственное число; в настоящем времени нужна форма is.",
    "cue": "Главный вход закрыт по воскресеньям.",
    "base": "be",
    "choices": [
      "is",
      "are"
    ]
  },
  {
    "id": "verbs-be-118-repair",
    "family": "verbs-be-118",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "Are the request form complete and ready to submit?",
    "answers": [
      "Is the request form complete and ready to submit?"
    ],
    "model": "Is the request form complete and ready to submit?",
    "explanation": "Подлежащее form в единственном числе, поэтому вопрос начинается с is.",
    "cue": "Are the request form complete and ready to submit?",
    "base": ""
  },
  {
    "id": "verbs-be-119-transform",
    "family": "verbs-be-119",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "The instruction cards were in the top drawer.",
    "answers": [
      "The instruction card was in the top drawer."
    ],
    "model": "The instruction card was in the top drawer.",
    "explanation": "С единственным числом card в прошедшем времени используется was.",
    "cue": "The instruction cards were in the top drawer.",
    "base": "",
    "task": "Замени cards на card и согласуй be."
  },
  {
    "id": "verbs-be-120-translate",
    "family": "verbs-be-120",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "Старое здание было закрыто, но главный вход был открыт.",
    "answers": [
      "The old building was closed, but the main entrance was open."
    ],
    "model": "The old building was closed, but the main entrance was open.",
    "explanation": "Оба подлежащих в единственном числе; состояние в прошлом выражается was.",
    "cue": "Старое здание было закрыто, но главный вход был открыт.",
    "base": "the old building / closed / but / the main entrance / open",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-121-contrast",
    "family": "verbs-be-121",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни неисчисляемое equipment и существительное во множественном числе.",
    "answers": [
      "is | are"
    ],
    "model": "The new equipment is available now. The spare batteries are available now.",
    "explanation": "Equipment обычно неисчисляемое и требует is; batteries во множественном числе требуют are.",
    "cue": "Сравни неисчисляемое equipment и существительное во множественном числе.",
    "base": "",
    "parts": [
      {
        "prompt": "The new equipment ___ available now.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The spare batteries ___ available now.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-122-contrast",
    "family": "verbs-be-122",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь неисчисляемое equipment и существительное во множественном числе.",
    "answers": [
      "is | are"
    ],
    "model": "The equipment is ready for inspection. The spare cables are ready for inspection.",
    "explanation": "Equipment употребляется как неисчисляемое существительное в единственном числе: is. Cables требует are.",
    "cue": "Сопоставь неисчисляемое equipment и существительное во множественном числе.",
    "base": "",
    "parts": [
      {
        "prompt": "The equipment ___ ready for inspection.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The spare cables ___ ready for inspection.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-123-repair",
    "family": "verbs-be-123",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "The news from the island were unexpectedly good.",
    "answers": [
      "The news from the island was unexpectedly good."
    ],
    "model": "The news from the island was unexpectedly good.",
    "explanation": "News имеет форму на -s, но обычно согласуется как существительное в единственном числе.",
    "cue": "The news from the island were unexpectedly good.",
    "base": ""
  },
  {
    "id": "verbs-be-124-transform",
    "family": "verbs-be-124",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "The entrance was locked after six.",
    "answers": [
      "Was the entrance locked after six?"
    ],
    "model": "Was the entrance locked after six?",
    "explanation": "В вопросе с be вспомогательный was ставится перед подлежащим.",
    "cue": "The entrance was locked after six.",
    "base": "",
    "task": "Сделай общий вопрос."
  },
  {
    "id": "verbs-be-125-translate",
    "family": "verbs-be-125",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "Почему сотрудники были недовольны новым расписанием?",
    "answers": [
      "Why were the employees unhappy with the new schedule?"
    ],
    "model": "Why were the employees unhappy with the new schedule?",
    "explanation": "Employees: множественное число; в вопросе требуется were перед подлежащим.",
    "cue": "Почему сотрудники были недовольны новым расписанием?",
    "base": "why / the employees / unhappy / with the new schedule",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-126-contrast",
    "family": "verbs-be-126",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни количество воды и количество бутылок.",
    "answers": [
      "is | are"
    ],
    "model": "There is enough water for the trip. There are enough bottles for the trip.",
    "explanation": "В конструкции there be форма согласуется с последующим существительным: water: singular, bottles: plural.",
    "cue": "Сравни количество воды и количество бутылок.",
    "base": "",
    "parts": [
      {
        "prompt": "There ___ enough water for the trip.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "There ___ enough bottles for the trip.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-127-gap",
    "family": "verbs-be-127",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "gap",
    "level": 2,
    "prompt": "There ___ enough chairs for everyone in the studio.",
    "answers": [
      "are"
    ],
    "model": "are",
    "explanation": "После there стоит plural noun chairs, поэтому нужна форма are.",
    "cue": "В студии достаточно стульев для всех.",
    "base": "be",
    "choices": [
      "are",
      "is"
    ]
  },
  {
    "id": "verbs-be-128-repair",
    "family": "verbs-be-128",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "There is two security guards by the loading entrance.",
    "answers": [
      "There are two security guards by the loading entrance."
    ],
    "model": "There are two security guards by the loading entrance.",
    "explanation": "Форма there be согласуется с plural noun guards: are.",
    "cue": "There is two security guards by the loading entrance.",
    "base": ""
  },
  {
    "id": "verbs-be-129-transform",
    "family": "verbs-be-129",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "A single copy of the certificate is in the folder.",
    "answers": [
      "Is a single copy of the certificate in the folder?"
    ],
    "model": "Is a single copy of the certificate in the folder?",
    "explanation": "Общий вопрос с be образуется перестановкой is перед подлежащим.",
    "cue": "A single copy of the certificate is in the folder.",
    "base": "",
    "task": "Спроси, находится ли копия в папке."
  },
  {
    "id": "verbs-be-130-translate",
    "family": "verbs-be-130",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "Музей был открыт для посетителей, но кафе было закрыто.",
    "answers": [
      "The museum was open to visitors, but the café was closed."
    ],
    "model": "The museum was open to visitors, but the café was closed.",
    "explanation": "Оба подлежащих в единственном числе; для прошлого используется was.",
    "cue": "Музей был открыт для посетителей, но кафе было закрыто.",
    "base": "the museum / open to visitors / but / the café / closed",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-131-contrast",
    "family": "verbs-be-131",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни scissors и пару ножниц.",
    "answers": [
      "are | is"
    ],
    "model": "The scissors are in the top drawer. The pair of scissors is in the top drawer.",
    "explanation": "Scissors употребляется во множественном числе; в паре грамматическое подлежащее pair: единственное.",
    "cue": "Сравни scissors и пару ножниц.",
    "base": "",
    "parts": [
      {
        "prompt": "The scissors ___ in the top drawer.",
        "base": "be",
        "answer": "are"
      },
      {
        "prompt": "The pair of scissors ___ in the top drawer.",
        "base": "be",
        "answer": "is"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-132-gap",
    "family": "verbs-be-132",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "gap",
    "level": 2,
    "prompt": "One of the side doors ___ locked after 8 p.m.",
    "answers": [
      "is"
    ],
    "model": "is",
    "explanation": "Подлежащее предложения: one, поэтому используется is.",
    "cue": "Одна из боковых дверей запирается после восьми вечера.",
    "base": "be",
    "choices": [
      "is",
      "are"
    ]
  },
  {
    "id": "verbs-be-133-repair",
    "family": "verbs-be-133",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "There is three empty lockers near the loading bay.",
    "answers": [
      "There are three empty lockers near the loading bay."
    ],
    "model": "There are three empty lockers near the loading bay.",
    "explanation": "Форма there be согласуется с plural noun lockers: are.",
    "cue": "There is three empty lockers near the loading bay.",
    "base": ""
  },
  {
    "id": "verbs-be-134-transform",
    "family": "verbs-be-134",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "The lights were in the storage room.",
    "answers": [
      "The light was in the storage room."
    ],
    "model": "The light was in the storage room.",
    "explanation": "С единственным числом light используется was.",
    "cue": "The lights were in the storage room.",
    "base": "",
    "task": "Замени подлежащее на The light."
  },
  {
    "id": "verbs-be-135-translate",
    "family": "verbs-be-135",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "В конверте находятся два пропуска и одна карта доступа.",
    "answers": [
      "Two passes and one access card are in the envelope."
    ],
    "model": "Two passes and one access card are in the envelope.",
    "explanation": "В составном подлежащем есть plural noun passes, поэтому используется are.",
    "cue": "В конверте находятся два пропуска и одна карта доступа.",
    "base": "two passes / and / one access card / be / in the envelope",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-136-contrast",
    "family": "verbs-be-136",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери форму по существительному после there.",
    "answers": [
      "is | are"
    ],
    "model": "There is enough space for the boxes. There are enough seats for every visitor.",
    "explanation": "Space неисчисляемое и требует is; seats во множественном числе требует are.",
    "cue": "Выбери форму по существительному после there.",
    "base": "",
    "parts": [
      {
        "prompt": "There ___ enough space for the boxes.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "There ___ enough seats for every visitor.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-137-gap",
    "family": "verbs-be-137",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "gap",
    "level": 2,
    "prompt": "The north entrance ___ closed during the inspection yesterday.",
    "answers": [
      "was"
    ],
    "model": "was",
    "explanation": "North entrance: единственное число, а yesterday задаёт прошлое: was.",
    "cue": "Во время вчерашней проверки северный вход был закрыт.",
    "base": "be",
    "choices": [
      "was",
      "were"
    ]
  },
  {
    "id": "verbs-be-138-repair",
    "family": "verbs-be-138",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "The information on the labels are out of date.",
    "answers": [
      "The information on the labels is out of date."
    ],
    "model": "The information on the labels is out of date.",
    "explanation": "Information неисчисляемое и согласуется как единственное число: is.",
    "cue": "The information on the labels are out of date.",
    "base": ""
  },
  {
    "id": "verbs-be-139-transform",
    "family": "verbs-be-139",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "Were the spare batteries in the drawer?",
    "answers": [
      "The spare batteries were not in the drawer."
    ],
    "model": "The spare batteries were not in the drawer.",
    "explanation": "Множественное batteries согласуется с were; отрицание be образуется без did.",
    "cue": "Were the spare batteries in the drawer?",
    "base": "",
    "task": "Сделай отрицательное утверждение."
  },
  {
    "id": "verbs-be-140-translate",
    "family": "verbs-be-140",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "В шкафу нет запасных ключей.",
    "answers": [
      "There are no spare keys in the cabinet."
    ],
    "model": "There are no spare keys in the cabinet.",
    "explanation": "После there стоит plural noun keys, поэтому используется are.",
    "cue": "В шкафу нет запасных ключей.",
    "base": "there / be / no / spare keys / in the cabinet",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-141-contrast",
    "family": "verbs-be-141",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни одного участника с группой участников.",
    "answers": [
      "is | are"
    ],
    "model": "Each member is listed on the certificate. All the members are listed on the certificate.",
    "explanation": "Each member: единственное число; all the members: множественное.",
    "cue": "Сравни одного участника с группой участников.",
    "base": "",
    "parts": [
      {
        "prompt": "Each member ___ listed on the certificate.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "All the members ___ listed on the certificate.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-142-gap",
    "family": "verbs-be-142",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "gap",
    "level": 2,
    "prompt": "The scissors ___ in the top drawer, beside the ruler.",
    "answers": [
      "are"
    ],
    "model": "are",
    "explanation": "Scissors обычно употребляется как plural noun и требует are.",
    "cue": "Ножницы находятся в верхнем ящике рядом с линейкой.",
    "base": "be",
    "choices": [
      "are",
      "is"
    ]
  },
  {
    "id": "verbs-be-143-repair",
    "family": "verbs-be-143",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "repair",
    "level": 2,
    "prompt": "Why was the instructions removed from the noticeboard?",
    "answers": [
      "Why were the instructions removed from the noticeboard?"
    ],
    "model": "Why were the instructions removed from the noticeboard?",
    "explanation": "Подлежащее instructions во множественном числе, поэтому требуется were.",
    "cue": "Why was the instructions removed from the noticeboard?",
    "base": ""
  },
  {
    "id": "verbs-be-144-transform",
    "family": "verbs-be-144",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "transform",
    "level": 3,
    "prompt": "The pair of gloves was on the bench.",
    "answers": [
      "The gloves were on the bench."
    ],
    "model": "The gloves were on the bench.",
    "explanation": "При подлежащем gloves во множественном числе используется were.",
    "cue": "The pair of gloves was on the bench.",
    "base": "",
    "task": "Замени подлежащее на The gloves."
  },
  {
    "id": "verbs-be-145-translate",
    "family": "verbs-be-145",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "translate",
    "level": 3,
    "prompt": "Почему оборудование было недоступно во время проверки?",
    "answers": [
      "Why was the equipment unavailable during the inspection?"
    ],
    "model": "Why was the equipment unavailable during the inspection?",
    "explanation": "Equipment неисчисляемое и согласуется с was.",
    "cue": "Почему оборудование было недоступно во время проверки?",
    "base": "why / the equipment / unavailable / during the inspection",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-be-146-contrast",
    "family": "verbs-be-146",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни существительное на -s в единственном числе и обычное множественное число.",
    "answers": [
      "is | are"
    ],
    "model": "The news is encouraging. The updates are encouraging.",
    "explanation": "News имеет форму на -s, но обычно согласуется как единственное; updates: plural noun.",
    "cue": "Сравни существительное на -s в единственном числе и обычное множественное число.",
    "base": "",
    "parts": [
      {
        "prompt": "The news ___ encouraging.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The updates ___ encouraging.",
        "base": "be",
        "answer": "are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-be-147-gap",
    "family": "verbs-be-147",
    "topic": "verbs",
    "skill": "verbs-be",
    "mode": "gap",
    "level": 2,
    "prompt": "One of the monitors ___ offline after the update.",
    "answers": [
      "was"
    ],
    "model": "was",
    "explanation": "Грамматическое подлежащее: one, поэтому нужна форма was.",
    "cue": "После обновления один из мониторов был отключён.",
    "base": "be",
    "choices": [
      "was",
      "were"
    ]
  }
];
