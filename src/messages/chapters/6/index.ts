import { type DialogueMessage, type Section } from "~/types";

const agroCode: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Вот мы и дошли до участия в конференции AgroCode, о которой мы так много слышали от Наташи.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Мы сидели в просторном зале, наполненном светом и современными технологиями.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "На сцене со своей речью выступал председатель правительства РФ Михаил Мишустин.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "В это же время на экранах по бокам сцены транслировались достижения российских учёных и стартапов.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "В середине своего выступления Михаил Владимирович упомянул о достижениях молодых учёных и предпринимателей, выделяя инновации в агротехнологиях.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "В этот момент мы на секунду пересеклись взглядами.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Внутри я ощущал гордость за проект и уверенность в нашем будущем.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "В конце мероприятия на сцену выходит Наташа, чтобы объявить победителей премии AgroCode Top 100!",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Мы слушали номинацию за номинацией, в неком напряжении ожидая ту самую...",
    type: "internal",
  },
  {
    character: "Natasha",
    text: "И победителем в номинации «Агротехстартап года» становится компания, которая сделала невероятный вклад в развитие фенотипирования растений и цифровизации сельского хозяйства - PlantInsight",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Вика, взяв статуэтку, начала нашу благодарственную речь.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Честно, изначально я не хотел что-то говорить, потому что сказанных слов уже было достаточно, но уже стоя на сцене, я понял, что должен сказать.",
    type: "internal",
  },
  {
    character: "Evgeny-talking",
    text: "Это достижение – не только наше, но и всех, кто верил в нас и помогал развивать этот проект. Мы продолжаем работать ради будущего.",
    type: "dialogue",
  },
];

const end: DialogueMessage[] = [
  {
    character: "Info",
    text: "Поздравляем! Ты смог пройти этот непростой путь вместе с нашими героями. Благодаря твоим мудрым решениям, стартап Виктории и Евгения превратился в настоящую историю успеха, способную изменить будущее сельского хозяйства.",
    type: "internal",
  },
  {
    character: "Info",
    text: "Твои стратегические решения, терпение и упорство помогли преодолеть все трудности и добиться выдающихся результатов.",
    type: "internal",
  },
  {
    character: "Info",
    text: "Ты доказал, что, даже начиная с нуля, можно достичь высот и оставить свой след в мире инноваций.",
    type: "internal",
  },
  {
    character: "Info",
    text: "Желаем тебе продолжать покорять новые вершины, ведь, как ты уже знаешь, всё возможно!",
    type: "internal",
  },
  {
    character: "Info",
    text: "Спасибо за игру, и пусть твой следующий проект будет таким же успешным!",
    type: "internal",
  },
];

// предложение замуж
const proposal: DialogueMessage[] = [
  {
    character: "Info",
    text: "Вечер, уже знакомый офис ребят. Виктория и Евгений смотрят на панораму города из окна. Они понимают, что впереди их ждет ещё очень много работы. Но это потом, сейчас их мысли витают вокруг чего-то другого.",
    type: "internal",
  },
  {
    character: "Info",
    text: "В руках у Виктории – смартфон, на экране которого видно сообщение о новом крупном предложении от международного партнёра.",
    type: "internal",
  },
  {
    character: "Vika",
    text: "Вместе мы прошли через многое. Я бы хотела, чтобы дальше так и оставалось.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Кстати об этом...",
    type: "dialogue",
  },
  {
    character: "Info",
    text: "Евгений в этот момент опускается на одно колено и, открывая бархатную коробочку с кольцом, говорит:",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Вика, с самого начала нашего пути ты была рядом со мной – не только как партнёр по бизнесу, но и как человек, который поддерживал, вдохновлял и верил в нас, даже когда было трудно.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Мы вместе прошли через столько испытаний, добились невероятных вещей и создали что-то важное. Но самое ценное, что я нашёл за всё это время – это тебя.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Ты не просто мой союзник в работе, ты моя поддержка и вдохновение в жизни. С тобой каждый день становится особенным, и я не могу представить своё будущее без тебя.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Я хочу, чтобы мы продолжали строить нашу жизнь вместе, чтобы все наши победы и радости были общими. Виктория, выйдешь за меня?",
    type: "dialogue",
  },
];

export const chapter6: Section[] = [
  {
    type: "dialogue",
    environment: "conference",
    dialogue: agroCode,
  },
  {
    type: "dialogue",
    environment: "conference",
    dialogue: end,
  },
  {
    type: "dialogue",
    environment: "badOffice",
    dialogue: proposal,
  },
  {
    type: "choice",
    options: [
      {
        text: "Да",
        sections: [
          {
            type: "dialogue",
            environment: "badOffice",
            dialogue: [
              {
                character: "Vika",
                text: "Да, конечно! Я люблю тебя и хочу провести с тобой всю оставшуюся жизнь!",
                type: "dialogue",
              },
            ],
          },
          {
            type: "dialogue",
            environment: "wedding",
            dialogue: [
              {
                character: "Info",
                text: "",
                type: "internal",
                endOfGame: true,
              },
            ],
          },
        ],
      },
      {
        text: "Нет",
        sections: [
          {
            type: "dialogue",
            environment: "badOffice",
            dialogue: [
              {
                character: "Vika",
                text: "Нет, прости меня, я пока не готова к такому серьезному шагу, нам всего по 20 лет и мы только начали вести успешный бизнес вместе, я хочу быть с тобой рядом, но пока не готова к такому резкому решению, прости...",
                type: "dialogue",
              },
              {
                character: "Info",
                text: "*Евгений и Виктория продолжили вести совместный бизнес. Через три года они вышли на биржу, заработок стал стабильным и значительно вырос. После чего Евгений попытал счастье еще раз. Виктория приняла предложение.",
                type: "internal",
              },
            ],
          },
          {
            type: "dialogue",
            environment: "wedding",
            dialogue: [
              {
                character: "Info",
                text: "",
                type: "internal",
                endOfGame: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
