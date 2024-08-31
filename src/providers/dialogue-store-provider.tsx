"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import {
  createDialogueStore,
  type DialogueStore,
  initialDialogueStore,
} from "~/stores/dialogue";

export type DialogueStoreApi = ReturnType<typeof createDialogueStore>;

export const DialogueStoreContext = createContext<DialogueStoreApi | undefined>(
  undefined,
);

export interface DialogueStoreProviderProps {
  children: ReactNode;
}

export const DialogueStoreProvider = ({
  children,
}: DialogueStoreProviderProps) => {
  const storeRef = useRef<DialogueStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createDialogueStore(initialDialogueStore());
  }

  return (
    <DialogueStoreContext.Provider value={storeRef.current}>
      {children}
    </DialogueStoreContext.Provider>
  );
};

export const useDialogueStore = <T,>(
  selector: (store: DialogueStore) => T,
): T => {
  const dialogueStoreContext = useContext(DialogueStoreContext);

  if (!dialogueStoreContext) {
    throw new Error(
      `useDialogueStore must be used within a DialogueStoreProvider`,
    );
  }

  return useStore(dialogueStoreContext, selector);
};
