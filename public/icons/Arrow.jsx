import React from "react";
import { motion } from "framer-motion";

const Arrow = () => {
  const arrowAnimate = {
    default: {
      translateX: "0px",
      translateY: "0px",
    },
    hover: {
      translateY: "-6px",
      translateX: "6px",
      scale: 1.2,
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-up-right"
      variants={arrowAnimate}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </motion.svg>
  );
};

export default Arrow;
