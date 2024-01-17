import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import giftIcon from "../assets/gift-icon.png";
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

Modal.setAppElement("#root");
const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Crea un área de texto temporal y copia el texto
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Establece el estado para mostrar el mensaje de copiado
    setIsCopied(true);

    // Reinicia el estado después de 2 segundos
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div onClick={handleCopyClick}
    cursor="pointer"
    >
      Copiar Alias <FontAwesomeIcon icon={faCopy} style={{ cursor: "pointer" }} />
      {isCopied && <span style={{ marginLeft: "5px", color: "green" }}>Copiado</span>}
    </div>
  );
};

const Gifts = () => {
  const aliasText = "vicky.gonza.2024";
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="pb-8 w-full bg-[#BD8C39] text-white flex flex-col justify-center items-center">
        <div className="h-1/3 items-center">
          <img
            src={giftIcon}
            alt="icon-gift"
            className="mb-2 mt-2 w-20 h-20"
          />
        </div>
        <h2 className="text-md text-center mt-2 w-3/4">
          En este día tan especial, nada nos alegraría más que compartir este
          momento con quienes llenan nuestras vidas de amor y alegría. Su
          compañía es el mejor regalo que podríamos recibir.
        </h2>
        <button
          className="mt-4 bg-white text-[#BD8C39] rounded-full py-2 w-36 hover:bg-[#BD8C39] hover:text-white hover:border-white border-[1px] border-white
          transition duration-300 ease-in-out transform"
          onClick={openModal}
        >
          VALOR TARJETA
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
            <h1 className="mb-2 font-medium text-xl">
              Valor Tarjeta: $ 30.000
            </h1>
            <h1 className="mb-2 font-medium text-2xl text-gray-400">
              Datos Bancarios
            </h1>

            <p>Nombre del Titular: Victoria Argelich</p>
            <p>CBU: 0070123130004012064220</p>
            <div>
              <p>Alias: vicky.gonza.2024</p>
              <CopyButton textToCopy={aliasText} />
            </div>
            <p>Banco Galicia</p>
          </div>
          {/* <div className="text-black font-medium">
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
          </div> */}
        </div>
      </Modal>
    </>
  );
};

export default Gifts;
