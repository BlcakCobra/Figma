import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Kaleb from "./Components/Kaleb/Kaleb";
import Main from "./Components/Main/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import SecondSection from "./Components/SecondSection/SecondSection";
import Skills from "./Components/Skills/Skills";

const Home = () => (
  <div className="Mainer">
    <div className="wrapper">
      <Header />
      <Main />
    </div>
    <SecondSection />
    <Portfolio />
    <Skills />
    <Kaleb />
    <AboutMe />
    <Footer />
  </div>
);

export default Home
