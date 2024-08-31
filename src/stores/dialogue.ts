import { createStore } from "zustand/vanilla";
import { chapters } from "~/messages";
import {
  type Section,
  type DialogueMessage,
  type DialogueSection,
} from "~/types";

export type DialogueState = {
  character: string;
  text: string;
  status: "active" | "gameover";
  type: "internal" | "dialogue" | "gameover";
  isNewChapter: boolean;
  chapter: {
    current: number;
    collection?: Section[];
  };
  section: {
    current: number;
    environment: string;
  };
  messages: {
    current: DialogueMessage[];
    count: number;
  };
  choice:
    | {
        active: true;
        text?: string;
        options?: { text: string; sections: Section[] }[];
      }
    | {
        active: false;
      };
};

export type DialogueActions = {
  nextStep: () => void;
  previousStep: () => void;
  makeChoice: (collection: Section[]) => void;
  reset: () => void;
  continueChapter: () => void;
};

export type DialogueStore = DialogueState & DialogueActions;

export const initialDialogueStore = (): DialogueState => ({
  text: (chapters["1"][0]! as DialogueSection).dialogue[0]!.text,
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
    current: (chapters["1"][0]! as DialogueSection).dialogue,
    count: -1,
  },
  choice: {
    active: false,
  },
});

export const createDialogueStore = (initState: DialogueState) => {
  return createStore<DialogueStore>()((set, get) => ({
    ...initState,
    nextStep: () => {
      set((state) => {
        let section = state.section.current;
        let messageCount = state.messages.count + 1;

        if (messageCount >= state.messages.current.length) {
          section += 1;
          messageCount = 0;
        }

        let chapterSection =
          chapters[state.chapter.current as keyof typeof chapters][section];

        if (state.chapter.collection) {
          chapterSection = state.chapter.collection[section];
        }

        if (chapterSection?.type === "choice") {
          console.log("choice", chapterSection.options);
          return {
            ...state,
            choice: {
              active: true,
              text: chapterSection.text,
              options: chapterSection.options,
            },
          };
        }

        const sectionMessages = chapterSection?.dialogue;

        if (
          !sectionMessages ||
          sectionMessages[messageCount - 1]?.endOfChapter
        ) {
          return {
            ...state,
            isNewChapter: true,
            chapter: {
              ...state.chapter,
              current: state.chapter.current + 1,
              collection: undefined,
            },
            messages: {
              ...state.messages,
              count: 0,
            },
          };
        }

        const dialogue = sectionMessages[messageCount]!;

        console.log({
          chapter: state.chapter.current,
          section,
          messageCount,
          collection: state.chapter.collection,
        });

        return {
          ...state,
          text: dialogue.text,
          character: dialogue.character,
          status: dialogue.type === "gameover" ? "gameover" : state.status,
          type: dialogue.type,
          section: {
            current: section,
            environment: chapterSection!.environment,
          },
          messages: {
            current: sectionMessages,
            count: messageCount,
          },
        };
      });
    },
    previousStep: () => set(() => ({ text: "Hello World" })),

    reset: () => set(() => initialDialogueStore()),

    makeChoice: (collection: Section[]) => {
      set((state) => ({
        ...state,
        chapter: {
          ...state.chapter,
          collection,
        },
        section: {
          ...state.section,
          current: 0,
        },
        messages: {
          ...state.messages,
          current: (collection[0] as DialogueSection).dialogue,
          count: -1,
        },
        choice: {
          active: false,
        },
      }));
      get().nextStep();
    },
    continueChapter: () => {
      set((state) => ({ ...state, isNewChapter: false }));
      get().nextStep();
    },
  }));
};
