"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Progress } from "~/components/ui/progress";

export default function AssetLoader() {
  const [characterProgress, setCharacterProgress] = useState(0);
  const [environmentProgress, setEnvironmentProgress] = useState(0);
  const router = useRouter();

  // interpolate charater progress to percentage from 0 to 100
  const characterProgressPercentage = Math.round(
    (characterProgress / characterImages.length) * 100,
  );

  // interpolate environment progress to percentage from 0 to 100
  const environmentProgressPercentage = Math.round(
    (environmentProgress / environmentImages.length) * 100,
  );

  useEffect(() => {
    if (
      characterProgress === characterImages.length &&
      environmentProgress === environmentImages.length
    ) {
      router.push("/intro");
    }
  }, [characterProgress, environmentProgress, router]);

  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <span className="flex w-3/4 flex-col items-center text-xl font-semibold">
          {characterProgress}
          <Progress value={characterProgressPercentage} />
        </span>
        <span className="flex w-3/4 flex-col items-center text-xl font-semibold">
          {environmentProgress}
          <Progress value={environmentProgressPercentage} />
        </span>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-end gap-8 opacity-0">
        <div
          className={"absolute bottom-40 left-0 right-0 z-10 h-[70%] w-full"}
        >
          {characterImages.map((characterImage, index) => {
            return (
              <Image
                key={index}
                src={`/assets/characters/${characterImage}`}
                alt="char"
                fill
                className={"object-cover object-top"}
                onLoadingComplete={() =>
                  setCharacterProgress((prev) => prev + 1)
                }
              />
            );
          })}
        </div>
        <div className="absolute top-0 h-full w-full">
          {environmentImages.map((environmentImage, index) => {
            return (
              <Image
                key={index}
                src={`/assets/environments/${environmentImage}`}
                alt="env"
                fill
                className={"object-cover"}
                onLoadingComplete={() =>
                  setEnvironmentProgress((prev) => prev + 1)
                }
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

const characterImages = [
  "Vika.png",
  "Vika-school.png",
  "Vika-hello.png",
  "Vika-happy.png",
  "Vika-2.png",
  "Representative.png",
  "Jury.png",
  "Host2.png",
  "Host.png",
  "Evgeny.png",
  "Evgeny-wow.png",
  "Evgeny-talking.png",
  "Evgeny-showing.png",
  "Evgeny-school.png",
  "Evgeny-phone2.png",
  "Evgeny-phone.png",
  "Evgeny-interest.png",
  "Evgeny-angry.png",
  "AlexNoName.png",
  "Alex.png",
];

const environmentImages = [
  "startup.jpg",
  "startup-maybe.jpg",
  "school.jpg",
  "presentation.jpg",
  "newOffice.jpg",
  "newLab.jpg",
  "moscow.jpg",
  "lab.jpg",
  "konkurs.jpg",
  "grassLab.jpg",
  "cafe.jpg",
];
