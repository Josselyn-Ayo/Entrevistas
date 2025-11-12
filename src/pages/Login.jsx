import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { Link, useNavigate } from "react-router"
import {useFetch} from '../hooks/useFetch'
import { ToastContainer } from 'react-toastify'
import { useForm } from 'react-hook-form'

const Login = () => {
    
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const  fetchDataBackend = useFetch()

    const loginUser = async(dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/veterinario/login`
        const response = await fetchDataBackend(url, dataForm,'POST')
        if(response){
            navigate('/dashboard')
        }
    }

    return (
        <div className="flex flex-col sm:flex-row h-screen bg-[#1A202C] text-gray-200 font-poppins">

            <ToastContainer />

            {/* Imagen */}
            <div className="hidden sm:block sm:w-1/2 bg-[url('/public/images/doglogin.jpg')] bg-cover bg-center"></div>


            <div className="w-full sm:w-1/2 flex justify-center items-center bg-[#1A202C] px-10">

                <div className="w-4/5">

                    <h1 className="text-4xl font-semibold text-center text-white mb-4">Bienvenido(a)</h1>
                
                    <p className="text-gray-400 text-center mb-8">Inicia sesión para acceder al simulador de entrevistas laborales con IA</p>


                    {/* Formulario */}
                    <form onSubmit={handleSubmit(loginUser)}>

                        {/* Campo Correo */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1 text-gray-300">Correo electrónico</label>
                            <input
                                type="email"
                                placeholder="Ingresa tu correo"
                                className="w-full rounded-md border border-gray-600 bg-[#1A202C] text-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                {...register("email", { required: "El correo es obligatorio" })}
                            />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        {/* Campo Contraseña */}
                        <div className="mb-6 ">
                            <label className="block text-sm font-semibold mb-1 text-gray-300">Contraseña</label>
                            <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="************"
                                className="w-full rounded-md border border-gray-600 bg-[#1A202C] text-gray-200 px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500"
                                {...register("password", { required: "La contraseña es obligatoria" })}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <MdVisibilityOff className="text-gray-400" /> : <MdVisibility className="text-gray-400" />}
                            </div>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>


                        {/* Botón login */}
                            <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl 
                            hover:bg-blue-700 transition-transform duration-300 hover:scale-105">Iniciar sesión</button>

                    </form>


                    {/* Separador */}
                    <div className="mt-6 flex items-center text-gray-400">
                        <hr className="flex-1 border-gray-700" />
                        <span className="px-2 text-sm">O</span>
                        <hr className="flex-1 border-gray-700" />
                    </div>


                    {/* Botón Google */}
                    <button className="w-full mt-5 flex items-center justify-center border border-gray-600 py-2 rounded-xl text-sm hover:bg-gray-900 hover:text-white transition-colors">
                        <img className="w-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/281/281764.png" />
                        Sign in with Google
                    </button>


                    {/* Enlace para olvidaste tu contraseña */}
                    <div className="mt-6 text-center text-sm">
                        <Link to="/forgot/id" className="underline text-gray-400 hover:text-blue-400">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>



                    {/* Enlaces para volver o registrarse */}
                    <div className="mt-6 flex justify-between text-sm text-gray-400">
                        <Link to="/" className="underline hover:text-blue-400">Regresar</Link>
                        <Link to="/register" className="py-2 px-5 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Registrarse</Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;
