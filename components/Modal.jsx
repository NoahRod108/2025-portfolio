import { spring } from "motion";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const Modal = ({ handleClose }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: spring,
        damping: 25,
        stiffness: 400,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        // Stops the modal from closing while clicking inside
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", duration: 0.7, bounce: 0.15 }}
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div>
            <h2 className="text-4xl text-secondaryText">
              Professional Experience
            </h2>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="list-disc">
                I work in a <span className="text-cyan-500">LAMP</span> stack
                daily. I am experienced with the front-end and back-end of
                applications.
              </li>
              <li className="list-disc">
                I work with <span className="text-cyan-500">MySQL</span> and{" "}
                <span className="text-cyan-500">MySQL CLI</span> to manage our
                databases.
              </li>
              <li className="list-disc">
                I developed, maintained, and shipped{" "}
                <span className="text-cyan-500">production-ready</span> code for
                our web applications.
              </li>
              <li className="list-disc">
                I meet with staff and faculty to discuss new features and give
                guidance on a technical level
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl text-secondaryText">Achievements</h2>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="list-disc">
                I created a roster for supervisors to manage their student
                employees. The student roster centralized student data from
                other sources,{" "}
                <span className="text-cyan-500">
                  greatly increasing productivity
                </span>
                .
              </li>
              <li className="list-disc">
                I developed several PHP integration scripts for our yearly
                placement tests. The scripts{" "}
                <span className="text-cyan-500">
                  reduced the costs yearly by 8%
                </span>{" "}
                and are increasing.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
