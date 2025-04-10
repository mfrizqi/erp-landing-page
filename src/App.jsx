import "./App.css";
import Header from "./components/Header";
import TiltedCard from "./components/TiltedCard";

const Hero = () => {
  return <section className="pt-8 h-svh">

    <h1 className="text-2xl font-extrabold mb-6">Scale Faster with Smarter Inventory & Profit Tracking</h1>
    <div>A powerful yet easy-to-use platform for entrepreneurs to manage stock, monitor daily profits, and scale with confidence — all in one place.</div>

    Call to Action Buttons:

    🚀 Get Started Now

    📄 See Our TIER Plans
  </section>;
};

const ContactUs = () => {
  return <div>
    Contact Us
    Have questions or want to learn more about our system? We’re here to help!

    📧 Email: support@yourstartup.com
    📞 Phone: +62 812 3456 7890
    📍 Address: Jl. Startup No. 123, Jakarta, Indonesia

    Or simply fill out the contact form on our website — our team is ready to assist you 24/7.

    Let’s grow your business together!
  </div>
}

function App() {
  return (
    <section>
      <Header></Header>
      <div className="px-16 flex flex-col gap-40">
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

        <section>
          About Us <br /><br />
          We're a startup focused on simplifying business operations for entrepreneurs through a user-friendly ERP-style platform. Our web-based solution helps users easily track every item that goes in and out, while also recording daily profits in real-time. <br /><br />

          To suit different business needs, we offer a flexible TIER System. Users can subscribe based on their required features — from basic inventory tracking to detailed sales analytics and AI-powered income forecasting. <br /><br />

          Whether you're just starting out or managing a growing business, our system is designed to support you with clarity, efficiency, and scalability.


        </section>

          <ContactUs></ContactUs>
      </div>
    </section>
  );
}

export default App;
