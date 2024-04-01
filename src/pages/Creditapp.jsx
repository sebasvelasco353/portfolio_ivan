import Header from '../components/Header.jsx';

import image1 from '../assets/CreditApp/1.png';
import image2 from '../assets/CreditApp/2.png';
import image3 from '../assets/CreditApp/3.png';
import image4 from '../assets/CreditApp/4.png';
import image5 from '../assets/CreditApp/5.png';
import image6 from '../assets/CreditApp/6.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

import {useLayoutEffect} from 'react';

function Creditapp() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16 min-h-full">
                    <img className="flex-1 h-full" src={image1} alt="Ivan on a building" />
                    <div className="text-left flex flex-col flex-1 gap-9 mt-10">
                        <h1 className='font-black text-4xl'>Credit App</h1>
                        <p className='text-left'>This app was made for the company World Shipping, the idea was to redesign the whole site, using the same branding colors and look and feel.</p>
                        <p className='text-left text-gray'>This product is one of the most old and complicated products that the company has right now nevertheless is one of the most important apps, it helps the company to recover almost 1 million dollars every month on payments for the truck drivers that has to be charged to the client directly.</p>
                    </div>
                </section>
                <section className='min-h-full mt-12'>
                    <h1 className='font-black text-4xl text-left'>Our Challenge</h1>
                    <div className="flex flex-row gap-32 mt-8">
                        <p className='flex-1 text-left text-gray'>The challenge here was to make it easy to use with the same components that the old app had.</p>
                        <p className='flex-1 text-left'>Since the development team had a lot of components ready to implement, the redesign process was quick and easy.</p>
                    </div>
                    <img className="mx-auto h-full pt-10" src={image2} alt="Ivan on a building" />
                </section>
                <section className='min-h-full'>
                    <h1 className='font-black text-4xl mt-28'>The Result</h1>
                    <h2 className='text-lg'>Shipment View</h2>
                    <img className="mx-auto h-full pt-4" src={image3} alt="Ivan on a building" />
                    <img className="mx-auto h-full mt-28" src={image4} alt="Ivan on a building" />
                </section>
                <section className='min-h-full mt-12'>
                    <h1 className='font-black text-4xl text-left'>More Mockups</h1>
                    <div className="flex flex-row gap-32 mt-8">
                        <p className='flex-1 text-left text-gray'>This application has different faces depending on the company`s brand, around 120 mockups were made for the entire site and 15 forms in different presentations.</p>
                        <p className='flex-1 text-left'>a complex application with many faces...</p>
                    </div>
                    <img className="mx-auto h-full mt-28" src={image5} alt="Ivan on a building" />
                    <img className="mx-auto h-full mt-28" src={image6} alt="Ivan on a building" />
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
export default Creditapp;