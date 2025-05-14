
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log(formData);
        alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white z-0"></div>
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 z-0"></div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">CONTÁCTANOS</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Estamos aquí para responder tus preguntas y ayudarte a comenzar
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
                            <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center mb-8">
                                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg mr-4">
                                            <Send size={24} />
                                        </div>
                                        <h3 className="text-3xl font-bold">Envíanos un mensaje</h3>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Nombre completo"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full py-6 px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-none"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Correo electrónico"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full py-6 px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-none"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                placeholder="Teléfono"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full py-6 px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-none"
                                            />
                                        </div>
                                        <div>
                                            <Textarea
                                                name="message"
                                                placeholder="Tu mensaje"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full min-h-[150px] py-4 px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-none"
                                            />
                                        </div>
                                        <Button type="submit" className="wilson-button w-full py-6 text-lg group">
                                            ENVIAR MENSAJE
                                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold mb-8 uppercase tracking-tight">Información de contacto</h3>

                        <div className="space-y-8 mb-12">
                            <ContactItem
                                icon={<MapPin size={24} className="text-blue-600" />}
                                title="Dirección"
                                content="Residencial Tuscania, Santa Tecla, El Salvador"
                            />

                            <ContactItem
                                icon={<Phone size={24} className="text-blue-600" />}
                                title="Teléfono"
                                content="+503 7890-1234"
                            />

                            <ContactItem
                                icon={<Mail size={24} className="text-blue-600" />}
                                title="Correo electrónico"
                                content="info@tuscaniatenis.com"
                            />

                            <ContactItem
                                icon={<Clock size={24} className="text-blue-600" />}
                                title="Horarios"
                                content={
                                    <ul className="space-y-2">
                                        <li className="flex justify-between">
                                            <span>Lunes - Viernes:</span>
                                            <span className="font-semibold">6:00 AM - 9:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Sábado:</span>
                                            <span className="font-semibold">7:00 AM - 7:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Domingo:</span>
                                            <span className="font-semibold">8:00 AM - 5:00 PM</span>
                                        </li>
                                    </ul>
                                }
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
                            <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
                                <div className="p-8">
                                    <h4 className="text-2xl font-bold mb-4">¿Prefieres visitarnos?</h4>
                                    <p className="text-gray-600 mb-6">Ven a conocer nuestras instalaciones y hablar directamente con nuestros entrenadores.</p>

                                    <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                                        <img
                                            src="https://images.unsplash.com/photo-1526307616774-60d0098f7642?q=80&w=2071&auto=format&fit=crop"
                                            alt="Mapa de ubicación"
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    <Button className="wilson-button w-full py-4 text-lg group">
                                        VER EN EL MAPA
                                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({
                         icon,
                         title,
                         content
                     }: {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode | string;
}) {
    return (
        <div className="flex">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                {typeof content === "string" ? (
                    <p className="text-gray-600">{content}</p>
                ) : (
                    content
                )}
            </div>
        </div>
    );
}
