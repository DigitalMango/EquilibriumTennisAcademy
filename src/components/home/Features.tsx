
import { motion } from "framer-motion";
import { Calendar, Users, Award, Clock, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Features() {
    const features = [
        {
            icon: <Calendar className="w-12 h-12 text-blue-600" />,
            title: "RESERVAS FLEXIBLES",
            description: "Sistema de reservas en línea para que puedas programar tus clases y partidos cuando mejor te convenga.",
            link: "/reservas"
        },
        {
            icon: <Users className="w-12 h-12 text-blue-600" />,
            title: "ENTRENADORES PROFESIONALES",
            description: "Equipo de entrenadores certificados con experiencia internacional para todos los niveles.",
            link: "/entrenadores"
        },
        {
            icon: <Award className="w-12 h-12 text-blue-600" />,
            title: "CLASES PERSONALIZADAS",
            description: "Programas adaptados a tus objetivos, ya sea mejorar tu técnica o prepararte para competencias.",
            link: "/clases"
        },
        {
            icon: <Zap className="w-12 h-12 text-blue-600" />,
            title: "TECNOLOGÍA AVANZADA",
            description: "Análisis de video, medición de velocidad y estadísticas para mejorar tu rendimiento.",
            link: "/tecnologia"
        },
        {
            icon: <Target className="w-12 h-12 text-blue-600" />,
            title: "ENTRENAMIENTO ESPECÍFICO",
            description: "Programas enfocados en aspectos técnicos, tácticos, físicos y mentales del juego.",
            link: "/programas"
        },
        {
            icon: <Clock className="w-12 h-12 text-blue-600" />,
            title: "HORARIOS AMPLIOS",
            description: "Abierto desde temprano hasta la noche para adaptarnos a tu agenda y estilo de vida.",
            link: "/horarios"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="wilson-section bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="wilson-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        POR QUÉ ELEGIRNOS
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-blue-600 mx-auto my-6"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    ></motion.div>
                    <motion.p
                        className="wilson-subheading max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Ofrecemos una experiencia única para los amantes del tenis y pádel en El Salvador
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="wilson-card p-8 flex flex-col items-start"
                            variants={itemVariants}
                        >
                            <div className="mb-6 p-4 bg-blue-50 rounded-lg">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3 tracking-wide">{feature.title}</h3>
                            <p className="text-gray-600 mb-6">{feature.description}</p>
                            <div className="mt-auto">
                                <Button variant="link" className="p-0 text-blue-600 hover:text-blue-800 font-medium flex items-center group">
                                    Saber más
                                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button className="wilson-button px-8 py-3 text-lg">
                        CONOCE TODOS NUESTROS SERVICIOS
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

function ChevronRight({ className = "", ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-chevron-right ${className}`}
            {...props}
        >
            <path d="m9 18 6-6-6-6"/>
        </svg>
    );
}
