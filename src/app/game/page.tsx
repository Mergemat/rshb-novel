"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useDialogueStore } from "~/providers/dialogue-store-provider";
import { type Section } from "~/types";

export default function GamePage() {
  const { section, character, type } = useDialogueStore((state) => state);
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
      <div
        className={cn(
          "absolute inset-0 scale-90 z-10 h-full w-full",
          type === "internal" && "opacity-50",
        )}
      >
        <Image
          src={`/assets/characters/${character}.png`}
          alt="char"
          fill
          className="object-cover"
        />
      </div>
      <Controls />
    </div>
  );
}

const Controls = () => {
  const { text, nextStep, choice, status, ...rest } = useDialogueStore(
    (state) => state,
  );

  return (
    <motion.div className="z-10 flex h-96 w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-white/20 bg-accent/20 p-4 drop-shadow-lg backdrop-blur-xl transition-all">
      {choice.active ? (
        <>
          <p className="h-40 rounded-lg bg-accent/40 p-2 text-base tracking-wide text-white">
            {text}
          </p>

          <Choice options={choice.options!} />
        </>
      ) : (
        <>
          <div
            id="dialogue-text"
            className="h-64 w-full rounded-lg bg-accent/40 p-4"
          >
            <p className="text-lg tracking-wide text-white">{text}</p>
          </div>
          {status === "gameover" ? (
            <Button
              variant="secondary"
              className="ml-auto mr-0 p-6 text-xl"
              asChild
            >
              <Link href="/">На главную</Link>
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              variant="secondary"
              className="ml-auto mr-0 p-6 text-xl"
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
          >
            {option.text}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};
