import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/ui/uiSlice";
const Modal = (props) => {
  const dispatch = useDispatch();
  const modalToggleHandler = () => {
    dispatch(toggle());
  };
  return (
    <div >
      <div
        className={props.visibility === true ? "backdrop" : "backdropHidden"}
        onClick={modalToggleHandler}
      ></div>
      <dialog className="modal" open={props.visibility}>
        {props.children}
      </dialog>
    </div>
  );
};

export default Modal;
