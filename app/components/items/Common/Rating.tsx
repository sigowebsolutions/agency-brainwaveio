import Image from 'next/image';
import React from 'react'


interface RatingProps {
  img: string;
  value: number;
  coment:string;
  name:string;
  position:string
}
function printValueStar(value: number): React.ReactNode {
  const totalStars: React.ReactNode[] = [];

  const Star = ({ filled }: { filled: boolean }) => (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9116 0.2436L13.908 6.00509L20.6063 6.92921C20.7797 6.95359 20.9235 7.06878 20.9775 7.22653C21.0315 7.38428 20.9864 7.55735 20.861 7.67325L16.0151 12.157L17.1592 18.4893C17.1893 18.6526 17.1186 18.8179 16.9769 18.9155C16.8353 19.0131 16.6473 19.026 16.4922 18.9488L10.5007 15.9597L4.50919 18.9497C4.3542 19.0271 4.16609 19.0144 4.02434 18.9169C3.88258 18.8193 3.8119 18.6539 3.84215 18.4906L4.9863 12.157L0.138953 7.67325C0.0135841 7.55735 -0.0315455 7.38428 0.0224676 7.22653C0.0764806 7.06878 0.220312 6.95359 0.393716 6.92921L7.09197 6.00509L10.0898 0.2436C10.1661 0.0946227 10.3257 0 10.5007 0C10.6757 0 10.8353 0.0946227 10.9116 0.2436Z"
        fill={filled ? "#FCAD38" : "#ccc"}
      />
    </svg>
  );

  for (let i = 0; i < 5; i++) {
    totalStars.push(<Star key={i} filled={i < value} />);
  }

  return <div className="flex gap-1">{totalStars}</div>;
}
const Rating = ({img,value,coment,name,position}:RatingProps) => {
  return (
    <div className='flex sm:flex-row flex-col justify-center sm:justify-between gap-15 py-5 w-full max-w-[800px]'>
      <div className="flex justify-center">
        <Image src={img} alt={name} className='w-[150px] rounded-[50%]'/>
      </div>
      <div className="flex justify-between flex-col w-full">
        {/* Rating */}
        <div className="flex justify-center sm:justify-start">
          {printValueStar(value)}
        </div>
        <div className="flex justify-start">
          <p className='font-bold text-left'>
            {coment}
          </p>
        </div>
        <div className="flex justify-start gap-2 text-sm">
          <span className='font-bold'>{name}</span> <span>{position}</span>
        </div>

      </div>
    </div>
  )
}

export default Rating