import { useState } from "react";
import Modal from "./Components/Modal";
import { images } from "./Utils/imagesData";

function App() { 

  const [showModal, setShowModal]= useState(false);
  const [modalImg, setModalImg]= useState(null);

  const handleImgClick=(image)=>{
    console.log(image.id);
    setShowModal(true);
    setModalImg(image)
    console.log(modalImg);
    
  }

  return (
    <>
      <h1 className="text-center text-5xl my-4">Image Gallery</h1>
      {showModal && modalImg && <Modal image={modalImg} setShowModal={setShowModal}/> }
      <div className="flex flex-wrap justify-center">
          {images.map((i)=><img key={i.id} src={i.url} alt="wallpaper Image" className="w-1/4 m-2 p-2 hover:scale-105 border border-slate-400 rounded-xl cursor-pointer" onClick={()=>handleImgClick(i)}/> )}
      </div>
      
    </>
  )
}

export default App
