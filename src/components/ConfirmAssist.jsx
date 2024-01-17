import React from "react";

export const ConfirmAssist = () => {
  return (
    <div className="w-full text-center bg-white h-80 text-black flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">CONFIRMACION DE ASISTENCIA</h1>
      <h2 className="text-xl">
        Os esperamos en este gran día. ¡Confírmanos tu asistencia!
      </h2>
      <button className="text-md mt-6 bg-[#BD8C39] text-white rounded-full py-2 w-60
      hover:bg-white hover:text-[#BD8C39] hover:border-[#BD8C39] border-[1px] border-[#BD8C39]
      transition duration-300 ease-in-out transform"
      onClick={onConfirmAssist}
      >
        CONFIRMAR ASISTENCIA
      </button>
    </div>
  );
};

// Send whatsapp message on click
const onConfirmAssist = () => {
  window.open(
    "https://api.whatsapp.com/send?phone=34633661930&text=Hola!%20Quiero%20confirmar%20mi%20asistencia%20!",
    "_blank"
  );
}
