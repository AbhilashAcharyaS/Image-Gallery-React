import React from 'react'
import { images } from '../Utils/imagesData';

const Modal = ({image, setShowModal}) => {
    const handlePrev=()=>{
        
    }
    const handleNext=()=>{

    }
    const handleClose=()=>{
        console.log("clicked");        
        setShowModal(false)
    }

  return (
    <div className='absolute z-10 bg-black'>
        <button onClick={handleClose} className='text-white p-4'>X</button>
        <div className='flex justify-center'>
            <button onClick={handlePrev}>◀</button>
            <img src={image.url} alt="image" className='w-10/12'/>
            <button onClick={handleNext}>▶</button>
        </div>
    </div>
  )
}

export default Modal