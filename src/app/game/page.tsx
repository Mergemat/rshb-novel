"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useDialogueStore } from "~/providers/dialogue-store-provider";
import { type Section } from "~/types";
import { atom, useAtom, useAtomValue } from "jotai";

const imageLoaded = atom(false);

export default function GamePage() {
  const { section, character, type } = useDialogueStore((state) => state);
  const [isImageLoaded, setImageLoaded] = useAtom(imageLoaded);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end gap-8">
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
      <Controls />
    </div>
  );
}

const Controls = () => {
  const { text, nextStep, choice, status, ...rest } = useDialogueStore(
    (state) => state,
  );

  const isImageLoaded = useAtomValue(imageLoaded);

  return (
    <motion.div className="z-10 flex w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-white/20 bg-accent/20 p-2 drop-shadow-lg backdrop-blur-xl transition-all duration-100">
      {choice.active ? (
        <>
          <p className="h-fit rounded-lg bg-accent/40 p-4 text-base tracking-wide text-white transition-all duration-100">
            {text}
          </p>

          <Choice options={choice.options!} />
        </>
      ) : (
        <>
          <div
            id="dialogue-text"
            className="h-fit w-full rounded-lg bg-accent/40 p-4 transition-all duration-100"
          >
            <p className="text-base tracking-wide text-white">{text}</p>
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
      )}
      {JSON.stringify({
        chapter: rest.chapter.current,
        section: rest.section.current,
        mesage: rest.messages.count,
      })}
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
        staggerChildren: 0.2,
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
            className="w-full py-8 text-2xl"
            disabled={!isImageLoaded}
          >
            {option.text}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};
