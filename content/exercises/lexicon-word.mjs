// Authored material for lexicon-word. Keep families in ascending numeric order.
export const skillId = "lexicon-word";
export const legacy = [
  {
    "id": "lexicon-001",
    "family": "lexicon-1",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "prompt": "Please ___ me your laptop for an hour.",
    "answer": "lend",
    "distractor": "borrow",
    "explanation": "Lend: дать взаймы; borrow: взять.",
    "cue": "Пожалуйста, одолжи мне свой ноутбук на час.",
    "base": "одолжить кому-то",
    "alternatives": []
  },
  {
    "id": "lexicon-002",
    "family": "lexicon-2",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "prompt": "Can I ___ your pen?",
    "answer": "borrow",
    "distractor": "lend",
    "explanation": "Взять у другого: borrow.",
    "cue": "Можно взять твою ручку?",
    "base": "взять взаймы",
    "alternatives": []
  },
  {
    "id": "lexicon-003",
    "family": "lexicon-3",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "prompt": "We need to ___ a decision.",
    "answer": "make",
    "distractor": "do",
    "explanation": "Устойчивое сочетание: make a decision.",
    "cue": "Нам нужно принять решение.",
    "base": "make / do",
    "alternatives": []
  },
  {
    "id": "lexicon-004",
    "family": "lexicon-4",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "prompt": "She will ___ us a story.",
    "answer": "tell",
    "distractor": "say",
    "explanation": "Tell someone a story.",
    "cue": "Она расскажет нам историю.",
    "base": "tell / say",
    "alternatives": []
  },
  {
    "id": "lexicon-005",
    "family": "lexicon-5",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "prompt": "Please ___ your homework first.",
    "answer": "do",
    "distractor": "make",
    "explanation": "Do homework.",
    "cue": "Сначала сделай домашнее задание.",
    "base": "do / make",
    "alternatives": []
  },
  {
    "id": "lexicon-006",
    "family": "lexicon-6",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "prompt": "I ___ the train and arrived late.",
    "answer": "missed",
    "distractor": "lost",
    "explanation": "Miss a train: не успеть на поезд.",
    "cue": "Я не успел на поезд и приехал поздно.",
    "base": "не успеть на транспорт",
    "alternatives": []
  },
  {
    "id": "lexicon-007",
    "family": "lexicon-7",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "prompt": "The price will ___ next month.",
    "answer": "rise",
    "distractor": "raise",
    "explanation": "Rise не требует прямого дополнения.",
    "cue": "Цена вырастет в следующем месяце.",
    "base": "rise / raise",
    "alternatives": []
  },
  {
    "id": "lexicon-008",
    "family": "lexicon-8",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "prompt": "They will ___ the price.",
    "answer": "raise",
    "distractor": "rise",
    "explanation": "Raise + прямое дополнение.",
    "cue": "Они поднимут цену.",
    "base": "raise / rise",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "lexicon-word-101-repair",
    "family": "lexicon-word-101",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "repair",
    "level": 2,
    "prompt": "We need to do a decision before the price will raise.",
    "answers": [
      "We need to make a decision before the price rises."
    ],
    "model": "We need to make a decision before the price rises.",
    "explanation": "Make a decision; price rises без объекта; после before при будущем смысле Present Simple.",
    "cue": "We need to do a decision before the price will raise.",
    "base": ""
  },
  {
    "id": "lexicon-word-102-translate",
    "family": "lexicon-word-102",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "translate",
    "level": 3,
    "prompt": "Объясни, почему цена такая высокая.",
    "answers": [
      "Explain why the price is so high."
    ],
    "model": "Explain why the price is so high.",
    "explanation": "Косвенный вопрос: the price is; high описывает цену.",
    "cue": "Объясни, почему цена такая высокая.",
    "base": "explain / why / the price / so high",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-word-103-repair",
    "family": "lexicon-word-103",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "repair",
    "level": 2,
    "prompt": "Could you borrow me your charger until this evening?",
    "answers": [
      "Could you lend me your charger until this evening?"
    ],
    "model": "Could you lend me your charger until this evening?",
    "explanation": "Lend: дать кому-либо на время; borrow: взять у кого-либо.",
    "cue": "Could you borrow me your charger until this evening?",
    "base": ""
  },
  {
    "id": "lexicon-word-104-contrast",
    "family": "lexicon-word-104",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи взять вещь у другого и дать её другому.",
    "answers": [
      "borrow | lend"
    ],
    "model": "Could I borrow your notebook for a day? Could I lend you my notebook for a day?",
    "explanation": "Borrow: получить вещь от другого; lend: дать вещь другому.",
    "cue": "Различи взять вещь у другого и дать её другому.",
    "base": "",
    "parts": [
      {
        "prompt": "Could I ___ your notebook for a day?",
        "base": "borrow",
        "answer": "borrow"
      },
      {
        "prompt": "Could I ___ you my notebook for a day?",
        "base": "lend",
        "answer": "lend"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-word-105-translate",
    "family": "lexicon-word-105",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "translate",
    "level": 3,
    "prompt": "Перед публикацией нам нужно принять решение.",
    "answers": [
      "We need to make a decision before publication."
    ],
    "model": "We need to make a decision before publication.",
    "explanation": "Устойчивое сочетание: make a decision, не do a decision.",
    "cue": "Перед публикацией нам нужно принять решение.",
    "base": "we / need to make / a decision / before publication",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-word-106-contrast",
    "family": "lexicon-word-106",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи изменение цены без указанного деятеля и действие компании.",
    "answers": [
      "rises | raises"
    ],
    "model": "The wholesale price rises every January. The company raises its prices every January.",
    "explanation": "Цена сама растёт: rise. Компания повышает её: raise + прямое дополнение.",
    "cue": "Различи изменение цены без указанного деятеля и действие компании.",
    "base": "",
    "parts": [
      {
        "prompt": "The wholesale price ___ every January.",
        "base": "rise",
        "answer": "rises"
      },
      {
        "prompt": "The company ___ its prices every January.",
        "base": "raise",
        "answer": "raises"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-word-107-contrast",
    "family": "lexicon-word-107",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "contrast",
    "level": 3,
    "prompt": "Образуй сравнительную форму: к короткому high добавь -er, а с crowded используй more.",
    "answers": [
      "higher | more crowded"
    ],
    "model": "The water level is higher than it was yesterday. The station is more crowded this morning than usual.",
    "explanation": "High образует higher; с crowded используется more crowded.",
    "cue": "Образуй сравнительную форму: к короткому high добавь -er, а с crowded используй more.",
    "base": "",
    "parts": [
      {
        "prompt": "The water level is ___ than it was yesterday.",
        "base": "high",
        "answer": "higher"
      },
      {
        "prompt": "The station is ___ this morning than usual.",
        "base": "crowded",
        "answer": "more crowded"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-word-108-translate",
    "family": "lexicon-word-108",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "translate",
    "level": 3,
    "prompt": "В конце экскурсии гид рассказал нам историю об острове.",
    "answers": [
      "The guide told us a story about the island at the end of the tour."
    ],
    "model": "The guide told us a story about the island at the end of the tour.",
    "explanation": "Устойчивое сочетание: tell a story; форма tell в прошлом: told.",
    "cue": "В конце экскурсии гид рассказал нам историю об острове.",
    "base": "the guide / tell / us / a story / about the island / at the end of the tour",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-word-109-repair",
    "family": "lexicon-word-109",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "repair",
    "level": 2,
    "prompt": "Please say me if the northern gate is open.",
    "answers": [
      "Please tell me if the northern gate is open."
    ],
    "model": "Please tell me if the northern gate is open.",
    "explanation": "Tell принимает адресата напрямую: tell me; say обычно не ставится перед косвенным дополнением без to.",
    "cue": "Please say me if the northern gate is open.",
    "base": ""
  },
  {
    "id": "lexicon-word-110-transform",
    "family": "lexicon-word-110",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "transform",
    "level": 3,
    "prompt": "The temperature went up by five degrees overnight.",
    "answers": [
      "The temperature rose by five degrees overnight."
    ],
    "model": "The temperature rose by five degrees overnight.",
    "explanation": "Температура повышается сама: rise, Past Simple: rose; raise требует дополнение.",
    "cue": "The temperature went up by five degrees overnight.",
    "base": "",
    "task": "Замени went up на однословный глагол rise в Past Simple."
  },
  {
    "id": "lexicon-word-111-translate",
    "family": "lexicon-word-111",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "translate",
    "level": 3,
    "prompt": "Ведущая рассказала смешную историю о поездке.",
    "answers": [
      "The host told a funny story about the trip."
    ],
    "model": "The host told a funny story about the trip.",
    "explanation": "Стандартное сочетание tell a story; Past Simple от tell: told.",
    "cue": "Ведущая рассказала смешную историю о поездке.",
    "base": "the host / tell / a funny story / about the trip",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-word-112-contrast",
    "family": "lexicon-word-112",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сопоставь стандартные сочетания с make и do.",
    "answers": [
      "make | do"
    ],
    "model": "We need to make a reservation before Friday. We need to do the laundry before Friday.",
    "explanation": "Make a reservation, но do the laundry.",
    "cue": "Сопоставь стандартные сочетания с make и do.",
    "base": "",
    "parts": [
      {
        "prompt": "We need to ___ a reservation before Friday.",
        "base": "make",
        "answer": "make"
      },
      {
        "prompt": "We need to ___ the laundry before Friday.",
        "base": "do",
        "answer": "do"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-word-113-gap",
    "family": "lexicon-word-113",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "gap",
    "level": 2,
    "prompt": "Please ___ after you review both estimates.",
    "answers": [
      "make a decision"
    ],
    "model": "make a decision",
    "explanation": "Устойчивое сочетание: make a decision.",
    "cue": "Примите решение после того, как изучите обе сметы.",
    "base": "decision",
    "choices": [
      "make a decision",
      "do a decision"
    ]
  },
  {
    "id": "lexicon-word-114-repair",
    "family": "lexicon-word-114",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "repair",
    "level": 2,
    "prompt": "Could you borrow me your charger until the end of class?",
    "answers": [
      "Could you lend me your charger until the end of class?"
    ],
    "model": "Could you lend me your charger until the end of class?",
    "explanation": "Попросить дать вещь: lend; borrow означает взять вещь у другого.",
    "cue": "Could you borrow me your charger until the end of class?",
    "base": ""
  },
  {
    "id": "lexicon-word-115-transform",
    "family": "lexicon-word-115",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "transform",
    "level": 3,
    "prompt": "The red sign is easy to notice from the road.",
    "answers": [
      "The red sign is conspicuous from the road."
    ],
    "model": "The red sign is conspicuous from the road.",
    "explanation": "Conspicuous: прилагательное со значением «заметный»; после is используется прилагательное.",
    "cue": "The red sign is easy to notice from the road.",
    "base": "",
    "task": "Замени easy to notice на conspicuous, сохрани смысл и грамматику."
  },
  {
    "id": "lexicon-word-116-translate",
    "family": "lexicon-word-116",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "translate",
    "level": 3,
    "prompt": "Пожалуйста, принеси карту, когда вернёшься в офис.",
    "answers": [
      "Please bring the map when you return to the office."
    ],
    "model": "Please bring the map when you return to the office.",
    "explanation": "Bring обозначает движение к месту говорящего/ориентиру; return to + место.",
    "cue": "Пожалуйста, принеси карту, когда вернёшься в офис.",
    "base": "please / bring / the map / when / you / return / to the office",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-word-117-contrast",
    "family": "lexicon-word-117",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери глагол для естественного сочетания в каждом контексте.",
    "answers": [
      "made | kept"
    ],
    "model": "She made a promise to call after the interview. She kept her promise and called that evening.",
    "explanation": "Естественные сочетания: make a promise и keep a promise.",
    "cue": "Выбери глагол для естественного сочетания в каждом контексте.",
    "base": "",
    "parts": [
      {
        "prompt": "She ___ a promise to call after the interview.",
        "base": "made",
        "answer": "made"
      },
      {
        "prompt": "She ___ her promise and called that evening.",
        "base": "kept",
        "answer": "kept"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-word-118-choice",
    "family": "lexicon-word-118",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери верное предложение о влиянии новой процедуры.",
    "answers": [
      "The new procedure had a positive effect on delivery times."
    ],
    "model": "The new procedure had a positive effect on delivery times.",
    "explanation": "Effect: существительное после a; сочетание have an effect on.",
    "cue": "Выбери верное предложение о влиянии новой процедуры.",
    "base": "",
    "task": "Выбери предложение с правильной формой и сочетаемостью.",
    "choices": [
      "The new procedure had a positive effect on delivery times.",
      "The new procedure had a positive affect on delivery times.",
      "The new procedure made a positive effect to delivery times."
    ]
  },
  {
    "id": "lexicon-word-119-repair",
    "family": "lexicon-word-119",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "repair",
    "level": 2,
    "prompt": "Please advice the visitors to keep their receipts.",
    "answers": [
      "Please advise the visitors to keep their receipts."
    ],
    "model": "Please advise the visitors to keep their receipts.",
    "explanation": "Advise: глагол «советовать»; advice: существительное.",
    "cue": "Please advice the visitors to keep their receipts.",
    "base": ""
  },
  {
    "id": "lexicon-word-120-transform",
    "family": "lexicon-word-120",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "transform",
    "level": 3,
    "prompt": "Operating costs increased sharply last winter.",
    "answers": [
      "Operating costs rose sharply last winter."
    ],
    "model": "Operating costs rose sharply last winter.",
    "explanation": "Затраты выросли сами: rise, Past Simple: rose; raise требует прямое дополнение.",
    "cue": "Operating costs increased sharply last winter.",
    "base": "",
    "task": "Замени increased на прошедшую форму rise."
  },
  {
    "id": "lexicon-word-121-translate",
    "family": "lexicon-word-121",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "translate",
    "level": 3,
    "prompt": "Она сказала мне, что автобус задерживается.",
    "answers": [
      "She told me that the bus was delayed.",
      "She told me that the bus is delayed."
    ],
    "model": "She told me that the bus was delayed.",
    "explanation": "Tell принимает адресата напрямую: told me.",
    "cue": "Она сказала мне, что автобус задерживается.",
    "base": "she / tell / me / that / the bus / be delayed",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-word-122-contrast",
    "family": "lexicon-word-122",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи точный размер и сочетание по цвету.",
    "answers": [
      "fit | matches"
    ],
    "model": "These shoes fit me perfectly. This scarf matches the coat.",
    "explanation": "Fit описывает подходящий размер; match: сочетание одного предмета с другим.",
    "cue": "Различи точный размер и сочетание по цвету.",
    "base": "",
    "parts": [
      {
        "prompt": "These shoes ___ me perfectly.",
        "base": "fit",
        "answer": "fit"
      },
      {
        "prompt": "This scarf ___ the coat.",
        "base": "match",
        "answer": "matches"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-word-123-gap",
    "family": "lexicon-word-123",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "gap",
    "level": 2,
    "prompt": "Could you ___ me where to return this form?",
    "answers": [
      "tell"
    ],
    "model": "tell",
    "explanation": "В конструкции tell someone information адресат ставится сразу после tell.",
    "cue": "Не могли бы вы сказать мне, куда вернуть эту форму?",
    "base": "tell",
    "choices": [
      "tell",
      "say"
    ]
  },
  {
    "id": "lexicon-word-124-repair",
    "family": "lexicon-word-124",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "repair",
    "level": 2,
    "prompt": "I borrowed her my umbrella before the storm.",
    "answers": [
      "I lent her my umbrella before the storm."
    ],
    "model": "I lent her my umbrella before the storm.",
    "explanation": "Lend: дать взаймы; borrow: взять у другого.",
    "cue": "I borrowed her my umbrella before the storm.",
    "base": ""
  },
  {
    "id": "lexicon-word-125-transform",
    "family": "lexicon-word-125",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "transform",
    "level": 3,
    "prompt": "The village population increased from five thousand to six thousand.",
    "answers": [
      "The village population grew from five thousand to six thousand."
    ],
    "model": "The village population grew from five thousand to six thousand.",
    "explanation": "Population выросла: grow, Past Simple: grew.",
    "cue": "The village population increased from five thousand to six thousand.",
    "base": "",
    "task": "Замени increased на grow в Past Simple."
  },
  {
    "id": "lexicon-word-126-translate",
    "family": "lexicon-word-126",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "translate",
    "level": 3,
    "prompt": "Этот план мне подходит, но он не совпадает с расписанием.",
    "answers": [
      "This plan suits me, but it does not match the schedule."
    ],
    "model": "This plan suits me, but it does not match the schedule.",
    "explanation": "Suit описывает, что подходит человеку; match: что совпадает с другим предметом.",
    "cue": "Этот план мне подходит, но он не совпадает с расписанием.",
    "base": "this plan / suit me / but / it / not match / the schedule",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "lexicon-word-127-contrast",
    "family": "lexicon-word-127",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "contrast",
    "level": 3,
    "prompt": "Выбери глагол для сообщения информации.",
    "answers": [
      "told | said"
    ],
    "model": "The guide told us the safety rules. The guide said that the north exit was closed.",
    "explanation": "Tell + person; say + that-clause.",
    "cue": "Выбери глагол для сообщения информации.",
    "base": "",
    "parts": [
      {
        "prompt": "The guide ___ us the safety rules.",
        "base": "tell",
        "answer": "told"
      },
      {
        "prompt": "The guide ___ that the north exit was closed.",
        "base": "say",
        "answer": "said"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "lexicon-word-128-gap",
    "family": "lexicon-word-128",
    "topic": "lexicon",
    "skill": "lexicon-word",
    "mode": "gap",
    "level": 2,
    "prompt": "This lid does not ___ the jar; it is too small.",
    "answers": [
      "fit"
    ],
    "model": "fit",
    "explanation": "Fit описывает подходящий размер и принимает прямое дополнение jar.",
    "cue": "Эта крышка не подходит к банке по размеру: она слишком мала.",
    "base": "fit",
    "choices": [
      "fit",
      "match"
    ]
  }
];
