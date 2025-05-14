
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Services() {
    const [activeService, setActiveService] = useState("tennis");

    const services = [
        {
            id: "tennis",
            title: "CLASES DE TENIS",
            description: "Nuestras clases de tenis están diseñadas para jugadores de todos los niveles, desde principiantes hasta avanzados. Nuestros entrenadores profesionales te ayudarán a mejorar tu técnica, estrategia y condición física.",
            levels: ["Principiante", "Intermedio", "Avanzado", "Competitivo"],
            image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop",
            color: "from-blue-600 to-blue-800"
        },
        {
            id: "padel",
            title: "CLASES DE PÁDEL",
            description: "El pádel es un deporte divertido y social que combina elementos del tenis y squash. Nuestras clases te enseñarán las técnicas fundamentales y estrategias avanzadas para disfrutar al máximo de este deporte.",
            levels: ["Principiante", "Intermedio", "Avanzado", "Competitivo"],
            image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop",
            color: "from-green-600 to-green-800"
        },
        {
            id: "kids",
            title: "ACADEMIA JUNIOR",
            description: "Programa especial para niños y jóvenes donde aprenderán los fundamentos del tenis y pádel de manera divertida. Desarrollamos habilidades motoras, coordinación y trabajo en equipo.",
            levels: ["Mini (4-6 años)", "Infantil (7-10 años)", "Junior (11-14 años)", "Adolescentes (15-17 años)"],
            image: "https://images.unsplash.com/photo-1560012057-4372e14c5085?q=80&w=2074&auto=format&fit=crop",
            color: "from-orange-500 to-red-600"
        },
        {
            id: "private",
            title: "CLASES PRIVADAS",
            description: "Sesiones personalizadas uno a uno con nuestros entrenadores para un progreso más rápido. Ideal para quienes buscan mejorar aspectos específicos de su juego o prepararse para torneos.",
            levels: ["Sesión individual", "Paquete de 5 sesiones", "Paquete de 10 sesiones", "Entrenamiento para torneos"],
            image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2070&auto=format&fit=crop",
            color: "from-purple-600 to-indigo-800"
        }
    ];

    const currentService = services.find(service => service.id === activeService) || services[0];

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-black/90 z-0"></div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight text-white">NUESTROS SERVICIOS</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Programas diseñados para todos los niveles y edades
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8 items-stretch">
                    {/* Service navigation */}
                    <div className="md:col-span-1">
                        <div className="flex flex-row md:flex-col gap-2 mb-8 md:mb-0 overflow-x-auto md:overflow-visible">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(service.id)}
                                    className={`whitespace-nowrap md:whitespace-normal text-left px-6 py-4 transition-all duration-300 ${
                                        activeService === service.id
                                            ? `bg-gradient-to-r ${service.color} text-white`
                                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                    <span className="text-lg font-bold">{service.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Service content */}
                    <div className="md:col-span-4">
                        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    {/* Background image */}
                                    <div className="absolute inset-0 z-0">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"
                                        ></div>
                                        <motion.div
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                                            className="w-full h-full"
                                        >
                                            <img
                                                src={currentService.image}
                                                alt={currentService.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 z-10 flex items-center">
                                        <div className="p-8 md:p-12 max-w-2xl">
                                            <motion.h3
                                                className="text-3xl md:text-5xl font-bold mb-6 text-white"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {currentService.title}
                                            </motion.h3>

                                            <motion.p
                                                className="text-lg text-gray-200 mb-8"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                            >
                                                {currentService.description}
                                            </motion.p>

                                            <motion.div
                                                className="mb-8"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <h4 className="text-xl font-semibold mb-4 text-white">Niveles disponibles:</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {currentService.levels.map((level, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded"
                                                        >
                                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentService.color} mr-3`}></div>
                                                            <span className="text-white">{level}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >
                                                <Button className={`bg-gradient-to-r ${currentService.color} hover:brightness-110 text-white px-8 py-6 text-lg rounded-none group`}>
                                                    RESERVAR CLASE
                                                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
