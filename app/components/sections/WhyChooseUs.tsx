import AdvantagesChooseUs from "../items/Common/AdvantagesChooseUs";
import ButtonLink from "../items/Common/ButtonLink";
import Card from "../items/Common/Card";
import { CTASection } from "../items/Common/CTASection";
import Rating from "../items/Common/Rating";
import TitleSection from "../items/Common/TitleSection";

const listObjectives = [
    {
        icon:"/assets/icons/people.svg", 
        title:"Dedicated project manager",
        description:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    },
    {
        icon:"/assets/icons/organized.svg", 
        title:"Organized tasks",
        description:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    },
    {
        icon:"/assets/icons/feedback.svg", 
        title:"Easy feedback sharing",
        description:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    },
    {
        icon:"/assets/icons/time.svg", 
        title:"Never miss deadline",
        description:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    },
]
export default function WhyChooseUs() {
    return (
        <div className="w-full bg-blue-50">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center text-center gap-20 py-15 my-10 ">

                    <div className="flex flex-col">
                        <TitleSection title="Why choose us"/>
                        <p className="text-2xl font-bold font-sans">
                            People choose us because we <br/> serve the best for everyone
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-10 pb-20 border-b">
                        {listObjectives.map((objective,index) => (
                            <AdvantagesChooseUs key={index} icon={objective.icon} description={objective.description} title={objective.title}/>
                        ))}
                    </div>
                    <CTASection/>
                </div>
            </div>
        </div>
        
    )
}