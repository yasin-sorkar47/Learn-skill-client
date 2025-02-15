import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const axiosInstance = useAxios();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axiosInstance.get(`/service/${id}`);
      setService(data);
    }
    fetchData();
  }, []);

  return (
    <div className="rounded-lg min-h-screen  w-full max-w-4xl mx-auto p-8 ">
      <Helmet>
        <title>LearnSkills | Services Details</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-400">
        Service Details
      </h1>
      <p className=" mt-2 mb-10 text-center w-[600px] mx-auto text-gray-700 dark:text-gray-400">
        Objectively disintermediate clicks-and-mortar ideas vis-a-vis
        transparent portals. Conveniently incentivize cost effective customer
        service without innovation.
      </p>
      {service && (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-[400px] object-cover"
            />

            {/* Service Details */}
            <div className="p-6">
              {/* Title and Description */}
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {service.name}
              </h1>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Price and Service Area */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h2 className="text-gray-800 font-semibold">Price</h2>
                  <p className="text-gray-700">
                    ${parseFloat(service.price).toFixed(2)}
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-800 font-semibold">Service Area</h2>
                  <p className="text-gray-700">{service.serviceArea}</p>
                </div>
              </div>

              {/* Provider Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={service.provider.image}
                  alt={service.provider.name}
                  className="w-16 h-16 rounded-full border border-gray-300"
                />
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    {service.provider.name}
                  </h3>
                </div>
              </div>

              {/* Book Now Button */}
              <Link to={`/bookNowForm/${service._id}`}>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
