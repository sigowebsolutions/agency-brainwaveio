import Image from 'next/image'
import React from 'react'
interface CardProps {
    title:string
    content:string
    img:string
}
const Card = ({title,content,img}:CardProps) => {
  return (
    <div className={`px-5 rounded-md`}>
        <div className='flex flex-col text-left'>
            <div className="w-full flex justify-center pb-10">
              <Image className='max-w-[500px] w-full' src={img} alt={title} />
            </div>
            <p className='text-sm font-light'>{title}</p>
            <p className='mb-10 font-bold'>{content}</p>
        </div>
    </div>
  )
}

export default Card