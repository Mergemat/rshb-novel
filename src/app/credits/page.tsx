import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <video autoPlay controls playsInline className="h-full w-full">
        <source src="/credits.mp4" type="video/mp4" />
      </video>
      <Button
        variant="outline"
        className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 px-4 py-6 text-lg"
        asChild
      >
        <Link href="/intro">На главную</Link>
      </Button>
    </div>
  );
}
