"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Caption() {
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
        transition={{}}
        className="z-10 flex w-fit flex-col items-center justify-center rounded-xl border-2 border-white/20 bg-accent/30 p-4 px-8 drop-shadow-lg backdrop-blur-xl"
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
          transition={{}}
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
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="z-10 flex flex-col items-center justify-center p-4"
      >
        <Button className="p-8 text-2xl">
          <Link href="/game">Начать игру</Link>
        </Button>
      </motion.div>
    </>
  );
}
