import React from 'react'
interface TitleSectionProps {
    title:string
}
const TitleSection = ({title}:TitleSectionProps) => {
  return (
    <p className='text-red-400 text-sm uppercase font-bold font-sans mb-10'>{title}</p>
  )
}

export default TitleSection