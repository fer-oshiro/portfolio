import { motion, Transition, Variants } from "framer-motion";

interface Props {
  href: string;
  children: React.ReactNode;
  width?: string;
  className?: string;
}

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const buttonVariants = {
  visible: {
    scale: 1.1,
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const transition: Transition = {
  duration: 4,
  yoyo: Infinity,
  ease: "easeInOut",
  repeatDelay: 1,
};

export default function Link({ width, href, children, className }: Props) {
  return (
    <motion.li
      className={
        "relative cursor-pointer pb-2 px-4 border-sky-200 flex flex-col items-center " +
        className
      }
      whileHover="visible"
      initial="hidden"
      variants={buttonVariants}
    >
      <a href={href}>{children}</a>

      <motion.svg
        className="hidden md:block"
        width={width ?? "8ch"}
        height="2"
        viewBox="0 0 100 2"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="0"
          y1="0"
          x2="100"
          y2="0"
          stroke="#d8b4fe"
          variants={draw}
          custom={2}
        />
      </motion.svg>
      <div className="absolute md:hidden left-0 -top-3 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
          <motion.path
            d="M 10.89 8.3635 C 37.026 1.3939 69.696 5.1575 91.476 22.3027 C 102.5838 33.0359 76.23 48.7872 41.382 45.9994 C 8.712 41.8176 6.534 30.6662 4.356 26.4845 C 2.178 18.121 4.356 11.1514 19.602 5.5757 C 44.4312 -2.3697 69.696 1.1151 90.6048 18.8179 C 103.0194 29.9693 96.4854 38.4722 76.23 43.0721 C 39.8574 47.8115 21.9978 42.0964 5.445 32.8965 C -2.178 27.8784 -0.8712 15.8907 10.2366 6.5514"
            fill="transparent"
            strokeWidth=".5"
            stroke="black"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
    </motion.li>
  );
}
