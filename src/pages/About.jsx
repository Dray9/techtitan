import { RevealOnScroll } from "../components/RevealOnScroll";
import ImageSrc from "../assets/abouticon.jpg";
export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6"
        >
            <div className="isolate bg-gray-800 px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:px-8 w-full max-w-7xl mx-auto rounded-2xl sm:rounded-3xl border border-gray-700">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8 md:gap-12">
                        {/* Left: Image */}
                        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 px-4 sm:px-0">
                            <div className="relative group">
                                <img
                                    src={ImageSrc}
                                    alt="Team Image"
                                    className="rounded-lg w-full max-w-md object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                            </div>
                        </div>
                        {/* Right: Text */}
                        <div className="md:w-1/2 max-w-3xl text-center md:text-left space-y-6 md:space-y-8 px-4 sm:px-0">
                            <div className="space-y-3 md:space-y-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                                    About Us
                                </h2>
                                <p className="text-teal-400 text-base sm:text-lg font-medium">
                                    Building the future, one line of code at a time
                                </p>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm text-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-500/50">
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    We're more than just students — we're builders and learners. Our goal is to develop solutions that are both technically strong and user-focused. Whether it's a mobile app, a web dashboard, or a database system, we aim to make tech more accessible and practical for everyday use.
                                </p>
                            </div>
                            {/* Added Stats Section */}
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                                <div className="text-center p-3 sm:p-4 bg-gray-800/30 rounded-lg">
                                    <p className="text-2xl sm:text-3xl font-bold text-teal-400">3</p>
                                    <p className="text-gray-400 text-sm sm:text-base">Projects Completed</p>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-800/30 rounded-lg">
                                    <p className="text-2xl sm:text-3xl font-bold text-teal-400">100%</p>
                                    <p className="text-gray-400 text-sm sm:text-base">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};