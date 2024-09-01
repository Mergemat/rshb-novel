import { useDialogueStore } from "~/providers/dialogue-store-provider";
import { useAtomValue } from "jotai";
import { characters } from "~/constants";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { imageLoaded } from "../store";
import Link from "next/link";

export const Controls = () => {
  const { type } = useDialogueStore((state) => state);
  return (
    <>
      <AnimatePresence>
        {type !== "gameover" ? (
          <motion.div
            initial={{
              y: 150,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: 350,
            }}
            className="relative z-10 flex w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-white/20 bg-accent/30 p-2 py-8 backdrop-blur-lg"
          >
            <CharacterName />
            <Choice />
            <Dialogue />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <GameOver />
    </>
  );
};

const CharacterName = () => {
  const { character } = useDialogueStore((state) => state);

  if (character === "Info") return null;

  return (
    <p className="absolute -top-4 left-2 h-fit rounded-md bg-primary p-1 px-4 text-base tracking-wide text-white duration-100">
      {characters[character.split("-")[0] as keyof typeof characters]}
    </p>
  );
};

const Choice = () => {
  const { makeChoice, choice, text } = useDialogueStore((state) => state);

  if (!choice.active) return null;

  return (
    <>
      <p className="h-fit rounded-lg bg-accent/40 p-4 text-base tracking-wide text-white duration-100">
        {choice.text ?? text}
      </p>

      <motion.div
        transition={{
          staggerChildren: 0.1,
        }}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col items-center justify-center gap-4"
      >
        {choice.options!.map((option) => (
          <motion.div variants={variants} key={option.text} className="w-full">
            <Button
              onClick={() => makeChoice(option.sections)}
              variant="secondary"
              className="w-full py-6 text-xl"
            >
              {option.text}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

const Dialogue = () => {
  const { nextStep, choice } = useDialogueStore((state) => state);
  const isImageLoaded = useAtomValue(imageLoaded);

  if (choice.active) return null;

  return (
    <>
      <DialogueText />
      <Button
        onClick={nextStep}
        variant="secondary"
        className="ml-auto mr-0 p-6 text-xl"
        disabled={!isImageLoaded}
      >
        Дальше
      </Button>
    </>
  );
};

export const variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const DialogueText = () => {
  const { text, type } = useDialogueStore((state) => state);

  return (
    <div
      id="dialogue-text"
      className="h-fit w-full rounded-lg bg-accent/50 p-4 duration-100"
    >
      <p
        className={cn(
          "text-base tracking-wide text-white",
          type === "internal" && "font-light italic",
        )}
      >
        {text}
      </p>
    </div>
  );
};

const GameOver = () => {
  const { text, type, chapter, loadChapter } = useDialogueStore(
    (state) => state,
  );

  if (type !== "gameover") return null;

  return (
    <motion.div className="absolute inset-0 flex items-center justify-center bg-accent/30 px-2">
      <motion.div
        initial={{
          scale: 0.8,
        }}
        animate={{
          scale: 1,
        }}
        className="z-10 flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-accent/30 p-2 py-4 backdrop-blur-lg"
      >
        <p className="text-xl font-bold">GAME OVER</p>
        <div
          id="dialogue-text"
          className="h-fit w-full rounded-lg bg-accent/50 p-4 duration-100"
        >
          <p
            className={cn(
              "text-sm tracking-wide text-white",
              "font-light italic",
            )}
          >
            {text}
          </p>
        </div>
        <Button
          onClick={() => loadChapter(chapter.current)}
          variant="outline"
          className="w-full bg-primary/10 py-6 text-xl"
        >
          К началу главы
        </Button>
        <Button
          variant="outline"
          className="w-full bg-primary/10 py-6 text-xl"
          asChild
        >
          <Link href="/">На главную</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};
