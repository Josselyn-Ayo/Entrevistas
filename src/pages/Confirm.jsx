import logoDog from '../assets/dog-hand.webp'
import {Link} from 'react-router'
import {useParams} from 'react-router'
import { useEffect } from 'react'
import { ToastContainer} from 'react-toastify'
import { useFetch } from '../hooks/useFetch'

export const Confirm = () => {

    const fetchDataBackend = useFetch()
    const { token } = useParams()
    
    const verifyToken = async()=>{
        const url = `${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`
        await fetchDataBackend(url)
    }

    useEffect(() => {
        verifyToken()
    },[])


    return (
        
        <div className="flex flex-col items-center justify-center h-screen bg-[#1A202C] text-gray-200 font-poppins relative overflow-hidden">
            
            <ToastContainer/>
            <div className="absolute insert-0 bg-gradient-to-br from-[#1A202C] via-[#2D3748] to-[#1A202C] opacity-90"></div>
            <div className='relative z-10 flex flex-col items-center justify-center'>
            <img className="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600 shadow-lg hover:scale-105 duration-300"
             src={logoDog} alt="image description"/>

            <div className="flex flex-col items-center justify-center mt-8">
                <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-100">Cuenta confirmada exitosamente</p>
                <p className="md:text-lg lg:text-xl text-slate-300 mt-4 max-w-md leading-relaxed">Tu cuenta ya está activa en el sistema de simulación de entrevistas con IA.  
                        Prepárate para mejorar tus habilidades y brillar como desarrollador</p>
                <Link to="/login" className="p-3 m-6 w-48 text-center bg-gray-600 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white shadow-md">Login</Link>
            </div>


        </div>
        </div>
    )
}