export type DialogueMessage = {
  character: string;
  text: string;
  type: "internal" | "dialogue";
};

export type DialogueSection = {
  type: "dialogue";
  environment: string;
  dialogue: DialogueMessage[];
};

export type Section =
  | DialogueSection
  | {
      type: "choice";
      options: { text: string; sections: Section[] }[];
    };
