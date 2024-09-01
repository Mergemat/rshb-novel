"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { useDialogueStore } from "~/providers/dialogue-store-provider";
import ChooseChapter from "./choose-chapter";
import { useRouter } from "next/navigation";

export default function Caption() {
  const [isChapterChooserOpen, setIsChapterChooserOpen] = useState(false);
  const router = useRouter();

  const { loadChapter } = useDialogueStore((state) => state);

  const onChooseHandler = (chapter: number) => {
    loadChapter(chapter);
    setIsChapterChooserOpen(false);
    router.push("/game");
  };

  return (
    <>
      <motion.div
        initial={{
          paddingLeft: "0%",
          paddingRight: "0%",
        }}
        animate={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
        className="z-10 flex w-fit flex-col items-center justify-center rounded-xl border-2 border-white/20 bg-card/20 p-4 px-8 backdrop-blur-xl"
      >
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="text-6xl font-bold text-white"
        >
          АГРОТЕХ
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="text-3xl font-semibold text-white/80"
        >
          ПУТЬ К УСПЕХУ
        </motion.h2>
      </motion.div>
      <motion.div className="z-10 flex flex-col items-center justify-center p-4">
        <Button className="p-8 text-2xl">
          <Link href="/game">Начать игру</Link>
        </Button>
        <Button
          onMouseDown={() => setIsChapterChooserOpen(true)}
          variant="outline"
          className="mt-4 bg-card/40 p-6 text-xl"
        >
          Выбор главы
        </Button>
      </motion.div>
      <AnimatePresence>
        {isChapterChooserOpen ? (
          <ChooseChapter
            onClose={() => setIsChapterChooserOpen(false)}
            onChoose={onChooseHandler}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
