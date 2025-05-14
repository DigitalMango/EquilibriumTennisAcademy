
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900 opacity-90 z-0"></div>

            {/* Background image */}
            <div
                className="absolute inset-0 z-[-1] opacity-30"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1974&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></div>

            {/* Newsletter section */}
            <div className="relative z-10 border-b border-white/10">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <motion.h3
                                className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                ÚNETE A NUESTRA COMUNIDAD
                            </motion.h3>
                            <motion.p
                                className="text-gray-300 text-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Recibe noticias sobre torneos, eventos especiales y promociones exclusivas
                            </motion.p>
                        </div>

                        <motion.div
                            className="w-full md:w-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="px-6 py-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[300px]"
                                />
                                <Button className="wilson-button px-8 py-4 rounded-none group">
                                    SUSCRIBIRSE
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="relative z-10 pt-16 pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div>
                            <motion.h3
                                className="text-3xl font-bold mb-6 uppercase tracking-tight text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                TUSCANIA TENNIS
                            </motion.h3>
                            <motion.p
                                className="text-gray-300 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Academia de tenis y pádel de primer nivel en Residencial Tuscania, El Salvador. Ofrecemos clases para todas las edades y niveles.
                            </motion.p>
                            <motion.div
                                className="flex space-x-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
                                <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
                                <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
                            </motion.div>
                        </div>

                        <div>
                            <motion.h4
                                className="text-xl font-bold mb-6 uppercase tracking-tight text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Enlaces Rápidos
                            </motion.h4>
                            <motion.ul
                                className="space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <FooterLink href="/">Inicio</FooterLink>
                                <FooterLink href="/clases">Clases</FooterLink>
                                <FooterLink href="/instalaciones">Instalaciones</FooterLink>
                                <FooterLink href="/entrenadores">Entrenadores</FooterLink>
                                <FooterLink href="/contacto">Contacto</FooterLink>
                            </motion.ul>
                        </div>

                        <div>
                            <motion.h4
                                className="text-xl font-bold mb-6 uppercase tracking-tight text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Horarios
                            </motion.h4>
                            <motion.ul
                                className="space-y-4 text-gray-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <li className="flex justify-between">
                                    <span>Lunes - Viernes:</span>
                                    <span className="font-semibold text-white">6:00 AM - 9:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sábado:</span>
                                    <span className="font-semibold text-white">7:00 AM - 7:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Domingo:</span>
                                    <span className="font-semibold text-white">8:00 AM - 5:00 PM</span>
                                </li>
                            </motion.ul>
                        </div>

                        <div>
                            <motion.h4
                                className="text-xl font-bold mb-6 uppercase tracking-tight text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Contacto
                            </motion.h4>
                            <motion.ul
                                className="space-y-6 text-gray-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <li className="flex items-start">
                                    <MapPin size={20} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                                    <span>Residencial Tuscania, Santa Tecla, El Salvador</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone size={20} className="mr-3 text-blue-400 flex-shrink-0" />
                                    <span>+503 7890-1234</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail size={20} className="mr-3 text-blue-400 flex-shrink-0" />
                                    <span>info@tuscaniatenis.com</span>
                                </li>
                            </motion.ul>
                        </div>
                    </div>

                    <motion.div
                        className="border-t border-white/10 pt-8 text-center text-gray-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <p>&copy; {new Date().getFullYear()} Tuscania Tennis. Todos los derechos reservados.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-blue-600 transition-colors duration-300 p-3 rounded-full"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
            >
                <span className="w-0 h-0.5 bg-blue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                {children}
            </Link>
        </li>
    );
}
