import { motion, Variants } from "framer-motion";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Props {
  settings: Settings;
  children: React.ReactNode;
}

const variants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const Carousel: React.FC<Props> = ({ children, settings }) => {
  return (
    <motion.div
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      className="w-full"
    >
      <Slider {...settings}>{children}</Slider>
    </motion.div>
  );
};

export default Carousel;
