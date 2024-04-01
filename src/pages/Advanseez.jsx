import Header from '../components/Header.jsx';

import image1 from '../assets/Advanseez/1.png';
import image2 from '../assets/Advanseez/2.png';
import image3 from '../assets/Advanseez/3.png';
import image4 from '../assets/Advanseez/4.png';
import image5 from '../assets/Advanseez/5.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Advanseez() {
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16 min-h-full">
                    <img className="h-full" src={image1} alt="Ivan on a building" />
                    <div className="text-left flex flex-col flex-1 gap-9 mt-10">
                        <h1 className='font-black text-4xl'>Advanseez</h1>
                        <p className='text-left'>A French company that offers consulting services. this web app was developed to provide a better service after-sales to the customers.</p>
                        <p className='text-left text-gray'>The entire front-end and navigation was redesign to improve the user experience and usability.</p>
                    </div>
                </section>
                <section>
                    <h1 className='font-black text-4xl text-right w-full mb-10'>Old Landing Page</h1>
                    <img className="h-full" src={image2} alt="Ivan on a building" />
                </section>
                <section>
                    <div className="flex flex-col items-center">
                        <h1 className='font-black text-4xl text-left w-full mb-10'>Wireframes</h1>
                        <img className="h-full" src={image3} alt="Ivan on a building" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className='font-black text-4xl text-left mb-10'>Mockups</h1>
                        <img className="h-full" src={image4} alt="Ivan on a building" />
                        <img className="h-full mt-40" src={image5} alt="Ivan on a building" />
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
export default Advanseez;