import Header from '../components/Header.jsx';

import image1 from '../assets/Iphinity/1.png';
import image2 from '../assets/Iphinity/2.png';
import image3 from '../assets/Iphinity/3.png';
import image4 from '../assets/Iphinity/4.png';
import image5 from '../assets/Iphinity/5.png';
import image6 from '../assets/Iphinity/6.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

import {useLayoutEffect} from 'react';

function Iphinity() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16 min-h-full">
                    <img className="h-full" src={image1} alt="Ivan on a building" />
                    <div className="text-left flex flex-col flex-1 gap-9 mt-10">
                        <h1 className='font-black text-4xl'>Iphinity</h1>
                        <p className='text-left'>This is a company that sells maintenance services for special electronic equipment, assistance in logistics & supply chain and administrative outsourcing.</p>
                        <p className='text-left text-gray'>For this client we created the a single webpage with all the information they needed and a form</p>
                    </div>
                </section>
                <section>
                    <h1 className='font-black text-4xl text-left w-full mb-10'>Hero</h1>
                    <img className="h-full" src={image2} alt="Ivan on a building" />
                </section>
                <section>
                    <h1 className='font-black text-4xl text-right w-full mb-10'>Hero</h1>
                    <img className="h-full" src={image3} alt="Ivan on a building" />
                </section>
                <section>
                    <h1 className='font-black text-4xl w-full mb-10'>Services Carrousel</h1>
                    <img className="h-full" src={image4} alt="Ivan on a building" />
                </section>
                <section>
                    <h1 className='font-black text-4xl text-left w-full mb-10'>Numbers</h1>
                    <img className="h-full" src={image5} alt="Ivan on a building" />
                </section>
                <section>
                    <h1 className='font-black text-4xl text-right w-full mb-10'>Footer</h1>
                    <img className="h-full" src={image6} alt="Ivan on a building" />
                </section>

                <footer className='flex justify-end mt-28 pb-12'>
                    <Button className='bg-transparent'>
                        <Link className='text-white text-xl' to="/">Back To  Home &gt;</Link>
                    </Button>
                </footer>
            </main>
        </>
    )
}
export default Iphinity;