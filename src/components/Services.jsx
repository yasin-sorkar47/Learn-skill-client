import { Link } from "react-router-dom";
import Service from "./Service";

export default function Services({ services }) {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl lg:text-4xl font-bold text-center  text-gray-700 ">
        Popular Services
      </h2>
      <p className="mb-8 mt-2 text-center text-gray-600 dark:text-gray-300 mx-auto w-[700px]">
        Enthusiastically maximize virtual methodologies whereas
        backward-compatible e-services. Quickly develop principle-centered
        scenarios before next-generation action items
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to={"/services"} className="btn btn-secondary">
          Show All
        </Link>
      </div>
    </div>
  );
}
