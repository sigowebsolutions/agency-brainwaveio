import Content from "../items/Header/Content";
import Navbar from "../items/Header/Navbar";

const navbarProps = [
    { label: 'Demos',link: '#' },
    { label: 'Pages',link: '#' },
    { label: 'Support',link: '#' },
    { label: 'Contact',link: '#' },
]

export default function Header() {
    return (
        <div className="min-h-[800px] xl:min-h-[1200px] bg-gradient-to-b from-blue-100">
            <div className="container mx-auto">
                <div className="flex justify-center flex-col gap-20">
                    <Navbar 
                        data={navbarProps} 
                        title={{label: 'Brainwave.io', link:'#'}} 
                        buttonAction={{label:'Get started a project',link:'#'}}/>

                    <Content/>
                </div>
            </div>
        </div>
    )
}