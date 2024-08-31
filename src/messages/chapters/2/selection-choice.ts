import { type DialogueMessage, type Section } from "~/types";

const gameover: DialogueMessage[] = [
  {
    character: "Info",
    text: "Впоследствии проект проваливается из-за нехватки технологий и доработанности",
    type: "gameover",
  },
];

const newLab: DialogueMessage[] = [
  {
    character: "Vika",
    text: "Это будет интересный вызов. Мы готовы попробовать.",
    type: "dialogue",
  },
];

export const selectionChoice: Section = {
  type: "choice",
  text: "Адаптировать технологию под процесс  ускоренной селекции?",
  options: [
    {
      text: "Да",
      sections: [
        {
          type: "dialogue",
          environment: "newLab",
          dialogue: newLab,
        },
        {
          type: "dialogue",
          environment: "newLab",
          dialogue: [
            {
              character: "Info",
              text: "Евгений и Виктория начинают работу над адаптацией технологии.",
              type: "internal",
              endOfChapter: true,
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
          environment: "newLab",
          dialogue: gameover,
        },
      ],
    },
  ],
};
