import logoDog from '../assets/dog-hand.webp'
import { useState } from 'react'
import { useEffect } from 'react'
import {useFetch} from '../hooks/useFetch';
import { ToastContainer } from 'react-toastify'
import { useNavigate, useParams } from 'react-router'
import { useForm } from 'react-hook-form'


const Reset = () => {

    const navigate = useNavigate()
    const { token } = useParams()
    const  fetchDataBackend  = useFetch()
    const [tokenback, setTokenBack] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const changePassword = async (dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/nuevopassword/${token}`
        await fetchDataBackend(url, dataForm,'POST')
        setTimeout(() => {
            if (dataForm.password === dataForm.confirmpassword) {
                navigate('/login')
            }
        }, 2000)
    }


    useEffect(() => {
        const verifyToken = async()=>{
            const url = `${import.meta.env.VITE_BACKEND_URL}/recuperarpassword/${token}`
            await fetchDataBackend(url,'GET')
            setTokenBack(true)
        }
        verifyToken()
    }, [])
    

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#1A202C] text-gray-200 font-poppins relative overflow-hidden">

            <ToastContainer />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A202C] via-[#2D3748] to-[#1A202C] opacity-95"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
            
            <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-slate-100">
                Restablecer contraseña
            </h1>
            <small className="text-slate-400 block my-4 text-sm">
                Ingresa una nueva contraseña para continuar tu experiencia.
            </small>
            <img
                className="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600 shadow-lg hover:scale-105 duration-300"
                src={logoDog}
                alt="image description"
            />

            {tokenback && (

                <form className="w-80 mt-6 text-left" onSubmit={handleSubmit(changePassword )}>

                    <div className="mb-1">

                        {/* Campo nueva contraseña */}
                        <label className="mb-2 block text-sm font-semibold text-slate-300">Nueva contraseña</label>
                        <input type="password" placeholder="Ingresa tu nueva contraseña"
                            className="block w-full rounded-md border border-gray-300 py-2 text-gray-700"
                            {...register("password", { required: "La contraseña es obligatoria" })}
                        />
                            {errors.password && <p className="text-red-800">{errors.password.message}</p>}
                        
                        
                        {/* Campo repetir contraseña */}
                        <label className="mt-4 mb-2 block text-sm font-semibold text-slate-300">Confirmar contraseña</label>
                        <input type="password" placeholder="Repite tu contraseña"
                            className="block w-full rounded-md border border-gray-300 py-2 text-gray-700"
                            {...register("confirmpassword", { required: "La contraseña es obligatoria" })}
                        />
                            {errors.confirmpassword && <p className="text-red-800">{errors.confirmpassword.message}</p>}

                    </div>

                    <div className="mb-3">
                        <button className="bg-gray-600 text-slate-300 border py-2 
                        w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 
                        hover:text-white shadow-lg">
                            Enviar
                        </button>

                    </div>
                    
                </form>
            )}
            <p className="text-xs text-slate-500 mt-6 italic">
                    Tu seguridad es el primer paso hacia tu próxima entrevista de éxito 🚀
                </p>
        </div>
        </div>
    )
}

export default Reset
