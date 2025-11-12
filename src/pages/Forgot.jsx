import {Link} from 'react-router'
import { useForm } from 'react-hook-form';
import { ToastContainer} from 'react-toastify'
import { useFetch } from '../hooks/useFetch'

export const Forgot = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const fetchDataBackend = useFetch()

    const sendMail = async (dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/recuperarpassword`
        await fetchDataBackend(url, dataForm,'POST')
    }

    return (

        <div className="flex flex-col sm:flex-row h-screen bg-[#0d1117]  text-gray-200 font-poppins">

            <ToastContainer/>

            <div className="w-full sm:w-1/2 h-screen bg-[#1A202C] flex justify-center items-center p-8">

                <div className="md:w-4/5 sm:w-full">

                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-white">!Olvidaste tu contraseña¡</h1>
                    <small className="text-gray-400 block my-4 text-sm">No te preocupes, te ayudaremos a recuperarla.</small>


                    {/* Formulario */}
                    <form onSubmit={handleSubmit(sendMail)}>

                        {/* Campo correo electrónico */}
                        <div className="mb-1">
                            <label className="mb-2 block text-sm font-semibold text-gray-300">Correo electrónico</label>
                            <input type="email" placeholder="Ingresa un correo electrónico válido" 
                            className="block w-full rounded-md border border-gray-600 py-2 px-3 bg-[#2D3748] text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            {...register("email", { required: "El correo electrónico es obligatorio" })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>


                        {/* Botón Forgot password */}
                        <div className="mb-3">
                            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold border-none py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 shadow-md hover:shadow-green-500/20">Enviar correo
                            </button>
                        </div>

                    </form>


                    <div className="mt-5 text-xs border-b border-gray-700 py-4"/>


                    {/* Enlace para iniciar sesión si ya posee una cuenta */}
                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p className='text-gray-400'>¿Ya posees una cuenta?</p>
                        <Link to="/login" className="py-2 px-5 bg-gray-700 text-gray-200 rounded-xl hover:scale-110 duration-300 hover:bg-green-700 hover:text-white font-semibold transition-all"
                        >Iniciar sesión</Link>
                    </div>

                </div>

            </div>

            {/* Imagen */}
            <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-[url('/public/images/catforgot.jpg')] 
                bg-no-repeat bg-cover bg-center sm:block hidden">
            </div>

        </div>
    )
}