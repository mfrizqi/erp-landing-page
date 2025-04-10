import { useState } from "react";

import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  const HeaderOption = ["About", "Pricing", "Contact"];
  return (
    <section className="sticky top-0 left-0 right-0 z-[20] w-full py-6 px-8 relative flex justify-between border border-b border-neutral-200 bg-white/30 backdrop-blur-sm">
      <div className="text-2xl font-bold">E I R</div>
      <div className="gap-4 items-center hidden md:flex">
        {HeaderOption.map((item, index) => {
          return <div key={index} className="cursor-pointer hover:text-blue-400 transition-all">{item}</div>;
        })}
        <button className="px-5 py-1 rounded cursor-pointer text-white started-button">Login</button>
      </div>

      <div className="block md:hidden text-lg" onClick={toggleOpen}>☰</div>

      {isOpen && (
        <>
          <section className="block md:hidden rounded">
            <div className="flex flex-col items-end gap-4 px-8 pt-4 pb-16 absolute top-0 left-0 bg-neutral-50 w-full z-10 rounded-b-lg">
              <div onClick={toggleOpen} className="text-3xl">x</div>
              {HeaderOption.map((item, index) => {
                return <div key={index + 10}>{item}</div>;
              })}
              <button className="text-white px-5 py-2 started-button rounded-md">Login</button>
            </div>
          </section>
          <div className="absolute bg-black opacity-80 h-svh w-full top-0 left-0"></div>
        </>
      )}
    </section>
  );
};

export default Header;
