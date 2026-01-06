import React from 'react';

const Contact = () => {
    // Replace these with your actual details
    const contactInfo = {
        email: "zannatulmawa38@gmail.com",
        whatsapp: "+8801234567890", // Format: country code + number without '+' or spaces for the link
    };

    return (
        <section id="contact" className="bg-[#0a0f1a] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-0.5 w-12 bg-blue-600"></div>
                        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Get In Touch</span>
                    </div>
                    <h2 className="text-5xl font-extrabold leading-tight">
                        Let's Build Something <br />
                        <span className="text-blue-500">Extraordinary</span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-lg">
                        I'm currently open to junior developer roles and freelance collaborations. Drop me a message and let's discuss your next big idea.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Direct Contact Info */}
                    <div className="lg:col-span-4 space-y-4">

                        {/* Email Card */}
                        <a href={`mailto:${contactInfo.email}`} className="bg-[#111827]/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 transition-all group">
                            <div className="w-12 h-12 bg-blue-600/10 text-blue-500 flex items-center justify-center rounded-xl text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">📧</div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Address</p>
                                <p className="text-sm font-medium">{contactInfo.email}</p>
                            </div>
                        </a>



                        {/* WhatsApp Card */}
                        <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer" className="bg-[#111827]/50 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-green-500/50 transition-all group">
                            <div className="w-12 h-12 bg-green-600/10 text-green-500 flex items-center justify-center rounded-xl text-xl group-hover:bg-green-600 group-hover:text-white transition-all">💬</div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">WhatsApp</p>
                                <p className="text-sm font-medium">Start a conversation</p>
                            </div>
                        </a>

                        <div className="pt-6">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Social Presence</p>
                            <div className="flex gap-3">
                                {['github', 'linkedin', 'facebook'].map((platform) => (
                                    <div key={platform} className="w-10 h-10 bg-[#111827] border border-white/10 rounded-lg flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all cursor-pointer text-[10px] font-bold uppercase">
                                        {platform.substring(0, 2)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-8 bg-[#111827]/30 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                        <p className="text-gray-400 text-sm mb-8">Have a specific inquiry? Fill out this form.</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label text-[10px] uppercase font-bold text-gray-500">Your Name</label>
                                    <input type="text" placeholder="John Doe" className="input bg-[#0a0f1a] border-white/10 focus:border-blue-500 focus:outline-none rounded-xl h-12 w-full px-4" required />
                                </div>
                                <div className="form-control">
                                    <label className="label text-[10px] uppercase font-bold text-gray-500">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="input bg-[#0a0f1a] border-white/10 focus:border-blue-500 focus:outline-none rounded-xl h-12 w-full px-4" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label text-[10px] uppercase font-bold text-gray-500">Subject</label>
                                <input type="text" placeholder="Project Inquiry" className="input bg-[#0a0f1a] border-white/10 focus:border-blue-500 focus:outline-none rounded-xl h-12 w-full px-4" required />
                            </div>
                            <div className="form-control">
                                <label className="label text-[10px] uppercase font-bold text-gray-500">Message</label>
                                <textarea className="textarea bg-[#0a0f1a] border-white/10 focus:border-blue-500 focus:outline-none rounded-xl h-32 w-full p-4" placeholder="Tell me more about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none rounded-xl w-full md:w-auto px-10 normal-case h-14 text-lg shadow-lg shadow-blue-600/20 transition-all active:scale-95">
                                Send Message <span className="ml-2 text-xl">➤</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;