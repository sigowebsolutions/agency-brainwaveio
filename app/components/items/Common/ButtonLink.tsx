import React from 'react'
interface ButtonLinkProps {
    label:string;
    link:string;
}
const ButtonLink = ({label, link}:ButtonLinkProps) => {
  return (
    <a href={link} 
        className='py-3 px-5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 text-sm font-bold transition duration-300 ease-in-out'>
            {label}
    </a>
  )
}

export default ButtonLink