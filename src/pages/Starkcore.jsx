import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Starkcore() {
    return (
        <>
            <Header />
            <main className="bg-dark text-white">
                <section className="flex flex-row">
                    <div className="flex flex-col">
                        <h1>Starkcore Case</h1>
                        <p>This client had an app to handle the transportation management of various companies, with this tool they could create Quotes, Shipment orders and
                        also keep tracking of every shipment they had.</p>
                        <p>This was the first product that the lean-tech team developed. A robust tool with many functionalities and services for different clients in the US.</p>
                    </div>
                    {/* image */}
                </section>
                <section>
                    <h1>Our Challenge</h1>
                    <div className="flex flex-row">
                        <p>As a TMS, this product had a lot of virtues but with the passage of time and the arrival of new personnel to the company, flaws that had not been previously identify in the navigation and the usability began to be noticed</p>
                        <p>Our main challenge was to create an intuitive and attractive user interface that would satisfy a variety of user needs and preferences, this included designing and developing filters for the commodities, a new tool for the tracking system and re-design the billing process to make it easier for the agents using the app. In a short time of course...</p>
                    </div>
                </section>
                {/* image */}
                <h1>Starkcore</h1>
                <h2>Shipment View</h2>
                {/* image */}
                <section>
                    <h1>Strategy</h1>
                    <p>We used <b>DESIGN SPRINT</b>, In this methodology the product is analyzed and build alongside with the development team, with 5 phases where the first 3 are focused on research and the last 2 on   prototyping and testing.</p>
                    <div className="flex flex-row">
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Starkcore;