import Image from "next/image";
import { Button } from "~/components/ui/button";
import Caption from "./caption";

export default function Intro() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end gap-8 pb-[20%]">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/assets/images/intro.jpg"
          alt="intro"
          fill
          className="object-cover"
        />
      </div>
      <Caption />
    </div>
  );
}
