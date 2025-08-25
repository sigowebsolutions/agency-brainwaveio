import Image from 'next/image';
import React from 'react'

interface GalleryImageProps {
    imgs: Array<{
        img:string
    }>;
    text:string
}

const GalleryImage = ({imgs,text}:GalleryImageProps) => {
  return (
    <div className='relative w-full flex flex-col md:flex-row justify-between gap-20'>
        <div className='flex flex-row'>
            <Image src={imgs[0].img} className='max-w-[350px] h-full' alt="" />
        </div>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-row justify-around'>
                <Image src={imgs[1].img} className='max-h-[270px]' alt="" />
                <Image src={imgs[2].img} className='max-h-[100px] object-cover bg-center' alt="" />
            </div>
            <div  className='text-left self-end pt-5'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default GalleryImage