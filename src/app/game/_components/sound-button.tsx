import { Button } from "~/components/ui/button";
import { Howl } from "howler";
import { useCallback, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { useDialogueStore } from "~/providers/dialogue-store-provider";

const storage = createJSONStorage(() => sessionStorage);
export const mutedSoundAtom = atomWithStorage("muted", false, storage);

export default function SoundButton() {
  const [muted, setMuted] = useAtom(mutedSoundAtom);
  const { isNewChapter } = useDialogueStore((state) => state);

  const soundRef = useRef<Howl>();

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/assets/sound/KlimBioTech.mp3"],
      loop: true,
      autoplay: true,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  useEffect(() => {
    if (muted || isNewChapter) {
      soundRef.current?.fade(0.2, -1, 1000);
    } else {
      soundRef.current?.fade(-1, 0.2, 1000);
    }
  }, [isNewChapter, muted]);

  const onMute = useCallback(() => {
    setMuted(!muted);
  }, [muted, setMuted]);

  return (
    <Button
      variant="link"
      size="icon"
      onMouseDown={onMute}
      className="absolute right-4 top-4 z-20 rounded-sm border-white/10 bg-card/40 text-white drop-shadow backdrop-blur-sm"
    >
      {!muted ? (
        <Volume2 className="h-6 w-6" />
      ) : (
        <VolumeX className="h-6 w-6" />
      )}
    </Button>
  );
}
