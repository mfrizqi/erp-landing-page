import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TiltedCard from "./components/TiltedCard";
import Iridescence from "./components/Iridescence";

const Hero = () => {
  return <section className="pt-20 h-svh">

    <h1 className="text-5xl font-extrabold mb-6 text-center mb-10">Scale Faster with Smarter Inventory <br /> & Profit Tracking</h1>
    <div>A powerful yet easy-to-use platform for entrepreneurs to manage stock, monitor daily profits, and scale with confidence — all in one place.</div>

    Call to Action Buttons:

    🚀 Get Started Now

    📄 See Our TIER Plans
  </section>;
};

const ContactUs = () => {
  return (<section className="relative p-8 rounded">
    <div className="relative h-[440px] rounded-lg">
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={true}
        amplitude={0.1}
        speed={1.0}
      />
      <div>
        Contact Us
        Have questions or want to learn more about our system? We’re here to help!

        📧 Email: support@yourstartup.com
        📞 Phone: +62 812 3456 7890
        📍 Address: Jl. Startup No. 123, Jakarta, Indonesia

        Or simply fill out the contact form on our website — our team is ready to assist you 24/7.

        Let’s grow your business together!
      </div>
    </div>
  </section>)
}

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>We’re a tech startup driven by one simple mission — to make business management easier for entrepreneurs. Many small and growing businesses struggle to keep track of inventory, monitor daily sales, and understand their profits. That’s where we come in.</div>

      <div>Our web-based platform functions like a lightweight ERP system, designed specifically for ease of use and efficiency. Entrepreneurs can now record every item that comes in or goes out, and keep a close eye on their daily income — all from one dashboard.</div>

      <div>We believe that the right tools can empower business owners to make smarter decisions, save time, and focus on what really matters: growing their business. With modern features, real-time tracking, and continuous support, we’re here to simplify your workflow and help you scale with confidence.</div>
    </div>)
}

function App() {
  return (
    <section className="flex flex-col items-center">
      <Header></Header>
      <div className="px-16 flex flex-col gap-40 max-w-[700px]">
        <Hero></Hero>

        <section>
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="150px"
            containerWidth="150px"
            imageHeight="150px"
            imageWidth="150px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text p-3 rounded">
                Kendrick Lamar - GNX
              </p>
            }
          />

        </section>

        <AboutUs></AboutUs>


      </div>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </section>
  );
}

export default App;
