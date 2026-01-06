import React from 'react';

const Education = () => {
    return (
        <section id="education" className="bg-[#0a0f1a] text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header for the section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-12 bg-blue-600"></div>
                        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Academic Background</span>
                    </div>
                    <h2 className="text-5xl font-extrabold tracking-tight">Education</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Degree Card */}
                    <div className="bg-[#111827] p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/5 rounded-bl-full group-hover:bg-blue-600/10 transition-colors"></div>

                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-3xl">🎓</span>
                            <div>
                                <h4 className="font-bold text-xl text-white">B.Sc. in Computer Science</h4>
                                <p className="text-blue-500 text-sm">East Delta University</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Focusing on core principles of software engineering, including data structures, algorithms, and web technologies.
                        </p>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                            Graduating: 2024-2027
                        </div>
                    </div>

                    {/* Certifications/Online Learning Card */}
                    <div className="bg-[#111827] p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600/5 rounded-bl-full group-hover:bg-purple-600/10 transition-colors"></div>

                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-3xl">📜</span>
                            <div>
                                <h4 className="font-bold text-xl text-white">Full Stack Web Dev</h4>
                                <p className="text-blue-500 text-sm"> Online Course</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Completed intensive training in MERN stack development, building responsive frontends and secure REST APIs.
                        </p>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                            Completed: 2025
                        </div>
                    </div>
                </div>

                {/* Optional: Brief Note for Beginners */}
                <div className="mt-12 p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl">
                    <p className="text-sm text-gray-400 italic text-center">
                        "Dedicated to continuous learning and staying updated with the latest industry standards."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;