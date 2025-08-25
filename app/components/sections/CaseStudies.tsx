import Card from "../items/CaseStudies/Card";
import TitleSection from "../items/Common/TitleSection";

const contentsCards = [
    { 
        title: 'Graphic Design',
        content: 'Aura Branding Design', 
        img: '/assets/items/aura.png'
    },
    { 
        title: 'Graphic Design',
        content: 'AB.S Snack Packaging', 
        img: '/assets/items/abs.png'
    },
    { 
        title: 'Web Development',
        content: 'Gradient Website Development', 
        img: '/assets/items/brand-gradient.png'
    },
    { 
        title: 'Content Writing',
        content: 'Magazine Content Writing', 
        img: '/assets/items/magazine-mockup.png'
    },
]

export default function CaseStudies() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center text-center gap-20 py-15 my-10">

                <div className="flex flex-col">
                    <TitleSection title="Case studies"/>
                    <p className="text-2xl font-bold font-sans">
                        Our works describe why we are<br/> the best in the business
                    </p>
                </div>

                <div className="flex xl:flex-row flex-col">
                    <div className="flex flex-col gap-4">
                        <Card {...contentsCards[0]} />
                        <Card {...contentsCards[2]} />
                    </div>
                    
                    {/* Coluna da direita */}
                    <div className="flex flex-col gap-4">
                        <Card {...contentsCards[1]} />
                        <Card {...contentsCards[3]} />
                    </div>
                </div>

                <div className="text-center">
                    <a href="#" className='pt-5 flex flex-row gap-3 justify-center text-sm font-bold text-indigo-700'>
                        <p>See all more</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        
    )
}