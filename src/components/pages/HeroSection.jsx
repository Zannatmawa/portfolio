import React from 'react';
import SocialLinks from './SocialLinks';
import profile from "../../assets/pic (1).png";

const Hero = () => {
    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white font-sans selection:bg-blue-500">

            {/* --- Hero Section --- */}
            <section className="max-w-7xl mx-auto px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="mt-10 badge badge-outline border-blue-500 text-blue-400 p-3 mb-6 flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        AVAILABLE FOR WORK
                    </span>
                    <h1 className="text-6xl font-extrabold mb-4 leading-tight">
                        Hello, I'm <span className="text-blue-500">Zannatul.</span>
                    </h1>
                    <p className="text-2xl font-semibold mb-6 text-gray-200">
                        Building scalable web applications & seamless user experiences.
                    </p>
                    <p className="text-gray-400 max-w-md leading-relaxed mb-8">
                        I'm a passionate Full Stack Developer based in Chittagong, Bangladesh. I specialize in React, Node.js, and modern UI design to create digital products that solve real-world problems.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="btn btn-primary bg-blue-600 border-none px-8 rounded-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download Resume
                        </button>
                        <SocialLinks />
                    </div>
                </div>

                {/* Hero Image Container */}
                <div className="relative group max-w-xs mx-auto">
                    {/* Animated Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>

                    {/* Main Image Container */}
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111827]/50 shadow-2xl">
                        <img
                            src={profile}
                            className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Floating Glassmorphic Experience Box */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transform group-hover:-translate-y-2 transition-transform duration-500">
                            {/* Glass Icon Square */}
                            <div className="bg-blue-600/20 border border-blue-500/30 p-2.5 rounded-xl text-blue-400 shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                            </div>

                            <div>
                                <p className="font-bold text-sm text-white tracking-tight">1+ Years Exp.</p>
                                <p className="text-[10px] text-blue-200/70 font-medium uppercase tracking-widest">Quality Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Overflow Element (Optional) */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-xl">🚀</span>
                    </div>
                </div>
            </section>

            {/* --- Expertise Section --- */}
            <section className="max-w-7xl mx-auto px-8 py-20">
                <h2 className="text-4xl font-bold mb-2">My Expertise</h2>
                <p className="text-gray-400 mb-12">I provide comprehensive solutions from initial concept to deployment.</p>

                <div className="grid md:grid-cols-3 gap-8">
                    <ExpertiseCard
                        title="Frontend Development"
                        description="Creating responsive, performant, and accessible user interfaces using modern frameworks."
                        tags={['React', 'Vue.js', 'Tailwind']}
                        icon="HTML"
                    />
                    <ExpertiseCard
                        title="Backend Systems"
                        description="Architecting robust server-side applications and managing database structures."
                        tags={['Node.js', 'Python', 'PostgreSQL']}
                        icon="☁️"
                    />
                    <ExpertiseCard
                        title="UI/UX Design"
                        description="Designing intuitive and aesthetically pleasing interfaces that delight users."
                        tags={['Figma', 'Adobe XD', 'Prototyping']}
                        icon="🎨"
                    />
                </div>
            </section>


        </div>
    );
};

const ExpertiseCard = ({ title, description, tags, icon }) => (
    <div className="card bg-[#111827] border border-white/10 hover:border-blue-500/50 transition-all duration-300 p-8">
        <div className="bg-blue-600/10 w-12 h-12 flex items-center justify-center rounded-lg text-blue-500 mb-6 font-bold">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-md text-xs font-medium">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export default Hero;