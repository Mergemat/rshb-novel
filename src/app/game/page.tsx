"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { useDialogueStore } from "~/providers/dialogue-store-provider";
import { useAtom } from "jotai";
import { useEffect } from "react";
import NewChapterPopup from "./_components/new-chapter-popup";
import MenuButton from "./_components/menu-button";
import { Controls } from "./_components/controls";
import { imageLoaded } from "./store";

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
//{JSON.stringify({
//  chapter: rest.chapter.current,
//  section: rest.section.current,
//  mesage: rest.messages.count,
//})}
