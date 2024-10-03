import "./App.css";
import About from "./component/about/About.jsx";
import Contact from "./component/contact/Contact.jsx";
import Footer from "./component/footer/Footer.jsx";
import Header from "./component/header/Header.jsx";
import Home from "./component/home/Home.jsx";
import Qualification from "./component/qualification/Qualification.jsx";
import Scrollup from "./component/scrollup/Scrollup.jsx";
import Services from "./component/services/Services.jsx";
import Skills from "./component/skills/Skills.jsx";
import Testimonials from "./component/testimonials/Testimonials.jsx";
import Work from "./component/work/Work.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
