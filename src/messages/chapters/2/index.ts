import { type DialogueMessage, type Section } from "~/types";
import { selectionChoice } from "./selection-choice";

const lab: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Впереди конкурс Всероссийского НИИ сельскохозяйственной биотехнологии. Шаг за шагом мы идем к нашей мечте, набираясь опыта. Презентация уже закончена, Вика хорошо постаралась над дизайном и содержанием. Теперь бы с текстом разобраться.",
    type: "internal",
  },
  {
    character: "Vika",
    text: "На эту часть удели не больше двух минут, времени дают не так много.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Две минуты? Хм, я хотел сделать акцент на том, как наша система может сократить выбросы углекислого газа. Да, это займет больше времени, но эта тема сейчас особо актуальна.",
    type: "dialogue",
  },
  {
    character: "Vika",
    text: "К тому же это помогает улучшать урожайность, о чем тоже стоит сказать... Смотри по времени тогда. Думаю, успеть сможешь.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Ладно, посмотрю как по таймингу будет.",
    type: "dialogue",
  },
];

const presentation: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Вика начинала нашу презентацию. Говорила она уверенно и без запинки, совсем без волнения. Это хорошо, ведь комиссия в этот раз заставляет немного поволноваться.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Все их вопросы били по болевым точкам, подчеркивая каждый недочет. А прошлой команде снизили оценку из-за нарушения регламента - не успели по времени. Стоит ли тогда отдельно говорить про сокращение выбросов?",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Я могу просто упомянуть про сокращение углекислого газа. Тему с урожайностью раскрыть уже не успею. Нужно решать, уже подходит моя очередь говорить.",
    type: "internal",
  },
];

const choiceExpand: DialogueMessage[] = [
  {
    character: "Evgeny-talking",
    text: "Наша технология управления климатом может стать ключевым элементом в повышении урожайности, способствуя продовольственной безопасности.",
    type: "dialogue",
  },
  {
    character: "Evgeny-showing",
    text: "Согласно нашим расчетам, использование нашей технологии позволит снизить углеродный след на 30%, при этом увеличив урожайность на 15%.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "После несложных вопросов о будущем развитии проекта комиссия поблагодарила нас за выступление, и мы спокойно закончили презентацию. Выступление задержалось на секунд 20, но кажется это не критично.",
    type: "internal",
  },
];

const choiceReduce: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Мы успели, даже минута дополнительного времени осталась. И комиссия выглядит довольной.",
    type: "internal",
  },
  {
    character: "Jury",
    text: "А в чем заключается преимущество системы снижения углеродного следа?",
    type: "dialogue",
  },
  {
    character: "Vika",
    text: "Наша технология управления климатом может стать ключевым элементом в повышении урожайности, способствуя продовольственной безопасности.",
    type: "dialogue",
  },
  {
    character: "Vika",
    text: "Согласно нашим расчетам, использование нашей технологии позволит снизить углеродный след на 30%, при этом увеличив урожайность на 15%.",
    type: "dialogue",
  },
  {
    character: "Jury",
    text: "Не хватало этого в презентации. Спасибо за выступление.",
    type: "dialogue",
  },
  {
    character: "Info",
    text: "Презентация провалилась, поскольку для большинства членов жюри она оказалась недостаточно проработанной. Игра окончена",
    type: "gameover",
  },
];

export const chapter2: Section[] = [
  {
    type: "dialogue",
    environment: "lab",
    dialogue: lab,
  },
  {
    type: "dialogue",
    environment: "presentation",
    dialogue: presentation,
  },
  {
    type: "choice",
    options: [
      {
        text: "Полностью раскрыть технологию",
        sections: [
          {
            type: "dialogue",
            environment: "konkurs",
            dialogue: choiceExpand,
          },
          {
            type: "dialogue",
            environment: "newLab",
            dialogue: [
              {
                character: "Info",
                text: "Конкурс выигран. Поставка лабораторного оборудования и дальнейшее сотрудничество обеспечены",
                type: "internal",
              },
              {
                character: "Representative",
                text: "Ваше оборудование выглядит впечатляюще. Мы хотели бы обсудить возможность адаптации вашей технологии для нашего процесса ускоренной селекции. Это займет больше времени и некоторых затрат, но и результат будет соответствующим.",
                type: "dialogue",
              },
            ],
          },
          selectionChoice,
        ],
      },
      {
        text: "Сократить спич",
        sections: [
          {
            type: "dialogue",
            environment: "konkurs",
            dialogue: choiceReduce,
          },
          selectionChoice,
        ],
      },
    ],
  },
];