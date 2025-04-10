import { useCallback, useEffect, useRef, useState } from "react";

import "../App.css";
import Lenis from "lenis";
import Login from "./Login";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const HeaderOption = ["Pricing", "About", "Contact"];
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toUpperCase());
    lenis.current.scrollTo(element, {
      offset: -200
    });

    if (isOpen) {
      setIsOpen(false)
    }
  };

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  const toggleLogin = ()=>{
    setIsOpen(false)
    setIsLogin(!isLogin)
    if(isLogin){
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  const handleLogin = useCallback(()=>{
    setIsLogin(!isLogin)
    if(isLogin){
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isLogin])

  return (
    <>
      <section className="sticky top-0 left-0 right-0 z-[20] w-full py-6 px-8 relative flex justify-between border border-b border-neutral-200 bg-white/30 backdrop-blur-sm">
        <div className="text-2xl font-bold">EIR</div>
        <div className="gap-4 items-center hidden md:flex">
          {HeaderOption.map((item, index) => {
            return <div key={index} className="cursor-pointer hover:text-blue-400 transition-all" onClick={() => { scrollToSection(item) }}>{item}</div>;
          })}
          <button className="px-5 py-1 rounded cursor-pointer text-white started-button" onClick={toggleLogin}>Login</button>
        </div>

        <div className="block md:hidden text-lg" onClick={toggleOpen}>☰</div>

        {isOpen && (
          <>
            <section className="block md:hidden rounded">
              <div className="flex flex-col items-center gap-4 px-8 pt-4 pb-8 absolute top-0 left-0 bg-neutral-50 w-full z-10 rounded-b-lg">
                <div onClick={toggleOpen} className="text-3xl self-end">x</div>
                {HeaderOption.map((item, index) => {
                  return <div key={index + 10} onClick={() => { scrollToSection(item) }}>{item}</div>;
                })}
                <button className="text-white px-8 py-2 started-button rounded-md" onClick={toggleLogin}>Login</button>
              </div>
            </section>
            <div className="absolute bg-black opacity-80 h-svh w-full top-0 left-0"></div>
          </>
        )}
      </section>
      {isLogin && <Login handleLogin={handleLogin}></Login>}
    </>
  );
};

export default Header;
