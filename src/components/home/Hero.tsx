
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const slides = [
        {
            title: "ELEVA TU JUEGO",
            subtitle: "ACADEMIA DE TENIS Y PÁDEL",
            description: "Entrenamiento profesional para todos los niveles",
            image: "/images/tennis-court.jpg",
            isVideo: true,
            videoSrc: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1740&auto=format&fit=crop",
            cta: "RESERVA UNA CLASE",
            ctaSecondary: "CONOCE MÁS"
        },
        {
            title: "ENTRENAMIENTO PERSONALIZADO",
            subtitle: "PARA CADA NIVEL",
            description: "Desde principiantes hasta jugadores competitivos",
            image: "/images/padel-court.jpg",
            isVideo: false,
            cta: "EXPLORA PROGRAMAS",
            ctaSecondary: "VER ENTRENADORES"
        },
        {
            title: "INSTALACIONES PREMIUM",
            subtitle: "CANCHAS PROFESIONALES",
            description: "La mejor tecnología e infraestructura en El Salvador",
            image: "/images/tennis-player.jpg",
            isVideo: false,
            cta: "VISITA VIRTUAL",
            ctaSecondary: "RESERVA CANCHA"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        if (slides[currentSlide].isVideo && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Autoplay prevented:", error);
            });
        }
    }, [currentSlide]);

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background image/video slider */}
            <AnimatePresence mode="wait">
                {slides.map((slide, index) => (
                    currentSlide === index && (
                        <motion.div
                            key={`slide-${index}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {slide.isVideo ? (
                                <div className="absolute inset-0 bg-black/40 z-10"></div>
                            ) : (
                                <div className="absolute inset-0 bg-black/50 z-10"></div>
                            )}

                            {slide.isVideo ? (
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={slide.videoSrc}
                                        alt="Tennis court"
                                        className="absolute w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                ></div>
                            )}
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Content */}
            <div className="relative h-full flex items-center z-20">
                <div className="container mx-auto px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${currentSlide}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-4xl mx-auto md:ml-0 text-white"
                        >
                            <h2 className="text-xl md:text-2xl font-medium mb-2 tracking-widest">{slides[currentSlide].subtitle}</h2>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">{slides[currentSlide].title}</h1>
                            <p className="text-xl md:text-2xl mb-8 max-w-2xl">{slides[currentSlide].description}</p>
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <Button className="wilson-button px-8 py-6 text-lg rounded-none group">
                                    {slides[currentSlide].cta}
                                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-none">
                                    {slides[currentSlide].ctaSecondary}
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Dots navigation */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index ? "bg-blue-600 w-10" : "bg-white/70"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 right-10 z-20 hidden md:block">
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <span className="text-white text-sm mb-2 uppercase tracking-widest">Scroll</span>
                    <motion.div
                        className="w-0.5 h-16 bg-white/50"
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                            delay: 1.5,
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    ></motion.div>
                </motion.div>
            </div>
        </section>
    );
}
