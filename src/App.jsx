import { useState } from "react";
import { images } from "./Utils/imagesData";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(0);

  const openModal = (imgIndex) => {
    setIndex(imgIndex);
    setSelectedImage(images[imgIndex]);
  };

  const closeModal = () => setSelectedImage(null);
  const prevImage = () =>
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () =>
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <>
      {!selectedImage && (
        <>
          {" "}
          <h1 className="text-center text-3xl md:text-5xl my-4 font-extrabold ">
            Image Gallery
          </h1>
          <div className="w-full flex flex-wrap justify-center">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="wallpaper Image"
                className="w-[130px] h-[100px] md:w-[320px] md:h-[240px] m-2 md:m-4 p-1 md:p-2 bg-white hover:scale-105 border border-slate-400 rounded-xl cursor-pointer shadow-xl"
                onClick={() => openModal(i)}
              />
            ))}
          </div>
        </>
      )}

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4">
            <img
              src={images[index]}
              alt="Selected"
              className="md:max-w-[60%] md:max-h-[80%] mx-auto rounded-lg object-contain"
            />
          </div>
          <button
            className="absolute top-5 right-5 text-white cursor-pointer hover:bg-red-600 hover:scale-125"
            onClick={closeModal}
          >
            ✖
          </button>
          <button
            className="absolute left-4 top-1/2 text-white cursor-pointer hover:scale-150 bg-black opacity-60"
            onClick={prevImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 text-white cursor-pointer hover:scale-150 bg-black opacity-60"
            onClick={nextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default App;
