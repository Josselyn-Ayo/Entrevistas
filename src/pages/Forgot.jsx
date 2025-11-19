import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch";

export const Forgot = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const fetchDataBackend = useFetch();

  const sendMail = async (dataForm) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/recuperarpassword`;
    await fetchDataBackend(url, dataForm, "POST");
  };

  return (
    <div className="relative w-full h-screen font-poppins overflow-hidden 
      bg-gradient-to-br from-gray-900 via-gray-800 to-black">

      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mt-20 w-full max-w-5xl p-10 rounded-3xl 
        bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center gap-10"
      >

        {/* GIF + glow azul más suave y robot más pequeño */}
        <div className="w-1/2 flex justify-center items-center relative">

          {/* Glow azul más pequeño + menos brillo */}
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full 
            bg-indigo-500 blur-[100px] opacity-25"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Robot más pequeño y más elegante */}
          <motion.img
            src="/images/Robot1.gif"
            alt="Robot"
            className="w-[450px] h-[450px] md:w-[480px] md:h-[480px]
            drop-shadow-[0_0_35px_rgba(99,102,241,0.45)]
            relative z-10 rounded-xl"
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          />
        </div>

        {/* FORMULARIO */}
        <div className="w-1/2">
          <h1 className="text-4xl font-extrabold text-white mb-4 text-center tracking-wide drop-shadow-lg">
            Recuperar Contraseña
          </h1>

          <p className="text-gray-300 text-sm mb-10 text-center max-w-md mx-auto leading-relaxed">
            Ingresa tu correo electrónico y recibirás un enlace para restablecer tu contraseña.
          </p>

          <form onSubmit={handleSubmit(sendMail)} className="space-y-7">

            {/* CAMPO CORREO */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-200">
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full px-5 py-3 rounded-xl bg-black/30 border border-gray-700 
                text-gray-200 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 
                shadow-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.35)]
                hover:scale-[1.02] transition-all duration-300"
                {...register("email", {
                  required: "El correo electrónico es obligatorio",
                })}
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* BOTÓN */}
            <button
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 
              hover:from-indigo-500 hover:to-indigo-600
              text-white font-semibold rounded-xl shadow-xl
              hover:shadow-[0_0_25px_rgba(99,102,241,0.55)]
              hover:scale-[1.04] transition-all duration-300"
            >
              Enviar enlace
            </button>
          </form>

          {/* VOLVER */}
          <div className="mt-6 text-center text-gray-300 text-sm">
            <Link
              to="/login"
              className="underline hover:text-indigo-400 font-semibold transition-colors"
            >
              Volver al inicio de sesión
            </Link>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Forgot;


