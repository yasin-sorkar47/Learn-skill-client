import { motion } from "framer-motion";
import React from "react";

const features = [
  {
    id: 1,
    title: "Expert Mentors",
    description:
      "Learn from industry professionals with years of experience in tech and education.",
    icon: "👨‍🏫",
  },
  {
    id: 2,
    title: "Hands-on Projects",
    description:
      "Build real-world projects to enhance your portfolio and practical knowledge.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Flexible Learning",
    description:
      "Access courses anytime, anywhere with self-paced and interactive learning.",
    icon: "⏰",
  },
  {
    id: 4,
    title: "Certification",
    description:
      "Earn certificates that showcase your expertise and boost your career.",
    icon: "📜",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-800 dark:text-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-200 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Discover what makes our platform unique and why learners trust us
            for their tech education.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white dark:bg-gray-300 rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.id * 0.2 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
