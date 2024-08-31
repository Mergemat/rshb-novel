import { type DialogueMessage, type Section } from "~/types";

const konkurs: DialogueMessage[] = [
  {
    character: "Evgeny",
    text: "Мы подошли к финалу 'Академии'. Сейчас, в этом конференц-зале, наполненном огромным количеством ждущих результатов участников, по-особенному накатывают приступы волнения.",
    type: "internal",
  },
  {
    character: "Evgeny-angry",
    text: "Мы с Викой нервно переглядываемся. Ведущий начинает зачитывать победителей, начиная с третьего места. Это ожидание томительно.",
    type: "internal",
  },
  {
    character: "Host2",
    text: "И первое место из 1700 участников в нашем конкурсе занимает стартап, который нацелен изменить агротехнологическую отрасль в России...",
    type: "dialogue",
  },
  {
    character: "Host2",
    text: "Это проект Евгения и Виктории по созданию...",
    type: "dialogue",
  },
  {
    character: "Evgeny-wow",
    text: "Я не услышал окончание фразы, оглушенный фактом победы. С запозданием в голову пробирается шум от аплодисментов и шепотом рядом стоящих участников. Мы победители.",
    type: "internal",
  },
  {
    character: "Evgeny-angry",
    text: "Нет, не так.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Мы победили.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Победили будучи единственным агротехник стартапом из всех участников.",
    type: "internal",
  },
  {
    character: "Evgeny-interest",
    text: "Я прихожу в себя, когда Вика похлопывает меня по плечу, быстро приобнимая. Счастливая, с таким блеском в глазах. Да и я стоял с широкой улыбкой, смотря на всех с неким удивлением. Мы поднимаемся на сцену.",
    type: "internal",
  },
];

const konkursDialogue: DialogueMessage[] = [
  {
    character: "Vika",
    text: "Я не верю. Мы правда сделали это!",
    type: "dialogue",
  },
  {
    character: "Evgeny",
    text: "Шепчет мне Вика, когда мы держа по бокам сертификат позируем на сцене для фотографа. Вспышка от его фотоаппарата ослепляет на пару секунд.",
    type: "internal",
  },
  {
    character: "Evgeny",
    text: "Сейчас стоит собраться с мыслями, ведь впереди еще экспертная сессия. Я бы задержался и послушал пару спикеров.",
    type: "internal",
  },
];

export const chapter4: Section[] = [
  {
    type: "dialogue",
    environment: "startup",
    dialogue: konkurs,
  },
  {
    type: "dialogue",
    environment: "startup",
    dialogue: konkursDialogue,
  },
];
