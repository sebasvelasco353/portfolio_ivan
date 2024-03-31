import "./App.css";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';

import imagen1 from './assets/Home/ivan1.png';
import imagen2 from './assets/Home/ivan2.png';
import imagen3 from './assets/Home/ivan3.png';

import project1 from './assets/Home/Starkcore_Home.png';
import project2 from './assets/Home/Creditapp_Home.png';
import project3 from './assets/Home/DBconseils_Home.png';
import project4 from './assets/Home/Codemagic_Home.png';
import project5 from './assets/Home/CC_Home.png';
import project6 from './assets/Home/Advanzees_Home.png';
import project7 from './assets/Home/Kustee_Home.png';
import project8 from './assets/Home/Iphinity_Home.png';

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function App() {
  const otherProjects = [{
    title: 'DB Conseils',
    descriptionLight: 'An app made for a consultant company that provides financial and accounting advice in France, ',
    descriptionDark: ' the app keep track of the learning process of the company.',
    image: project3,
    link: '/DbConseils'
  }, {
    title: 'CodeMagic',
    descriptionLight: 'One of the most important eSports team in france in the mobile gaming area, ',
    descriptionDark: 'this was the webpage for the champions of BrawlStars in Europe, Codemagic.',
    image: project4,
    link: '/Codemagic'
  }, {
    title: 'C&C IMMOBILIER',
    descriptionLight: 'A beautiful website where you can find your dream house in Paris. ',
    descriptionDark: 'C&C is a company that sells luxury houses in a exclusive area of France.',
    image: project5,
    link: '/Candc'
  }, {
    title: 'Advanseez',
    descriptionLight: 'A French consultancy enterprise specializing in offering advisory solutions has designed this ',
    descriptionDark: 'online application to elevate the quality of post-purchase support provided to its customer base',
    image: project6,
    link: '/Advanseez'
  }, {
    title: 'Kustee',
    descriptionLight: 'A digital marketplace dedicated to the resale of reconditioned ',
    descriptionDark: 'second-hand iPhones and various other Apple products.',
    image: project7,
    link: '/Kustee'
  }, {
    title: 'Iphinity',
    descriptionLight: 'Specializes in the provision of maintenance services ',
    descriptionDark: 'for specialized electronic equipment.',
    image: project8,
    link: '/Iphinity'
  }];

  return (
    <>
      <Header />
      <main className="bg-dark text-white">
        <section className="flex flex-col justify-center">
          <p className="text-6xl font-light">
            I’m Ivan, a designer specialising in <span className="font-semibold">UI/UX</span> and <span className="font-semibold">Interaction Design</span>
          </p>
        </section>
        <section id="AboutMe" className="text-left flex flex-col justify-center">
          <div className="content flex flex-col sm:flex-row">
            <div className="text grow max-w-screen-sm justify-center flex flex-col">
              <h1 className="text-2xl pb-4 font-semibold">A bit about me</h1>
              <p className="text-left text-4xl font-light">I am a UI/UX designer & business administrator who is passionate about creating <span className="font-semibold">beautiful and joyful digital experiences. Besides design, I love videogames, digital sculpting and travelling.</span></p>
            </div>
            <div className="images grow max-w-screen-sm">
              <img className="image1" src={imagen1} alt="Ivan on a building" />
              <img className="image2" src={imagen2} alt="Ivan with a Pokemon" />
              <img className="image3" src={imagen3} alt="Ivan at the stairs of a temple" />
            </div>
          </div>
        </section>
        <section id="Work">
          <h1 className="text-left text-4xl mb-20 font-light">Selected <span className="font-semibold">Projects</span></h1>
          <Card horizontal>
            <img className="h-96" src={ project1 } alt="Starkcore / UX & UI Design" />
            <div className="flex flex-col text-left justify-center">
              <h3 className="mb-4">Starkcore / UX & UI Design</h3>
              <p className="text-left text-4xl mb-4">
                This is the most important app for the company right now,
                <span className="font-semibold"> Starkcore is a powerful TMS that provides its services to several companies in the US and Canada.</span>
              </p>
              <p className="text-left mb-4">Website Design</p>
              <Button className="text-buttonBorder w-44 border-buttonBorder" variant="bordered">
                <Link to="/starkcore">VIEW WORK</Link>
              </Button>
            </div>
          </Card>
          <Card horizontal>
            <div className="flex flex-col text-left justify-center">
              <h3 className="mb-4">Credit App UI & Design System</h3>
              <p className="text-left text-4xl mb-4">
                An App made for the multinational company World Shipping,
                <span className="font-semibold"> the objective of this app was to organize the billing carried out by the truck drivers of the company.</span>
              </p>
              <p className="text-left mb-4">Web App</p>
              <Button className="text-buttonBorder w-44 border-buttonBorder" variant="bordered">
                <Link to="/Creditapp">VIEW WORK</Link>
              </Button>
            </div>
            <img className="h-96" src={ project2 } alt="Credit App UI & Design System" />
          </Card>
          <div className="flex flex-row gap-28 flex-wrap">
            {otherProjects.map(project => (
              <Card key={project.title} >
                <Link to={ project.link }>
                  <img className="w-80" src={ project.image } alt="Credit App UI & Design System" />
                  <h3 className="mb-4">{ project.title }</h3>
                  <p className="text-left text-4xl mb-4">
                    { project.descriptionLight }
                    <span className="font-semibold">{ project.descriptionDark }</span>
                  </p>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
