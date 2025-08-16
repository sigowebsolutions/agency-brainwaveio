import React from 'react'

interface ResultsWorkProps {
    title:string;
    subtitle:string
}

const ResultsWork = ({title,subtitle}:ResultsWorkProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
        <p className='text-4xl font-bold'>{title}</p>
        <p className='text-sm font-light'>{subtitle}</p>
    </div>
  )
}

export default ResultsWork