import React, { useEffect, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { useWeddingStore } from "../hooks/useWeddingStore";
import { useForm } from "../hooks/useForm";
import { useSelector } from "react-redux";

const formData = {
  title: "",
  artist: "",
};

export const Songs = () => {
  const { addNewLike, addNewSong, getWeddingSongs } = useWeddingStore();

  const thisWeddingId = "Marta-Antonio";

  const { formState, title, artist, onInputChange, onResetForm } =
    useForm(formData);

  const [showSongs, setShowSongs] = useState(false);
  const thisWeddingSongs = useSelector((state) => state.weddings.songs);

  const toggleSongs = async () => {
    setShowSongs(!showSongs);
  };

  useEffect(() => {
    const fetchSongs = async () => {
      await getWeddingSongs({ weddingId: thisWeddingId });
    };
    showSongs && fetchSongs();
  }, [showSongs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addNewSong({ weddingId: thisWeddingId, song: formState });
    onResetForm();
  };

  return (
    <div className="pb-12 text-center bg-white text-black flex flex-col justify-center items-center">
      <img
        src="https://agendalafecha.com/es/boda/assets/img/icono-canciones.svg"
        alt="icon-gift"
        className="w-40 h-40 mb-2"
      />
      <div className="w-4/5">
        <h1 className="text-3xl mb-4">¿QUÉ CANCIONES NO PUEDEN FALTAR?</h1>
        <h2 className="text-xl">
          ¡Sugiere las canciones que quieras escuchar en la fiesta!
        </h2>
        <button
          onClick={toggleSongs}
          className="text-md mt-6 bg-[#9aaa9a] text-white rounded-full py-2 w-60 hover:bg-white hover:text-[#9aaa9a] hover:border-[#9aaa9a] border-[1px] border-[#9aaa9a]
      transition duration-300 ease-in-out transform"
        >
          VER LISTA
        </button>
      </div>
      {showSongs && (
        <div className="w-4/5 mt-6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre de la canción"
              className="w-full h-10 border-[1px] border-[#9aaa9a] rounded-md px-4"
              name="title"
              value={title}
              onChange={onInputChange}
            />
            <input
              type="text"
              placeholder="Artista"
              className="w-full h-10 border-[1px] border-[#9aaa9a] rounded-md px-4 mt-2"
              name="artist"
              value={artist}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="text-md mt-6 bg-[#9aaa9a] text-white rounded-full py-2 w-60 hover:bg-white hover:text-[#9aaa9a] hover:border-[#9aaa9a] border-[1px] border-[#9aaa9a]
            transition duration-300 ease-in-out transform"
            >
              ARGEGAR CANCION
            </button>
          </form>
          <div className="flex flex-col w-7/8 max-h-72 overflow-y-scroll mt-4">
            {thisWeddingSongs &&
              thisWeddingSongs.map((song) => (
                <div
                  key={song.id}
                  className="w-full mt-3 flex flex-row justify-left items-center"
                >
                  <div className="flex flex-row items-center justify-left">
                    <button
                      className="mr-2 text-md text-red-800"
                      onClick={() =>
                        addNewLike({ weddingId: thisWeddingId, song })
                      }
                    >
                      <BsFillHeartFill />
                    </button>
                    <p>{song.likes ?? 0}</p>
                  </div>
                  <div className="ml-4">
                    <h1 className="text-md text-left">
                      {song.title} - {song.artist}
                    </h1>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
