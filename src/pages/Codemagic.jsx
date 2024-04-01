import Header from '../components/Header.jsx';

import image1 from '../assets/Codemagic/1.png';
import image2 from '../assets/Codemagic/2.png';
import image3 from '../assets/Codemagic/3.png';
import image4 from '../assets/Codemagic/4.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

import {useLayoutEffect} from 'react';

function Codemagic() {
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
                        <h1 className='font-black text-4xl'>Codemagic</h1>
                        <p className='text-left'>The 2020 champions of the BrawlStars mobile game needed a website to promote their brand and find more sponsors, the result was something like this</p>
                        <p className='text-left text-gray'>Despite being a relatively simple landing page, it was developed with love and effort to achieve the best details.</p>
                    </div>
                </section>
                <section>
                    <h1 className='font-black text-4xl text-left'>Landing Page</h1>
                    <img className="h-full" src={image2} alt="Ivan on a building" />
                </section>
                <section>
                    <div className="flex flex-col items-center">
                        <h1 className='font-black text-4xl'>Player Details</h1>
                        <img className="h-full" src={image3} alt="Ivan on a building" />
                    </div>
                    <div className='flex mt-9 justify-center'>
                        <div className='flex flex-col items-baseline'>
                            <p className='my-9 text-gray'>And it is responsive too</p>
                            <img className="h-full" src={image4} alt="Ivan on a building" />
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
export default Codemagic;