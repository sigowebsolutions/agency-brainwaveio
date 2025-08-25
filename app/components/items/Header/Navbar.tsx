'use client'
import React, { useState } from 'react'
import ButtonLink from '../Common/ButtonLink';
interface ItemsMenuProps {
    data: Array<{
        label: string;
        link:string
    }>;
    title: {
        label:string;
        link:string;
    };
    buttonAction: {
        label:string;
        link:string;
    }
}
const Navbar = ({data, title, buttonAction}:ItemsMenuProps) => {
    const [openMenu,setOpenMenu] = useState<boolean>(false);

  return (
    <div className='relative'>
        <div className='sm:hidden w-full py-5 bg-transparent flex flex-row justify-between items-center sm:justify-center gap-5 sm:gap-0'>
            <div>
                <a href={title.link} className='text-2xl font-bold'>{title.label}</a>
            </div>
            <div className='cursor-pointer' 
                onClick={ () => setOpenMenu(true) }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>

        <div className={`fixed sm:block sm:relative sm:top-0 top-0 left-0 w-full transition-transform duration-300 ease-in-out sm:translate-y-0 ${openMenu ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='w-full py-5 bg-blue-100 backdrop-blur-lg  sm:bg-transparent flex flex-col sm:flex-row justify-between items-center justify-center gap-5 sm:gap-0'>
                <div className="w-full flex flex-col sm:flex-row justify-between sm:basis-1/2 gap-10 items-center">
                    <div className='sm:block flex items-center w-full justify-between'>
                        <a href={title.link} className='text-2xl font-bold'>{title.label}</a>
                        <div className='cursor-pointer' onClick={() => setOpenMenu(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 sm:hidden justify-self-end hover:rotate-90 transition duration-300 easy-in-out">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-around gap-5">
                        {data.map((e,index) => (
                            <a key={index} href={e.link} className='text-sm font-bold font-sans'>{e.label}</a>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end basis-1/2">
                    <ButtonLink label={buttonAction.label} link={buttonAction.link} />
                </div>
                
            </div>
        
        </div>
    </div>
  )
}

export default Navbar