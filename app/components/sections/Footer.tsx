import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { CTASection } from "../items/Common/CTASection";

const listLinks = [
    {
        title:"Company", 
        links: [
            { link: '#', label:'About Us'},
            { link: '#', label:'Contact Us'},
            { link: '#', label:'Careers'},
            { link: '#', label:'Press'},
        ]
    },
    {
        title:"Product", 
        links: [
            { link: '#', label:'Features'},
            { link: '#', label:'Pricing'},
            { link: '#', label:'News'},
            { link: '#', label:'Help Desk'},
            { link: '#', label:'Support'},
        ]
    },
    {
        title:"Services", 
        links: [
            { link: '#', label:'Digital Marketing'},
            { link: '#', label:'Content Writing'},
            { link: '#', label:'SEO for Business'},
            { link: '#', label:'Ui Design'},
        ]
    },
    {
        title:"Legal", 
        links: [
            { link: '#', label:'Privacy Policy'},
            { link: '#', label:'Terms & Conditions'},
            { link: '#', label:'Return Policy'},
        ]
    },
]
export default function Footer() {
    return (
        <div className="w-full bg-slate-950 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center text-center gap-2 py-10">

                    <CTASection/>
                    <div className="border-b pb-10 mb-10 border-slate-700 w-full"></div>

                    <div className="flex flex-col sm:flex-row justify-between w-full py-10 gap-8">
                        <div className="flex flex-col justify-start items-start gap-8 text-left">
                            <p className="text-4xl font-bold">
                                Brainwave.io
                            </p>
                            <p className="text-slate-400 text-sm">
                                With lots of unique blocks, you can
                                easily build a page without coding.
                                Build your next landing page.
                            </p>
                            <div className="flex flex-row gap-4">
                                <Twitter/>
                                <Facebook/>
                                <Instagram/>
                                <Linkedin/>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between  w-full">
                            {listLinks.map((link,index) => (
                                <div key={index} className="text-center justify-center sm:justify-start w-full items-center sm:items-start py-5 sm:py-0">
                                    <p className="mb-5 text-slate-500 font-bold">{link.title}</p>
                                    <ul className="flex flex-col gap-4">
                                        {link.links.map((e, index) => (
                                            <li key={index}><a href={e.link}>{e.label}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}