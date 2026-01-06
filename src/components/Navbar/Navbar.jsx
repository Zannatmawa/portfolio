import React from 'react';
import { Link, useLocation } from 'react-router';
import Logo from '../Logo';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-0 md:p-6">
            <div className="max-w-6xl mx-auto px-8 py-5 bg-[#0a0f1a]/60 backdrop-blur-xl border-b md:border border-white/10 md:rounded-2xl flex justify-between items-center shadow-2xl">

                {/* Branding: Typographic Logo */}
                <Logo />

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-lg ${isActive
                                    ? 'bg-blue-600/10 text-blue-400'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Action Button: Square Style */}
                <Link
                    to="/contact"
                    className="px-6 py-2.5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                >
                    Hire Me
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;