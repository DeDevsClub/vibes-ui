import { Squirrel } from "lucide-react";
import { Logo } from "../logo";

export function RegistryLogo() {
  return (
    <div className="flex items-center gap-3 bg-primary/40 py-5 px-4 rounded-md w-[256px] h-6 max-w-xs mx-auto justify-center gap-[1rem]">
      <Logo size="lg" className="h-6 w-6 text-foreground" />
      <span className="font-semibold text-foreground text-sm">Vibes UI Registry</span>
    </div>
  );
}
