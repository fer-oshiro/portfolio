import { Fredericka_the_Great } from "@next/font/google";
import { motion, Transition, useInView } from "framer-motion";
import { useRef } from "react";
const fredericka = Fredericka_the_Great({
  subsets: ["latin"],
  variable: "--font-fredericka",
  weight: "400",
});

const transition: Transition = {
  duration: 4,
  yoyo: Infinity,
  ease: "easeInOut",
  repeatDelay: 1,
  repeatType: "reverse",
  repeat: Infinity,
};

const transitionSmall: Transition = {
  duration: 2,
  yoyo: Infinity,
  ease: "easeInOut",
  repeatDelay: 2,
};
const transitionSmall2: Transition = {
  duration: 2,
  yoyo: Infinity,
  ease: "easeInOut",
  delay: 1,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="about"
      className=" w-full bg-[url('/desk.jpg')] bg-cover bg-center aspect-square	md:aspect-video"
      transition={{ duration: 0.6, ease: "easeInOut" }}
      layout
    >
      <h1 className="text-4xl md:text-6xl mt-16 text-slate-100 font-semibold w-fit mx-auto relative pt-16 text-center">
        <span className={fredericka.className}>Sobre</span>
        <div className="absolute top-[6.5rem] md:hidden -left-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="20">
            <motion.path
              d="M 8.4 13 C 32.16 4 97.92 1 145.2 12"
              fill="transparent"
              strokeWidth="1"
              stroke="rgba(255, 255, 255, 0.69)"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isInView ? 1 : 0 }}
              transition={transitionSmall}
            />
            <motion.path
              d="M 9 21 C 32.16 4 97.92 1 132 5"
              fill="transparent"
              strokeWidth="1"
              stroke="rgba(255, 255, 255, 0.69)"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isInView ? 1 : 0 }}
              transition={transitionSmall2}
            />
          </svg>
        </div>
        <div className="absolute top-5 -translate-x-1/4 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="350" height="400">
            <motion.path
              d="M 36 27.648 C 122.4 4.608 230.4 17.0496 302.4 73.728 C 339.12 109.2096 252 161.28 136.8 152.064 C 28.8 138.24 21.6 101.376 14.4 87.552 C 7.2 59.904 14.4 36.864 64.8 18.432 C 146.88 -7.8336 230.4 3.6864 299.52 62.208 C 340.56 99.072 318.96 127.1808 252 142.3872 C 131.76 158.0544 72.72 139.1616 18 108.7488 C -7.2 92.16 -2.88 52.5312 33.84 21.6576"
              fill="transparent"
              strokeWidth="2"
              stroke="rgba(255, 255, 255, 0.69)"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={transition}
            />
          </svg>
        </div>
      </h1>
      <p
        className="p-8 mt-8 md:mt-36 px-2 text-white text-center max-w-lg md:text-xl mx-auto bg-black rounded-md bg-opacity-50"
        ref={ref}
      >
        Sou Fernanda, desenvolvedora front-end apaixonada por design, tecnologia
        e serverless. Meu objetivo é criar experiências de usuário incríveis
        através de interfaces intuitivas e esteticamente agradáveis.
      </p>
    </motion.section>
  );
}
