import { type Section, type DialogueMessage } from "~/types";

const school: DialogueMessage[] = [
  {
    character: "Evgeny-school",
    text: "Мы сидели за последней партой в кабинете биологии. В воздухе витал запах комнатных растений и моющих средств. Наши одноклассники ушли домой как два или три часа назад, а мы с Викой все возились с этой коробкой.",
    type: "internal",
  },
  {
    character: "Evgeny-school",
    text: "Не, Вик, мы с этим за сегодня точно не управимся. Может это не стоит того? Комиссия в этом году строгая, да и мы не знаем, какие проекты приготовят другие.",
    type: "dialogue",
  },
  {
    character: "Vika-school",
    text: "Женя, ты же сам мне говорил, как веришь в наш проект. И дело не только во времени и усилиях, а в главной цели нашей разработки",
    type: "dialogue",
  },
  {
    character: "Vika-school",
    text: "Да и сам подумай. Мы буквально из какой-то пластмассовой коробки сделали устройство для управления климатом! Как это можно так оставить?",
    type: "dialogue",
  },

  {
    character: "Evgeny-school",
    text: "Я вздыхаю. Вика всегда была ярым мечтателем, что до последнего будет бороться за свою идею. Даже если в конечном итоге это окажется чем-то невозможным.",
    type: "internal",
  },
  {
    character: "Evgeny-school",
    text: "Ладно, тащи те провода и плату. Пробуем заново.",
    type: "dialogue",
  },
  {
    character: "Evgeny-school",
    text: "Улыбнувшись, Вика пошла в лаборантскую, а я на время остался со своими мыслями.",
    type: "internal",
  },
  {
    character: "Evgeny-school",
    text: "Я всегда был излишне прагматичен и рационален. С одной стороны это позволяло трезво оценивать свои силы и возможности, но с другой...мне не хватало того авантюризма, что есть в Вике.",
    type: "internal",
  },
  {
    character: "Evgeny-school",
    text: "Возможно поэтому из нас получилась такая хорошая команда.",
    type: "internal",
  },
];

const konkurs: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Тогда мы еще учились в 10 классе. Задерживались каждый день после уроков, чтобы улучшить нашу разработку.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Сейчас, когда мы стоим на сцене и слушаем речь ведущего в качестве победителей, я понимаю, что Вика была права. Пожалуй, стоит поблагодарить её позже.",
    type: "internal",
  },
  {
    character: "Host",
    text: "Дорогие Виктория и Евгений! Поздравляем вас с победой в конкурсе.",
    type: "dialogue",
  },
  {
    character: "Host",
    text: "Ваша автоматизированная система жизнеобеспечения растений поразила наших жюри! В таком юном возрасте вы уже добились таких научных успехов!",
    type: "dialogue",
  },
  {
    character: "Vika",
    text: "Большое спасибо! Это достижение – не только наше, но и всех, кто верил в нас и помогал развивать этот проект. Мы продолжаем работать ради будущего.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Получив диплом и отдельные слова поддержки от каждого члена жюри, мы попрощались с публикой и спустились со сцены. Вместе мы направились к зоне отдыха, каждый думая о чем-то своём.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Наверное, это первая настолько значимая для нас победа. Да, участие в школьных конкурсах и выставках дало какой-то полезный опыт, но получить признание от ведущих специалистов отрасли...это совсем другое.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Изначально нам казалось это невозможным и настолько далеким, но работая вместе мы справились.",
    type: "internal",
  },
  {
    character: "Vika",
    text: "Мы молодцы, знаешь?",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Знаю.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Вика рассмеялась и легко хлопнула меня по плечу.",
    type: "internal",
  },
  {
    character: "Vika",
    text: "Я серьезно вообще-то. До сих пор не верится, что у нас получилось. Мы так продвинулись в нашей разработке, а после советов жюри у меня появилось еще больше идей. В общем, я думаю...",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Вика не успела закончить мысль. Она отвлеклась на подошедшего к нам мужчину в дорогом костюме.",
    type: "internal",
  },
  {
    character: "AlexNoName",
    text: "Извините, если прерываю. Хотел лично поздравить вас с победой. Удивительный проект!",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Благодарю. Мы рады, что он многим понравился.",
    type: "dialogue",
  },
  {
    character: "Alex",
    text: "О, забыл представиться. Меня зовут Алекс, на мероприятии я со стороны инвесторов. Меня очень заинтересовал ваш проект, поэтому хотел предложить вам сотрудничество.",
    type: "dialogue",
  },
  {
    character: "Vika",
    text: "Это замечательно! Жень, а ты что думаешь?",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Заманчивое предложение. А как именно будет проходить сотрудничество?",
    type: "dialogue",
  },
  {
    character: "Alex",
    text: "Я рассматриваю вариант вложения и дальнейшего масштабирования на территории США. Вероятнее всего на время вам нужно будет переехать для осуществления развития продукта на международном рынке. Конечно же, проходить это будет с поддержкой нашего фонда. Что скажете?",
    type: "dialogue",
  },
];

