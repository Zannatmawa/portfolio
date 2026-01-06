import React, { useState } from 'react';

const Skills = () => {
    // 1. State for handling filtering
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Frontend', 'Backend', 'Tools & DevOps'];

    const skillData = [
        // Frontend
        { name: 'HTML5 & CSS3', level: 95, cat: 'Frontend' },
        { name: 'JavaScript (ES6+)', level: 90, cat: 'Frontend' },
        { name: 'React.js', level: 85, cat: 'Frontend' },
        { name: 'Tailwind CSS', level: 95, cat: 'Frontend' },
        // Backend
        { name: 'Node.js', level: 75, cat: 'Backend' },
        { name: 'Express.js', level: 80, cat: 'Backend' },
        { name: 'MongoDB', level: 70, cat: 'Backend' },
        { name: 'Firebase', level: 85, cat: 'Backend' },
        // Tools
        { name: 'Git & GitHub', level: 90, cat: 'Tools & DevOps' },
        { name: 'VS Code', level: 95, cat: 'Tools & DevOps' },
        { name: 'Netlify / Vercel', level: 85, cat: 'Tools & DevOps' },
        { name: 'Figma', level: 65, cat: 'Tools & DevOps' },
    ];

    // 2. Logic to filter displayed cards
    const filteredCategories = activeTab === 'All'
        ? ['Frontend', 'Backend', 'Tools & DevOps']
        : [activeTab];

    return (
        <section id="skills" className="bg-[#0a0f1a] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Technical Proficiency</h2>
                <p className="text-gray-400 max-w-2xl mx-auto italic">
                    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
                </p>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`btn btn-sm rounded-full px-6 normal-case transition-all duration-300 ${activeTab === cat
                                ? 'btn-primary shadow-lg shadow-blue-600/20'
                                : 'bg-[#111827] border border-white/5 text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Graphical Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredCategories.map((group) => (
                    <div
                        key={group}
                        className="bg-[#111827] border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-colors duration-500 group"
                    >
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <span className="p-2 bg-blue-600/10 text-blue-500 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {group === 'Frontend' ? '🎨' : group === 'Backend' ? '⚙️' : '🛠️'}
                            </span>
                            {group}
                        </h3>
                        <div className="space-y-6">
                            {skillData
                                .filter(s => s.cat === group)
                                .map(skill => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-blue-500">{skill.level}%</span>
                                        </div>
                                        {/* Progress Bar Graphic */}
                                        <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Learning Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-blue-900/20">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">✦ Currently Deep-Diving</h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                            Currently exploring the MERN stack in depth and experimenting with Next.js Server Components to build SEO-friendly applications.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Next.js 14', 'Redux Toolkit', 'TypeScript'].map(t => (
                            <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-semibold">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Resume Card */}
                <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center justify-center group hover:bg-[#151c2c] transition-all">
                    <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">📄</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Detailed Resume</h3>
                    <p className="text-gray-400 text-sm mb-6">
                        Looking for more details? Grab the PDF version of my technical profile.
                    </p>
                    <a
                        href="/your-resume.pdf"
                        download
                        className="btn btn-primary btn-outline border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white rounded-xl px-8"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skills;