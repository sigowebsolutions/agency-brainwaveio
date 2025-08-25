import Image from "next/image";

export default function Testimonial() {
    return (
        <div className="w-full bg-indigo-700 py-[150px]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-8 justify-center items-center">
                    <p className="text-sm text-green-300 font-bold text-center uppercase">Testimonial</p>
                    <p className="text-4xl font-bold text-white text-center">
                        “Simply the best. Better than all the rest.
                        I’d <br/> recommend this product to beginners and <br/> advanced users.”
                    </p>
                    <div className="flex flex-col gap-2 items-center text-white">
                        <Image src="/assets/items/profile-testimonial.png" alt="Profile Testimonial" className="rounded-[50%] w-[80px] pb-5" />
                        <p className="font-bold text-sm">Ian Klein</p>
                        <p className="font-light text-sm">Digital Marketer</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}