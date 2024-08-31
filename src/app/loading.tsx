import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Loader2 className="h-20 w-20 animate-spin text-primary" />
    </div>
  );
}
