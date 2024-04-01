import Header from '../components/Header.jsx';

import image1 from '../assets/CC/1.png';
import image2 from '../assets/CC/2.png';
import image3 from '../assets/CC/3.png';
import image4 from '../assets/CC/4.png';
import image5 from '../assets/CC/5.png';
import image6 from '../assets/CC/6.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

import {useLayoutEffect} from 'react';

function Candc() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16 min-h-full">
                    <div className="text-left flex flex-col flex-1 gap-9 mt-10">
                        <h1 className='font-black text-4xl'>C&C Immobilier</h1>
                        <p className='text-left'>To look for the house of your dreams it is necessary to have a good experience, good photos and an impeccable website when it comes to luxuries.</p>
                        <p className='text-left text-gray'>This site was made with great attention to detail and always thinking about the best possible experience.</p>
                    </div>
                    <img className="h-full" src={image1} alt="Ivan on a building" />
                </section>
                <section>
                    <h1 className='font-black text-4xl text-left mb-10'>Landing Page</h1>
                    <img className="h-full" src={image2} alt="Ivan on a building" />
                </section>
                <section>
                    <div className="flex flex-col">
                        <h1 className='font-black text-4xl text-left mb-10'>Desktop</h1>
                        <img className="h-full" src={image3} alt="Ivan on a building" />
                    </div>
                    <div className="flex flex-row items-center">
                        <img className="h-full" src={image4} alt="Ivan on a building" />
                        <h1 className='font-black text-4xl text-left my-10'>Tablet</h1>
                    </div>
                    <img className="h-full my-10" src={image5} alt="Ivan on a building" />
                    <div className="flex flex-row">
                        <h1 className='font-black text-4xl text-left'>and Phone</h1>
                        <img className="h-full" src={image6} alt="Ivan on a building" />
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
export default Candc;