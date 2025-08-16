import TitleSection from "../items/Common/TitleSection";
import GalleryImage from "../items/Common/GalleryImage";
import ResultsWork from "../items/Common/ResultsWork";

export default function About() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-start items-start text-left gap-20 py-15 my-10">
                <div className="flex flex-col">
                    <TitleSection title="Our Story"/>
                    <p className="text-2xl font-bold font-sans w-[400px]">
                        We know how everything works and why your business is failing over and over again.
                    </p>
                </div>
                <GalleryImage 
                    imgs={
                        [
                            {img:'/assets/items/ourstory-men.png'},
                            {img:'/assets/items/ourstory-girl.png'},
                            {img:'/assets/items/ourstory-littlegirl.png'}
                        ]
                    }
                    text="We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.l"
                />

                <div className="flex flex-row w-full justify-between gap-8 text-center py-8">
                    <ResultsWork title="1M+" subtitle="Customers visit Omega every month to get their service done."/>
                    <ResultsWork title="92%" subtitle="Satisfaction rate comes from our awesome customers."/>
                    <ResultsWork title="4.9/5.0" subtitle="Average customer ratings we have got all over internet."/>
                </div>
            </div>
        </div>
        
    )
}