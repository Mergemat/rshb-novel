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
  endOfGame: boolean;
  loadedChapter: boolean;
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
  loadChapter: (chapter: number) => void;
};

export type DialogueStore = DialogueState & DialogueActions;

export const initialDialogueStore = (): DialogueState => ({
  text: (chapters["1"][0]! as DialogueSection).dialogue[0]!.text,
  isNewChapter: true,
  endOfGame: false,
  status: "active",
  loadedChapter: false,
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

        console.log(state.messages);
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
          const newState = {
            ...state,
            isNewChapter: true,
            endOfGame: false,
            chapter: {
              ...state.chapter,
              current: state.chapter.current + 1,
              collection: undefined,
            },
            section: {
              ...state.section,
              current: 0,
            },
            messages: {
              ...state.messages,
              current: (
                chapters[
                  (state.chapter.current + 1) as keyof typeof chapters
                ][0]! as DialogueSection
              ).dialogue,
              count: 0,
            },
          };
          console.log(newState, newState.chapter.current, section);
          console.log();
          return newState;
        }

        const dialogue = sectionMessages[messageCount]!;

        return {
          ...state,
          endOfGame: dialogue.endOfGame ?? false,
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

    loadChapter: (chapter: number) => {
      let chap = chapters[
        chapter as keyof typeof chapters
      ][0]! as DialogueSection;

      if (!chap) {
        chap = chapters[1][0]! as DialogueSection;
      }

      const dialogue = chap.dialogue[0]!;

      set(() => ({
        text: dialogue.text,
        status: "active",
        type: dialogue.type,
        character: dialogue.character,

        chapter: {
          current: chapter,
          collection: undefined,
        },

        section: {
          current: 0,
          environment: chap.environment,
        },

        isNewChapter: true,
        endOfGame: false,

        choice: {
          active: false,
        },
        loadedChapter: false,
        messages: {
          current: chap.dialogue,
          count: 0,
        },
      }));
    },
  }));
};
