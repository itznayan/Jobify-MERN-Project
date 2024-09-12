import { motion } from "framer-motion";
import React from "react";

const Layer = (WrappedComponent) => {
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const childVariants = {
    hidden: { opacity: 1, scaleY: 1 },
    visible: { opacity: 1, scaleY: 0, transition: { duration: 0.6 } },
    exit: { scaleY: 1, transition: { duration: 0.6 } },
  };

  return (props) => (
    <>
      <motion.div
        className="fixed w-full flex"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={parentVariants}
        transition={{ staggerChildren: 0.15 }} // Stagger children by 0.25 seconds
      >
        {/* First child (left side) */}
        <motion.div
          className="bg-black h-screen w-1/4 origin-top"
          variants={childVariants}
        ></motion.div>

        {/* Second child */}
        <motion.div
          className="bg-black h-screen w-1/4 origin-top"
          variants={childVariants}
        ></motion.div>

        {/* Third child */}
        <motion.div
          className="bg-black h-screen w-1/4 origin-top"
          variants={childVariants}
        ></motion.div>

        {/* Fourth child */}
        <motion.div
          className="bg-black h-screen w-1/4 origin-top"
          variants={childVariants}
        ></motion.div>
      </motion.div>

      <WrappedComponent {...props} />
    </>
  );
};

export default Layer;
