"use client";

import dev from "@/assets/dev.jpg";
import frame from "@/assets/frame.jpg";
import journal from "@/assets/journal.jpg";
import papers from "@/assets/papers.jpg";
import "@/styles/global.css";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  setLoading: (loaded: boolean) => void;
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.45,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
  exit: {
    y: 500,
    scale: 2,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

export default function Loader({ setLoading }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="relative max-w-5xl mx-auto min-h-screen"
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div className="absolute top-32 sm:top-16" variants={item}>
        <Image
          src={dev}
          alt=""
          className="rounded-sm w-24 sm:w-48 md:w-72 xl:w-full"
          width={350}
          height={350}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-28 sm:bottom-8 right-1 sm:right-8 md:right-16"
        variants={item}
      >
        <Image
          src={papers}
          className="rounded-sm w-24 sm:w-52 xl:w-64"
          alt=""
          width={195}
        />
      </motion.div>
      <motion.div
        variants={itemMain}
        className="rounded-sm absolute left-0 right-0 top-0 bottom-0 m-auto max-w-xl w-3/4 aspect-video"
      >
        <motion.img
          src="/desk.jpg"
          alt=""
          layoutId="main-image-1"
          className="rounded-sm min-w-full min-h-full"
          transition={{ duration: 1.6, ease: "easeInOut" }}
          layout
        />
      </motion.div>
      <motion.div className="absolute right-4 sm:right-8 top-8" variants={item}>
        <Image
          src={frame}
          alt=""
          className="rounded-sm w-32 sm:w-52 md:w-full"
          width={250}
          height={250}
        />
      </motion.div>
      <motion.div
        className="absolute left-4 md:left-16 bottom-12"
        variants={item}
      >
        <Image
          src={journal}
          className="rounded-sm w-32 sm:w-60 xl:w-full"
          alt=""
          width={200}
          height={200}
        />
      </motion.div>
    </motion.div>
  );
}
