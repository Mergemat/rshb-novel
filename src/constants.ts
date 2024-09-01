import { chapters as chapterSections } from "./messages";
import { type DialogueSection } from "./types";

export const characters = {
  Evgeny: "Евгений",
  Vika: "Виктория",
  Alex: "Алекс",
  Host: "Ведущий",
  Host2: "Ведущий",
  AlexNoName: "Мужчина",
  Representative: "Представитель НИИ",
  Jury: "Жюри",
  Mikhail: "Михаил",
  Natalia: "Наталья",
  Natasha: "Наташа",
  Scientist: "Учёный",
};

export const chapterNames = {
  1: "Начало пути",
  2: "Конкурс",
  3: "Путь к Признанию",
  4: "Академия Инноваторов",
  5: "Акселератор РСХБ",
  6: "Успешный успех",
} as const;

// init chapters constants
export const initChapters = {
  1: {
    text: (chapterSections["1"][0]! as DialogueSection).dialogue[0]!.text,
    isNewChapter: true,
    status: "active",
    character: "Evgeny-school",
    type: "internal",
    chapter: {
      current: 1,
    },
    section: {
      current: 0,
      environment: "school",
    },
    messages: {
      current: (chapterSections["1"][0]! as DialogueSection).dialogue,
      count: -1,
    },
    choice: {
      active: false,
    },
    loadedChapter: false,
  },
  2: {
    text: (chapterSections["2"][0]! as DialogueSection).dialogue[0]!.text,
    isNewChapter: true,
    status: "active",
    character: "Vika",
    type: "dialogue",
    chapter: {
      current: 2,
    },
    section: {
      current: 0,
      environment: "lab",
    },
    messages: {
      current: (chapterSections["2"][0]! as DialogueSection).dialogue,
      count: 0,
    },
    choice: {
      active: false,
    },
    loadedChapter: false,
  },

  3: {
    text: (chapterSections["3"][0]! as DialogueSection).dialogue[0]!.text,
    status: "active",
    character: "Info",
    type: "internal",
    chapter: {
      current: 3,
    },
    section: {
      current: 0,
      environment: "Moscow",
    },
    messages: {
      current: (chapterSections["3"][0]! as DialogueSection).dialogue,
      count: 0,
    },
  },
} as const;
