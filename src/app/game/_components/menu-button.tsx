import { AnimatePresence, motion } from "framer-motion";
import { atom, useAtom, useSetAtom } from "jotai";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ChooseChapter from "~/app/_components/choose-chapter";
import { Button } from "~/components/ui/button";
import { useDialogueStore } from "~/providers/dialogue-store-provider";

const isMenuOpen = atom(false);

export default function MenuButton() {
  const [isOpen, setIsOpen] = useAtom(isMenuOpen);
  const { isNewChapter } = useDialogueStore((state) => state);

  return !isNewChapter ? (
    <>
      <Button
        onMouseDown={() => setIsOpen(true)}
        variant="link"
        size="icon"
        className="absolute left-4 top-4 z-20 rounded-sm border-white/10 bg-accent/40 text-white drop-shadow backdrop-blur-sm"
      >
        <MenuIcon className="drop-shadow" />
      </Button>

      <AnimatePresence>{isOpen ? <Menu /> : null}</AnimatePresence>
    </>
  ) : null;
}

function Menu() {
  const [isChapterChooserOpen, setIsChapterChooserOpen] = useState(false);
  const setIsOpen = useSetAtom(isMenuOpen);
  const { loadChapter } = useDialogueStore((state) => state);

  const onChooseHandler = (chapter: number) => {
    loadChapter(chapter);
    setIsChapterChooserOpen(false);
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        {...animation.menu}
        className="absolute left-0 right-0 top-0 z-40 flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-white/20 bg-accent/30 px-4 py-4 drop-shadow-lg backdrop-blur-xl"
      >
        <div className="mb-8 flex w-full items-center justify-end">
          <Button
            onMouseDown={() => setIsOpen(false)}
            variant="ghost"
            className="absolute right-4 top-4 z-20 rounded-sm border-white/10 bg-accent/40 text-white drop-shadow backdrop-blur-sm"
            size="icon"
          >
            <X />
          </Button>
        </div>
        <Button
          variant="outline"
          className="w-full justify-start py-6 text-lg font-normal"
          onMouseDown={() => setIsChapterChooserOpen(true)}
        >
          Выбор главы
        </Button>
        <Button
          variant="outline"
          asChild
          className="w-full justify-start py-6 text-lg font-normal"
        >
          <Link href="/intro">На главную</Link>
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

const animation = {
  menu: {
    initial: {
      y: -100,
    },
    animate: {
      y: 0,
    },
    exit: {
      y: -100,
      transition: {
        duration: 0.1,
      },
    },
  },
};
