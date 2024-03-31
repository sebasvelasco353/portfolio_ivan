import Header from '../components/Header.jsx';

import image1 from '../assets/DBConseils/1.png';
import image2 from '../assets/DBConseils/2.png';
import image3 from '../assets/DBConseils/3.png';
import image4 from '../assets/DBConseils/4.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function DbConseils() {
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16 min-h-full">
                    <div className="text-left flex flex-col flex-1 gap-9 mt-10">
                        <h1 className='font-black text-4xl'>DB Conseils</h1>
                        <p className='text-left'>Intended as a tool for accounting management, this application provides services to companies in France and its surroundings.</p>
                    </div>
                    <img className="flex-1 h-full" src={image1} alt="Ivan on a building" />
                </section>
                <section>
                    <h1 className='font-black text-4xl text-right'>Client View</h1>
                    <img className="flex-1 h-full" src={image2} alt="Ivan on a building" />
                </section>
                <section>
                    <h1 className='font-black text-4xl text-left'>Company view</h1>
                    <img className="flex-1 h-full" src={image3} alt="Ivan on a building" />
                    <div className='flex mt-9 justify-center'>
                        <div className='flex flex-col items-baseline'>
                            <p className='my-9 text-gray'>and Dark Mode of course</p>
                            <img className="flex-1 h-full" src={image4} alt="Ivan on a building" />
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
export default DbConseils;