import React from 'react'
interface CardProps {
    title:string
    content:string
    color:string
    img:string
}
const Card = ({title,content,color,img}:CardProps) => {
  return (
    <div className={`py-10 px-5 rounded-md text-white ${color}`}>
        <div className='flex flex-col'>
            <div className="w-full flex justify-center pb-10">
              <img className='max-h-[100px]' src={img} alt={title} />
            </div>
            <p className='text-lg font-bold'>{title}</p>
            <p className='py-5 font-light'>{content}</p>
            <a href="#" className='pt-5 flex flex-row gap-3 justify-center text-sm font-bold'>
              <p>Learn more</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
        </div>
    </div>
  )
}

export default Card