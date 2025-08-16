import React from 'react'
import TitleSection from '../Common/TitleSection'
import ButtonLink from '../Common/ButtonLink'

const Content = () => {
  return (
    <div className='flex justify-between flex-row font-sans w-full'>
        <div className="basis-1/2">
            <div className="flex flex-col w-3/4  items-start gap-8">
                <TitleSection title="let's shift yout business"/>
                <p className='text-5xl font-bold font-sans mt-[-8]'>Shift your business fast with Shade Pro.</p>
                <p className='text-sm font-100 tracking-normal leading-loose'>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                <ButtonLink label='Get started a project' link='#'/>
            </div>
        </div>
        <div className='flex justify-end basis-1/2'>
            <img src="/assets/items/image.png" alt="Imagem de uma representante da empresa" className='max-h-[500px]'/>
        </div>
        
    </div>
  )
}

export default Content