
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Carlos Mendoza",
            role: "Estudiante de tenis - 2 años",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
            content: "Desde que comencé a entrenar en Tuscania Tennis, mi juego ha mejorado enormemente. Los entrenadores son excelentes y las instalaciones son de primera categoría. Recomiendo totalmente esta academia.",
            rating: 5
        },
        {
            id: 2,
            name: "María Fernández",
            role: "Madre de estudiante junior",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            content: "Mi hijo ha estado en la academia junior por un año y la transformación ha sido increíble. No solo ha mejorado su técnica, sino también su confianza y disciplina. El ambiente es muy seguro y profesional.",
            rating: 5
        },
        {
            id: 3,
            name: "Roberto Guzmán",
            role: "Jugador de pádel - Nivel intermedio",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
            content: "Las clases de pádel son dinámicas y divertidas. He aprendido mucho en poco tiempo y he conocido a personas increíbles. Las canchas están siempre en perfectas condiciones.",
            rating: 4
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setIsAutoPlaying(false);
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIsAutoPlaying(false);
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (index: number) => {
        setIsAutoPlaying(false);
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-100 z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] z-0 opacity-50"></div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">TESTIMONIOS</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experiencias de quienes ya forman parte de nuestra comunidad
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="absolute -top-20 -left-20 text-blue-200 opacity-20 z-0">
                        <Quote size={200} />
                    </div>

                    <div className="relative z-10">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="w-full"
                            >
                                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                                    <div className="relative">
                                        <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full opacity-10 animate-pulse"></div>
                                        <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={24}
                                                    className={i < testimonials[currentIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>

                                        <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic mb-8 leading-relaxed">
                                            "{testimonials[currentIndex].content}"
                                        </blockquote>

                                        <div>
                                            <h4 className="text-2xl font-bold">{testimonials[currentIndex].name}</h4>
                                            <p className="text-gray-600 text-lg">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-between items-center mt-12">
                        <button
                            onClick={prevTestimonial}
                            className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors group"
                            aria-label="Testimonio anterior"
                        >
                            <ChevronLeft size={24} className="text-blue-600 group-hover:-translate-x-1 transition-transform" />
                        </button>

                        <div className="flex space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`transition-all duration-300 ${
                                        currentIndex === index
                                            ? "w-12 h-3 bg-blue-600"
                                            : "w-3 h-3 bg-gray-300 hover:bg-blue-400"
                                    } rounded-full`}
                                    aria-label={`Ir al testimonio ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors group"
                            aria-label="Testimonio siguiente"
                        >
                            <ChevronRight size={24} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
