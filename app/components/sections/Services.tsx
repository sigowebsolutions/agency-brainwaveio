import Card from "../items/Common/Card";
import Rating from "../items/Common/Rating";
import TitleSection from "../items/Common/TitleSection";

const contentsCards = [
    { 
        title: 'Graphic Design',
        content: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.', 
        color:"bg-green-500",
        img: '/assets/items/Designer-rafiki.png'
    },
    { 
        title: 'Web Development',
        content: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.', 
        color:"bg-indigo-500" ,
        img: '/assets/items/Programming-rafiki.png'
    },
    { 
        title: 'Content Writing',
        content: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.', 
        color:"bg-red-500" ,
        img: '/assets/items/Notes-rafiki.png'
    },
]

export default function Services() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center text-center gap-20 border-b py-15 my-10">

                <div className="flex flex-col">
                    <TitleSection title="our services"/>
                    <p className="text-2xl font-bold font-sans">
                        We provide great services for<br/> our customers based on needs
                    </p>
                </div>
                <div className="flex justify-between gap-8">
                    {contentsCards.map((card, index) => (
                        <Card 
                        key={index} 
                        title={card.title} 
                        content={card.content} 
                        color={card.color} 
                        img={card.img}
                        
                        />
                    ))}
                </div>

                <Rating 
                    img='/assets/items/profile.png' 
                    value={5} 
                    coment='“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”' 
                    name='Franklin Hicks' 
                    position='Web Developer'
                />
            </div>
        </div>
        
    )
}