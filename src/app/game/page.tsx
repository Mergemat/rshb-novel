"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useDialogueStore } from "~/providers/dialogue-store-provider";
import { type Section } from "~/types";
import { atom, useAtom, useAtomValue } from "jotai";
import { characters } from "~/constants";
import { useEffect } from "react";
import NewChapterPopup from "./_components/new-chapter-popup";
import MenuButton from "./_components/menu-button";

const imageLoaded = atom(false);

export default function GamePage() {
  const { isNewChapter } = useDialogueStore((state) => state);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end gap-8">
      <MenuButton />
      <NewChapterPopup />

      {!isNewChapter ? (
        <>
          <Canvas />
          <Controls />
        </>
      ) : null}
    </div>
  );
}

const Canvas = () => {
  const { section, character, type, loadedChapter } = useDialogueStore(
    (state) => state,
  );
  const [isImageLoaded, setImageLoaded] = useAtom(imageLoaded);

  useEffect(() => {
    if (loadedChapter) {
      setImageLoaded(true);
    }
  }, [loadedChapter, setImageLoaded]);

  return (
    <>
      <motion.div
        transition={{ duration: 0.8 }}
        className="absolute top-0 h-full w-full"
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
          opacity: isImageLoaded ? 1 : 0,
          filter: type === "internal" ? "brightness(0.8)" : "none",
        }}
        className={cn("absolute bottom-40 left-0 right-0 z-10 h-[70%] w-full")}
      >
        {character !== "Info" ? (
          <Image
            src={`/assets/characters/${character}.png`}
            alt="char"
            fill
            className={cn("object-cover object-top")}
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
    <motion.div className="relative bottom-0 z-10 flex w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-white/20 bg-accent/30 p-2 py-8 drop-shadow-lg backdrop-blur-lg transition-all duration-100">
      {character !== "Info" ? (
        <p className="absolute -top-4 left-2 h-fit rounded-md bg-primary p-1 px-4 text-base tracking-wide text-white transition-all duration-100">
          {characters[character.split("-")[0] as keyof typeof characters]}
        </p>
      ) : null}

      {choice.active ? (
        <>
          <p className="h-fit rounded-lg bg-accent/40 p-4 text-base tracking-wide text-white transition-all duration-100">
            {choice.text ?? text}
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
            type === "internal" && "font-light italic",
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
    </>
  );
};
//{JSON.stringify({
//  chapter: rest.chapter.current,
//  section: rest.section.current,
//  mesage: rest.messages.count,
//})}
