import React, { useState } from 'react';

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('All');

    const projects = [
        {
            id: 1,
            name: "EcoShop E-commerce",
            category: "Web",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
            shortDesc: "A full-featured digital storefront with real-time cart management.",
            fullDesc: "EcoShop is a high-performance e-commerce platform designed for modern retailers. It features a seamless checkout flow, persistent cart logic, and integrated payment processing.",
            stack: ["React", "Tailwind CSS", "Firebase", "Stripe API"],
            liveLink: "https://ecoshop-demo.netlify.app",
            githubLink: "https://github.com/user/ecoshop-client",
            challenges: "Managing complex state across the application for the shopping cart while ensuring fast page transitions and SEO optimization.",
            futurePlans: "Integrating a recommendation engine based on user browsing history and adding multi-language support."
        },
        {
            id: 2,
            name: "TaskMaster Pro",
            category: "Web",
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
            shortDesc: "Productivity tool for tracking sprints and team task distribution.",
            fullDesc: "A collaborative task management application that allows teams to organize projects into boards, assign tasks, and track deadlines using an intuitive drag-and-drop interface.",
            stack: ["React", "Node.js", "MongoDB", "Framer Motion"],
            liveLink: "https://taskmaster-pro.vercel.app",
            githubLink: "https://github.com/user/taskmaster-client",
            challenges: "Implementing a smooth drag-and-drop experience that stays synchronized with the database in real-time.",
            futurePlans: "Adding automated email notifications for approaching deadlines and a dark mode toggle for better accessibility."
        },
        {
            id: 3,
            name: "WeatherWave App",
            category: "Mobile",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop",
            shortDesc: "Clean and minimal weather forecasting app using live API data.",
            fullDesc: "A sleek, mobile-responsive weather application that provides accurate local forecasts, hourly updates, and 7-day outlooks using the OpenWeather API.",
            stack: ["React", "OpenWeather API", "DaisyUI", "Vite"],
            liveLink: "https://weatherwave-live.web.app",
            githubLink: "https://github.com/user/weather-client",
            challenges: "Handling asynchronous API calls gracefully while managing edge cases like user location permission denials.",
            futurePlans: "Adding interactive weather maps using Leaflet.js and implementing custom alerts for extreme weather conditions."
        }
    ];

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section id="projects" className="bg-[#0a0f1a] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-[2px] w-12 bg-blue-600"></div>
                            <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">My Portfolio</span>
                        </div>
                        <h2 className="text-5xl font-extrabold mb-4">Featured Projects</h2>
                        <p className="text-gray-400">A showcase of the applications I've built from scratch.</p>
                    </div>

                    {/* Functional Tabs */}
                    <div className="flex gap-2 bg-[#111827] p-1 rounded-xl border border-white/5">
                        {['All', 'Web', 'Mobile'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-[#111827]/50 border border-white/5 rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full">
                            <div className="aspect-video overflow-hidden relative">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-blue-400 text-[10px] font-bold uppercase rounded-full border border-white/10">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">{project.shortDesc}</p>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none w-full rounded-xl normal-case font-bold group"
                                    >
                                        View More Details
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detailed Project Modal */}
            {selectedProject && (
                <div className="modal modal-open">
                    <div className="modal-box bg-[#0d121f] border border-white/10 max-w-4xl p-0 overflow-hidden shadow-2xl">
                        <div className="h-72 relative">
                            <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] to-transparent"></div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="btn btn-circle btn-sm absolute top-4 right-4 bg-black/50 border-none text-white hover:bg-red-500"
                            >✕</button>
                        </div>

                        <div className="p-8 -mt-12 relative z-10">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                                <div>
                                    <h3 className="text-4xl font-black mb-2">{selectedProject.name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.stack.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/20">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-md rounded-xl normal-case shadow-lg shadow-blue-600/20">Live Project 🔗</a>
                                    <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="btn btn-outline border-white/10 text-white hover:bg-white/5 rounded-xl normal-case">Client Repo</a>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-12 gap-10">
                                <div className="md:col-span-7 space-y-8">
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span> Description
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed text-sm">{selectedProject.fullDesc}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span> Challenges Faced
                                        </h4>
                                        <div className="p-4 bg-orange-500/5 border border-orange-500/10 rounded-xl">
                                            <p className="text-gray-400 text-sm italic">"{selectedProject.challenges}"</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-5">
                                    <div className="bg-[#111827] border border-white/5 p-6 rounded-2xl h-full">
                                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-green-500 rounded-full"></span> Future Plans
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{selectedProject.futurePlans}</p>
                                        <div className="pt-6 border-t border-white/5">
                                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Status</p>
                                            <span className="text-green-500 text-xs font-bold">● Active / Phase 1 Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop bg-black/60 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;