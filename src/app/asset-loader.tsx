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
      router.push("/disclaimer");
    }
  }, [characterProgress, environmentProgress, router]);

  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-8">
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
                onLoad={() => setCharacterProgress((prev) => prev + 1)}
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
                onLoad={() => setEnvironmentProgress((prev) => prev + 1)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

const characterImages = [
  "Host.png",
  "Evgeny-school.png",
  "Vika.png",
  "Mikhail.png",
  "Vika-school.png",
  "Evgeny.png",
  "Vika-hello.png",
  "Vika-2.png",
  "Evgeny-phone.png",
  "Evgeny-wow.png",
  "Evgeny-interest.png",
  "Evgeny-phone2.png",
  "Vika-happy.png",
  "Evgeny-talking.png",
  "Evgeny-showing.png",
  "Evgeny-angry.png",
  "Jury.png",
  "Mikhail-scared.png",
  "Host2.png",
  "Mikhail-casual.png",
  "Alex.png",
  "AlexNoName.png",
  "Natalia-dist.png",
  "Natasha-dist.png",
  "Representative.png",
  "Natalia.png",
  "Natasha.png",
];

const environmentImages = [
  "wedding.jpg",
  "startup.jpg",
  "school.jpg",
  "rshb.jpg",
  "presentation.jpg",
  "pitch.jpg",
  "panOffice.jpg",
  "newOffice.jpg",
  "newLab.jpg",
  "moscow.jpg",
  "lab.jpg",
  "konkurs.jpg",
  "invest.jpg",
  "grassLab.jpg",
  "goodLab.jpg",
  "congrats.jpg",
  "conference.jpg",
  "cafe.jpg",
  "badOffice.jpg",
];
