import React, { useState } from 'react';

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('All');


    const projects = [
        {
            id: 1,
            name: "Blood Donation Bridge",
            category: "Full Stack Web",
            image: "/images/p1.png",
            shortDesc:
                "A full-stack platform that connects blood donors with people in need through a structured and reliable system.",
            fullDesc:
                "Blood Donation Bridge is a full-stack web application designed to simplify and manage blood donation activities. The platform enables users to register as donors, request blood, and manage donor information efficiently, ensuring quick and reliable connections during emergencies.",
            stack: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "DaisyUI",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT / Firebase Authentication",
            ],
            liveLink: "https://github.com/Zannatmawa/blood-donation-client",
            githubLink: "https://github.com/Zannatmawa/blood-donation-client",
            challenges:
                "Designing secure authentication and managing donor-request data flow while maintaining performance and scalability.",
            futurePlans:
                "Adding location-based donor matching, notification alerts, and role-based dashboards for admins and donors.",
        },
        {
            id: 2,
            name: "Import Export Platform UI",
            category: "Frontend",
            image: "/images/p2.png", // replace with your image path
            shortDesc:
                "A responsive frontend UI showcasing an import-export business platform with clean layout and navigation.",
            fullDesc:
                "This project is a static, client-side web application built to represent an import-export business platform. It focuses on modern UI design, responsive layout, and structured content presentation for products and services.",
            stack: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://import-export-app-8fcaa.web.app/",
            githubLink: "https://github.com/Zannatmawa/import-export-client",
            challenges:
                "Creating a professional and responsive layout using pure HTML and CSS while maintaining design consistency.",
            futurePlans:
                "Adding dynamic content loading, product filtering, and backend integration for real-world usage.",
        },
        {
            id: 3,
            name: "Care Nest – Care Services Website",
            category: "Frontend",
            image: "/images/p3.png", // replace with your image path
            shortDesc:
                "A service-oriented website designed to showcase caregiving services with a clean and user-friendly UI.",
            fullDesc:
                "Care Nest is a static website created to present caregiving services such as baby care, elderly care, and sick care. The project focuses on clean UI design, intuitive navigation, and a real-world service concept suitable for portfolio presentation.",
            stack: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://care-nest-dusky.vercel.app/",
            githubLink: "https://github.com/Zannatmawa/care-nest",
            challenges:
                "Structuring service content clearly while keeping the design minimal, responsive, and trustworthy.",
            futurePlans:
                "Adding an appointment booking system, CMS integration, and accessibility enhancements.",
        },
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