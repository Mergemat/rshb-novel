"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useDialogueStore } from "~/providers/dialogue-store-provider";
import { type Section } from "~/types";
import { atom, useAtom, useAtomValue } from "jotai";
import { Menu } from "lucide-react";
import { chapterNames, characters } from "~/constants";

const imageLoaded = atom(false);

export default function GamePage() {
  const { isNewChapter, chapter, continueChapter } = useDialogueStore(
    (state) => state,
  );
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end gap-8">
      <Button
        variant="link"
        size="icon"
        className="absolute left-4 top-4 z-10 rounded-sm border-white/10 bg-accent/40 text-white drop-shadow backdrop-blur-sm"
      >
        <Menu className="drop-shadow" />
      </Button>

      <AnimatePresence>
        {isNewChapter ? (
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                ease: "easeOut",
              }}
              className="relative z-10 mb-auto mt-auto flex flex-col mx-4 items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-accent/20 px-8 py-4 drop-shadow-lg backdrop-blur-xl transition-all duration-100"
            >
              <h1 className="text-xl text-center font-semibold text-white">
                Глава {chapter.current}
              </h1>
              <h1 className="text-lg text-center font-semibold text-white w-full">
                {chapterNames[chapter.current as keyof typeof chapterNames]}
              </h1>
              <Button
                onMouseDown={continueChapter}
                className="mt-4 p-6 text-lg"
              >
                Продолжить
              </Button>
            </motion.div>
          </>
        ) : (
          <>
            <Canvas />
            <Controls />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const Canvas = () => {
  const { section, character, type } = useDialogueStore((state) => state);
  const [isImageLoaded, setImageLoaded] = useAtom(imageLoaded);

  return (
    <>
      <motion.div
        transition={{ duration: 0.8 }}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src={`/assets/environments/${section.environment}.jpg`}
          alt="env"
          fill
          className="object-cover"
        />
      </motion.div>
      <motion.div
        animate={{
          opacity: isImageLoaded ? (type === "internal" ? 0.5 : 1) : 0,
        }}
        className={cn(
          "bottom-30 absolute inset-x-0 z-10 h-full w-full",
          type === "internal" && "opacity-50",
        )}
      >
        {character !== "Info" ? (
          <Image
            src={`/assets/characters/${character}.png`}
            alt="char"
            fill
            className={cn("object-cover")}
            onLoadingComplete={() => setImageLoaded(true)}
            onLoadStart={() => setImageLoaded(false)}
          />
        ) : null}
      </motion.div>
    </>
  );
};

const Controls = () => {
  const { text, character, choice, ...rest } = useDialogueStore(
    (state) => state,
  );

  return (
    <motion.div className="relative z-10 flex w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-white/20 bg-accent/20 p-2 py-8 drop-shadow-lg backdrop-blur-xl transition-all duration-100">
      <p className="absolute -top-4 left-2 h-fit rounded-md bg-primary p-1 px-4 text-base tracking-wide text-white transition-all duration-100">
        {characters[character.split("-")[0] as keyof typeof characters]}
      </p>

      {choice.active ? (
        <>
          <p className="h-fit rounded-lg bg-accent/40 p-4 text-base tracking-wide text-white transition-all duration-100">
            {text}
          </p>

          <Choice options={choice.options!} />
        </>
      ) : (
        <Dialogue />
      )}
    </motion.div>
  );
};

const Choice = ({
  options,
}: {
  options: { text: string; sections: Section[] }[];
}) => {
  const { makeChoice } = useDialogueStore((state) => state);
  const isImageLoaded = useAtomValue(imageLoaded);

  return (
    <motion.div
      transition={{
        staggerChildren: 0.1,
      }}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-center justify-center gap-4"
    >
      {options.map((option) => (
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
          key={option.text}
          className="w-full"
        >
          <Button
            onClick={() => makeChoice(option.sections)}
            variant="secondary"
            className="w-full py-6 text-xl"
            disabled={!isImageLoaded}
          >
            {option.text}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Dialogue = () => {
  const { text, nextStep, status, type, ...rest } = useDialogueStore(
    (state) => state,
  );
  const isImageLoaded = useAtomValue(imageLoaded);

  return (
    <>
      <div
        id="dialogue-text"
        className="h-fit w-full rounded-lg bg-accent/50 p-4 transition-all duration-100"
      >
        <p
          className={cn(
            "text-base tracking-wide text-white",
            type === "internal" && "italic",
          )}
        >
          {text}
        </p>
      </div>
      {status === "gameover" ? (
        <Button
          variant="secondary"
          className="ml-auto mr-0 p-6 text-xl"
          disabled={!isImageLoaded}
          asChild
        >
          <Link href="/">На главную</Link>
        </Button>
      ) : (
        <Button
          onClick={nextStep}
          variant="secondary"
          className="ml-auto mr-0 p-6 text-xl"
          disabled={!isImageLoaded}
        >
          Дальше
        </Button>
      )}
      {JSON.stringify({
        chapter: rest.chapter.current,
        section: rest.section.current,
        mesage: rest.messages.count,
      })}
    </>
  );
};
