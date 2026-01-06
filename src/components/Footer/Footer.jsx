const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Left */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Zannatul Mawa. All rights reserved.
                </p>

                {/* Center */}
                <p className="text-sm">
                    Built with <span className="text-white">React</span> &{" "}
                    <span className="text-white">Tailwind CSS</span>
                </p>

                {/* Right */}
                <div className="flex gap-4 text-sm">
                    <a
                        href="https://github.com/Zannatmawa"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:your-email@gmail.com"
                        className="hover:text-white transition"
                    >
                        Email
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
