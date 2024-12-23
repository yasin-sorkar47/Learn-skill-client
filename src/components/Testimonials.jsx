import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Web Developer",
    feedback:
      "This platform transformed my learning experience. The courses are well-structured, and the mentors are amazing!",
    image:
      "https://st3.depositphotos.com/3776273/31836/i/450/depositphotos_318367382-stock-photo-portrait-of-a-handsome-young.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Digital Marketer",
    feedback:
      "The resources provided here were instrumental in helping me land my dream job. Highly recommended!",
    image:
      "https://static.vecteezy.com/system/resources/previews/035/832/826/non_2x/ai-generated-beautiful-young-business-woman-portrait-woman-face-smiling-cute-girl-with-long-hair-studio-shot-isolated-on-gray-background-photo.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Graphics Designer",
    feedback:
      "I loved the interactive learning approach. It made understanding complex concepts much easier.",
    image:
      "https://thumbs.dreamstime.com/b/handsome-young-black-man-serious-expression-face-close-up-portrait-45080832.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="pb-16 pt-7">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            What Our Students Are Saying
          </h2>
          <p className="text-gray-600 mt-4 dark:text-gray-200">
            Hear from students who have transformed their learning journey with
            us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-300 rounded-lg shadow-lg p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="btn btn-secondary">See More...</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
