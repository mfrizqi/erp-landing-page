import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  const HeaderOption = ["About", "Pricing", "Contact"];
  return (
    <section className="sticky top-0 left-0 right-0 w-full py-6 px-8 relative flex justify-between border border-b border-neutral-200 bg-white/30 backdrop-blur-sm">
      <div className="text-2xl font-bold">E I R</div>
      <div className="gap-4 items-center hidden md:flex">
        {HeaderOption.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
        <button className="border px-4 py-1 rounded cursor-pointer">Login</button>
      </div>

      <div className="block md:hidden" onClick={toggleOpen}>=</div>

      {isOpen && (<section className="block md:hidden">

        <div className="flex flex-col items-end gap-4 px-6 py-4 absolute top-0 left-0 bg-neutral-300 w-full z-10">
          <div onClick={toggleOpen}>x</div>
          <div className=""></div>
          {HeaderOption.map((item, index) => {
            return <div key={index + 10}>{item}</div>;
          })}
          <button className="border px-4 py-2">Login</button>
        </div>
      </section>
      )}
    </section>
  );
};

export default Header;
