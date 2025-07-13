import { useState } from "react";

const KnowMoreSection = () => {
    const tabs = [
        "Frequent Questions",
        "Who we are?",
        "Partner Program",
        "Help & Support",
    ];

    const questions = [
        {
            question: "How does Craveo work?",
            isPrimary: true,
            steps: [
                {
                    icon: "src/assets/images/place-order-bell.png",
                    title: "Place an Order!",
                    description: "Place order through our website or Mobile app",
                },
                {
                    icon: "src/assets/images/track-progress-logo.png",
                    title: "Track Progress",
                    description: "Your can track your order status with delivery time",
                },
                {
                    icon: "src/assets/images/get-order-mobile.png",
                    title: "Get your Order!",
                    description: "Receive your order at a lighting fast speed!",
                },
            ],
        },
        { question: "What payment methods are accepted?" },
        { question: "Can I track my order in real-time?" },
        { question: "Are there any special discounts or promotions available?" },
        { question: "Is Craveo available in my area?" },
    ];

    const [activeTab, setActiveTab] = useState("Frequent Questions");
    const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

    return (
        <section className="bg-[#f4f3f2] py-14 px-4 rounded-[10px]">
            <div className="max-w-7xl mx-auto">
                {/* Top Tabs */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#030722] mb-4 sm:mb-0">
                        Know more about us!
                    </h2>
                    <div className="flex gap-4 flex-wrap text-sm sm:text-base font-medium">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 border rounded-full text-sm transition-colors duration-300 ${activeTab === tab
                                    ? " border-orange-500 font-semibold"
                                    : "hover:text-orange-500 border-transparent font-light"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main White Card */}
                <div className="bg-white rounded-xl shadow-sm px-6 pb-10 pt-20 sm:p-10 sm:pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Question List */}
                        <div className="md:col-span-1 space-y-4">
                            {questions.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedQuestion(q)}
                                    className={`block text-center w-full text-sm font-semibold ${selectedQuestion.question === q.question
                                        ? "text-white bg-orange-500 px-4 py-4 rounded-full"
                                        : "text-[#030722] hover:text-orange-500"
                                        }`}
                                >
                                    {q.question}
                                </button>
                            ))}
                        </div>

                        {/* Step-by-step visual explanation */}
                        <div className="flex flex-col md:col-span-2 gap-4">
                            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                {selectedQuestion.steps?.map((step, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#f3f3f3] rounded-xl px-4 py-6 flex flex-col items-center"
                                    >
                                        <img
                                            src={step.icon}
                                            alt={step.title}
                                            className="w-14 h-14 object-contain mb-3"
                                        />
                                        <h4 className="font-bold text-sm text-[#030722] mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-xs text-gray-600">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Footer description */}
                            <p className="text-center px-10 text-[13px] text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                Craveo simplifies the food ordering process. Browse through our
                                diverse menu, select your favorite dishes, and proceed to checkout.
                                Your delicious meal will be on its way to your doorstep in no time!
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default KnowMoreSection;
