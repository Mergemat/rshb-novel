import { type DialogueMessage, type Section } from "~/types";

const office: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Мы успешно презентовали наш проект Академии, представителям очень понравилось, и они настояли на нашем участии.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Непривычно участвовать в чем-то подобном. Мы привыкли справляться сами, а здесь есть целая группа экспертов и инвесторов Академии, к которой как будто стоит обратиться за экспертизой перед финальным питчингом проекта.",
    type: "internal",
  },

  {
    character: "Evgeny-angry",
    text: "Мы обсуждали это с Викой несколько раз, но нас все одолевают сомнения.",
    type: "internal",
  },
  {
    character: "Evgeny-angry",
    text: "Позволить сторонним людям, в каком-то смысле конкурентам, взглянуть на технологию изнутри, когда привыкли все время держать это только между собой.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "А в то же время...это даст столько возможностей как со стороны дополнительных инвестиций, так и презентации проекта.",
    type: "internal",
  },
];

export const choicePitching: Section[] = [
  {
    type: "dialogue",
    environment: "newOffice",
    dialogue: office,
  },
  {
    type: "choice",
    text: "Стоит ли пользоваться помощью экспертов Академии?",
    options: [
      {
        text: "Да",
        sections: [
          {
            type: "dialogue",
            environment: "newOffice",
            dialogue: [
              {
                character: "Info",
                text: "Вы решаете пройти экспертизу и представить свой проект инвесторам. Это приводит к привлечению значительных инвестиций и расширению вашей деятельность. Ваш путь продолжается с новыми вызовами и возможностями.",
                type: "internal",
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
            environment: "newOffice",
            dialogue: [
              {
                character: "Info",
                text: "Вы упустили возможность получить доступ к важным ресурсам. Ваш проект теряет динамику и не достигает планируемого успеха без нужной поддержки.",
                type: "gameover",
              },
            ],
          },
        ],
      },
    ],
  },
];
