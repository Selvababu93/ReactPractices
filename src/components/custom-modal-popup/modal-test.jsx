import React, { useState } from "react";
import Modal from "./modal";
import "./styles.css";
const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const handleClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal PopUp</button>

      {showModalPopup && (
        <Modal onClose={handleClose} body={<div>Custom Message Body</div>} />
      )}
    </div>
  );
};

export default ModalTest;
