import '../App.css'

const Login = ({ handleLogin }) => {
    return (
        <section className="flex flex-col items-start fixed top-0 left-0 right-0 bottom-0 h-svh w-full z-100 bg-neutral-100 p-8">
            <div onClick={handleLogin} className="border border-neutral-300 bg-neutral-50 px-4 py-2 rounded-lg cursor-pointer">← Back to home</div>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="bg-white rounded-xl p-8 md:p-20 shadow">
                    <h1 className="text-2xl mb-8 font-bold text-neutral-700">Sign in to <br /> EIR Dashboard</h1>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className="flex flex-col items-center gap-2 w-64">
                            <div className="mb-4 w-full">
                                <label htmlFor="email" className="block mb-1 text-neutral-500 text-sm">Email</label>
                                <input type="text" className="border border-neutral-300 block rounded-lg py-1 px-3 w-full" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="password" className="block mb-1 text-neutral-500 text-sm">Password</label>
                                <input type="password" className="border border-neutral-300 block rounded-lg py-1 px-3 w-full" />
                            </div>
                        </div>
                        <button className="mx-auto started-button py-2 w-full text-white my-8 rounded-md cursor-pointer">Sign In</button>
                    </form>


                </div>
                <div className='text-neutral-400 mt-8 text-sm'>
                    No Account?
                    <span className='text-neutral-700 cursor-pointer text-underline'> Register</span>
                </div>
            </div>
        </section>
    )
}

export default Login