const Footer = () => {
    return (
        <footer className="bg-[#0a0f1a] border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 font-bold text-xl text-white">
                            <div className="bg-blue-600 p-1 rounded font-mono">{"< >"}</div>
                            DevPortfolio
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Building digital experiences that matter. Full-stack developer focused on creating intuitive, performant, and accessible web applications.
                        </p>
                    </div>

                    <div className="md:ml-auto">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">Projects</li>
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">About Me</li>
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">Resume</li>
                            <li className="hover:text-blue-500 transition-colors cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    <div className="md:ml-auto">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <span>📧</span> hello@example.com
                            </div>
                            <div className="flex gap-2 pt-2">
                                {['git', 'in', 'tw'].map(p => (
                                    <div key={p} className="w-9 h-9 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600/20 transition-all cursor-pointer">
                                        {p}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
                    <p>© 2024 Developer Name. All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer