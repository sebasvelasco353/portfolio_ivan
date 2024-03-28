import Header from '../components/Header.jsx';

import image1 from '../assets/CreditApp/1.png';
import image2 from '../assets/CreditApp/2.png';
import image3 from '../assets/CreditApp/3.png';
import image4 from '../assets/CreditApp/4.png';
import image5 from '../assets/CreditApp/5.png';
import image6 from '../assets/CreditApp/6.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Creditapp() {
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16 min-h-full">
                    <img className="flex-1 h-full" src={image1} alt="Ivan on a building" />
                    <div className="text-left flex flex-col flex-1 gap-9 mt-10">
                        <h1 className='font-black text-4xl'>CreditApp Case</h1>
                        <p className='text-left'>This client had an app to handle the transportation management of various companies, with this tool they could create Quotes, Shipment orders and
                        also keep tracking of every shipment they had.</p>
                        <p className='text-left text-gray'>This was the first product that the lean-tech team developed. A robust tool with many functionalities and services for different clients in the US.</p>
                    </div>
                </section>
                <section className='min-h-full mt-12'>
                    <h1 className='font-black text-4xl text-left'>Our Challenge</h1>
                    <div className="flex flex-row gap-32 mt-8">
                        <p className='flex-1 text-left text-gray'>As a TMS, this product had a lot of virtues but with the passage of time and the arrival of new personnel to the company, flaws that had not been previously identify in the navigation and the usability began to be noticed</p>
                        <p className='flex-1 text-left'>Our main challenge was to create an intuitive and attractive user interface that would satisfy a variety of user needs and preferences, this included designing and developing filters for the commodities, a new tool for the tracking system and re-design the billing process to make it easier for the agents using the app. <br /><br /> In a short time of course...</p>
                    </div>
                </section>
                <section className='min-h-full'>
                    <img className="mx-auto h-full" src={image2} alt="Ivan on a building" />
                    <h1 className='font-black text-4xl mt-28'>CreditApp</h1>
                    <h2 className='text-lg'>Shipment View</h2>
                    <img className="mx-auto h-full mt-28" src={image3} alt="Ivan on a building" />
                </section>
                <section className='min-h-full'>
                    <h1 className='font-black text-4xl text-left'>Strategy</h1>
                    <p className='text-left mt-5'>We used <b>DESIGN SPRINT</b>, In this methodology the product is analyzed and build alongside with the development team, with 5 phases where the first 3 are focused on research and the last 2 on prototyping and testing.</p>
                    <div className="flex flex-row justify-between mt-12 font-poppins text-5xl">
                        <p><span className='outline'>1.</span> Analysis</p>
                        <p><span className='outline'>2.</span> Sketch</p>
                        <p><span className='outline'>3.</span> Decide</p>
                        <p><span className='outline'>4.</span> Prototype</p>
                        <p><span className='outline'>5.</span> Test</p>
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
export default Creditapp;