import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Bot, Zap, Layers, BookOpen, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeFuturista() {
  const navigate = useNavigate();
  const [lights, setLights] = useState([]);
  const [preguntaIndex, setPreguntaIndex] = useState(0);

  // --- Partículas luminosas ---
  useEffect(() => {
    const arr = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
    }));
    setLights(arr);
  }, []);

  const preguntas = [
    {
      q: "¿Háblame sobre ti y tu experiencia en desarrollo?",
      r: "Soy un desarrollador con experiencia en backend, frontend y automatización. Me adapto rápido a entornos nuevos y disfruto resolver problemas complejos con soluciones creativas.",
    },
    {
      q: "¿Cómo manejas el trabajo bajo presión?",
      r: "Divido el problema en micro-tareas, priorizo y mantengo un flujo constante. La presión no afecta la calidad y la comunicación es clave.",
    },
    {
      q: "¿Por qué deberíamos contratarte?",
      r: "Porque combino lógica, creatividad y aprendizaje rápido. Me adapto a cualquier stack y siempre busco mejorar el flujo y la calidad del proyecto.",
    },
  ];

  const avanzar = () => setPreguntaIndex((p) => (p + 1) % preguntas.length);

  // --- Componentes internos ---
  const Card = ({ children, className }) => (
    <div className={`rounded-2xl shadow-xl ${className}`}>{children}</div>
  );

  const CardContent = ({ children, className }) => (
    <div className={`p-6 ${className}`}>{children}</div>
  );

  const Button = ({ children, className, ...props }) => (
    <button
      {...props}
      className={`bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6 py-3 transition ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden relative">
      {/* --- LUCES FLOTANTES --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {lights.map((l, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/30 blur-2xl animate-pulse"
            style={{
              left: `${l.x}%`,
              top: `${l.y}%`,
              width: `${l.size}rem`,
              height: `${l.size}rem`,
              animationDuration: `${l.duration}s`,
            }}
          />
        ))}
      </div>

      {/* --- NAVBAR --- */}
      <nav className="w-full backdrop-blur-xl bg-white/5 border-b border-cyan-400/10 sticky top-0 z-30 py-4 px-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-widest text-cyan-300 drop-shadow-lg">
          AI INTERVIEW SYS
        </h1>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#funciona" className="hover:text-cyan-300 duration-200">Cómo funciona</a>
          <a href="#preguntas" className="hover:text-cyan-300 duration-200">Preguntas IA</a>
          <a href="#beneficios" className="hover:text-cyan-300 duration-200">Beneficios</a>
          <a href="#modulos" className="hover:text-cyan-300 duration-200">Módulos</a>
          <button
            onClick={() => navigate("/login")}
            className="hover:text-cyan-300 duration-200 font-semibold"
          >
            Acceder
          </button>
        </div>
      </nav>

      {/* --- HERO PRINCIPAL --- */}
      <section className="relative pt-32 pb-40 px-10 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg"
        >
          Simulador IA de Entrevistas Futurista
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl opacity-80 max-w-3xl mx-auto"
        >
          Entrena con escenarios reales, preguntas dinámicas y análisis inteligente de tu desempeño profesional.
        </motion.p>
      </section>

      {/* --- FEATURES / BENEFICIOS --- */}
      <section className="py-20 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { icon: <Brain size={40} />, title: "IA Adaptativa", desc: "La IA ajusta el nivel de dificultad según tu desempeño." },
          { icon: <Sparkles size={40} />, title: "Modo Entrevista Real", desc: "Simulación casi humana con preguntas de nivel profesional." },
          { icon: <Layers size={40} />, title: "Reportes Pro", desc: "Analiza tus respuestas y obtén recomendaciones." },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
            <Card className="bg-white/5 backdrop-blur-xl border-cyan-700/40 shadow-xl hover:scale-[1.03] transition cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 text-cyan-400">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* --- PREGUNTAS Y RESPUESTAS --- */}
      <section id="preguntas" className="py-24 px-8 bg-gradient-to-b from-black to-blue-950/20 text-center">
        <h2 className="text-4xl font-bold mb-10 flex justify-center gap-3 items-center">
          <MessageCircle className="text-cyan-400" /> Preguntas & Respuestas IA
        </h2>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <Card className="max-w-3xl mx-auto bg-white/10 border-cyan-400/40 backdrop-blur-xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{preguntas[preguntaIndex].q}</h3>
            <p className="text-lg opacity-80 mb-8">{preguntas[preguntaIndex].r}</p>
            <Button onClick={avanzar} className="px-8 py-5 text-lg">Siguiente</Button>
          </Card>
        </motion.div>
      </section>

      {/* --- CÓMO FUNCIONA --- */}
      <section id="funciona" className="py-24 px-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-cyan-300">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <Bot size={40} />, title: "1. Generación de Preguntas", desc: "La IA crea preguntas dependiendo del rol tecnológico que deseas practicar." },
            { icon: <Zap size={40} />, title: "2. Evaluación Inteligente", desc: "Analiza tus respuestas y detecta tus puntos fuertes y débiles." },
            { icon: <BookOpen size={40} />, title: "3. Entrenamiento Continuo", desc: "Mejora tus habilidades con recomendaciones personalizadas." },
          ].map((item, i) => (
            <Card key={i} className="bg-white/5 border-blue-700/40 p-8 shadow-xl backdrop-blur-xl hover:scale-[1.02] transition">
              <CardContent>
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-70 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- MÓDULOS --- */}
      <section id="modulos" className="py-24 px-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-cyan-300">Módulos del sistema</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["Administrador", "Simulación de IA", "Reportes y Evaluaciones"].map((mod, i) => (
            <Card key={i} className="bg-white/5 border border-cyan-300/10 p-8 rounded-xl shadow-lg hover:scale-[1.03] transition">
              <CardContent>
                <h3 className="text-xl font-semibold">{mod}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}