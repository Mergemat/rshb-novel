import { type DialogueMessage, type Section } from "~/types";

const opening: DialogueMessage[] = [
  {
    character: "Natasha",
    text: "У вас есть уникальная возможность показать свою силу и заинтересовать частных инвесторов. Если у вас есть амбиции, сейчас самое время их реализовать.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Сегодня у нас первая встреча с Наташей в рамках акселерационной программы.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Она подробно расписала предстоящие этапы и описала возможности, которые откроются перед стартапами.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Особое внимание акцентировалось на инвесторах из АгроИнвест Клуба, которые, как мы поняли, тоже будут следить за успехами участников.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Мы с Викой переглянулись. Это наш шанс выйти на новый уровень.",
    type: "internal",
  },
];

const pitch: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Презентационный зал забит деловыми людьми в строгих костюмах.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Сейчас все их внимание сосредоточено на нашей презентации.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Вика переходит к части презентации с подробным анализом данных климатических комплексов, рассказывая о планах по фенотипированию растений.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Она объясняет, как фенотипирование может помочь создать более продуктивные сельскохозяйственные культуры.",
    type: "internal",
  },
  {
    character: "Vika",
    text: "Фенотипирование растений – это описательный процесс, в результате которого учёный получает подробную информацию о фенотипе каждого образца: анализируется размер, цвет, форма и внешние особенности. Учёные улучшают сельскохозяйственные культуры...",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "...при помощи таких сортов, которые могут дать наибольший урожай в кратчайшие сроки с минимальным риском быть уничтоженными вредителями.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Мы столько раз репетировали, что уже наизусть знаем текст друг друга.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Сейчас как раз-таки мне нужно будет завершить презентацию.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Видно, что инвесторам идея понравилась.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Главное не оплошать.",
    type: "internal",
  },
];

const badChoice: DialogueMessage[] = [
  {
    character: "Evgeny-wow",
    text: "До нас такую технологию еще никто не изобретал. Этот проект - настоящий прорыв, который навсегда изменит будущее мирового сельского хозяйства! ",
    type: "dialogue",
  },
  {
    character: "Evgeny-wow",
    text: "Наше великое научное открытие способно покорить все сферы аграрного производства! ",
    type: "dialogue",
  },
  {
    character: "Evgeny-wow",
    text: "Но нам придется создать новые технологии, которые будут позволять развивать этот проект в будущем.",
    type: "dialogue",
  },
  {
    character: "Evgeny-wow",
    text: "Без этой разработки технологии селекции останутся в прошлом веке, поэтому эта инвестиция - инвестиция в будущее человечества!",
    type: "dialogue",
  },
  {
    character: "Info",
    text: "Ваш подход вызывает отторжение. Инвесторы не любят чрезмерно самоуверенных стартаперов, считающих свои разработки необходимыми всему человечеству. Ваша компания не получает инвестиций и остается небольшим стартапом с несколькими лабораториями, застывая на одном уровне.",
    type: "gameover",
  },
];

const goodChoice: Section[] = [
  {
    type: "dialogue",
    environment: "pitch",
    dialogue: [
      {
        character: "Info",
        text: "Эта стратегия работает, и вы получаете инвестиции, а также еще большую узнаваемость.",
        type: "internal",
      },
    ],
  },
  {
    type: "dialogue",
    environment: "congrats",
    dialogue: [
      {
        character: "Evgeny",
        text: "На столе перед нами лежат документы, подтверждающие крупные инвестиции. 20 миллионов рублей.",
        type: "internal",
      },
      {
        character: "Evgeny",
        text: "Это не сон, и мы правда подписали сделку на 20 миллионов рублей.",
        type: "internal",
      },
      {
        character: "Evgeny",
        text: "Теперь у нас есть все средства для реализации амбициозной задачи – разработки технологии фенотипирования растений.",
        type: "internal",
      },
      {
        character: "Evgeny",
        text: "Мы сможем использовать климатические комплексы для создания базы из 120 тысяч изображений, необходимых для обучения ИИ.",
        type: "internal",
      },
      {
        character: "Evgeny-interest",
        text: "После этого можно...",
        type: "internal",
      },
      {
        character: "Evgeny-showing",
        text: "Из водоворота мыслей меня вытянула подошедшая Наташа.",
        type: "internal",
      },
      {
        character: "Natasha",
        text: "Поздравляю! Теперь перед вами открыты огромные возможности.",
        type: "dialogue",
      },
    ],
  },
];

const allGood: DialogueMessage[] = [
  {
    character: "Scientist",
    text: "И как вы можете видеть, ИИ успешно отделяет колоски пшеницы друг от друга, анализируя их фенотипы.",
    type: "dialogue",
  },
  {
    character: "Scientist",
    text: "На экране вы можете видеть транслируемые данные: размеры, формы, цвет и другие параметры.",
    type: "dialogue",
  },
  {
    character: "Vika",
    text: "Мы сделали это! Теперь мы можем вести журнал экспериментов прямо в приложении, объединяя данные о каждом растении и климатических условиях. Это выводит наш проект на совершенно иной уровень.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Ничего не говоря, я просто посмотрел на Вику и улыбнулся.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Она тепло улыбнулась мне в ответ. Думаю, она все и так поняла без слов.",
    type: "internal",
    endOfChapter: true,
  },
];

export const chapter5: Section[] = [
  {
    type: "dialogue",
    environment: "panOffice",
    dialogue: opening,
  },
  {
    type: "dialogue",
    environment: "invest",
    dialogue: pitch,
  },
  {
    type: "choice",
    text: "Как завершить презентацию?",
    options: [
      {
        text: "Показать величие проекта",
        sections: [
          {
            type: "dialogue",
            environment: "invest",
            dialogue: badChoice,
          },
        ],
      },
      {
        text: "Объяснить инвестиционные планы",
        sections: [
          ...goodChoice,
          {
            type: "dialogue",
            environment: "goodLab",
            dialogue: allGood,
          },
        ],
      },
    ],
  },
];
