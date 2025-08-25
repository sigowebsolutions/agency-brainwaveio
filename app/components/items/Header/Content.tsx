import React from 'react'
import TitleSection from '../Common/TitleSection'
import ButtonLink from '../Common/ButtonLink'
import Image from 'next/image'

const Content = () => {
  return (
    <div className='flex justify-center sm:justify-between flex-row font-sans w-full'>
        <div className="sm:basis-1/2">
            <div className="flex flex-col w-full sm:w-3/4 items-center sm:items-start gap-8">
                <TitleSection title="let's shift yout business"/>
                <p className='text-center sm:text-left text-5xl font-bold font-sans mt-[-8]'>Shift your business fast with Shade Pro.</p>
                <p className='text-center sm:text-left text-sm font-100 tracking-normal leading-loose'>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                <ButtonLink label='Get started a project' link='#'/>
            </div>
        </div>
        <div className='md:flex justify-end basis-1/2 hidden'>
            <Image src="/assets/items/image.png" alt="Imagem de uma representante da empresa" className='max-h-[500px]'/>
        </div>
        
    </div>
  )
}

export default Content