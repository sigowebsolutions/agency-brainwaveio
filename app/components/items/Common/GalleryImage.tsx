import React from 'react'

interface GalleryImageProps {
    imgs: Array<{
        img:string
    }>;
    text:string
}

const GalleryImage = ({imgs,text}:GalleryImageProps) => {
  return (
    <div className='relative w-full flex justify-between gap-20'>
        <div className='flex flex-row'>
            <img src={imgs[0].img} className='max-w-[350px] h-full' alt="" />
        </div>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-row justify-around'>
                <img src={imgs[1].img} className='max-h-[270px]' alt="" />
                <img src={imgs[2].img} className='max-h-[100px] object-cover bg-center' alt="" />
            </div>
            <div  className='text-left self-end'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default GalleryImage