import "./App.css";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="bg-dark text-white">
        <section>
          <p className="text-6xl font-light">
            I’m Ivan, a designer specialising in <span className="font-semibold">UI/UX</span> and <span className="font-semibold">Interaction Design</span>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
