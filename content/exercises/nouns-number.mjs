// Authored material for nouns-number. Keep families in ascending numeric order.
export const skillId = "nouns-number";
export const legacy = [
  {
    "id": "nouns-001",
    "family": "nouns-1",
    "topic": "nouns",
    "skill": "nouns-number",
    "prompt": "We need ___ chair.",
    "answer": "another",
    "distractor": "other",
    "explanation": "Another + единственное число.",
    "cue": "Нам нужен ещё один стул.",
    "base": "another / other",
    "alternatives": []
  },
  {
    "id": "nouns-002",
    "family": "nouns-2",
    "topic": "nouns",
    "skill": "nouns-number",
    "prompt": "The ___ chairs are in the hall.",
    "answer": "other",
    "distractor": "another",
    "explanation": "Other + множественное число.",
    "cue": "Остальные стулья в холле.",
    "base": "another / other",
    "alternatives": []
  },
  {
    "id": "nouns-003",
    "family": "nouns-3",
    "topic": "nouns",
    "skill": "nouns-number",
    "prompt": "___ people prefer tea.",
    "answer": "Most",
    "distractor": "Most of",
    "explanation": "Обобщение: most people; конкретная группа: most of the people.",
    "cue": "Большинство людей предпочитает чай.",
    "base": "most",
    "alternatives": []
  },
  {
    "id": "nouns-005",
    "family": "nouns-5",
    "topic": "nouns",
    "skill": "nouns-number",
    "prompt": "___ problems need attention.",
    "answer": "These",
    "distractor": "This",
    "explanation": "These согласуется с множественным числом.",
    "cue": "Эти проблемы требуют внимания.",
    "base": "this",
    "alternatives": []
  },
  {
    "id": "nouns-006",
    "family": "nouns-6",
    "topic": "nouns",
    "skill": "nouns-number",
    "prompt": "Every ___ has a name.",
    "answer": "file",
    "distractor": "files",
    "explanation": "Every + единственное число.",
    "cue": "У каждого файла есть имя.",
    "base": "file",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "nouns-number-101-repair",
    "family": "nouns-number-101",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "repair",
    "level": 2,
    "prompt": "Every employees have another tasks.",
    "answers": [
      "Every employee has other tasks."
    ],
    "model": "Every employee has other tasks.",
    "explanation": "Every + singular + has; tasks требует other.",
    "cue": "Every employees have another tasks.",
    "base": ""
  },
  {
    "id": "nouns-number-102-transform",
    "family": "nouns-number-102",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "transform",
    "level": 3,
    "prompt": "We need another reviewer.",
    "answers": [
      "We need other reviewers."
    ],
    "model": "We need other reviewers.",
    "explanation": "Another с singular; other с plural.",
    "cue": "We need another reviewer.",
    "base": "",
    "task": "Замени reviewer на reviewers."
  },
  {
    "id": "nouns-number-103-repair",
    "family": "nouns-number-103",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "repair",
    "level": 2,
    "prompt": "Every departments has a clear process for urgent requests.",
    "answers": [
      "Every department has a clear process for urgent requests."
    ],
    "model": "Every department has a clear process for urgent requests.",
    "explanation": "Every требует существительное в единственном числе: department.",
    "cue": "Every departments has a clear process for urgent requests.",
    "base": ""
  },
  {
    "id": "nouns-number-104-transform",
    "family": "nouns-number-104",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "transform",
    "level": 3,
    "prompt": "We need another reviewer before the final check.",
    "answers": [
      "We need other reviewers before the final check."
    ],
    "model": "We need other reviewers before the final check.",
    "explanation": "Another сочетается с единственным числом; перед reviewers во множественном числе нужно other.",
    "cue": "We need another reviewer before the final check.",
    "base": "",
    "task": "Замени reviewer на reviewers и согласуй определитель."
  },
  {
    "id": "nouns-number-105-translate",
    "family": "nouns-number-105",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "translate",
    "level": 3,
    "prompt": "Большинство людей предпочитает читать полный отчёт.",
    "answers": [
      "Most people prefer to read the full report."
    ],
    "model": "Most people prefer to read the full report.",
    "explanation": "Для обобщения используется Most people без of; после prefer здесь нужна форма to read.",
    "cue": "Большинство людей предпочитает читать полный отчёт.",
    "base": "most / people / prefer to read / the full report",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-number-106-contrast",
    "family": "nouns-number-106",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "contrast",
    "level": 3,
    "prompt": "В первой строке обобщи; во второй заполни форму после уже данного most of.",
    "answers": [
      "Most people | the people"
    ],
    "model": "Most people use the mobile version for quick checks. Most of the people on our team use the mobile version.",
    "explanation": "Для обобщения используется most people. Перед конкретной ранее названной группой после most of нужен the: most of the people.",
    "cue": "В первой строке обобщи; во второй заполни форму после уже данного most of.",
    "base": "",
    "parts": [
      {
        "prompt": "___ use the mobile version for quick checks.",
        "base": "most people",
        "answer": "Most people"
      },
      {
        "prompt": "Most of ___ on our team use the mobile version.",
        "base": "the people",
        "answer": "the people"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-number-107-gap",
    "family": "nouns-number-107",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "gap",
    "level": 2,
    "prompt": "___ files need clear names before they are archived.",
    "answers": [
      "These"
    ],
    "model": "These",
    "explanation": "Перед существительным во множественном числе можно использовать these.",
    "cue": "Этим файлам нужны понятные имена до архивации.",
    "base": "this",
    "choices": [
      "These",
      "This"
    ]
  },
  {
    "id": "nouns-number-108-repair",
    "family": "nouns-number-108",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "repair",
    "level": 2,
    "prompt": "Each passengers must show their ticket before boarding.",
    "answers": [
      "Each passenger must show their ticket before boarding."
    ],
    "model": "Each passenger must show their ticket before boarding.",
    "explanation": "Each требует существительное в единственном числе: passenger. Singular they допустимо для неизвестного пассажира.",
    "cue": "Each passengers must show their ticket before boarding.",
    "base": ""
  },
  {
    "id": "nouns-number-109-transform",
    "family": "nouns-number-109",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "transform",
    "level": 3,
    "prompt": "We need one more folder.",
    "answers": [
      "We need another folder."
    ],
    "model": "We need another folder.",
    "explanation": "Another употребляется перед исчисляемым существительным в единственном числе.",
    "cue": "We need one more folder.",
    "base": "",
    "task": "Замени one more на another, остальные слова сохрани."
  },
  {
    "id": "nouns-number-110-translate",
    "family": "nouns-number-110",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "translate",
    "level": 3,
    "prompt": "Оба сотрудника проверили другие документы.",
    "answers": [
      "Both employees checked other documents."
    ],
    "model": "Both employees checked other documents.",
    "explanation": "Both требует множественного числа; other перед исчисляемым существительным во множественном числе.",
    "cue": "Оба сотрудника проверили другие документы.",
    "base": "both / employee / check / other / document",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-number-111-contrast",
    "family": "nouns-number-111",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери форму существительного после каждого определителя.",
    "answers": [
      "box | boxes"
    ],
    "model": "Every box has a numbered label. All the boxes have numbered labels.",
    "explanation": "Every + единственное число; all the + множественное число.",
    "cue": "Выбери форму существительного после каждого определителя.",
    "base": "",
    "parts": [
      {
        "prompt": "Every ___ has a numbered label.",
        "base": "box",
        "answer": "box"
      },
      {
        "prompt": "All the ___ have numbered labels.",
        "base": "box",
        "answer": "boxes"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-number-112-gap",
    "family": "nouns-number-112",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "gap",
    "level": 2,
    "prompt": "Neither ___ was available during the inventory.",
    "answers": [
      "shelf"
    ],
    "model": "shelf",
    "explanation": "Neither в этом значении относится к одному из двух предметов; после него единственное число.",
    "cue": "Ни одна полка не была доступна во время инвентаризации.",
    "base": "shelf",
    "choices": [
      "shelf",
      "shelves"
    ]
  },
  {
    "id": "nouns-number-113-repair",
    "family": "nouns-number-113",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "repair",
    "level": 2,
    "prompt": "There are much chairs in the waiting area.",
    "answers": [
      "There are many chairs in the waiting area."
    ],
    "model": "There are many chairs in the waiting area.",
    "explanation": "Many употребляется с исчисляемым существительным во множественном числе: chairs.",
    "cue": "There are much chairs in the waiting area.",
    "base": ""
  },
  {
    "id": "nouns-number-114-transform",
    "family": "nouns-number-114",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "transform",
    "level": 3,
    "prompt": "This key opens the storage cabinet.",
    "answers": [
      "These keys open the storage cabinets."
    ],
    "model": "These keys open the storage cabinets.",
    "explanation": "These требует множественное число; opens меняется на open, cabinet: на cabinets.",
    "cue": "This key opens the storage cabinet.",
    "base": "",
    "task": "Замени This key на These keys, согласуй глагол и дополнение."
  },
  {
    "id": "nouns-number-115-translate",
    "family": "nouns-number-115",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "translate",
    "level": 3,
    "prompt": "Каждая коробка содержит две запасные лампы.",
    "answers": [
      "Each box contains two spare lamps."
    ],
    "model": "Each box contains two spare lamps.",
    "explanation": "Each box: единственное число, поэтому contains; после two нужно lamps.",
    "cue": "Каждая коробка содержит две запасные лампы.",
    "base": "each / box / contain / two / spare lamp",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-number-116-contrast",
    "family": "nouns-number-116",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни выбор одного дополнительного предмета и нескольких других предметов.",
    "answers": [
      "another | other"
    ],
    "model": "Please bring another copy for the new visitor. Please bring other copies for the new visitors.",
    "explanation": "Another + исчисляемое существительное в единственном числе; other + множественное число.",
    "cue": "Сравни выбор одного дополнительного предмета и нескольких других предметов.",
    "base": "",
    "parts": [
      {
        "prompt": "Please bring ___ copy for the new visitor.",
        "base": "another",
        "answer": "another"
      },
      {
        "prompt": "Please bring ___ copies for the new visitors.",
        "base": "other",
        "answer": "other"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-number-117-choice",
    "family": "nouns-number-117",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери правильную просьбу о нескольких дополнительных стульях.",
    "answers": [
      "Could we get some other chairs for the back row?"
    ],
    "model": "Could we get some other chairs for the back row?",
    "explanation": "Перед chairs во множественном числе подходит other; another потребовал бы единственное число.",
    "cue": "Выбери правильную просьбу о нескольких дополнительных стульях.",
    "base": "",
    "task": "Выбери предложение с верным определителем.",
    "choices": [
      "Could we get some other chairs for the back row?",
      "Could we get another chairs for the back row?",
      "Could we get some others chair for the back row?"
    ]
  },
  {
    "id": "nouns-number-118-repair",
    "family": "nouns-number-118",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "repair",
    "level": 2,
    "prompt": "Most of students in the evening class work nearby.",
    "answers": [
      "Most students in the evening class work nearby."
    ],
    "model": "Most students in the evening class work nearby.",
    "explanation": "Для обобщения употребляется most + plural noun; most of требует конкретную группу с the/these/them.",
    "cue": "Most of students in the evening class work nearby.",
    "base": ""
  },
  {
    "id": "nouns-number-119-transform",
    "family": "nouns-number-119",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "transform",
    "level": 3,
    "prompt": "Most of the local residents use the cycle path.",
    "answers": [
      "Most residents use the cycle path."
    ],
    "model": "Most residents use the cycle path.",
    "explanation": "При общем значении перед plural noun ставится most без of the.",
    "cue": "Most of the local residents use the cycle path.",
    "base": "",
    "task": "Сделай обобщённое утверждение без указания на конкретную группу."
  },
  {
    "id": "nouns-number-120-translate",
    "family": "nouns-number-120",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "translate",
    "level": 3,
    "prompt": "До окончания выставки осталось ещё четыре дня.",
    "answers": [
      "Another four days remain until the exhibition ends."
    ],
    "model": "Another four days remain until the exhibition ends.",
    "explanation": "Another перед числом может употребляться с plural noun: another four days.",
    "cue": "До окончания выставки осталось ещё четыре дня.",
    "base": "another / four / days / remain / until the exhibition ends",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-number-121-contrast",
    "family": "nouns-number-121",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи оставшийся определённый предмет и другие неопределённые предметы.",
    "answers": [
      "the other printer | other"
    ],
    "model": "We have two printers: one is upstairs; the other printer is in reception. The technician is checking other printers before opening.",
    "explanation": "The other указывает на оставшийся предмет из определённой пары; other перед неопределённым plural noun.",
    "cue": "Различи оставшийся определённый предмет и другие неопределённые предметы.",
    "base": "",
    "parts": [
      {
        "prompt": "We have two printers: one is upstairs; ___ is in reception.",
        "base": "the other",
        "answer": "the other printer"
      },
      {
        "prompt": "The technician is checking ___ printers before opening.",
        "base": "other",
        "answer": "other"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-number-122-gap",
    "family": "nouns-number-122",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "gap",
    "level": 2,
    "prompt": "Each of the six lockers ___ a separate key.",
    "answers": [
      "has"
    ],
    "model": "has",
    "explanation": "Each of + plural noun сохраняет значение единственного числа: each ... has.",
    "cue": "У каждого из шести шкафчиков есть отдельный ключ.",
    "base": "have",
    "choices": [
      "has",
      "have"
    ]
  },
  {
    "id": "nouns-number-123-repair",
    "family": "nouns-number-123",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "repair",
    "level": 2,
    "prompt": "My cousin works as engineer at the city hospital.",
    "answers": [
      "My cousin works as an engineer at the city hospital."
    ],
    "model": "My cousin works as an engineer at the city hospital.",
    "explanation": "Перед исчисляемым существительным в единственном числе engineer нужен неопределённый артикль an.",
    "cue": "My cousin works as engineer at the city hospital.",
    "base": ""
  },
  {
    "id": "nouns-number-124-transform",
    "family": "nouns-number-124",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "transform",
    "level": 3,
    "prompt": "The other chairs are stored behind the stage.",
    "answers": [
      "Another chair is stored behind the stage."
    ],
    "model": "Another chair is stored behind the stage.",
    "explanation": "Another употребляется перед countable singular noun.",
    "cue": "The other chairs are stored behind the stage.",
    "base": "",
    "task": "Скажи об одном дополнительном стуле, замени the other chairs."
  },
  {
    "id": "nouns-number-125-translate",
    "family": "nouns-number-125",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "translate",
    "level": 3,
    "prompt": "Каждый из этих четырёх маршрутов занимает около часа.",
    "answers": [
      "Each of these four routes takes about an hour."
    ],
    "model": "Each of these four routes takes about an hour.",
    "explanation": "После each of используется plural noun, но глагол согласуется с each: takes.",
    "cue": "Каждый из этих четырёх маршрутов занимает около часа.",
    "base": "each / these four routes / take / about an hour",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-number-126-contrast",
    "family": "nouns-number-126",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни обобщение и конкретно определённую группу.",
    "answers": [
      "Most | Most of"
    ],
    "model": "Most residents in this district use the tram. Most of the residents in this building use the lift.",
    "explanation": "Обобщение: most residents. Конкретная группа с the: most of the residents.",
    "cue": "Сравни обобщение и конкретно определённую группу.",
    "base": "",
    "parts": [
      {
        "prompt": "___ residents in this district use the tram.",
        "base": "most",
        "answer": "Most"
      },
      {
        "prompt": "___ the residents in this building use the lift.",
        "base": "most of",
        "answer": "Most of"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-number-127-gap",
    "family": "nouns-number-127",
    "topic": "nouns",
    "skill": "nouns-number",
    "mode": "gap",
    "level": 2,
    "prompt": "We saw ___ owl near the old stone wall.",
    "answers": [
      "an"
    ],
    "model": "an",
    "explanation": "Перед owl употребляется an, потому что слово начинается с гласного звука.",
    "cue": "Мы увидели сову возле старой каменной стены.",
    "base": "owl",
    "choices": [
      "an",
      "a"
    ]
  }
];
