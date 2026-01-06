const Logo = () => (
    <div className="flex items-center gap-2 group cursor-pointer">
        {/* Icon part */}
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform">
            {/* Example: Initial inside a bracket */}
            <span className="text-xl">{"<Z"}</span>
        </div>

        {/* Text part */}
        {/* <span className="text-xl font-bold tracking-tight text-white">
            Dev<span className="text-blue-500">Portfolio</span>
        </span> */}
    </div>
);

export default Logo;