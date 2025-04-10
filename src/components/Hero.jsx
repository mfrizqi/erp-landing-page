import MagnetLines from './addition/MagnetLines';

const Hero = () => {
  return (
    <section className="pt-20 block lg:flex items-center gap-20">
      <div className="grow">
        <h1 className="text-5xl font-extrabold mb-6 text-center md:text-left mb-10 text-neutral-800">Scale Faster with Smarter Inventory <br /> & Profit Tracking</h1>
        <div className="text-xl text-center md:text-left text-neutral-400/70 mb-16">A powerful yet easy-to-use platform for entrepreneurs to manage stock, monitor daily profits, and scale with confidence all in one place.</div>
        <div className="flex justify-center lg:justify-start">
          <button className="rounded-lg py-4 px-6 cursor-pointer started-button text-white">Get Started</button>
        </div>
      </div>
      <div className="grow hidden lg:block">
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="50vmin"
          lineColor="tomato"
          lineWidth="0.7vmin"
          lineHeight="4.5vmin"
          baseAngle={0}
          style={{ margin: "2rem auto" }}
        />
      </div>
    </section>)
};

export default Hero;