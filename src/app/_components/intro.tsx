"use client";
import Image from "next/image";
import Caption from "./caption";
import { useState } from "react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end gap-8 pb-[20%]">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/assets/images/intro.jpg"
          alt="intro"
          fill
          className="object-cover"
          onLoad={() => setIsVisible(true)}
        />
      </div>
      {isVisible && <Caption />}
    </div>
  );
}
