const ResumeButton = () => {
    return (
        <div className="mt-6">
            <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-lg shadow-lg font-medium"
            >
                📄 Download Resume
            </a>
        </div>
    );
};

export default ResumeButton;
