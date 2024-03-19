import "./App.css";
import AboutClient from "./components/AboutClient/AboutClient";
import Brends from "./components/Brends/Brends";
import Footer from "./components/Footer/Footer";
import Maldex123 from "./components/Maldex123/Maldex123";
import Navbar from "./components/Navbar/Navbar";
import PProducts from "./components/PresentationProducts/PresentationProducts";
import Production from "./components/Production/Production";
import AksiyaSlider from "./components/Slider/AksiyaSlider/AksiyaSlider";
import WhoWeAre from "./components/WhoWeAre/WhoAreWe";
import Why from "./components/Why/Why";
// import SliderPhoto from "./components/Slider/SliderPhoto";

function App() {
  return (
    <div className="App w-full">
      <Navbar />
      <AksiyaSlider />
      <PProducts />
      <WhoWeAre />
      <Why />
      <AboutClient />
      <Brends />
      <Maldex123 />
      <Production />
      <Footer />
    </div>
  );
}

export default App;
