import './App.css';
import HeadMenuBar from './components/HeadMenuBar';
import Top from './components/Body/Top';
import AboutContainer from './components/Body/About';
import ServicesContainer from './components/Body/Services';
import PortfolioContainer from './components/Body/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div id="page-top">
        {/* <!-- Navigation--> */}
        <HeadMenuBar />
        {/* <!-- Top--> */}
        <section class="page-section bg-light" id="about">
          <Top />
        </section>    

        {/* <!-- About--> */}
        <section class="page-section bg-light" id="about">
          <AboutContainer />
        </section>

        {/* <!-- Services--> */}
        <section class="page-section" id="services">
          <ServicesContainer />
        </section>


        {/* <!-- Portfolio Grid--> */}
        <PortfolioContainer />

        {/* <!-- Footer--> */}
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
