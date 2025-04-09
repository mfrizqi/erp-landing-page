import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen(){
    setIsOpen(!isOpen)
  }

  const HeaderOption = ["About", "Pricing", "Contact"];
  return (
    <section className="fixed top-0 left-0 right-0 w-full flex justify-between p-6 relative">
      <div>Logo</div>
      <div className="gap-4 items-center hidden md:flex">
        {HeaderOption.map((item) => {
          return <div>{item}</div>;
        })}
        <button className="border px-4 py-2">Login</button>
      </div>

      <section className="block md:hidden">
        <div className="absolute right-6 top-6" onClick={toggleOpen}>=</div>
        {isOpen && (
          <div className="flex flex-col items-end gap-4 px-6 py-4 absolute top-0 left-0 bg-neutral-300 w-full z-10">
            <div onClick={toggleOpen}>x</div>
            <div className=""></div>
            {HeaderOption.map((item) => {
              return <div>{item}</div>;
            })}
            <button className="border px-4 py-2">Login</button>
          </div>
        )}
      </section>
    </section>
  );
};

export default Header;
