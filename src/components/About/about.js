import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion"; // correct import
import "./Hero.css";

const Hero = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="hero-container">
      {/* Desktop View */}
      <div className="hero-desktop">
        <motion.h1
          className="hero-title"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Rohit Singh Pokhariya
        </motion.h1>
        <div className="hero-content">
          <motion.p
            className="hero-subtitle"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Passionate MERN Developer <br />
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} className="hero-flipwords" />
          </motion.div>
          <motion.p
            className="hero-tagline"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="hero-mobile">
        <motion.p
          className="hero-title"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Rohit Singh Pokhariya
        </motion.p>
        <div>
          <motion.p
            className="hero-subtitle"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} className="hero-flipwords-mobile" />
          </motion.div>
          <motion.p
            className="hero-tagline"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
