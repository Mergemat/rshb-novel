import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { chapterNames } from "~/constants";
import { useDialogueStore } from "~/providers/dialogue-store-provider";

export default function ChooseChapter({
  onClose,
  onChoose,
}: {
  onClose: () => void;
  onChoose: (chapter: number) => void;
}) {
  return (
    <motion.div
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      exit={{
        y: -100,
        transition: {
          duration: 0.1,
        },
      }}
      className="relative z-40 flex w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-white/20 bg-accent/30 p-2 py-8 pt-16 drop-shadow-lg backdrop-blur-xl"
    >
      <Button
        variant="ghost"
        className="absolute right-4 top-4 z-20 rounded-sm border-white/10 bg-accent/40 text-white drop-shadow backdrop-blur-sm"
        onMouseDown={onClose}
      >
        <X />
      </Button>
      {Object.keys(chapterNames).map((chapter) => (
        <div key={chapter} className="w-full">
          <Button
            variant="outline"
            className="w-full justify-start py-6 text-lg font-normal"
            onClick={() => onChoose(Number(chapter))}
          >
            {chapter} •{" "}
            {chapterNames[chapter as unknown as keyof typeof chapterNames]}
          </Button>
        </div>
      ))}
    </motion.div>
  );
}
