import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
