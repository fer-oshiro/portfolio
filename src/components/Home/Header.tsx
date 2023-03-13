import { Fredericka_the_Great } from "@next/font/google";
import { motion } from "framer-motion";
import Link from "../common/Link";

const fredericka = Fredericka_the_Great({
  subsets: ["latin"],
  variable: "--font-fredericka",
  weight: "400",
});

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="mt-12 mx-auto max-w-7xl px-4 md:px-8 border-b-2 pb-8"
    >
      <header className="flex items-center">
        <div className="text-3xl mr-auto max-w-[9ch] md:max-w-full flex gap-2">
          <h1 className={fredericka.className}>Fernanda Oshiro</h1>
        </div>
        <nav>
          <ul className="flex gap-4">
            <Link href="#about" width="6ch" className="hidden md:block">
              Sobre
            </Link>
            <Link href="#experience" className="hidden md:block">
              Experiência
            </Link>
            <Link href="/resume" width="8ch">
              Currículo
            </Link>
          </ul>
        </nav>
      </header>
    </motion.div>
  );
};

export default Header;
