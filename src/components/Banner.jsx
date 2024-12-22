import { motion } from "framer-motion";
import bannerImage from "../assets/banner.jpg";

export default function Banner() {
  return (
    <>
      {/* Banner Section */}
      <motion.div
        className="relative h-96 lg:h-[500px] bg-cover  bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div>
            <h1 className="text-gray-100 text-4xl lg:text-5xl font-bold text-center">
              Start Your Learning Journey Now
            </h1>
            <p className="max-w-[600px] text-center mx-auto mt-3 text-gray-300">
              Intrinsicly coordinate cross-platform data whereas market-driven
              intellectual capital. Professionally incubate excellent methods of
              empowerment for resource sucking platforms. Phosfluorescently{" "}
            </p>
            <div className="text-center mt-3">
              <button className="btn btn-primary btn-md">
                Explore our course
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
