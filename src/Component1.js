import { useRef, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "./Modal/Modal";

export const InputModal = ({ isOpen, close }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.focus();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <h3>What is your name?</h3>
      </ModalHeader>
      <ModalBody>
        <input name="name" ref={inputRef} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => close()}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};
