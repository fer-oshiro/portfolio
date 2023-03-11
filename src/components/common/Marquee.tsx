import marqueeAtom from "@/lib/marquee";
import { useAtomValue } from "jotai";

export default function Marquee({ children }: { children: React.ReactNode }) {
  const marquee = useAtomValue(marqueeAtom);
  const marqueeClass = marquee ? "animate-marquee " : "";

  return (
    <div className="relative w-screen max-w-full h-[90px] overflow-hidden">
      <div
        className={
          marqueeClass +
          "absolute whitespace-nowrap will-change-transform flex gap-8"
        }
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <span key={i}>{children}</span>
        ))}
      </div>
    </div>
  );
}
