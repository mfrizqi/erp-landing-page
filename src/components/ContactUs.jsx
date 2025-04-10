import Iridescence from "./addition/Iridescence";

const ContactUs = () => {
    return (
        <section className="relative rounded mb-8" id="CONTACT">
            <div className="bg-neutral-100 p-8 mb-16 rounded-lg">
                <h1 className="text-2xl font-bold">Have questions or want to learn more about our system? <br/> We’re here to help!</h1>

                <div className="text-lg mt-6">
                    <div className="mb-2 font-medium">support@yourstartup.com</div>
                    <div className="mb-2 font-medium">+62 812 3456 7890</div>
                    <div className="font-medium">Jl. Startup No. 123, Jakarta, Indonesia</div>
                </div>
            </div>
            <div className="relative h-[440px] rounded-lg">
                <Iridescence
                    color={[1, 1, 2]}
                    amplitude={0.1}
                    speed={1.0}
                />

                <div className="flex flex-col justify-center items-center h-full px-8 rounded-xl">
                    <div className="font-bold text-5xl text-slate-800 mb-10 text-center md:text-left">Let’s grow your business together!</div>
                    <div className="py-3 px-6 bg-slate-800 text-white rounded-xl cursor-pointer">Make it happen</div>
                </div>
            </div>
        </section>)
}

export default ContactUs;