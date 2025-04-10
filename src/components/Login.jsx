

const Login = ({handleLogin}) => {
    return (
        <section className="flex flex-col items-center fixed top-0 left-0 right-0 bottom-0 h-svh w-full z-100 bg-white">
            <div onClick={handleLogin}>X</div>
            <div className="max-w-[400px] flex flex-col items-center">
                <h1 className="text-2xl">Sign in</h1>

                <button>Sign in</button>
            </div>
        </section>)
}

export default Login