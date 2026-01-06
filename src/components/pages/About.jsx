import React from 'react';
import profile from '../../assets/pic (1).png'

const AboutMe = () => {
    // Updated stats for a beginner focusing on learning and contributions
    const stats = [
        { value: "05+", label: "Projects Completed", icon: "🚀" },
        { value: "500+", label: "GitHub Commits", icon: "💻" },
        { value: "100%", label: "Fast Learner", icon: "⚡" }
    ];

    const techStack = ['React', 'Node.js', 'Python', 'Firebase', 'Git', 'Tailwind CSS', 'DaisyUI'];

    return (
        <section id="about" className="min-h-screen bg-[#0a0f1a] text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-2 w-12 bg-blue-600"></div>
                        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">My Story</span>
                    </div>
                    <h1 className="text-6xl font-extrabold tracking-tight">About Me</h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side: Image & Socials */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-blue-500/20 rounded-2xl blur-2xl group-hover:bg-blue-500/40 transition-all duration-500"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="w-full object-cover aspect-4/5 grayscale-20% group-hover:grayscale-0 transition duration-500"
                                />
                            </div>
                        </div>

                        {/* Social Icons Bar */}
                        <div className="bg-[#111827]/40 border border-white/5 backdrop-blur-sm rounded-xl p-5 flex justify-center gap-10">
                            <button title="GitHub" className="hover:scale-110 text-gray-400 hover:text-blue-400 text-2xl transition-all">🐙</button>
                            <button title="LinkedIn" className="hover:scale-110 text-gray-400 hover:text-blue-400 text-2xl transition-all">🔗</button>
                            <button title="Twitter" className="hover:scale-110 text-gray-400 hover:text-blue-400 text-2xl transition-all">🐦</button>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl font-bold leading-tight mb-6">
                            Aspiring Developer Ready to <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Build & Innovate</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Based in Chittagong,Bangladesh, I am a passionate Junior Developer who recently completed an intensive journey into the world of Full Stack development. I love turning complex problems into simple, beautiful, and intuitive designs.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-[#111827]/60 border border-white/10 rounded-xl p-5 hover:border-blue-500/50 hover:bg-[#111827] transition-all duration-300 group text-center md:text-left"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-2 group-hover:scale-105 transition-transform">
                                        {stat.value}
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-2 text-[10px] text-gray-400 uppercase font-black tracking-widest">
                                        <span>{stat.icon}</span> {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 text-gray-400 leading-relaxed mb-12">
                            <p>
                                <strong className="text-white">My Journey:</strong> It all started with a "Hello World" that actually worked. Since then, I’ve spent my days (and many late nights) exploring documentation and building projects. I enjoy the process of learning something new every day and the satisfaction of finally fixing a bug that seemed impossible.
                            </p>
                            <p>
                                <strong className="text-white">What I Enjoy:</strong> I’m particularly drawn to <span className="text-blue-400">Frontend Development</span> and UI/UX design. Creating an interface that users find easy to navigate is like solving a puzzle for me. I love the logic of JavaScript and the artistic side of CSS.
                            </p>

                        </div>

                        {/* Tech Stack Chips */}
                        <div className="mb-12">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Current Toolkit</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map(tech => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-[#111827] text-blue-400 rounded-lg text-sm font-medium border border-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none px-10 rounded-xl h-14 normal-case text-lg shadow-lg shadow-blue-600/20 transition-all active:scale-95">
                                <span className="mr-2 text-xl">📥</span> Resume / CV
                            </button>
                            <button className="btn btn-outline border-white/10 hover:bg-white/5 hover:border-white/20 text-white px-10 rounded-xl h-14 normal-case text-lg transition-all active:scale-95">
                                <span className="mr-2 text-xl">✉️</span> Let's Talk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;