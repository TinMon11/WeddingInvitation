import React from "react";

export const Instagram = () => {
  return (
    <div className="w-full h-[calc(100vh-150px)] flex flex-col justify-center items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111679.png"
        alt="icon-instagram"
        className="w-20 h-20 mb-4"
      />
      <h2 className="text-3xl font-medium mb-4">#GonzayVicky</h2>
      <p>¡Prepárate para nuestro gran día!</p>
      <p>Usa nuestro hashtag en tus fotos y videos.</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/explore/tags/gonzayvicky/"
      >
        <button
          className="text-md mt-6 bg-[#BD8C39] text-white rounded-full py-2 w-60 hover:bg-white hover:text-[#BD8C39] hover:border-[#BD8C39] border-[1px] border-[#BD8C39]
        transition duration-300 ease-in-out transform"
        >
          VER FOTOS INSTAGRAM
        </button>
      </a>
    </div>
  );
};
