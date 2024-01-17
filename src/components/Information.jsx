import React from "react";

export const Information = () => {
  return (
    <>
      <div className="h-[calc(100vh-200px)] text-white bg-[#BD8C39] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-medium mb-4">DATOS UTILES</h2>
        <h3 className="text-xl font-medium mb-4">Sugerencia de Hoteles</h3>
        <p>Hotel Caui</p>
        <p>Hotel Pico</p>
        <p>Hotel Aires de La Pampa</p>
        <h2 className="text-xl font-medium mt-4 mb-4">Traslados</h2>
        <p className="w-4/5 text-center">
          Si necesitas llegar a la fiesta desde Pico, contactanos y podemos
          coordinar con otros invitados para compartir el viaje.
        </p>
        {/* <button
          className="text-md mt-6 bg-white text-[#9aaa9a] rounded-full py-2 w-36
        hover:bg-[#9aaa9a] hover:text-white hover:border-white border-[1px] border-white
        transition duration-300 ease-in-out transform"
        >
          VER MAS
        </button> */}
      </div>
      {/* <div className="w-full bg-[#3A2D32] h-24 flex items-center justify-center">
        <h1 className="w-4/5 text-xl text-white text-center">
          ¡Gracias por acompañarnos en este momento tan importante! ♥
        </h1>
      </div> */}
      <div className="w-full bg-[#3A2D32] h-24 flex items-center justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/alcancecreativomarketing/"
          className="w-4/5 text-xl text-white text-center m-auto"
        >
          <h1>Tarjeta virtual diseñada por @alcancecreativomkt</h1>
        </a>
      </div>
    </>
  );
};
