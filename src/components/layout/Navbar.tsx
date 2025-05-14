
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleMenuHover = (menu: string) => {
        setActiveMenu(menu);
    };

    const handleMenuLeave = () => {
        setActiveMenu(null);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md"}`}>
            {/* Top announcement bar */}
            <div className="wilson-gradient text-white py-2 text-center text-sm">
                <p>Nuevas clases de verano disponibles. ¡Inscríbete ahora!</p>
            </div>

            <div className="container mx-auto">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold uppercase tracking-wider">
              TUSCANIA TENNIS
            </span>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-8">
                        <div
                            className="group relative"
                            onMouseEnter={() => handleMenuHover('clases')}
                            onMouseLeave={handleMenuLeave}
                        >
                            <button className="wilson-nav-link flex items-center">
                                Clases <ChevronDown size={16} className="ml-1" />
                            </button>
                            {activeMenu === 'clases' && (
                                <div className="mega-menu">
                                    <div className="container mx-auto">
                                        <div className="grid grid-cols-4 gap-8">
                                            <div>
                                                <h3 className="font-bold text-lg mb-4 uppercase">Tenis</h3>
                                                <ul className="space-y-2">
                                                    <li><Link href="/clases/tenis-principiantes" className="hover:text-blue-600 transition-colors">Principiantes</Link></li>
                                                    <li><Link href="/clases/tenis-intermedio" className="hover:text-blue-600 transition-colors">Intermedio</Link></li>
                                                    <li><Link href="/clases/tenis-avanzado" className="hover:text-blue-600 transition-colors">Avanzado</Link></li>
                                                    <li><Link href="/clases/tenis-competitivo" className="hover:text-blue-600 transition-colors">Competitivo</Link></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-4 uppercase">Pádel</h3>
                                                <ul className="space-y-2">
                                                    <li><Link href="/clases/padel-principiantes" className="hover:text-blue-600 transition-colors">Principiantes</Link></li>
                                                    <li><Link href="/clases/padel-intermedio" className="hover:text-blue-600 transition-colors">Intermedio</Link></li>
                                                    <li><Link href="/clases/padel-avanzado" className="hover:text-blue-600 transition-colors">Avanzado</Link></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-4 uppercase">Academia Junior</h3>
                                                <ul className="space-y-2">
                                                    <li><Link href="/clases/junior-mini" className="hover:text-blue-600 transition-colors">Mini (4-6 años)</Link></li>
                                                    <li><Link href="/clases/junior-infantil" className="hover:text-blue-600 transition-colors">Infantil (7-10 años)</Link></li>
                                                    <li><Link href="/clases/junior-juvenil" className="hover:text-blue-600 transition-colors">Juvenil (11-14 años)</Link></li>
                                                    <li><Link href="/clases/junior-adolescentes" className="hover:text-blue-600 transition-colors">Adolescentes (15-17 años)</Link></li>
                                                </ul>
                                            </div>
                                            <div className="relative h-full">
                                                <div className="absolute inset-0 bg-blue-600 rounded-lg overflow-hidden">
                                                    <div className="p-6 text-white h-full flex flex-col justify-between">
                                                        <div>
                                                            <h3 className="font-bold text-xl mb-2">Clases Privadas</h3>
                                                            <p className="mb-4">Entrenamiento personalizado para mejorar tu juego</p>
                                                        </div>
                                                        <Button className="bg-white text-blue-600 hover:bg-gray-100">
                                                            Reservar Ahora
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="group relative"
                            onMouseEnter={() => handleMenuHover('instalaciones')}
                            onMouseLeave={handleMenuLeave}
                        >
                            <button className="wilson-nav-link flex items-center">
                                Instalaciones <ChevronDown size={16} className="ml-1" />
                            </button>
                            {activeMenu === 'instalaciones' && (
                                <div className="mega-menu">
                                    <div className="container mx-auto">
                                        <div className="grid grid-cols-3 gap-8">
                                            <div>
                                                <h3 className="font-bold text-lg mb-4 uppercase">Nuestras Canchas</h3>
                                                <ul className="space-y-2">
                                                    <li><Link href="/instalaciones/canchas-tenis" className="hover:text-blue-600 transition-colors">Canchas de Tenis</Link></li>
                                                    <li><Link href="/instalaciones/canchas-padel" className="hover:text-blue-600 transition-colors">Canchas de Pádel</Link></li>
                                                    <li><Link href="/instalaciones/cancha-central" className="hover:text-blue-600 transition-colors">Cancha Central</Link></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-4 uppercase">Servicios</h3>
                                                <ul className="space-y-2">
                                                    <li><Link href="/instalaciones/vestuarios" className="hover:text-blue-600 transition-colors">Vestuarios</Link></li>
                                                    <li><Link href="/instalaciones/cafeteria" className="hover:text-blue-600 transition-colors">Cafetería</Link></li>
                                                    <li><Link href="/instalaciones/tienda" className="hover:text-blue-600 transition-colors">Tienda de Deportes</Link></li>
                                                </ul>
                                            </div>
                                            <div className="relative h-full">
                                                <div className="absolute inset-0 bg-gray-900 rounded-lg overflow-hidden">
                                                    <div className="p-6 text-white h-full flex flex-col justify-between">
                                                        <div>
                                                            <h3 className="font-bold text-xl mb-2">Tour Virtual</h3>
                                                            <p className="mb-4">Conoce nuestras instalaciones desde la comodidad de tu hogar</p>
                                                        </div>
                                                        <Button className="bg-white text-gray-900 hover:bg-gray-100">
                                                            Ver Tour
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink href="/entrenadores">Entrenadores</NavLink>
                        <NavLink href="/eventos">Eventos</NavLink>
                        <NavLink href="/contacto">Contacto</NavLink>
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="p-2 hover:text-blue-600 transition-colors">
                            <Search size={20} />
                        </button>
                        <button className="p-2 hover:text-blue-600 transition-colors">
                            <User size={20} />
                        </button>
                        <Button className="wilson-button px-6 py-2 rounded-none">
                            Reservar Ahora
                        </Button>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="p-2">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg">
                    <div className="container mx-auto py-4">
                        <div className="space-y-6">
                            <div>
                                <button className="flex items-center justify-between w-full py-2 border-b border-gray-200" onClick={() => setActiveMenu(activeMenu === 'mobile-clases' ? null : 'mobile-clases')}>
                                    <span className="font-medium uppercase">Clases</span>
                                    <ChevronDown size={16} className={`transition-transform ${activeMenu === 'mobile-clases' ? 'rotate-180' : ''}`} />
                                </button>
                                {activeMenu === 'mobile-clases' && (
                                    <div className="py-3 pl-4 space-y-3">
                                        <h3 className="font-bold text-sm uppercase text-gray-500 mb-2">Tenis</h3>
                                        <MobileNavLink href="/clases/tenis-principiantes" onClick={toggleMenu}>Principiantes</MobileNavLink>
                                        <MobileNavLink href="/clases/tenis-intermedio" onClick={toggleMenu}>Intermedio</MobileNavLink>
                                        <MobileNavLink href="/clases/tenis-avanzado" onClick={toggleMenu}>Avanzado</MobileNavLink>

                                        <h3 className="font-bold text-sm uppercase text-gray-500 mt-4 mb-2">Pádel</h3>
                                        <MobileNavLink href="/clases/padel-principiantes" onClick={toggleMenu}>Principiantes</MobileNavLink>
                                        <MobileNavLink href="/clases/padel-intermedio" onClick={toggleMenu}>Intermedio</MobileNavLink>
                                        <MobileNavLink href="/clases/padel-avanzado" onClick={toggleMenu}>Avanzado</MobileNavLink>

                                        <h3 className="font-bold text-sm uppercase text-gray-500 mt-4 mb-2">Academia Junior</h3>
                                        <MobileNavLink href="/clases/junior-mini" onClick={toggleMenu}>Mini (4-6 años)</MobileNavLink>
                                        <MobileNavLink href="/clases/junior-infantil" onClick={toggleMenu}>Infantil (7-10 años)</MobileNavLink>
                                        <MobileNavLink href="/clases/junior-juvenil" onClick={toggleMenu}>Juvenil (11-14 años)</MobileNavLink>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button className="flex items-center justify-between w-full py-2 border-b border-gray-200" onClick={() => setActiveMenu(activeMenu === 'mobile-instalaciones' ? null : 'mobile-instalaciones')}>
                                    <span className="font-medium uppercase">Instalaciones</span>
                                    <ChevronDown size={16} className={`transition-transform ${activeMenu === 'mobile-instalaciones' ? 'rotate-180' : ''}`} />
                                </button>
                                {activeMenu === 'mobile-instalaciones' && (
                                    <div className="py-3 pl-4 space-y-3">
                                        <MobileNavLink href="/instalaciones/canchas-tenis" onClick={toggleMenu}>Canchas de Tenis</MobileNavLink>
                                        <MobileNavLink href="/instalaciones/canchas-padel" onClick={toggleMenu}>Canchas de Pádel</MobileNavLink>
                                        <MobileNavLink href="/instalaciones/vestuarios" onClick={toggleMenu}>Vestuarios</MobileNavLink>
                                        <MobileNavLink href="/instalaciones/cafeteria" onClick={toggleMenu}>Cafetería</MobileNavLink>
                                    </div>
                                )}
                            </div>

                            <MobileNavLink href="/entrenadores" onClick={toggleMenu}>Entrenadores</MobileNavLink>
                            <MobileNavLink href="/eventos" onClick={toggleMenu}>Eventos</MobileNavLink>
                            <MobileNavLink href="/contacto" onClick={toggleMenu}>Contacto</MobileNavLink>

                            <Button className="wilson-button w-full py-3 rounded-none">
                                Reservar Ahora
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="wilson-nav-link animated-underline">
            {children}
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link href={href} className="block py-2 hover:text-blue-600 transition-colors" onClick={onClick}>
            {children}
        </Link>
    );
}
