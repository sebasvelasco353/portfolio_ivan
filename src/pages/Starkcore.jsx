import Header from '../components/Header.jsx';

import image1 from '../assets/Starkcore/1.png';
import image2 from '../assets/Starkcore/2.png';
import image3 from '../assets/Starkcore/3.png';
import image4 from '../assets/Starkcore/4.png';
import image5 from '../assets/Starkcore/5.png';
import image6 from '../assets/Starkcore/6.png';
import image7 from '../assets/Starkcore/7.png';
import image8 from '../assets/Starkcore/8.png';
import image9 from '../assets/Starkcore/9.png';
import image10 from '../assets/Starkcore/10.png';
import image11 from '../assets/Starkcore/11.png';
import image12 from '../assets/Starkcore/12.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Starkcore() {
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16 min-h-full">
                    <div className="text-left flex flex-col flex-1 gap-9 mt-10">
                        <h1 className='font-black text-4xl'>Starkcore Case</h1>
                        <p className='text-left'>This client had an app to handle the transportation management of various companies, with this tool they could create Quotes, Shipment orders and
                        also keep tracking of every shipment they had.</p>
                        <p className='text-left text-gray'>This was the first product that the lean-tech team developed. A robust tool with many functionalities and services for different clients in the US.</p>
                    </div>
                    <img className="flex-1 h-full" src={image1} alt="Ivan on a building" />
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
                    <h1 className='font-black text-4xl mt-28'>Starkcore</h1>
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
                <section>
                <div className='text-left flex mt-12'>
                        <img className='flex-1' src={image4} alt="" />
                        <div className='flex-1'>
                            <h1 className='font-black text-4xl mt-28'>Step 1 - Analysis</h1>
                            <p className='text-left'>In this stage, the objectives are established with the stakeholders. Also, the roles that will be involved in it are also identified, in order to find possible types of users who will be using the product.</p>
                            <p className='text-left'>To find as much information as possible, different tools are used such as:</p>
                            <ul>
                                <li>User persona</li>
                                <li>Interviews</li>
                                <li>Shadowing</li>
                            </ul>
                            <p className='text-left'>We began by identifying the main users of the app and created a list of functional requirements to start moving the navigation and the workflow of the user. Our approach was always focused on redesigning the app as an user-friendly and adaptive application that makes it as easy as possible for users to create and follow the shipments and quotes that they created.</p>
                        </div>
                    </div>
                    <div className='text-left flex mt-12'>
                        <div>
                            <h1 className='font-black text-4xl mt-28'>Interviews & Research</h1>
                            <p className='text-left'>We began by identifying the main users of the app and created a list of functional requirements to start moving the navigation and the workflow of the user. Our approach was always focused on redesigning the app as an user-friendly and adaptive application that makes it as easy as possible for users to create and follow the shipments and quotes that they created.</p>
                            <p className='text-left'>we had various focal groups and interviews with experts to gather information related to the navigation and the most common actions when the user had to create a New Quote or Shimpent Order.</p>
                        </div>
                        <img className='flex-1' src={image5} alt="" />
                    </div>
                    <div className='text-left flex mt-12'>
                        <img className='flex-1' src={image6} alt="" />
                        <div>
                            <h1 className='font-black text-4xl mt-28'>Step 2 - Sketch</h1>
                            <p className='text-left'>once we have analyzed all the information that we gathered before, we proceed to the definition of the low-level wireframes, at this point the idea is to have clarity about the navigation and the pain points that the user has in the interaction, it’s important to iterate here to be sure that the elements or problems we found in the previous tests are solved, always  trying to improve the functionality of the site.</p>
                            <p className='text-left'>We had clear that our user wanted something they called “summary” or workspace to check the most relevant information for them all the time to keep tracking of the Quotes or Shipments they had.</p>
                        </div>
                    </div>
                    <div className='text-left mt-12'>
                        <div className='w-6/12'>
                            <h1 className='font-black text-4xl mt-28'>Iteration</h1>
                            <p className='text-left'>At this point we started to iterate in the dashboard to get to the right spot where the user feel like was taking control of the Shipment/Quote.</p>
                        </div>
                        <div className='flex mt-10'>
                            <img src={image7} alt="" />
                            <img src={image8} alt="" />
                        </div>
                    </div>
                    <div className='text-left flex mt-12'>
                        <img className='flex-1 mr-9' src={image9} alt="" />
                        <div>
                            <h1 className='font-black text-4xl mt-28'>Step 3 - Decide</h1>
                            <p className='text-left'>Here is where we decide if the low-fidelity wireframes and mockups are fulfilling the needs of the user, and to be sure about that the designs are tested with the roles identified in the previous stages, in order to determine if they meet the stated objectives.</p>
                            <p className='text-left'>Here we had meetings with the stakeholders and some experts to make sure everything it’s covered.</p>
                        </div>
                    </div>
                    <div className='text-left flex mt-12'>
                        <div>
                            <h1 className='font-black text-4xl mt-28'>Step 4 - Prototype</h1>
                            <p className='text-left'>In the prototyping phase, we transformed the low-fidelity prototypes to the high-fidelity mockups, making use of the corresponding graphic identity.</p>
                        </div>
                        <img src={image10} alt="" />
                    </div>
                    <img className='mt-28' src={image11} alt="" />
                    <div className='text-left flex mt-12'>
                        <img src={image12} alt="" />
                        <div>
                            <h1 className='font-black text-4xl mt-28'>Step 5 - Test</h1>
                            <p className='text-left'>At this point, the prototype phase is done and the designs are ready, here we tested if the user found the app functional and easy to use, and most important if the pain points was solved.</p>
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
export default Starkcore;