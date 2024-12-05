import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { AnimatePresence } from "motion/react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <AnimatePresence>
      <Backdrop onClick={handleClose}>
        <motion.div
          // Stops the modal from closing while clicking inside
          onClick={(e) => e.stopPropagation()}
          className="modal"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 0.5 }}
        ></motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

export default Modal;
