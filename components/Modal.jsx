import Backdrop from "./Backdrop";
import { Image } from "next/image";

const Modal = ({ handleClose, name, img, desc, tags }) => {
  return (
    <div>{name}</div>
    // <Backdrop onClick={handleClose}>
    //   <motion.div
    //     // Stops the modal from closing while clicking inside
    //     onClick={(e) => e.stopPropagation()}
    //     className="modal"
    //     variants={dropIn}
    //     initial="hidden"
    //     animate="visible"
    //     exit="exit"
    //     transition={{ type: "spring", duration: 0.7, bounce: 0.15 }}
    //   >
    //     <div className="modal-wrapper">
    //       <div>
    //         <Image />
    //       </div>
    //       <div>{desc}</div>
    //       <div>
    //         {tags.map((tag, index) => (
    //           <div>{tag}</div>
    //         ))}
    //       </div>
    //     </div>
    //   </motion.div>
    // </Backdrop>
  );
};

export default Modal;
