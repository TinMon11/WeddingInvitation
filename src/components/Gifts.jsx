import React, { useState } from "react";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "15px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 10px 15px 10px rgba(0, 0, 0, 0.25)",
  },
};

Modal.setAppElement('#root');

const Gifts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="pb-8 w-full bg-[#9aaa9a] text-white flex flex-col justify-center items-center">
        <div className="h-1/3 items-center">
          <img
            src="https://agendalafecha.com/es/boda/assets/img/icono-regalo.svg"
            alt="icon-gift"
            className="w-36 h-36"
          />
        </div>
        <h2 className="text-md text-center mt-12">
          El mejor regalos es vuestra asitencia, pero si quisiérais hacernos un
          obsequio, aquí os indicamos el número de cuenta.
        </h2>
        <button
          className="mt-4 bg-white text-[#9aaa9a] rounded-full py-2 w-36 hover:bg-[#9aaa9a] hover:text-white hover:border-white border-[1px] border-white
          transition duration-300 ease-in-out transform"
          onClick={openModal}
        >
          VER MAS
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        overlayClassName={"overlayModal"}
      >
        <button
          className="absolute top-2 right-2 text-black font-bold"
          onClick={closeModal}
        >
          X
        </button>
        <div className="flex flex-col justify-center gap-8 text-center w-76">
          <div className="text-black font-medium">
            <h1 className="mb-2 font-medium text-2xl text-gray-400">
              Datos Bancarios
            </h1>

            <p>Nombre del Titular: Nombre Apellido</p>
            <p>CBU: 12345623561</p>
            <p>Alias: cuenta.wedding.gift</p>
            <p>DNI: 123456789</p>
            <p>Banco Galicia</p>
          </div>
          <div className="text-black font-medium">
            <h1 className="mb-2 font-medium text-2xl text-gray-400">
              Lista de Regalos
            </h1>
            <a
              className="underline"
              target="_blank"
              rel="noopener"
              href="https://www.noviosfalabella.com/"
            >
              Falabella Novios ♥
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Gifts;
