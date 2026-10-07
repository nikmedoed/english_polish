// Authored material for verbs-aspect. Keep families in ascending numeric order.
export const skillId = "verbs-aspect";
export const legacy = [
  {
    "id": "verbs-009",
    "family": "verbs-9",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "prompt": "I ___ reading right now.",
    "answer": "am",
    "distractor": "do",
    "explanation": "Чтение идёт прямо сейчас: показываем процесс, поэтому I am reading. I read означало бы привычку, например I read every evening.",
    "cue": "Я сейчас читаю.",
    "base": "be",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "verbs-aspect-101-contrast",
    "family": "verbs-aspect-101",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Обычная работа и временная ситуация.",
    "answers": [
      "works | is working | works | is working"
    ],
    "model": "She usually works from the office. This week, she is working from home. She works from the office every Monday. Please call later; she is working with a client right now.",
    "explanation": "Обычная работа: works. Временное действие на этой неделе: is working. Дополнительные контексты: every/normally обозначают привычку; right now/for this week only: текущий или временный процесс.",
    "cue": "Обычная работа и временная ситуация.",
    "base": "",
    "parts": [
      {
        "prompt": "She usually ___ from the office.",
        "base": "work",
        "answer": "works"
      },
      {
        "prompt": "This week, she ___ from home.",
        "base": "work",
        "answer": "is working"
      },
      {
        "prompt": "She ___ from the office every Monday.",
        "base": "work",
        "answer": "works"
      },
      {
        "prompt": "Please call later; she ___ with a client right now.",
        "base": "work",
        "answer": "is working"
      }
    ],
    "shuffleParts": true
  },
  {
    "id": "verbs-aspect-102-contrast",
    "family": "verbs-aspect-102",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Регулярная проверка и процесс прямо сейчас.",
    "answers": [
      "review | are reviewing | review | are reviewing"
    ],
    "model": "We review the figures every Friday. At the moment, we are reviewing the latest figures. We review each report before it is published. Please wait; we are reviewing your application right now.",
    "explanation": "Every Friday: «каждую пятницу»: это регулярная проверка, поэтому we review (Present Simple). At the moment: «сейчас»: проверка идёт в момент речи, поэтому we are reviewing (Present Continuous). Each report before it is published: обычный порядок работы, review. Right now: процесс прямо сейчас, are reviewing.",
    "cue": "Регулярная проверка и процесс прямо сейчас.",
    "base": "",
    "parts": [
      {
        "prompt": "We ___ the figures every Friday.",
        "base": "review",
        "answer": "review"
      },
      {
        "prompt": "At the moment, we ___ the latest figures.",
        "base": "review",
        "answer": "are reviewing"
      },
      {
        "prompt": "We ___ each report before it is published.",
        "base": "review",
        "answer": "review"
      },
      {
        "prompt": "Please wait; we ___ your application right now.",
        "base": "review",
        "answer": "are reviewing"
      }
    ],
    "shuffleParts": true
  },
  {
    "id": "verbs-aspect-103-repair",
    "family": "verbs-aspect-103",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "I don't working on the report right now.",
    "answers": [
      "I'm not working on the report right now."
    ],
    "model": "I'm not working on the report right now.",
    "explanation": "Для процесса: am not + working.",
    "cue": "I don't working on the report right now.",
    "base": ""
  },
  {
    "id": "verbs-aspect-104-translate",
    "family": "verbs-aspect-104",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "Она сейчас проверяет договор.",
    "answers": [
      "She is checking the contract right now."
    ],
    "model": "She is checking the contract right now.",
    "explanation": "Процесс в момент речи: is checking.",
    "cue": "Она сейчас проверяет договор.",
    "base": "she / check / the contract / right now",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-105-transform",
    "family": "verbs-aspect-105",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "The manager is reviewing the applications.",
    "answers": [
      "Is the manager reviewing the applications?"
    ],
    "model": "Is the manager reviewing the applications?",
    "explanation": "В Continuous перемещается is, форма reviewing сохраняется.",
    "cue": "The manager is reviewing the applications.",
    "base": "",
    "task": "Сделай вопрос."
  },
  {
    "id": "verbs-aspect-106-repair",
    "family": "verbs-aspect-106",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "Our system is stores all changes automatically.",
    "answers": [
      "Our system stores all changes automatically."
    ],
    "model": "Our system stores all changes automatically.",
    "explanation": "Регулярная функция системы: stores без is.",
    "cue": "Our system is stores all changes automatically.",
    "base": ""
  },
  {
    "id": "verbs-aspect-107-contrast",
    "family": "verbs-aspect-107",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Отличи постоянную услугу от временного изменения на этой неделе.",
    "answers": [
      "offers | is offering | offers | is offering"
    ],
    "model": "The clinic usually offers evening appointments. This week, the clinic is offering a temporary evening service. The clinic offers free checkups every spring. For this week only, the clinic is offering free evening checkups.",
    "explanation": "Usually описывает постоянную услугу: offers. This week задаёт временный процесс: is offering. Дополнительные контексты: every/normally обозначают привычку; right now/for this week only: текущий или временный процесс.",
    "cue": "Отличи постоянную услугу от временного изменения на этой неделе.",
    "base": "",
    "parts": [
      {
        "prompt": "The clinic usually ___ evening appointments.",
        "base": "offer",
        "answer": "offers"
      },
      {
        "prompt": "This week, the clinic ___ a temporary evening service.",
        "base": "offer",
        "answer": "is offering"
      },
      {
        "prompt": "The clinic ___ free checkups every spring.",
        "base": "offer",
        "answer": "offers"
      },
      {
        "prompt": "For this week only, the clinic ___ free evening checkups.",
        "base": "offer",
        "answer": "is offering"
      }
    ],
    "shuffleParts": true
  },
  {
    "id": "verbs-aspect-108-repair",
    "family": "verbs-aspect-108",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "Our editors are review the final copy every Friday.",
    "answers": [
      "Our editors review the final copy every Friday."
    ],
    "model": "Our editors review the final copy every Friday.",
    "explanation": "Повторяющееся действие с every Friday выражается Present Simple: review без are.",
    "cue": "Our editors are review the final copy every Friday.",
    "base": ""
  },
  {
    "id": "verbs-aspect-109-transform",
    "family": "verbs-aspect-109",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "The assistant is checking incoming orders right now.",
    "answers": [
      "The assistant checks incoming orders every morning."
    ],
    "model": "The assistant checks incoming orders every morning.",
    "explanation": "Every morning задаёт привычку: Present Simple checks, без is.",
    "cue": "The assistant is checking incoming orders right now.",
    "base": "",
    "task": "Опиши её обычную обязанность: она проверяет входящие заказы каждое утро."
  },
  {
    "id": "verbs-aspect-110-translate",
    "family": "verbs-aspect-110",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "Сейчас архитектор обсуждает изменения с командой.",
    "answers": [
      "The architect is discussing the changes with the team right now."
    ],
    "model": "The architect is discussing the changes with the team right now.",
    "explanation": "Right now указывает на процесс в момент речи: is + discussing.",
    "cue": "Сейчас архитектор обсуждает изменения с командой.",
    "base": "the architect / discuss / the changes / with the team / right now",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-111-gap",
    "family": "verbs-aspect-111",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "gap",
    "level": 2,
    "prompt": "For the next two weeks, our team ___ a new filing system.",
    "answers": [
      "is testing"
    ],
    "model": "is testing",
    "explanation": "Ограниченный период обозначает временный процесс: is + testing.",
    "cue": "В ближайшие две недели наша команда тестирует новую систему хранения.",
    "base": "test",
    "choices": [
      "is testing",
      "is test"
    ]
  },
  {
    "id": "verbs-aspect-112-contrast",
    "family": "verbs-aspect-112",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь повторяющуюся проверку и действие в момент речи.",
    "answers": [
      "check | am checking | check | am checking"
    ],
    "model": "I check the inventory every Thursday. I am checking the inventory at the moment. I check every delivery before signing for it. Please wait; I am checking the delivery right now.",
    "explanation": "Every Thursday: регулярность, поэтому check. At the moment: текущий процесс, поэтому am checking. Дополнительные контексты: every/normally обозначают привычку; right now/for this week only: текущий или временный процесс.",
    "cue": "Сопоставь повторяющуюся проверку и действие в момент речи.",
    "base": "",
    "parts": [
      {
        "prompt": "I ___ the inventory every Thursday.",
        "base": "check",
        "answer": "check"
      },
      {
        "prompt": "I ___ the inventory at the moment.",
        "base": "check",
        "answer": "am checking"
      },
      {
        "prompt": "I ___ every delivery before signing for it.",
        "base": "check",
        "answer": "check"
      },
      {
        "prompt": "Please wait; I ___ the delivery right now.",
        "base": "check",
        "answer": "am checking"
      }
    ],
    "shuffleParts": true
  },
  {
    "id": "verbs-aspect-113-repair",
    "family": "verbs-aspect-113",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "Right now, the mechanic checks the brakes before the test.",
    "answers": [
      "Right now, the mechanic is checking the brakes before the test."
    ],
    "model": "Right now, the mechanic is checking the brakes before the test.",
    "explanation": "Right now показывает процесс в момент речи: is checking.",
    "cue": "Right now, the mechanic checks the brakes before the test.",
    "base": ""
  },
  {
    "id": "verbs-aspect-114-transform",
    "family": "verbs-aspect-114",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "The designer is testing a new layout at the moment.",
    "answers": [
      "The designer tests a new layout every Monday."
    ],
    "model": "The designer tests a new layout every Monday.",
    "explanation": "Every Monday задаёт привычку: Present Simple tests, без is.",
    "cue": "The designer is testing a new layout at the moment.",
    "base": "",
    "task": "Опиши её обычную задачу по понедельникам."
  },
  {
    "id": "verbs-aspect-115-translate",
    "family": "verbs-aspect-115",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "Я обычно печатаю отчёты дома, но сегодня работаю в офисе.",
    "answers": [
      "I usually print reports at home, but I am working in the office today."
    ],
    "model": "I usually print reports at home, but I am working in the office today.",
    "explanation": "Usually описывает привычку: print. Today обозначает временную ситуацию: am working.",
    "cue": "Я обычно печатаю отчёты дома, но сегодня работаю в офисе.",
    "base": "I / usually / print reports / at home / but / work / in the office / today",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-116-contrast",
    "family": "verbs-aspect-116",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни обычное течение реки и временное изменение после дождя.",
    "answers": [
      "flows | is flowing"
    ],
    "model": "The river usually flows slowly below this bridge. After the heavy rain, it is flowing much faster today.",
    "explanation": "Usually задаёт обычную характеристику: flows. Today после сильного дождя описывает текущую ситуацию: is flowing.",
    "cue": "Сравни обычное течение реки и временное изменение после дождя.",
    "base": "",
    "parts": [
      {
        "prompt": "The river usually ___ slowly below this bridge.",
        "base": "flow",
        "answer": "flows"
      },
      {
        "prompt": "After the heavy rain, it ___ much faster today.",
        "base": "flow",
        "answer": "is flowing"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-aspect-117-gap",
    "family": "verbs-aspect-117",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "gap",
    "level": 2,
    "prompt": "At the moment, several customers ___ the updated portal.",
    "answers": [
      "are trying"
    ],
    "model": "are trying",
    "explanation": "At the moment обозначает текущий процесс; customers во множественном числе: are trying.",
    "cue": "Сейчас несколько клиентов пробуют обновлённый портал.",
    "base": "try",
    "choices": [
      "are trying",
      "try"
    ]
  },
  {
    "id": "verbs-aspect-118-repair",
    "family": "verbs-aspect-118",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "She is usually drives to the studio before nine.",
    "answers": [
      "She usually drives to the studio before nine."
    ],
    "model": "She usually drives to the studio before nine.",
    "explanation": "Обычный маршрут с usually выражается Present Simple: drives без вспомогательного is.",
    "cue": "She is usually drives to the studio before nine.",
    "base": ""
  },
  {
    "id": "verbs-aspect-119-transform",
    "family": "verbs-aspect-119",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "The instructor works in the downtown branch.",
    "answers": [
      "Today, the instructor is working in the coastal branch."
    ],
    "model": "Today, the instructor is working in the coastal branch.",
    "explanation": "Today задаёт временную ситуацию; для процесса используем is working.",
    "cue": "The instructor works in the downtown branch.",
    "base": "",
    "task": "Опиши временное место работы сегодня: используй Today и замени downtown branch на coastal branch."
  },
  {
    "id": "verbs-aspect-120-translate",
    "family": "verbs-aspect-120",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "На этой неделе мы изучаем новый порядок обработки заявок.",
    "answers": [
      "We are learning a new procedure for handling applications this week."
    ],
    "model": "We are learning a new procedure for handling applications this week.",
    "explanation": "This week обозначает ограниченный временный период: are learning.",
    "cue": "На этой неделе мы изучаем новый порядок обработки заявок.",
    "base": "we / learn / a new procedure / for handling applications / this week",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-121-contrast",
    "family": "verbs-aspect-121",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь обычную работу устройства и его поведение во время испытания.",
    "answers": [
      "produces | is producing | produces | is producing"
    ],
    "model": "This device produces less heat during normal use. During the stress test, it is producing more heat than usual. This device normally produces very little noise. Please switch it off; it is producing smoke right now.",
    "explanation": "Normal use описывает обычную работу: produces. During the test обозначает временный процесс: is producing. Дополнительные контексты: every/normally обозначают привычку; right now/for this week only: текущий или временный процесс.",
    "cue": "Сопоставь обычную работу устройства и его поведение во время испытания.",
    "base": "",
    "parts": [
      {
        "prompt": "This device ___ less heat during normal use.",
        "base": "produce",
        "answer": "produces"
      },
      {
        "prompt": "During the stress test, it ___ more heat than usual.",
        "base": "produce",
        "answer": "is producing"
      },
      {
        "prompt": "This device normally ___ very little noise.",
        "base": "produce",
        "answer": "produces"
      },
      {
        "prompt": "Please switch it off; it ___ smoke right now.",
        "base": "produce",
        "answer": "is producing"
      }
    ],
    "shuffleParts": true
  },
  {
    "id": "verbs-aspect-122-contrast",
    "family": "verbs-aspect-122",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни еженедельную проверку и действие, которое идёт сегодня.",
    "answers": [
      "check | are testing"
    ],
    "model": "The technicians check the wiring every Friday. Today, they are testing the new control panel.",
    "explanation": "Every Friday обозначает привычку: check. Today здесь указывает на временный процесс: are testing.",
    "cue": "Сравни еженедельную проверку и действие, которое идёт сегодня.",
    "base": "",
    "parts": [
      {
        "prompt": "The technicians ___ the wiring every Friday.",
        "base": "check",
        "answer": "check"
      },
      {
        "prompt": "Today, they ___ the new control panel.",
        "base": "test",
        "answer": "are testing"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-aspect-123-repair",
    "family": "verbs-aspect-123",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "I am understanding why the scanner rejects this code.",
    "answers": [
      "I understand why the scanner rejects this code."
    ],
    "model": "I understand why the scanner rejects this code.",
    "explanation": "Understand обычно описывает состояние или мнение и не требует Continuous в этом значении.",
    "cue": "I am understanding why the scanner rejects this code.",
    "base": ""
  },
  {
    "id": "verbs-aspect-124-transform",
    "family": "verbs-aspect-124",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "The consultant works at the northern branch.",
    "answers": [
      "The consultant is working at the northern branch only this month."
    ],
    "model": "The consultant is working at the northern branch only this month.",
    "explanation": "Ограниченный временный период подчёркивает временную ситуацию: is working.",
    "cue": "The consultant works at the northern branch.",
    "base": "",
    "task": "Уточни, что это временная работа только в этом месяце."
  },
  {
    "id": "verbs-aspect-125-translate",
    "family": "verbs-aspect-125",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "Мы сейчас не ищем новый склад, а сравниваем районы доставки.",
    "answers": [
      "We are not looking for a new warehouse right now; we are comparing delivery zones."
    ],
    "model": "We are not looking for a new warehouse right now; we are comparing delivery zones.",
    "explanation": "Right now задаёт текущий процесс; обе глагольные группы используют Present Continuous.",
    "cue": "Мы сейчас не ищем новый склад, а сравниваем районы доставки.",
    "base": "we / not look for / a new warehouse / right now / compare / delivery zones",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-126-contrast",
    "family": "verbs-aspect-126",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи мнение о плане и обдумывание следующего шага.",
    "answers": [
      "think | am thinking"
    ],
    "model": "I think the plan is too expensive. I am thinking about moving the event outdoors.",
    "explanation": "Think со значением мнения обычно стоит в Simple; think about со значением обдумывания может быть Continuous.",
    "cue": "Различи мнение о плане и обдумывание следующего шага.",
    "base": "",
    "parts": [
      {
        "prompt": "I ___ the plan is too expensive.",
        "base": "think",
        "answer": "think"
      },
      {
        "prompt": "I ___ about moving the event outdoors.",
        "base": "think",
        "answer": "am thinking"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-aspect-127-gap",
    "family": "verbs-aspect-127",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "gap",
    "level": 2,
    "prompt": "This fabric ___ softer after the first wash.",
    "answers": [
      "feels"
    ],
    "model": "feels",
    "explanation": "Feel описывает свойство ткани, поэтому здесь используется Present Simple: feels.",
    "cue": "Эта ткань становится мягче после первой стирки.",
    "base": "feel",
    "choices": [
      "feels",
      "is feeling"
    ]
  },
  {
    "id": "verbs-aspect-128-repair",
    "family": "verbs-aspect-128",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "They are usually storing the bicycles in this covered area.",
    "answers": [
      "They usually store the bicycles in this covered area."
    ],
    "model": "They usually store the bicycles in this covered area.",
    "explanation": "Usually обозначает повторяющуюся привычку; Continuous здесь не нужен.",
    "cue": "They are usually storing the bicycles in this covered area.",
    "base": ""
  },
  {
    "id": "verbs-aspect-129-transform",
    "family": "verbs-aspect-129",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "The shipping company uses rail in winter.",
    "answers": [
      "This month, the shipping company is testing air freight."
    ],
    "model": "This month, the shipping company is testing air freight.",
    "explanation": "This month задаёт временный процесс; для новой проверки используется is testing.",
    "cue": "The shipping company uses rail in winter.",
    "base": "",
    "task": "Опиши временную проверку авиадоставки в этом месяце."
  },
  {
    "id": "verbs-aspect-130-translate",
    "family": "verbs-aspect-130",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "Тише: ребёнок пытается заснуть.",
    "answers": [
      "Be quiet; the child is trying to fall asleep."
    ],
    "model": "Be quiet; the child is trying to fall asleep.",
    "explanation": "Действие происходит сейчас: is trying.",
    "cue": "Тише: ребёнок пытается заснуть.",
    "base": "be quiet / the child / try / to fall asleep",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-131-contrast",
    "family": "verbs-aspect-131",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери форму think по значению в каждом контексте.",
    "answers": [
      "think | thinking"
    ],
    "model": "What do you think of the new logo? What are you thinking about right now?",
    "explanation": "Просьба высказать мнение: do you think. Текущий процесс обдумывания: are you thinking.",
    "cue": "Выбери форму think по значению в каждом контексте.",
    "base": "",
    "parts": [
      {
        "prompt": "What do you ___ of the new logo?",
        "base": "think",
        "answer": "think"
      },
      {
        "prompt": "What are you ___ about right now?",
        "base": "think",
        "answer": "thinking"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-aspect-132-gap",
    "family": "verbs-aspect-132",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "gap",
    "level": 2,
    "prompt": "This sauce ___ too salty to me.",
    "answers": [
      "tastes"
    ],
    "model": "tastes",
    "explanation": "Taste описывает свойство соуса, поэтому здесь естественна простая форма tastes.",
    "cue": "Этот соус кажется мне слишком солёным.",
    "base": "taste",
    "choices": [
      "tastes",
      "is tasting"
    ]
  },
  {
    "id": "verbs-aspect-133-repair",
    "family": "verbs-aspect-133",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "The interns are usually checking the inventory on Mondays.",
    "answers": [
      "The interns usually check the inventory on Mondays."
    ],
    "model": "The interns usually check the inventory on Mondays.",
    "explanation": "Usually и on Mondays описывают привычку, поэтому нужен Present Simple.",
    "cue": "The interns are usually checking the inventory on Mondays.",
    "base": ""
  },
  {
    "id": "verbs-aspect-134-transform",
    "family": "verbs-aspect-134",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "The accountant reviews the invoices every morning.",
    "answers": [
      "The accountant is reviewing the invoices right now."
    ],
    "model": "The accountant is reviewing the invoices right now.",
    "explanation": "Right now задаёт действие в процессе: is reviewing.",
    "cue": "The accountant reviews the invoices every morning.",
    "base": "",
    "task": "Опиши временный процесс, который идёт сейчас."
  },
  {
    "id": "verbs-aspect-135-translate",
    "family": "verbs-aspect-135",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "Она думает, что маршрут безопасен, но сейчас рассматривает другой вариант.",
    "answers": [
      "She thinks the route is safe, but she is considering another option now."
    ],
    "model": "She thinks the route is safe, but she is considering another option now.",
    "explanation": "Think со значением мнения стоит в Simple; обдумывание сейчас: в Continuous.",
    "cue": "Она думает, что маршрут безопасен, но сейчас рассматривает другой вариант.",
    "base": "she / think / the route / be safe / but / now / consider / another option",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-136-contrast",
    "family": "verbs-aspect-136",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи свойство хлеба и действие пекаря.",
    "answers": [
      "smells | is smelling"
    ],
    "model": "This bread smells fresh. The baker is smelling the bread now.",
    "explanation": "Smell описывает свойство хлеба в Simple; пекарь сейчас намеренно нюхает его: is smelling.",
    "cue": "Различи свойство хлеба и действие пекаря.",
    "base": "",
    "parts": [
      {
        "prompt": "This bread ___ fresh.",
        "base": "smell",
        "answer": "smells"
      },
      {
        "prompt": "The baker ___ the bread now.",
        "base": "smell",
        "answer": "is smelling"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-aspect-137-gap",
    "family": "verbs-aspect-137",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "gap",
    "level": 2,
    "prompt": "The two technicians ___ the backup generator this week while the main one is repaired.",
    "answers": [
      "are testing"
    ],
    "model": "are testing",
    "explanation": "This week и while the main one is repaired задают временный процесс.",
    "cue": "На этой неделе два техника тестируют резервный генератор, пока основной ремонтируют.",
    "base": "test",
    "choices": [
      "are testing",
      "test"
    ]
  },
  {
    "id": "verbs-aspect-138-repair",
    "family": "verbs-aspect-138",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "This label is belonging to the spare-part set, not to the main equipment case.",
    "answers": [
      "This label belongs to the spare-part set, not to the main equipment case."
    ],
    "model": "This label belongs to the spare-part set, not to the main equipment case.",
    "explanation": "Belong описывает принадлежность и не употребляется здесь в Continuous.",
    "cue": "This label is belonging to the spare-part set, not to the main equipment case.",
    "base": ""
  },
  {
    "id": "verbs-aspect-139-transform",
    "family": "verbs-aspect-139",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "We check every package before it leaves.",
    "answers": [
      "Right now, we are checking every package before it leaves."
    ],
    "model": "Right now, we are checking every package before it leaves.",
    "explanation": "Right now задаёт процесс, происходящий в момент речи: are checking.",
    "cue": "We check every package before it leaves.",
    "base": "",
    "task": "Уточни, что прямо сейчас мы временно проверяем каждую посылку перед отправкой."
  },
  {
    "id": "verbs-aspect-140-translate",
    "family": "verbs-aspect-140",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "Сейчас я работаю из филиала, хотя обычно езжу в главный офис.",
    "answers": [
      "Right now I am working from the branch, although I usually commute to the main office."
    ],
    "model": "Right now I am working from the branch, although I usually commute to the main office.",
    "explanation": "Right now задаёт временный процесс; usually указывает на привычку.",
    "cue": "Сейчас я работаю из филиала, хотя обычно езжу в главный офис.",
    "base": "right now / I / work / from the branch / although / usually / commute / to the main office",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-141-contrast",
    "family": "verbs-aspect-141",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни постоянное знание и действие, которое происходит сейчас.",
    "answers": [
      "knows | is listening"
    ],
    "model": "The mechanic knows how the new brake system works. The mechanic is listening to a sound from the rear wheel now.",
    "explanation": "Know: состояние в Simple; слушать звук сейчас: процесс is listening.",
    "cue": "Сравни постоянное знание и действие, которое происходит сейчас.",
    "base": "",
    "parts": [
      {
        "prompt": "The mechanic ___ how the new brake system works.",
        "base": "know",
        "answer": "knows"
      },
      {
        "prompt": "The mechanic ___ to a sound from the rear wheel now.",
        "base": "listen",
        "answer": "is listening"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-aspect-142-gap",
    "family": "verbs-aspect-142",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "gap",
    "level": 2,
    "prompt": "The children ___ near the fountain at the moment, so please use the other path.",
    "answers": [
      "are playing"
    ],
    "model": "are playing",
    "explanation": "At the moment показывает процесс, происходящий сейчас.",
    "cue": "Сейчас дети играют у фонтана, поэтому воспользуйтесь другой дорожкой.",
    "base": "play",
    "choices": [
      "are playing",
      "play"
    ]
  },
  {
    "id": "verbs-aspect-143-repair",
    "family": "verbs-aspect-143",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "repair",
    "level": 2,
    "prompt": "This box is containing spare screws for the machine.",
    "answers": [
      "This box contains spare screws for the machine."
    ],
    "model": "This box contains spare screws for the machine.",
    "explanation": "Contain описывает содержимое и в этом значении употребляется в Present Simple.",
    "cue": "This box is containing spare screws for the machine.",
    "base": ""
  },
  {
    "id": "verbs-aspect-144-transform",
    "family": "verbs-aspect-144",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "transform",
    "level": 3,
    "prompt": "The company uses the east entrance.",
    "answers": [
      "The company is using the east entrance right now while the west entrance is being repaired."
    ],
    "model": "The company is using the east entrance right now while the west entrance is being repaired.",
    "explanation": "Right now и ремонт задают временный процесс: is using.",
    "cue": "The company uses the east entrance.",
    "base": "",
    "task": "Уточни, что из-за ремонта западного входа компания временно пользуется восточным прямо сейчас."
  },
  {
    "id": "verbs-aspect-145-translate",
    "family": "verbs-aspect-145",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "translate",
    "level": 3,
    "prompt": "Этот материал кажется грубым на ощупь; портной сейчас проверяет его подкладку.",
    "answers": [
      "This material feels rough; the tailor is checking its lining now."
    ],
    "model": "This material feels rough; the tailor is checking its lining now.",
    "explanation": "Feel описывает свойство материала; checking: действие портного сейчас.",
    "cue": "Этот материал кажется грубым на ощупь; портной сейчас проверяет его подкладку.",
    "base": "this material / feel / rough / the tailor / check / its lining / now",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "verbs-aspect-146-contrast",
    "family": "verbs-aspect-146",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни владение и действие во время обеда.",
    "answers": [
      "has | is having"
    ],
    "model": "She has a small apartment downtown. She is having lunch with the project team now.",
    "explanation": "Have означает владение в первой части, поэтому has; have lunch: действие в процессе: is having.",
    "cue": "Сравни владение и действие во время обеда.",
    "base": "",
    "parts": [
      {
        "prompt": "She ___ a small apartment downtown.",
        "base": "have",
        "answer": "has"
      },
      {
        "prompt": "She ___ lunch with the project team now.",
        "base": "have",
        "answer": "is having"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "verbs-aspect-147-gap",
    "family": "verbs-aspect-147",
    "topic": "verbs",
    "skill": "verbs-aspect",
    "mode": "gap",
    "level": 2,
    "prompt": "The two temporary clerks ___ at the branch right now, not at the main office.",
    "answers": [
      "are working"
    ],
    "model": "are working",
    "explanation": "Right now обозначает действие, происходящее в момент речи: are working.",
    "cue": "Прямо сейчас два временных сотрудника работают в филиале, а не в главном офисе.",
    "base": "work",
    "choices": [
      "are working",
      "work"
    ]
  }
];
