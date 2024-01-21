import "./App.css";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import imagen1 from './assets/ivan1.png';
import imagen2 from './assets/ivan2.png';
import imagen3 from './assets/ivan3.png';

function App() {
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
          <h1 className="text-left text-4xl font-light">Selected <span className="font-semibold">Projects</span></h1>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
