'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Disclaimer() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 text-center"
    >
      <h1 className="text-4xl font-bold text-destructive">ДИСКЛЕЙМЕР</h1>
      Эта история основана на реальных событиях, однако в ней содержатся
      значительные изменения и элементы художественного вымысла.
      <br />
      Все персонажи,ситуации и события были изменены. Любые совпадения с
      реальными людьми, компаниями или обстоятельствами являются случайными и не
      должны восприниматься как достоверные описания реальных событий. Данная
      история была создана исключительно в развлекательных и вдохновляющих
      целях, для демонстрирования возможного пути развития стартапа в сфере
      агротехнологий.
      <Button variant="secondary" className="p-6 text-2xl">
        <Link href="/intro">Принять</Link>
      </Button>
    </motion.div>
  );
}
