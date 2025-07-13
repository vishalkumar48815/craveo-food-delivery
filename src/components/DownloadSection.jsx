import React from "react";

const DownloadSection = () => {
    return (
        <div className="relative bg-[#f7f7f7] overflow-hidden rounded-2xl pt-10 lg:h-[450px] flex flex-col items-center">
            {/* Couple Image for large screens */}
            <div className="hidden lg:block absolute left-20 bottom-0">
                <img
                    src="src/assets/images/couple.png"
                    alt="Couple using phone"
                    className="h-[400px] object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 px-6 lg:pl-[40%] lg:py-10 text-center lg:text-right">
                {/* Image for small screens */}
                <div className="lg:hidden">
                    <img
                        src="src/assets/images/couple.png"
                        alt="Couple using phone"
                        className="w-full max-w-md mx-auto"
                    />
                </div>

                {/* Text and Buttons */}
                <div className="flex flex-col flex-1 text-center justify-center">
                    <h2 className="text-2xl md:text-6xl font-bold text-[#0B0C1E]">Ordering is more
                    </h2>

                    <div className="mt-2">
                        <span className="inline-block bg-[#0B0C1E] text-white py-1.5 px-4 rounded-full text-md sm:text-lg md:text-4xl font-semibold">
                            <span className="text-orange-500">Personalised</span> & Instant
                        </span>
                    </div>

                    <p className="mt-4 text-[10px] sm:text-sm text-gray-700">
                        Download the Craveo app for faster ordering
                    </p>

                    {/* App Store Buttons */}
                    <div className="mt-4 flex items-center md:justify-center justify-start gap-3">
                        <a
                            href="https://apps.apple.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="src/assets/images/appstore.png"
                                alt="Download on App Store"
                                className="h-10"
                            />
                        </a>
                        <a
                            href="https://play.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="src/assets/images/playstore.png"
                                alt="Get it on Google Play"
                                className="h-10"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
