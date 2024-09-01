import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() => sessionStorage);
export const maxChaptersAtom = atomWithStorage("maxChapters", 1, storage);
