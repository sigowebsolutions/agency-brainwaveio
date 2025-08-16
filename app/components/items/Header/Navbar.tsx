import React from 'react'
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
  return (
    <div className='w-full py-5 bg-transparent flex justify-between'>
        <div className="flex jusitfy-between basis-1/2 gap-10 items-center">
            <div>
                <a href={title.link} className='text-2xl font-bold'>{title.label}</a>
            </div>
            <div className="flex justify-around gap-5">
                {data.map((e,index) => (
                    <a key={index} href={e.link} className='text-sm font-bold font-sans'>{e.label}</a>
                ))}
            </div>
        </div>
        <div className="flex justify-end basis-1/2">
            <ButtonLink label={buttonAction.label} link={buttonAction.link} />
        </div>
        
    </div>
  )
}

export default Navbar