import { type DialogueMessage, type Section } from "~/types";

const start: DialogueMessage[] = [
  {
    character: "Evgeny-showing",
    text: "Мы с Викой скромно поднимаем руки. Девушка со сцены заинтересованно окидывает нас взглядом и тут же продолжает:",
    type: "internal",
  },
  {
    character: "Natalia",
    text: "Вот это неожиданность! Давайте после сессии познакомимся поближе.",
    type: "dialogue",
  },
];

const rshb: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "После выступления мы отошли в более тихую часть зала, чтобы спокойно и без лишнего стороннего шума пообщаться. Мы расположились в уютном уголке отдыха с мягкими креслами и кофейным столиком из темного дерева. За панорамными окнами виделись огни ночной Москвы.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Пока мы рассказывали про наш проект, Наталья... Точнее Наташа кивала на некоторые моменты и делала какие-то заметки в зеленом блокноте с символикой Банка. Когда мы закончили, она пробежалась взглядом по написанному.",
    type: "internal",
  },
  {
    character: "Natasha",
    text: "Знаете, ваш проект очень перспективен. Мы как раз искали агротех стартапы для нашей программы акселерации. Будет здорово, если вы будете в числе участников. Так мы сможем помочь вам в поисках инвесторов и развитии уже существующего решения до промышленного масштаба.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Мы с Викой переглядываемся. Здесь и долго думать не надо.",
    type: "internal",
  },
];

export const raiseHand: Section[] = [
  {
    type: "dialogue",
    environment: "startup",
    dialogue: start,
  },
  {
    type: "dialogue",
    environment: "rshb",
    dialogue: rshb,
  },
  {
    type: "choice",
    options: [
      {
        text: "согласиться",
        sections: [
          {
            type: "dialogue",
            environment: "rshb",
            dialogue: [
              {
                character: "Evgeny",
                text: "Мы согласны!",
                type: "dialogue",
                endOfChapter: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
