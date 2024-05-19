import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div onClick={handleToggleModalPopup}>
      <button> Open Modal Popup </button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          body={<div>Customized body</div>}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized footer</h1>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
