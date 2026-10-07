// Authored material for reference-object. Keep families in ascending numeric order.
export const skillId = "reference-object";
export const legacy = [
  {
    "id": "reference-002",
    "family": "reference-2",
    "topic": "reference",
    "skill": "reference-object",
    "prompt": "The device ___ broke is old.",
    "answer": "which",
    "distractor": "who",
    "explanation": "Which относится к предмету.",
    "cue": "Устройство, которое сломалось, старое.",
    "base": "местоимение для предмета",
    "alternatives": [
      "that"
    ]
  },
  {
    "id": "reference-008",
    "family": "reference-8",
    "topic": "reference",
    "skill": "reference-object",
    "prompt": "The company changed ___ logo.",
    "answer": "its",
    "distractor": "their",
    "explanation": "Здесь company: единая организация: its.",
    "cue": "Компания изменила свой логотип.",
    "base": "it",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "reference-object-101-repair",
    "family": "reference-object-101",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "repair",
    "level": 2,
    "prompt": "The system changed it's default settings.",
    "answers": [
      "The system changed its default settings."
    ],
    "model": "The system changed its default settings.",
    "explanation": "Its: принадлежность; it’s: it is/it has.",
    "cue": "The system changed it's default settings.",
    "base": ""
  },
  {
    "id": "reference-object-102-translate",
    "family": "reference-object-102",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Это устройство, которое мы заменили вчера.",
    "answers": [
      "This is the device which we replaced yesterday.",
      "This is the device that we replaced yesterday."
    ],
    "model": "This is the device which we replaced yesterday.",
    "explanation": "Which относится к устройству; also that допустимо.",
    "cue": "Это устройство, которое мы заменили вчера.",
    "base": "this / the device / which / we / replace / yesterday",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-object-103-repair",
    "family": "reference-object-103",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "repair",
    "level": 2,
    "prompt": "Each device stores it's own settings in a separate file.",
    "answers": [
      "Each device stores its own settings in a separate file."
    ],
    "model": "Each device stores its own settings in a separate file.",
    "explanation": "Its обозначает принадлежность; it’s означает it is или it has.",
    "cue": "Each device stores it's own settings in a separate file.",
    "base": ""
  },
  {
    "id": "reference-object-104-transform",
    "family": "reference-object-104",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "transform",
    "level": 3,
    "prompt": "The workstation has changed its default settings.",
    "answers": [
      "The workstations have changed their default settings."
    ],
    "model": "The workstations have changed their default settings.",
    "explanation": "Множественному workstations соответствует their; также меняется have.",
    "cue": "The workstation has changed its default settings.",
    "base": "",
    "task": "Замени The workstation на The workstations и согласуй притяжательное местоимение."
  },
  {
    "id": "reference-object-105-translate",
    "family": "reference-object-105",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Это устройство, которое мы заменили перед испытанием.",
    "answers": [
      "This is the device which we replaced before the test.",
      "This is the device that we replaced before the test."
    ],
    "model": "This is the device which we replaced before the test.",
    "explanation": "Which относится к предмету; в относительной части сохраняется прямой порядок слов. Также допустимо that.",
    "cue": "Это устройство, которое мы заменили перед испытанием.",
    "base": "this / the device / which / we / replace / before the test",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-object-106-gap",
    "family": "reference-object-106",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "gap",
    "level": 2,
    "prompt": "The workstation has ___ own dedicated screen.",
    "answers": [
      "its"
    ],
    "model": "its",
    "explanation": "Перед own нужно притяжательное its: оно относится к workstation.",
    "cue": "У этой рабочей станции есть собственный отдельный экран.",
    "base": "it",
    "choices": [
      "its",
      "their"
    ]
  },
  {
    "id": "reference-object-107-repair",
    "family": "reference-object-107",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "repair",
    "level": 2,
    "prompt": "The device lost it's cover during the move.",
    "answers": [
      "The device lost its cover during the move."
    ],
    "model": "The device lost its cover during the move.",
    "explanation": "Its показывает принадлежность; it’s: сокращение it is или it has.",
    "cue": "The device lost it's cover during the move.",
    "base": ""
  },
  {
    "id": "reference-object-108-transform",
    "family": "reference-object-108",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "transform",
    "level": 3,
    "prompt": "The folders belong to the archive team. The folders are on the lower shelf.",
    "answers": [
      "The folders, which belong to the archive team, are on the lower shelf."
    ],
    "model": "The folders, which belong to the archive team, are on the lower shelf.",
    "explanation": "Which относится к предметам; придаточное здесь добавляет пояснение.",
    "cue": "The folders belong to the archive team. The folders are on the lower shelf.",
    "base": "",
    "task": "Объедини с which, не повторяй folders."
  },
  {
    "id": "reference-object-109-translate",
    "family": "reference-object-109",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Это кабель, который соединяет камеру с монитором.",
    "answers": [
      "This is the cable which connects the camera to the monitor.",
      "This is the cable that connects the camera to the monitor."
    ],
    "model": "This is the cable which connects the camera to the monitor.",
    "explanation": "Which относится к предмету cable; глагол connects согласуется с единственным числом.",
    "cue": "Это кабель, который соединяет камеру с монитором.",
    "base": "this / be / the cable / which / connect / the camera / to the monitor",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-object-110-contrast",
    "family": "reference-object-110",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Подбери притяжательное слово к владельцу.",
    "answers": [
      "its | their"
    ],
    "model": "The robot returned to its charging station. The workers returned to their lockers.",
    "explanation": "Its относится к robot; their: к workers.",
    "cue": "Подбери притяжательное слово к владельцу.",
    "base": "",
    "parts": [
      {
        "prompt": "The robot returned to ___ charging station.",
        "base": "its",
        "answer": "its"
      },
      {
        "prompt": "The workers returned to ___ lockers.",
        "base": "their",
        "answer": "their"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-object-111-gap",
    "family": "reference-object-111",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "gap",
    "level": 2,
    "prompt": "The company updated ___ privacy policy last month.",
    "answers": [
      "its"
    ],
    "model": "its",
    "explanation": "Its: притяжательное слово для организации company; it’s означало бы it is/has.",
    "cue": "В прошлом месяце компания обновила свою политику конфиденциальности.",
    "base": "company",
    "choices": [
      "its",
      "it’s"
    ]
  },
  {
    "id": "reference-object-112-repair",
    "family": "reference-object-112",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "repair",
    "level": 2,
    "prompt": "The photographs which we took them at the coast are in this album.",
    "answers": [
      "The photographs which we took at the coast are in this album."
    ],
    "model": "The photographs which we took at the coast are in this album.",
    "explanation": "Which уже представляет photographs в придаточном; лишнее them повторяет то же дополнение.",
    "cue": "The photographs which we took them at the coast are in this album.",
    "base": ""
  },
  {
    "id": "reference-object-113-transform",
    "family": "reference-object-113",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "transform",
    "level": 3,
    "prompt": "The alarm has a sensor. The sensor detects smoke.",
    "answers": [
      "The alarm has a sensor which detects smoke."
    ],
    "model": "The alarm has a sensor which detects smoke.",
    "explanation": "Which заменяет sensor как подлежащее придаточной части.",
    "cue": "The alarm has a sensor. The sensor detects smoke.",
    "base": "",
    "task": "Объедини с which."
  },
  {
    "id": "reference-object-114-translate",
    "family": "reference-object-114",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Я не могу найти адаптер, который ты оставил на столе.",
    "answers": [
      "I cannot find the adapter which you left on the desk.",
      "I cannot find the adapter that you left on the desk."
    ],
    "model": "I cannot find the adapter which you left on the desk.",
    "explanation": "Which относится к adapter; leave в завершённом прошлом: left.",
    "cue": "Я не могу найти адаптер, который ты оставил на столе.",
    "base": "I / cannot find / the adapter / which / you / leave / on the desk",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-object-115-contrast",
    "family": "reference-object-115",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи принадлежность устройства и предмет во множественном числе.",
    "answers": [
      "its | their"
    ],
    "model": "Each tablet stores its settings locally. The tablets store their settings locally.",
    "explanation": "Its относится к each tablet в единственном числе; their: к tablets во множественном.",
    "cue": "Различи принадлежность устройства и предмет во множественном числе.",
    "base": "",
    "parts": [
      {
        "prompt": "Each tablet stores ___ settings locally.",
        "base": "its",
        "answer": "its"
      },
      {
        "prompt": "The tablets store ___ settings locally.",
        "base": "their",
        "answer": "their"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-object-116-choice",
    "family": "reference-object-116",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери предложение, где it’s означает it is.",
    "answers": [
      "It’s ready, but its cable is missing."
    ],
    "model": "It’s ready, but its cable is missing.",
    "explanation": "В первой части можно развернуть it’s как it is; во второй its обозначает принадлежность кабеля.",
    "cue": "Выбери предложение, где it’s означает it is.",
    "base": "",
    "task": "Выбери вариант, где формы it’s и its употреблены верно.",
    "choices": [
      "It’s ready, but its cable is missing.",
      "Its ready, but it’s cable is missing.",
      "It’s ready, but it’s cable is missing."
    ]
  },
  {
    "id": "reference-object-117-repair",
    "family": "reference-object-117",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "repair",
    "level": 2,
    "prompt": "The device lost it's protective cover during transit.",
    "answers": [
      "The device lost its protective cover during transit."
    ],
    "model": "The device lost its protective cover during transit.",
    "explanation": "Its показывает принадлежность; it’s означает it is или it has.",
    "cue": "The device lost it's protective cover during transit.",
    "base": ""
  },
  {
    "id": "reference-object-118-transform",
    "family": "reference-object-118",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "transform",
    "level": 3,
    "prompt": "This is the tablet. Its battery lasts all day.",
    "answers": [
      "This is the tablet whose battery lasts all day."
    ],
    "model": "This is the tablet whose battery lasts all day.",
    "explanation": "Whose может показывать принадлежность предмету tablet.",
    "cue": "This is the tablet. Its battery lasts all day.",
    "base": "",
    "task": "Объедини с whose."
  },
  {
    "id": "reference-object-119-translate",
    "family": "reference-object-119",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Это камера, которую мы купили для экспедиции.",
    "answers": [
      "This is the camera that we bought for the expedition.",
      "This is the camera which we bought for the expedition.",
      "This is the camera that we bought for the expedition."
    ],
    "model": "This is the camera that we bought for the expedition.",
    "explanation": "That относится к предмету camera; buy в завершённом прошлом: bought.",
    "cue": "Это камера, которую мы купили для экспедиции.",
    "base": "this / be / the camera / that / we / buy / for the expedition",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-object-120-contrast",
    "family": "reference-object-120",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи притяжательное their и сокращение they are.",
    "answers": [
      "their | They are"
    ],
    "model": "The sensors send data to their control unit. They are sending a warning to the control unit now.",
    "explanation": "Their показывает принадлежность; they are: местоимение + be.",
    "cue": "Различи притяжательное their и сокращение they are.",
    "base": "",
    "parts": [
      {
        "prompt": "The sensors send data to ___ control unit.",
        "base": "their",
        "answer": "their"
      },
      {
        "prompt": "___ sending a warning to the control unit now.",
        "base": "they are",
        "answer": "They are"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-object-121-gap",
    "family": "reference-object-121",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "gap",
    "level": 2,
    "prompt": "The router turns ___ off when the room is empty.",
    "answers": [
      "itself"
    ],
    "model": "itself",
    "explanation": "Itself: возвратное местоимение, относящееся к единственному router.",
    "cue": "Маршрутизатор выключается сам, когда комната пустует.",
    "base": "it",
    "choices": [
      "itself",
      "themselves"
    ]
  },
  {
    "id": "reference-object-122-repair",
    "family": "reference-object-122",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "repair",
    "level": 2,
    "prompt": "The report that we printed it yesterday is on your desk.",
    "answers": [
      "The report that we printed yesterday is on your desk.",
      "The report we printed yesterday is on your desk."
    ],
    "model": "The report that we printed yesterday is on your desk.",
    "explanation": "That уже представляет report как дополнение в придаточном; it дублирует тот же объект.",
    "cue": "The report that we printed it yesterday is on your desk.",
    "base": ""
  },
  {
    "id": "reference-object-123-transform",
    "family": "reference-object-123",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "transform",
    "level": 3,
    "prompt": "The control unit has three cables. The cables connect the unit to its power supply.",
    "answers": [
      "The control unit has three cables which connect it to its power supply."
    ],
    "model": "The control unit has three cables which connect it to its power supply.",
    "explanation": "Which заменяет cables как подлежащее придаточной части.",
    "cue": "The control unit has three cables. The cables connect the unit to its power supply.",
    "base": "",
    "task": "Объедини с which, не повторяя cables."
  },
  {
    "id": "reference-object-124-translate",
    "family": "reference-object-124",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "translate",
    "level": 3,
    "prompt": "Я убрал запасной ключ в его обычное место.",
    "answers": [
      "I put the spare key in its usual place.",
      "I put the spare key in its usual place."
    ],
    "model": "I put the spare key in its usual place.",
    "explanation": "Its показывает принадлежность/связь места с предметом; it’s означало бы it is/has.",
    "cue": "Я убрал запасной ключ в его обычное место.",
    "base": "I / put / the spare key / in / its usual place",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "reference-object-125-contrast",
    "family": "reference-object-125",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни место, где находятся предметы, и принадлежность.",
    "answers": [
      "there | their"
    ],
    "model": "The spare keys are over there, beside the tray. The documents are back in their folder.",
    "explanation": "There указывает на место; their перед существительным показывает принадлежность.",
    "cue": "Сравни место, где находятся предметы, и принадлежность.",
    "base": "",
    "parts": [
      {
        "prompt": "The spare keys are over ___, beside the tray.",
        "base": "there",
        "answer": "there"
      },
      {
        "prompt": "The documents are back in ___ folder.",
        "base": "their",
        "answer": "their"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "reference-object-126-gap",
    "family": "reference-object-126",
    "topic": "reference",
    "skill": "reference-object",
    "mode": "gap",
    "level": 2,
    "prompt": "Each package includes a label with ___ tracking number.",
    "answers": [
      "its"
    ],
    "model": "its",
    "explanation": "Each package: единственное число; принадлежность выражает its.",
    "cue": "В каждой посылке есть этикетка с её номером отслеживания.",
    "base": "it",
    "choices": [
      "its",
      "it’s"
    ]
  }
];
