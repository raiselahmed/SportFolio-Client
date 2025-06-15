import {
  FaRunning,
  FaDumbbell,
  FaGlobe,
  FaHandHoldingUsd,
  FaRocket,
  FaCogs,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import SpotlightCard from "../../../Reactbits/SpotlightCard/SpotlightCard";

const Benefits = () => {
  const benefits = [
    {
      title: "High-Quality Products",
      description: "Durable and reliable sports equipment for every athlete.",
      icon: <FaRunning className="text-blue-500 text-4xl" />,
    },
    {
      title: "Wide Variety",
      description: "Gear for every sport, skill level, and preference.",
      icon: <FaDumbbell className="text-green-500 text-4xl" />,
    },
    {
      title: "Expert Recommendations",
      description: "Guidance from professionals to help you excel.",
      icon: <FaGlobe className="text-purple-500 text-4xl" />,
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates with amazing deals and discounts.",
      icon: <FaHandHoldingUsd className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Performance Boosting",
      description: "Gear engineered to enhance your performance.",
      icon: <FaRocket className="text-red-500 text-4xl" />,
    },
    {
      title: "Innovative Technology",
      description: "Cutting-edge designs and materials.",
      icon: <FaCogs className="text-indigo-500 text-4xl" />,
    },
  ];

  return (
    <section className="b py-12">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Choose Us?
        </h2>
        <div className="space-x-2.5">
          <Marquee>
            {benefits.map((benefit, index) => (
              <SpotlightCard  
                className=" !border-0 !p-0 !bg-none !bg-transparent"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                key={index}
                className="bg-base-200 p-6 mx-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
              </SpotlightCard>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
