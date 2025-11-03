import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { Link } from "react-router"
import { useForm } from "react-hook-form"
import { ToastContainer } from 'react-toastify'
import { useFetch } from "../hooks/useFetch"



export const Register = () => {

		const [showPassword, setShowPassword] = useState(false)
    const fetchDataBackend = useFetch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const registerUser = async (dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/registro`
        await fetchDataBackend(url, dataForm, "POST")
    }

    return (
        <div className="flex flex-col sm:flex-row h-screen">

            <ToastContainer />

            <div className="w-full sm:w-1/2 h-screen bg-[#1A202C] flex justify-center items-center p-8">


                <div className="max-w-md w-full">

                    <h1 className="text-3xl font-semibold mb-2 text-center text-white">Crear una cuenta</h1>

                    <small className="text-gray-400 block my-4 text-sm">Completa tus datos para empezar</small> 
                    
                    {/* Formulario */}
                    <form onSubmit={handleSubmit(registerUser)}>

                        {/* Campo nombre */}
                        <div className="mb-4">
                            <label className="mb-2 block text-sm font-semibold text-gray-300">Nombre</label>
                            <input type="text" placeholder="Ingresa tu nombre" className="block w-full rounded-md border
                            border-gray-600 bg-[#4A5568]  py-2 px-3 text-gray-200 placeholder-gray-400 focus:outline-none 
                            focus:ring-2 focus: ring-blue-500"
                            {...register("nombre", { required: "El nombre es obligatorio" })}
                            />
                            {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>}
                        </div>


                        {/* Campo apellido */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold text-gray-300">Apellido</label>
                            <input type="text" placeholder="Ingresa tu apellido" className="block w-full rounded-md border
                            border-gray-600 bg-[#4A5568]  py-2 px-3 text-gray-200 placeholder-gray-400 focus:outline-none 
                            focus:ring-2 focus: ring-blue-500"
                            {...register("apellido", { required: "El apellido es obligatorio" })}
                            />
                            {errors.apellido && <p className="text-red-400 text-sm mt-1">{errors.apellido.message}</p>}
                        </div>


                        {/* Campo dirección */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold text-gray-300">Dirección</label>
                            <input type="text" placeholder="Ingresa tu dirección de domicilio" className="block w-full rounded-md border
                            border-gray-600 bg-[#4A5568]  py-2 px-3 text-gray-200 placeholder-gray-400 focus:outline-none 
                            focus:ring-2 focus: ring-blue-500"
                            {...register("direccion", { required: "La direccion es obligatoria" })}
                            />
                            {errors.direccion && <p className="text-red-400 text-sm mt-1">{errors.direccion.message}</p>}
                        </div>
                        

                        {/* Campo celular */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold text-gray-300">Celular</label>
                            <input type="text" inputMode="tel" placeholder="Ingresa tu celular" className="block w-full rounded-md border
                            border-gray-600 bg-[#4A5568]  py-2 px-3 text-gray-200 placeholder-gray-400 focus:outline-none 
                            focus:ring-2 focus: ring-blue-500"
                            {...register("celular", { required: "El celular es obligatorio" })}
                            />
                            {errors.celular && <p className="text-red-400 text-sm mt-1">{errors.celular.message}</p>}
                        </div>


                        {/* Campo correo electrónico */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold text-gray-300">Correo electrónico</label>
                            <input type="email" placeholder="Ingresa tu correo electrónico" className="block w-full rounded-md border
                            border-gray-600 bg-[#4A5568]  py-2 px-3 text-gray-200 placeholder-gray-400 focus:outline-none 
                            focus:ring-2 focus: ring-blue-500"
                            {...register("email", { required: "El correo electrónico es obligatorio" })}
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                        </div>



                        {/* Campo Contraseña */}
                        <div className="mb-4">
                            
                            <label className="block text-sm font-semibold mb-2 text-gray-300">Contraseña</label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="************"
                                    className="w-full rounded-md border border-gray-600 bg-[#4A5568] px-3 py-2 pr-10 text-gray-200 placeholder-gray-400 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    {...register("password", { required: "La contraseña es obligatoria" })}
                                />
                                    {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
                                
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200 focus:outline-none"
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                </button>
                            </div>
                        </div>


                        {/* Botón Register */}
                        <div className="mb-4">
                            <button className="bg-blue-600 text-white py-3 w-full rounded-md font-semibold
                            hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">Registrarse</button>
                        </div>


                    </form>

                
                    {/* Enlace para iniciar sesión si ya tiene una cuenta */}
                    <div className="w-full text-sm flex justify-center items-center py-4 px-8 border-t border-gray-700 mt-auto">
                        <p className="text-gray-400 mr-2">¿Ya posees una cuenta?</p>
                        <Link to="/login" className="flex items-center justify-center border border-gray-600 bg-[#4A5568] bg-blue-600 text-white py-2 px-4 rounded-md
                    hover:bg-[#636B7E] transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Iniciar sesión</Link>
                    </div>
                </div>
            </div> 

              {/* Imagen */}
            <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-[url('/public/images/Programacion.png')] bg-no-repeat 
                bg-cover bg-center sm:block hidden">
            </div>


        </div>
    )
}

