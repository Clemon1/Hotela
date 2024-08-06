import { useState, useCallback } from "react";

const useModalStack = () => {
  const [modalStack, setModalStack] = useState([]);
  console.log(modalStack);

  const openModal = useCallback((modalName) => {
    setModalStack((prevStack) => [...prevStack, modalName]);
  }, []);

  const closeModal = useCallback(() => {
    setModalStack((prevStack) => prevStack.slice(0, -1));
  }, []);

  return { modalStack, openModal, closeModal };
};

export default useModalStack;
