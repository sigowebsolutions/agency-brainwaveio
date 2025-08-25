import Image from 'next/image';
import React from 'react'
interface AdvantagesChooseUsProps {
    icon:string;
    title:string;
    description:string;
}
const AdvantagesChooseUs = ({icon,title,description}:AdvantagesChooseUsProps) => {
  return (
    <div className='flex flex-row justify-center items-start gap-7 max-w-[400px]'>
        <div className="flex justify-center">
            <Image src={icon} alt={title} className='max-w-[150px]'/>
        </div>
        <div className='flex flex-col text-left gap-5'>
            <p className='text-md font-bold'>{title}</p>
            <p className='text-sm font-light leading-6'>{description}</p>
        </div>
    </div>
  )
}

export default AdvantagesChooseUs