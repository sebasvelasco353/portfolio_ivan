import Header from '../components/Header.jsx';

import image1 from '../assets/Kustee/1.png';
import image2 from '../assets/Kustee/2.png';
import image3 from '../assets/Kustee/3.png';
import image4 from '../assets/Kustee/4.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {useLayoutEffect} from 'react';

function Kustee() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16 min-h-full">
                    <div className="text-left flex flex-col flex-1 gap-9 mt-10">
                        <h1 className='font-black text-4xl'>Kustee</h1>
                        <p className='text-left'>Kustee is a website created for the Bak2 brand in France and function as an online store for refurbished of second-hand iPhones and more apple products</p>
                        <p className='text-left text-gray'>The main task was to design the online store, the printed user guide and packaging</p>
                    </div>
                    <img className="h-full" src={image1} alt="Ivan on a building" />
                </section>
                <section>
                    <h1 className='font-black text-4xl text-left w-full mb-10'>Mockups</h1>
                    <img className="h-full" src={image2} alt="Ivan on a building" />
                </section>
                <section>
                    <div className="flex flex-col">
                        <h1 className='font-black text-4xl w-full mb-10'>Printed Material</h1>
                        <div className="flex flex-row items-baseline gap-6">
                            <img className="h-full w-9/12" src={image3} alt="Ivan on a building" />
                            <h1 className='font-black flex-1 text-left text-4xl'>Box</h1>
                        </div>
                        <div className="flex flex-row items-baseline gap-6 mt-10">
                            <img className="h-full w-10/12" src={image4} alt="Ivan on a building" />
                            <h1 className='font-black flex-1 text-left text-4xl self-end'>User Guide</h1>
                        </div>
                    </div>
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
export default Kustee;