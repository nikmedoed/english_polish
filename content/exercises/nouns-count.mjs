// Authored material for nouns-count. Keep families in ascending numeric order.
export const skillId = "nouns-count";
export const legacy = [
  {
    "id": "nouns-004",
    "family": "nouns-4",
    "topic": "nouns",
    "skill": "nouns-count",
    "prompt": "She gave me useful ___.",
    "answer": "advice",
    "distractor": "advices",
    "explanation": "Advice: неисчисляемое существительное.",
    "cue": "Она дала мне полезный совет.",
    "base": "advice",
    "alternatives": []
  },
  {
    "id": "nouns-007",
    "family": "nouns-7",
    "topic": "nouns",
    "skill": "nouns-count",
    "prompt": "He is ___ engineer.",
    "answer": "an",
    "distractor": "a",
    "explanation": "Перед гласным звуком: an.",
    "cue": "Он инженер.",
    "base": "a / an",
    "alternatives": []
  },
  {
    "id": "nouns-008",
    "family": "nouns-8",
    "topic": "nouns",
    "skill": "nouns-count",
    "prompt": "We have a lot ___ questions.",
    "answer": "of",
    "distractor": "for",
    "explanation": "A lot of + существительное.",
    "cue": "У нас много вопросов.",
    "base": "предлог",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "nouns-count-101-repair",
    "family": "nouns-count-101",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "repair",
    "level": 2,
    "prompt": "She gave me three useful advices.",
    "answers": [
      "She gave me three useful pieces of advice."
    ],
    "model": "She gave me three useful pieces of advice.",
    "explanation": "Advice нельзя посчитать через -s: pieces of advice.",
    "cue": "She gave me three useful advices.",
    "base": ""
  },
  {
    "id": "nouns-count-102-translate",
    "family": "nouns-count-102",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "translate",
    "level": 3,
    "prompt": "Мы провели два исследования.",
    "answers": [
      "We conducted two studies."
    ],
    "model": "We conducted two studies.",
    "explanation": "Для отдельных исследований: studies; research обычно неисчисляемо.",
    "cue": "Мы провели два исследования.",
    "base": "we / conduct / two / studies",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-count-103-repair",
    "family": "nouns-count-103",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "repair",
    "level": 2,
    "prompt": "We need to conduct a research before choosing the material.",
    "answers": [
      "We need to conduct research before choosing the material.",
      "We need to conduct a research study before choosing the material."
    ],
    "model": "We need to conduct research before choosing the material.",
    "explanation": "Research обычно неисчисляемо, поэтому перед ним здесь не нужен артикль a.",
    "cue": "We need to conduct a research before choosing the material.",
    "base": ""
  },
  {
    "id": "nouns-count-104-transform",
    "family": "nouns-count-104",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "transform",
    "level": 3,
    "prompt": "She gave me useful advice about the application.",
    "answers": [
      "She gave me three pieces of useful advice about the application."
    ],
    "model": "She gave me three pieces of useful advice about the application.",
    "explanation": "Advice неисчисляемо; для счёта отдельных советов используется pieces of advice.",
    "cue": "She gave me useful advice about the application.",
    "base": "",
    "task": "Укажи, что она дала три отдельных совета."
  },
  {
    "id": "nouns-count-105-translate",
    "family": "nouns-count-105",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "translate",
    "level": 3,
    "prompt": "Команда провела масштабное исследование перед запуском.",
    "answers": [
      "The team conducted extensive research before the launch."
    ],
    "model": "The team conducted extensive research before the launch.",
    "explanation": "Research обычно неисчисляемо и не получает множественное окончание; прошедшая форма conduct: conducted.",
    "cue": "Команда провела масштабное исследование перед запуском.",
    "base": "the team / conduct / extensive / research / before the launch",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-count-106-contrast",
    "family": "nouns-count-106",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "contrast",
    "level": 3,
    "prompt": "Отличи отдельные исследования от исследовательской работы в целом.",
    "answers": [
      "studies | research"
    ],
    "model": "The review compares three recent studies. The review is based on extensive research.",
    "explanation": "Три отдельные работы: studies; исследовательская работа в целом: research.",
    "cue": "Отличи отдельные исследования от исследовательской работы в целом.",
    "base": "",
    "parts": [
      {
        "prompt": "The review compares three recent ___.",
        "base": "research",
        "answer": "studies"
      },
      {
        "prompt": "The review is based on extensive ___.",
        "base": "research",
        "answer": "research"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-count-107-translate",
    "family": "nouns-count-107",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "translate",
    "level": 3,
    "prompt": "Она дала мне два полезных совета перед собеседованием.",
    "answers": [
      "She gave me two useful pieces of advice before the interview."
    ],
    "model": "She gave me two useful pieces of advice before the interview.",
    "explanation": "Для двух советов используется pieces of advice; give в прошлом: gave.",
    "cue": "Она дала мне два полезных совета перед собеседованием.",
    "base": "she / give / me / two / useful / pieces of advice / before the interview",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-count-108-repair",
    "family": "nouns-count-108",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "repair",
    "level": 2,
    "prompt": "The instructor gave us a lot of helpful feedbacks after the rehearsal.",
    "answers": [
      "The instructor gave us a lot of helpful feedback after the rehearsal."
    ],
    "model": "The instructor gave us a lot of helpful feedback after the rehearsal.",
    "explanation": "Feedback обычно неисчисляемое; после a lot of оно не получает окончание -s.",
    "cue": "The instructor gave us a lot of helpful feedbacks after the rehearsal.",
    "base": ""
  },
  {
    "id": "nouns-count-109-transform",
    "family": "nouns-count-109",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "transform",
    "level": 3,
    "prompt": "We received useful advice from the architect.",
    "answers": [
      "We received three useful pieces of advice from the architect."
    ],
    "model": "We received three useful pieces of advice from the architect.",
    "explanation": "Advice остаётся неисчисляемым; отдельные рекомендации считаются через pieces of advice.",
    "cue": "We received useful advice from the architect.",
    "base": "",
    "task": "Посчитай три отдельных рекомендации, используя piece."
  },
  {
    "id": "nouns-count-110-translate",
    "family": "nouns-count-110",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "translate",
    "level": 3,
    "prompt": "В заявке не хватает информации.",
    "answers": [
      "The application does not contain enough information."
    ],
    "model": "The application does not contain enough information.",
    "explanation": "Information неисчисляемо и не получает -s; enough может стоять перед ним.",
    "cue": "В заявке не хватает информации.",
    "base": "the application / not contain / enough / information",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-count-111-contrast",
    "family": "nouns-count-111",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи неисчисляемое research и отдельные исследования.",
    "answers": [
      "research | studies"
    ],
    "model": "The research is still in its early stages. The team published two studies last year.",
    "explanation": "Research обычно неисчисляемо; отдельные исследования: studies.",
    "cue": "Различи неисчисляемое research и отдельные исследования.",
    "base": "",
    "parts": [
      {
        "prompt": "The ___ is still in its early stages.",
        "base": "research",
        "answer": "research"
      },
      {
        "prompt": "The team published two ___ last year.",
        "base": "study",
        "answer": "studies"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-count-112-gap",
    "family": "nouns-count-112",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "gap",
    "level": 2,
    "prompt": "We need a little more ___ before making a final decision.",
    "answers": [
      "information"
    ],
    "model": "information",
    "explanation": "Information неисчисляемое; после a little more не ставится форма informations.",
    "cue": "Нам нужно немного больше информации перед окончательным решением.",
    "base": "information",
    "choices": [
      "information",
      "informations"
    ]
  },
  {
    "id": "nouns-count-113-repair",
    "family": "nouns-count-113",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "repair",
    "level": 2,
    "prompt": "The equipment in both rooms are new.",
    "answers": [
      "The equipment in both rooms is new."
    ],
    "model": "The equipment in both rooms is new.",
    "explanation": "Equipment: неисчисляемое существительное в единственном числе; требуется is.",
    "cue": "The equipment in both rooms are new.",
    "base": ""
  },
  {
    "id": "nouns-count-114-transform",
    "family": "nouns-count-114",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "transform",
    "level": 3,
    "prompt": "The report contains three pieces of evidence.",
    "answers": [
      "The report contains three examples of evidence."
    ],
    "model": "The report contains three examples of evidence.",
    "explanation": "Evidence остаётся неисчисляемым; countable examples обозначает отдельные подтверждения.",
    "cue": "The report contains three pieces of evidence.",
    "base": "",
    "task": "Передай это через three examples of evidence."
  },
  {
    "id": "nouns-count-115-translate",
    "family": "nouns-count-115",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "translate",
    "level": 3,
    "prompt": "В комнате есть немного мебели.",
    "answers": [
      "There is a little furniture in the room."
    ],
    "model": "There is a little furniture in the room.",
    "explanation": "Furniture неисчисляемое: a little и форма is.",
    "cue": "В комнате есть немного мебели.",
    "base": "there / be / a little / furniture / in the room",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-count-116-contrast",
    "family": "nouns-count-116",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери подходящее количество перед неисчисляемым и исчисляемым существительным.",
    "answers": [
      "much | few"
    ],
    "model": "There is very much traffic near the station today. There are very few buses after midnight.",
    "explanation": "Traffic неисчисляемое: much; buses исчисляемое во множественном числе: few.",
    "cue": "Выбери подходящее количество перед неисчисляемым и исчисляемым существительным.",
    "base": "",
    "parts": [
      {
        "prompt": "There is very ___ traffic near the station today.",
        "base": "much",
        "answer": "much"
      },
      {
        "prompt": "There are very ___ buses after midnight.",
        "base": "few",
        "answer": "few"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-count-117-choice",
    "family": "nouns-count-117",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери грамматически правильный отчёт о прогрессе.",
    "answers": [
      "We made a lot of progress during the first week."
    ],
    "model": "We made a lot of progress during the first week.",
    "explanation": "Progress неисчисляемое и не получает -s; a lot of подходит с неисчисляемыми существительными.",
    "cue": "Выбери грамматически правильный отчёт о прогрессе.",
    "base": "",
    "task": "Выбери верное употребление progress.",
    "choices": [
      "We made a lot of progress during the first week.",
      "We made many progresses during the first week.",
      "We made a progress during the first week."
    ]
  },
  {
    "id": "nouns-count-118-repair",
    "family": "nouns-count-118",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "repair",
    "level": 2,
    "prompt": "The archive contains many useful informations about the bridge.",
    "answers": [
      "The archive contains a lot of useful information about the bridge."
    ],
    "model": "The archive contains a lot of useful information about the bridge.",
    "explanation": "Information неисчисляемое и не получает окончания -s.",
    "cue": "The archive contains many useful informations about the bridge.",
    "base": ""
  },
  {
    "id": "nouns-count-119-transform",
    "family": "nouns-count-119",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "transform",
    "level": 3,
    "prompt": "We received a piece of advice from the curator.",
    "answers": [
      "We received three pieces of advice from the curator."
    ],
    "model": "We received three pieces of advice from the curator.",
    "explanation": "Advice неисчисляемое; отдельные рекомендации считаются через pieces of advice.",
    "cue": "We received a piece of advice from the curator.",
    "base": "",
    "task": "Скажи о трёх отдельных рекомендациях."
  },
  {
    "id": "nouns-count-120-translate",
    "family": "nouns-count-120",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "translate",
    "level": 3,
    "prompt": "В полдень возле школы меньше движения.",
    "answers": [
      "There is less traffic near the school at noon."
    ],
    "model": "There is less traffic near the school at noon.",
    "explanation": "Traffic неисчисляемое, поэтому используется less, а не fewer.",
    "cue": "В полдень возле школы меньше движения.",
    "base": "there / be / less / traffic / near the school / at noon",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-count-121-contrast",
    "family": "nouns-count-121",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи опыт в целом и отдельные события.",
    "answers": [
      "experience | experiences"
    ],
    "model": "Her experience with the new software is limited. She described two unusual experiences from the field trip.",
    "explanation": "Experience неисчисляемо в значении навыка/опыта, но countable для отдельных событий.",
    "cue": "Различи опыт в целом и отдельные события.",
    "base": "",
    "parts": [
      {
        "prompt": "Her ___ with the new software is limited.",
        "base": "experience",
        "answer": "experience"
      },
      {
        "prompt": "She described two unusual ___ from the field trip.",
        "base": "experience",
        "answer": "experiences"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-count-122-gap",
    "family": "nouns-count-122",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "gap",
    "level": 2,
    "prompt": "How ___ water did the hikers carry to the lookout?",
    "answers": [
      "much"
    ],
    "model": "much",
    "explanation": "Water неисчисляемое, поэтому в вопросе о количестве используется how much.",
    "cue": "Сколько воды туристы несли к смотровой площадке?",
    "base": "water",
    "choices": [
      "much",
      "many"
    ]
  },
  {
    "id": "nouns-count-123-repair",
    "family": "nouns-count-123",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "repair",
    "level": 2,
    "prompt": "There were fewer luggage after the weekend.",
    "answers": [
      "There was less luggage after the weekend."
    ],
    "model": "There was less luggage after the weekend.",
    "explanation": "Luggage неисчисляемое; перед ним используется less, а глагол согласуется как singular.",
    "cue": "There were fewer luggage after the weekend.",
    "base": ""
  },
  {
    "id": "nouns-count-124-transform",
    "family": "nouns-count-124",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "transform",
    "level": 3,
    "prompt": "The team completed a lot of research on coastal erosion.",
    "answers": [
      "The team completed a great deal of research on coastal erosion."
    ],
    "model": "The team completed a great deal of research on coastal erosion.",
    "explanation": "Research остаётся неисчисляемым после a great deal of.",
    "cue": "The team completed a lot of research on coastal erosion.",
    "base": "",
    "task": "Перефразируй с a great deal of."
  },
  {
    "id": "nouns-count-125-translate",
    "family": "nouns-count-125",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "translate",
    "level": 3,
    "prompt": "Несколько сотрудников дали нам полезный отзыв.",
    "answers": [
      "Several employees gave us useful feedback."
    ],
    "model": "Several employees gave us useful feedback.",
    "explanation": "Feedback неисчисляемое и не принимает plural -s; give в прошлом: gave.",
    "cue": "Несколько сотрудников дали нам полезный отзыв.",
    "base": "several employees / give us / useful feedback",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "nouns-count-126-contrast",
    "family": "nouns-count-126",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни количество багажа и количество чемоданов.",
    "answers": [
      "is | is"
    ],
    "model": "The amount of luggage is limited on this bus. The number of suitcases is limited on this bus.",
    "explanation": "Amount относится к неисчисляемому luggage; number: к countable suitcases. В обоих случаях subject head единственного числа.",
    "cue": "Сравни количество багажа и количество чемоданов.",
    "base": "",
    "parts": [
      {
        "prompt": "The amount of luggage ___ limited on this bus.",
        "base": "be",
        "answer": "is"
      },
      {
        "prompt": "The number of suitcases ___ limited on this bus.",
        "base": "be",
        "answer": "is"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "nouns-count-127-gap",
    "family": "nouns-count-127",
    "topic": "nouns",
    "skill": "nouns-count",
    "mode": "gap",
    "level": 2,
    "prompt": "The shipment contains three ___ of equipment for the new lab.",
    "answers": [
      "pieces"
    ],
    "model": "pieces",
    "explanation": "Equipment неисчисляемое; для счёта используется конструкция pieces of equipment.",
    "cue": "Поставка включает три единицы оборудования для новой лаборатории.",
    "base": "piece",
    "choices": [
      "pieces",
      "equipments"
    ]
  }
];
