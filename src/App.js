import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import Particles from 'react-particles-js';
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Service from "./components/Services";

function App() {
  return (
    <>
    <Particles className="particles-canvas" params={{
      particles: {
        number: {
          value:50,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "polygon",
          stroke: {
            width: 6,
            color: "#f9ab00"
          }
        }
      }
    }}
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Service/>
    <ContactMe/>
    </>
  );
}

export default App;
