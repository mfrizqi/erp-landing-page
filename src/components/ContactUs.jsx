import Iridescence from "./addition/Iridescence";

const ContactUs = () => {
    return (
        <section className="relative rounded mb-8" id="CONTACT">
            <div className="bg-neutral-100 p-8 mb-16">
                <h1 className="text-xl font-bold">Have questions or want to learn more about our system? We’re here to help!</h1>

                <div>
                    📧 Email: support@yourstartup.com <br />
                    📞 Phone: +62 812 3456 7890 <br />
                    📍 Address: Jl. Startup No. 123, Jakarta, Indonesia <br />
                </div>

                Or simply fill out the contact form on our website — our team is ready to assist you 24/7.<br /><br />

                Let’s grow your business together!
            </div>
            <div className="relative h-[440px] rounded-lg">
                <Iridescence
                    color={[1, 1, 2]}
                    amplitude={0.1}
                    speed={1.0}
                />

                {/* <div className="absolute bg-neutral-100 mb-16 top-[50%] left-[50%] rounded-lg" style={{'transform': 'translate(-50%,-50%)'}}>
                    <h1 className="text-xl font-bold">Have questions or want to learn more about our system? We’re here to help!</h1>

                    <div>
                        📧 Email: support@yourstartup.com <br />
                        📞 Phone: +62 812 3456 7890 <br />
                        📍 Address: Jl. Startup No. 123, Jakarta, Indonesia <br />
                    </div>

                    Or simply fill out the contact form on our website — our team is ready to assist you 24/7.<br /><br />

                    Let’s grow your business together!
                </div> */}

            </div>
        </section>)
}

export default ContactUs;