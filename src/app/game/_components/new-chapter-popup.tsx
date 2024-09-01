import { AnimatePresence, motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { chapterNames } from "~/constants";
import { useDialogueStore } from "~/providers/dialogue-store-provider";

export default function NewChapterPopup() {
  const { chapter, continueChapter, isNewChapter } = useDialogueStore(
    (state) => state,
  );

  return (
    <AnimatePresence>
      {isNewChapter ? (
        <motion.div className="absolute inset-0 flex items-center justify-center bg-card/30 px-2">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{}}
            exit={{
              opacity: 0,
            }}
            className="z-10 flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-card/30 p-2 py-4 backdrop-blur-lg"
          >
            <h1 className="text-center text-xl font-semibold text-white">
              Глава {chapter.current}
            </h1>
            <h1 className="w-full text-center text-lg font-semibold text-white">
              {chapterNames[chapter.current as keyof typeof chapterNames]}
            </h1>
            <Button onMouseDown={continueChapter} className="mt-4 p-6 text-lg">
              Продолжить
            </Button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
