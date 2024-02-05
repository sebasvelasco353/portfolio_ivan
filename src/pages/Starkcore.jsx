import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import image1 from '../assets/Starkcore/1.png';
import image2 from '../assets/Starkcore/2.png';

function Starkcore() {
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row gap-16">
                    <div className="text-left flex flex-col flex-1 gap-9">
                        <h1 className='font-black text-4xl'>Starkcore Case</h1>
                        <p className='text-left'>This client had an app to handle the transportation management of various companies, with this tool they could create Quotes, Shipment orders and
                        also keep tracking of every shipment they had.</p>
                        <p className='text-left text-gray'>This was the first product that the lean-tech team developed. A robust tool with many functionalities and services for different clients in the US.</p>
                    </div>
                    <img className="flex-1 h-full" src={image1} alt="Ivan on a building" />
                </section>
                <section className='min-h-full'>
                    <h1 className='font-black text-4xl text-left'>Our Challenge</h1>
                    <div className="flex flex-row gap-32">
                        <p className='flex-1 text-left text-gray'>As a TMS, this product had a lot of virtues but with the passage of time and the arrival of new personnel to the company, flaws that had not been previously identify in the navigation and the usability began to be noticed</p>
                        <p className='flex-1 text-left'>Our main challenge was to create an intuitive and attractive user interface that would satisfy a variety of user needs and preferences, this included designing and developing filters for the commodities, a new tool for the tracking system and re-design the billing process to make it easier for the agents using the app. <br /><br /> In a short time of course...</p>
                    </div>
                </section>
                <section className='min-h-full'>
                    <img className="mx-auto h-full" src={image2} alt="Ivan on a building" />
                    <h1 className='font-black text-4xl mt-28'>Starkcore</h1>
                    <h2 className='text-lg'>Shipment View</h2>
                    {/* image */}
                </section>
                <section>
                    <h1>Strategy</h1>
                    <p>We used <b>DESIGN SPRINT</b>, In this methodology the product is analyzed and build alongside with the development team, with 5 phases where the first 3 are focused on research and the last 2 on prototyping and testing.</p>
                    <div className="flex flex-row justify-between">
                        <p>1. Analysis</p>
                        <p>2. Sketch</p>
                        <p>3. Decide</p>
                        <p>4. Prototype</p>
                        <p>5. Test</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Starkcore;