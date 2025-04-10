import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Iridescence from "./components/addition/Iridescence";
import SpotlightCard from "./components/addition/SpotlightCard";
import MagnetLines from './components/addition/MagnetLines';

import tiers from "./constants/tiers";

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

const ContactUs = () => {
  return (
    <section className="relative rounded mb-8" id="CONTACT">
      <div className="bg-neutral-100 p-8 mb-16">
        <h1 className="text-xl font-bold">Have questions or want to learn more about our system? We’re here to help!</h1>

        📧 Email: support@yourstartup.com
        📞 Phone: +62 812 3456 7890
        📍 Address: Jl. Startup No. 123, Jakarta, Indonesia

        Or simply fill out the contact form on our website — our team is ready to assist you 24/7.

        Let’s grow your business together!
      </div>
      <div className="relative h-[440px] rounded-lg">
        <Iridescence
          color={[1, 1, 2]}
          amplitude={0.1}
          speed={1.0}
        />
        
      </div>
    </section>)
}

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-16 font-medium" id="ABOUT">
      <div className="text-4xl font-bold text-neutral-400/50">About Us</div>
      <div className="text-2xl text-neutral-800/90">We’re a tech startup driven by one simple mission — to make business management easier for entrepreneurs. Many small and growing businesses struggle to keep track of inventory, monitor daily sales, and understand their profits. That’s where we come in.</div>
      <div className="text-2xl text-neutral-800/90">Our web-based platform functions like a lightweight ERP system, designed specifically for ease of use and efficiency. Entrepreneurs can now record every item that comes in or goes out, and keep a close eye on their daily income all from one dashboard.</div>
    </div>
  )
}

const TierList = () => {
  const tierList = tiers
  return (
    <>
      <div className="text-lg mb-12" id="PRICING">Choose a plan that fits your business needs. Whether you're just getting started or ready to scale, our flexible pricing ensures you get the right tools at the right time — no hidden fees, just smart features.</div>
      <section className="flex flex-col lg:flex-row gap-16 md:gap-8 justify-between">
        <div className="grow">
          <SpotlightCard className="bg-neutral-50 text-black mb-6 p-8 h-full" spotlightColor="rgba(0, 229, 255, 0.7)">
            <div className="text-xl font-semibold mb-4">Tier 1</div>

            <div className="flex flex-col justify-center gap-1 text-neutral-700">
              {tierList.tier_1.list.map((item, index) => {
                return (
                  <div key={`one_${index}`} className={!item.isOn ? 'opacity-20' : ''}>
                    {item.title}
                  </div>)
              })}
            </div>
          </SpotlightCard>

          <button className="w-full rounded bg-neutral-200 py-2 cursor-pointer">Choose Plan</button>
        </div>

        <div className="grow">
          <SpotlightCard className="bg-neutral-50 text-black mb-6 p-8 h-full" spotlightColor="rgba(0, 255, 8, 0.7)">
            <div className="text-xl font-semibold mb-4">Tier 2</div>

            <div className="flex flex-col justify-center gap-1 text-neutral-700">
              {tierList.tier_2.list.map((item, index) => {
                return (
                  <div key={`two_${index}`} className={!item.isOn ? 'opacity-20' : ''}>
                    {item.title}
                  </div>)
              })}
            </div>
          </SpotlightCard>
          <button className="w-full rounded bg-neutral-200 py-2 cursor-pointer">Choose Plan</button>
        </div>
        <div className="grow">
          <SpotlightCard className="bg-neutral-50 text-black mb-6 p-8 h-full" spotlightColor="rgba(0, 229, 255, 0.7)">
            <div className="text-xl font-semibold mb-4">Tier 3</div>

            <div className="flex flex-col justify-center gap-1 text-neutral-700">
              {tierList.tier_3.list.map((item, index) => {
                return (
                  <div key={`three_${index}`}>
                    {item.title}
                  </div>)
              })}
            </div>
          </SpotlightCard>

          <button className="w-full rounded bg-neutral-200 py-2 cursor-pointer">Choose Plan</button>
        </div>

      </section>
    </>
  )
}

function App() {
  return (
    <section className="flex flex-col items-center">
      <Header></Header>
      <div className="flex flex-col gap-20 lg:gap-56 max-w-[900px] px-8 lg:px-0">
        <Hero></Hero>
        <section>
          {/* <div className="text-lg mb-8">Choose a plan that fits your business needs. Whether you're just getting started or ready to scale, our flexible pricing ensures you get the right tools at the right time — no hidden fees, just smart features.</div> */}
          <TierList></TierList>
        </section>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default App;
