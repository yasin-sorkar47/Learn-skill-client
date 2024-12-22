import { motion } from "framer-motion";

export default function Service({ service }) {
  return (
    <motion.div
      className="border rounded-lg dark:bg-gray-300 p-4 shadow hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold text-gray-700">{service.name}</h3>
      <p className="text-gray-600 text-sm mb-4">
        {service.description.length > 100
          ? service.description.slice(0, 100) + "..."
          : service.description}
      </p>
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={service.provider.image}
          alt={service.provider.name}
          className="w-10 h-10 rounded-full"
        />
        <span className="text-gray-700">{service.provider.name}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">
          {service.price}
        </span>
        <button className="btn btn-primary btn-md">View Details</button>
      </div>
    </motion.div>
  );
}
