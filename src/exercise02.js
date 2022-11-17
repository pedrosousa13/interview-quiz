import { useRef, useEffect } from "react";

// The focus isn't being applied when our modal opens, what's the problem and how can we solve it?

export const InputModal = ({ isOpen }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.focus();
    }
  }, [isOpen]);

  return (
    <div/>
  );
};
