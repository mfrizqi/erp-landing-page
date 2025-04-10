import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import TierList from "./components/TierList";

function App() {
  return (
    <section className="flex flex-col items-center">
      <Header></Header>
      <div className="flex flex-col gap-20 lg:gap-56 max-w-[900px] px-8 lg:px-0">
        <Hero></Hero>
        <TierList></TierList>
        <About></About>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default App;