const choiceDeny: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Извините, не думаем, что такой вариант нам подходит. Но спасибо за предложение.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Мы еще немного пообщались с Алексом перед тем, как он отошел познакомиться с группой недалеко стоящих ребят. Мне кажется, это была другая команда из нашей категории. Хм, любопытно.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Я посмотрел на Вику. Выглядела она как-то недовольно, даже немного грустно. Видимо, ей не очень понравилось, что я принял решение, не спросив её мнения. Но так будет лучше.",
    type: "internal",
    endOfChapter: true,
  },
];

const choiceExchange: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Это довольно-таки неожиданное предложение. Нам нужно подумать и обсудить с моей коллегой. Давайте тогда обменяемся номерами.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Мы еще немного пообщались с Алексом перед тем, как он отошел поздороваться со знакомым. Вика сразу сменила тему, как бы откладывая важный разговор на потом. Сейчас нам просто хотелось насладиться моментом и нашей общей победой.",
    type: "internal",
  },
];

const cafe: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Может и вправду согласимся? Первый крупный инвестор да еще и с предложением переехать, развиваться на иностранном рынке. Когда еще будет такая возможность?",
    type: "dialogue",
  },
  {
    character: "Vika",
    text: "Все это только звучит легко. Будто мы переедем и сразу покорим все США. А на деле? Жень, мне самой нравится идея такого расширения, но...мы же только начали наш путь здесь. Наш проект слишком молод и не получил еще того развития, что мы хотели.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Алекс предлагает перепрыгнуть этот этап, сразу масштабироваться, без пробы 'на местной почве'. Представь, что мы сразу можем выйти на мировой уровень.",
    type: "dialogue",
  },
  {
    character: "Vika",
    text: "Это не будет считаться, что мы вышли на мировой уровень. Наша разработка - да, но не мы. На деле рынком завладеет технология, представленная компанией Алекса, а мы только ее разработчики, но никак не владельцы.",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Точно. Я так углубился в мысли о переезде и выходе за пределы отечественного рынка, что забыл о самом главном. Мы же продаем разработку. После сделки мы правда перестанем быть владельцами данного проекта.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Но при этом мы имеем возможность сразу выйти на такой уровень! В конечном итоге я и хотел, чтобы наша технология распространилась за пределы страны. А тут можно сразу перейти к этому. Хоть и после проект не будет считаться нашим.",
    type: "internal",
  },
  {
    character: "Vika",
    text: "Жень, ты чего завис? Что в итоге отвечаем Алексу?",
    type: "dialogue",
  },
];

export const chapter1: Section[] = [
  {
    type: "dialogue",
    environment: "school",
    dialogue: school,
  },
  {
    type: "dialogue",
    environment: "konkurs",
    dialogue: konkurs,
  },
  {
    type: "choice",
    options: [
      {
        text: "Отказать",
        sections: [
          {
            type: "dialogue",
            environment: "konkurs",
            dialogue: choiceDeny,
          },
        ],
      },
      {
        text: "Обменяться контактами",
        sections: [
          {
            type: "dialogue",
            environment: "konkurs",
            dialogue: choiceExchange,
          },
          {
            type: "dialogue",
            environment: "cafe",
            dialogue: cafe,
          },
          {
            type: "choice",
            options: [
              {
                text: "Согласиться на переезд",
                sections: [
                  {
                    type: "dialogue",
                    environment: "cafe",
                    dialogue: [
                      {
                        character: "Info",
                        text: "Американский холдинг разбогател на развитии и масштабировании технологии, а ребята вернулись в Россию с деньгами. Дальнейшая их работа в качестве команды прекратилась, а право на использования технологии осталось у Алекса.",
                        type: "gameover",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Отказаться от переезда",
                sections: [
                  {
                    type: "dialogue",
                    environment: "cafe",
                    dialogue: [
                      {
                        character: "Info",
                        text: "Алекс поддержал ваше решение и попросил сохранить его контакт на всякий случай. Ребята отказались от иностранного рынка, сохранив свою технологию при себе. Они хотят продолжить развиваться и достичь больших побед.",
                        type: "internal",
                        endOfChapter: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
