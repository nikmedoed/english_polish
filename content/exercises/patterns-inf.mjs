// Authored material for patterns-inf. Keep families in ascending numeric order.
export const skillId = "patterns-inf";
export const legacy = [
  {
    "id": "patterns-002",
    "family": "patterns-2",
    "topic": "patterns",
    "skill": "patterns-inf",
    "prompt": "They decided ___ early.",
    "answer": "to leave",
    "distractor": "leaving",
    "explanation": "Decide + to + V.",
    "cue": "Они решили уйти пораньше.",
    "base": "leave",
    "alternatives": []
  },
  {
    "id": "patterns-003",
    "family": "patterns-3",
    "topic": "patterns",
    "skill": "patterns-inf",
    "prompt": "She is interested in ___ languages.",
    "answer": "learning",
    "distractor": "learn",
    "explanation": "После предлога in: -ing.",
    "cue": "Ей интересно изучать языки.",
    "base": "learn",
    "alternatives": []
  },
  {
    "id": "patterns-004",
    "family": "patterns-4",
    "topic": "patterns",
    "skill": "patterns-inf",
    "prompt": "We want ___ the process.",
    "answer": "to improve",
    "distractor": "improving",
    "explanation": "Want + to + V.",
    "cue": "Мы хотим улучшить процесс.",
    "base": "improve",
    "alternatives": []
  },
  {
    "id": "patterns-006",
    "family": "patterns-6",
    "topic": "patterns",
    "skill": "patterns-inf",
    "prompt": "I enjoy ___ in the morning.",
    "answer": "walking",
    "distractor": "to walk",
    "explanation": "Enjoy + -ing.",
    "cue": "Мне нравится гулять по утрам.",
    "base": "walk",
    "alternatives": []
  },
  {
    "id": "patterns-007",
    "family": "patterns-7",
    "topic": "patterns",
    "skill": "patterns-inf",
    "prompt": "She is good at ___ ideas.",
    "answer": "explaining",
    "distractor": "explain",
    "explanation": "At + -ing.",
    "cue": "Она хорошо объясняет идеи.",
    "base": "explain",
    "alternatives": []
  },
  {
    "id": "patterns-008",
    "family": "patterns-8",
    "topic": "patterns",
    "skill": "patterns-inf",
    "prompt": "They tried ___ the door, but it was locked.",
    "answer": "to open",
    "distractor": "open",
    "explanation": "Попытаться: try to + V.",
    "cue": "Они попытались открыть дверь, но она была заперта.",
    "base": "open",
    "alternatives": []
  }
];
export const exercises = [
  {
    "id": "patterns-inf-101-repair",
    "family": "patterns-inf-101",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "repair",
    "level": 2,
    "prompt": "They decided postpone the launch instead of to rush it.",
    "answers": [
      "They decided to postpone the launch instead of rushing it."
    ],
    "model": "They decided to postpone the launch instead of rushing it.",
    "explanation": "Decide + to; instead of + -ing.",
    "cue": "They decided postpone the launch instead of to rush it.",
    "base": ""
  },
  {
    "id": "patterns-inf-102-translate",
    "family": "patterns-inf-102",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "translate",
    "level": 3,
    "prompt": "Она хорошо объясняет сложные идеи.",
    "answers": [
      "She is good at explaining complex ideas."
    ],
    "model": "She is good at explaining complex ideas.",
    "explanation": "После at: explaining. Good требует is.",
    "cue": "Она хорошо объясняет сложные идеи.",
    "base": "she / good at / explain / complex ideas",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-inf-103-repair",
    "family": "patterns-inf-103",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "repair",
    "level": 2,
    "prompt": "The team decided postponing the launch instead of to wait for the review.",
    "answers": [
      "The team decided to postpone the launch instead of waiting for the review."
    ],
    "model": "The team decided to postpone the launch instead of waiting for the review.",
    "explanation": "Decide требует to + глагол; после предлога instead of используется форма на -ing.",
    "cue": "The team decided postponing the launch instead of to wait for the review.",
    "base": ""
  },
  {
    "id": "patterns-inf-104-transform",
    "family": "patterns-inf-104",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "transform",
    "level": 3,
    "prompt": "They walk to the station together every morning.",
    "answers": [
      "They enjoy walking to the station together every morning."
    ],
    "model": "They enjoy walking to the station together every morning.",
    "explanation": "После enjoy используется -ing: enjoy walking.",
    "cue": "They walk to the station together every morning.",
    "base": "",
    "task": "Перефразируй, начни с They enjoy и сохрани смысл."
  },
  {
    "id": "patterns-inf-105-translate",
    "family": "patterns-inf-105",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "translate",
    "level": 3,
    "prompt": "Он решил не менять порядок разделов.",
    "answers": [
      "He decided not to change the order of the sections."
    ],
    "model": "He decided not to change the order of the sections.",
    "explanation": "После decide нужен инфинитив; отрицание ставится перед ним: not to change.",
    "cue": "Он решил не менять порядок разделов.",
    "base": "he / decide / not / change / the order of the sections",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-inf-106-contrast",
    "family": "patterns-inf-106",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "contrast",
    "level": 3,
    "prompt": "Сравни форму после предлога и после decide.",
    "answers": [
      "learning | to learn"
    ],
    "model": "She is interested in learning a second language. She decided to learn a second language.",
    "explanation": "In: предлог, после него learning. Decide требует to learn.",
    "cue": "Сравни форму после предлога и после decide.",
    "base": "",
    "parts": [
      {
        "prompt": "She is interested in ___ a second language.",
        "base": "learn",
        "answer": "learning"
      },
      {
        "prompt": "She decided ___ a second language.",
        "base": "learn",
        "answer": "to learn"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-inf-107-translate",
    "family": "patterns-inf-107",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "translate",
    "level": 3,
    "prompt": "Нам нужно сократить время проверки.",
    "answers": [
      "We need to reduce the review time."
    ],
    "model": "We need to reduce the review time.",
    "explanation": "Need в значении необходимости требует to + начальная форма: need to reduce.",
    "cue": "Нам нужно сократить время проверки.",
    "base": "we / need / reduce / the review time",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-inf-108-repair",
    "family": "patterns-inf-108",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "repair",
    "level": 2,
    "prompt": "I promised calling the venue before lunch.",
    "answers": [
      "I promised to call the venue before lunch."
    ],
    "model": "I promised to call the venue before lunch.",
    "explanation": "Promise + to-infinitive: promised to call.",
    "cue": "I promised calling the venue before lunch.",
    "base": ""
  },
  {
    "id": "patterns-inf-109-transform",
    "family": "patterns-inf-109",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "transform",
    "level": 3,
    "prompt": "They plan not to use disposable cups.",
    "answers": [
      "They avoid using disposable cups."
    ],
    "model": "They avoid using disposable cups.",
    "explanation": "Plan + to-infinitive; avoid + -ing.",
    "cue": "They plan not to use disposable cups.",
    "base": "",
    "task": "Передай ту же цель с глаголом avoid."
  },
  {
    "id": "patterns-inf-110-translate",
    "family": "patterns-inf-110",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "translate",
    "level": 3,
    "prompt": "Он предложил встретиться у входа после лекции.",
    "answers": [
      "He suggested meeting at the entrance after the lecture."
    ],
    "model": "He suggested meeting at the entrance after the lecture.",
    "explanation": "Suggest требует -ing после себя: suggested meeting.",
    "cue": "Он предложил встретиться у входа после лекции.",
    "base": "he / suggest / meet / at the entrance / after the lecture",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-inf-111-contrast",
    "family": "patterns-inf-111",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "contrast",
    "level": 3,
    "prompt": "Подбери форму после каждого управляющего слова.",
    "answers": [
      "to finish | sending"
    ],
    "model": "She hopes to finish the final draft today. She avoids sending unfinished drafts.",
    "explanation": "Hope + to-infinitive; avoid + -ing.",
    "cue": "Подбери форму после каждого управляющего слова.",
    "base": "",
    "parts": [
      {
        "prompt": "She hopes ___ the final draft today.",
        "base": "finish",
        "answer": "to finish"
      },
      {
        "prompt": "She avoids ___ unfinished drafts.",
        "base": "send",
        "answer": "sending"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-inf-112-gap",
    "family": "patterns-inf-112",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "gap",
    "level": 2,
    "prompt": "Before ___ the form, read the instructions carefully.",
    "answers": [
      "signing"
    ],
    "model": "signing",
    "explanation": "После предлога before перед действием используется -ing: signing.",
    "cue": "Перед подписанием формы внимательно прочитайте инструкции.",
    "base": "sign",
    "choices": [
      "signing",
      "to sign"
    ]
  },
  {
    "id": "patterns-inf-113-repair",
    "family": "patterns-inf-113",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "repair",
    "level": 2,
    "prompt": "We are interested in to learn how the filter works.",
    "answers": [
      "We are interested in learning how the filter works."
    ],
    "model": "We are interested in learning how the filter works.",
    "explanation": "В выражении interested in слово in: предлог, после него learning.",
    "cue": "We are interested in to learn how the filter works.",
    "base": ""
  },
  {
    "id": "patterns-inf-114-transform",
    "family": "patterns-inf-114",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "transform",
    "level": 3,
    "prompt": "The driver stopped to check the tire pressure.",
    "answers": [
      "The driver stopped checking the tire pressure."
    ],
    "model": "The driver stopped checking the tire pressure.",
    "explanation": "Stop + -ing означает прекратить действие; stop + to-infinitive означает остановиться ради другого действия.",
    "cue": "The driver stopped to check the tire pressure.",
    "base": "",
    "task": "Используй stopped + -ing, чтобы сказать, что проверка прекратилась."
  },
  {
    "id": "patterns-inf-115-translate",
    "family": "patterns-inf-115",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "translate",
    "level": 3,
    "prompt": "Они решили не менять поставщика до конца года.",
    "answers": [
      "They decided not to change the supplier until the end of the year."
    ],
    "model": "They decided not to change the supplier until the end of the year.",
    "explanation": "Decide + to-infinitive; not ставится перед to change.",
    "cue": "Они решили не менять поставщика до конца года.",
    "base": "they / decide / not / change / the supplier / until the end of the year",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-inf-116-contrast",
    "family": "patterns-inf-116",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи действие с целью и прекращение самого действия.",
    "answers": [
      "to write | writing"
    ],
    "model": "He stopped to write a message to answer the door. He stopped writing messages during the meeting.",
    "explanation": "Stop to write: остановился, чтобы написать; stop writing: перестал писать.",
    "cue": "Различи действие с целью и прекращение самого действия.",
    "base": "",
    "parts": [
      {
        "prompt": "He stopped ___ a message to answer the door.",
        "base": "write",
        "answer": "to write"
      },
      {
        "prompt": "He stopped ___ messages during the meeting.",
        "base": "write",
        "answer": "writing"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-inf-117-choice",
    "family": "patterns-inf-117",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "choice",
    "level": 3,
    "prompt": "Выбери правильный совет по улучшению произношения.",
    "answers": [
      "She practices reading aloud every morning."
    ],
    "model": "She practices reading aloud every morning.",
    "explanation": "После practice используется герундий reading.",
    "cue": "Выбери правильный совет по улучшению произношения.",
    "base": "",
    "task": "Выбери верное сочетание глаголов.",
    "choices": [
      "She practices reading aloud every morning.",
      "She practices to read aloud every morning.",
      "She practices read aloud every morning."
    ]
  },
  {
    "id": "patterns-inf-118-repair",
    "family": "patterns-inf-118",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "repair",
    "level": 2,
    "prompt": "The committee suggested to postpone the vote until Friday.",
    "answers": [
      "The committee suggested postponing the vote until Friday."
    ],
    "model": "The committee suggested postponing the vote until Friday.",
    "explanation": "Suggest обычно принимает -ing form, если после него нет отдельного придаточного.",
    "cue": "The committee suggested to postpone the vote until Friday.",
    "base": ""
  },
  {
    "id": "patterns-inf-119-transform",
    "family": "patterns-inf-119",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "transform",
    "level": 3,
    "prompt": "I remembered to lock the back door.",
    "answers": [
      "I remember locking the back door."
    ],
    "model": "I remember locking the back door.",
    "explanation": "Remember to do: не забыть выполнить; remember doing: помнить уже выполненное действие.",
    "cue": "I remembered to lock the back door.",
    "base": "",
    "task": "Передай, что я помню сам факт, что запер дверь: используй remember + -ing."
  },
  {
    "id": "patterns-inf-120-translate",
    "family": "patterns-inf-120",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "translate",
    "level": 3,
    "prompt": "Инструктор посоветовал участникам держаться размеченной тропы.",
    "answers": [
      "The instructor advised the participants to stay on the marked trail."
    ],
    "model": "The instructor advised the participants to stay on the marked trail.",
    "explanation": "Advise + person + to-infinitive.",
    "cue": "Инструктор посоветовал участникам держаться размеченной тропы.",
    "base": "the instructor / advise / the participants / stay / on the marked trail",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-inf-121-contrast",
    "family": "patterns-inf-121",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи напоминание о будущем действии и воспоминание о завершённом.",
    "answers": [
      "to save | saving"
    ],
    "model": "Remember to save the file before closing the laptop. I remember saving the file before the laptop shut down.",
    "explanation": "Remember to save: не забудь сделать; remember saving: помню, что уже сохранил.",
    "cue": "Различи напоминание о будущем действии и воспоминание о завершённом.",
    "base": "",
    "parts": [
      {
        "prompt": "Remember ___ the file before closing the laptop.",
        "base": "save",
        "answer": "to save"
      },
      {
        "prompt": "I remember ___ the file before the laptop shut down.",
        "base": "save",
        "answer": "saving"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-inf-122-gap",
    "family": "patterns-inf-122",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "gap",
    "level": 2,
    "prompt": "The committee recommended ___ the start time to avoid the holiday.",
    "answers": [
      "changing"
    ],
    "model": "changing",
    "explanation": "Recommend в этой модели сочетается с gerund: recommended changing.",
    "cue": "Комитет рекомендовал изменить время начала, чтобы избежать праздника.",
    "base": "change",
    "choices": [
      "changing",
      "to change"
    ]
  },
  {
    "id": "patterns-inf-123-repair",
    "family": "patterns-inf-123",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "repair",
    "level": 2,
    "prompt": "We considered to move the workshop online.",
    "answers": [
      "We considered moving the workshop online."
    ],
    "model": "We considered moving the workshop online.",
    "explanation": "Consider обычно принимает -ing form: considered moving.",
    "cue": "We considered to move the workshop online.",
    "base": ""
  },
  {
    "id": "patterns-inf-124-transform",
    "family": "patterns-inf-124",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "transform",
    "level": 3,
    "prompt": "I tested the release button, but the case stayed shut.",
    "answers": [
      "I tried pressing the release button, but the case stayed shut."
    ],
    "model": "I tried pressing the release button, but the case stayed shut.",
    "explanation": "Try + -ing описывает способ, который проверили как эксперимент.",
    "cue": "I tested the release button, but the case stayed shut.",
    "base": "",
    "task": "Скажи, что я попробовал нажать кнопку, используя try + -ing."
  },
  {
    "id": "patterns-inf-125-translate",
    "family": "patterns-inf-125",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "translate",
    "level": 3,
    "prompt": "Я не могу привыкнуть вставать так рано.",
    "answers": [
      "I cannot get used to waking up so early."
    ],
    "model": "I cannot get used to waking up so early.",
    "explanation": "В get used to слово to: предлог, после него нужен gerund waking.",
    "cue": "Я не могу привыкнуть вставать так рано.",
    "base": "I / cannot / get used to / wake up / so early",
    "task": "Переведи, используя указанные слова. Сохрани смысл."
  },
  {
    "id": "patterns-inf-126-contrast",
    "family": "patterns-inf-126",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "contrast",
    "level": 3,
    "prompt": "Различи прошлую привычку и привычное для человека состояние.",
    "answers": [
      "used to | used to"
    ],
    "model": "He used to drive to the coast every summer. He is used to driving on narrow roads now.",
    "explanation": "Used to drive: прошлая привычка; be used to driving: быть привычным к действию.",
    "cue": "Различи прошлую привычку и привычное для человека состояние.",
    "base": "",
    "parts": [
      {
        "prompt": "He ___ drive to the coast every summer.",
        "base": "used to",
        "answer": "used to"
      },
      {
        "prompt": "He is ___ driving on narrow roads now.",
        "base": "be used to",
        "answer": "used to"
      }
    ],
    "shuffleParts": false
  },
  {
    "id": "patterns-inf-127-gap",
    "family": "patterns-inf-127",
    "topic": "patterns",
    "skill": "patterns-inf",
    "mode": "gap",
    "level": 2,
    "prompt": "Mia is used to ___ long distances for work.",
    "answers": [
      "driving"
    ],
    "model": "driving",
    "explanation": "В be used to слово to: предлог, поэтому дальше ставится driving.",
    "cue": "Миа привыкла ездить на большие расстояния по работе.",
    "base": "drive",
    "choices": [
      "driving",
      "drive"
    ]
  }
];
