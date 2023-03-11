import marqueeAtom from "@/lib/marquee";
import { Antic_Slab } from "@next/font/google";
import { motion, Variants } from "framer-motion";
import { useSetAtom } from "jotai";

const fredericka = Antic_Slab({
  subsets: ["latin"],
  variable: "--font-fredericka",
  weight: "400",
});

const container: Variants = {
  show: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { y: 110 },
  show: {
    y: 0,
    transition: {
      ease: "circOut",
      duration: 0.5,
    },
  },
};

interface Props {
  title: string;
  className?: string;
}

export default function BigTitle({ title, className }: Props) {
  const setMarquee = useSetAtom(marqueeAtom);

  return (
    <div className={className}>
      <motion.h1
        className="text-6xl md:text-8xl font-bold max-w-fit overflow-hidden py-2 flex text-neutral-700"
        initial="hidden"
        animate="show"
        variants={container}
        onAnimationComplete={() => setMarquee(true)}
      >
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            className={fredericka.className}
            variants={item}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
