import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const UpdateService = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [service, setService] = useState({});
  const { image, name, price, serviceArea, description, _id } = service;

  useEffect(() => {
    async function fetchData() {
      const { data } = await axiosInstance.get(`/service/${id}`);
      setService(data);
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const image = formData.get("image");
    const name = formData.get("name");
    const price = formData.get("price");
    const serviceArea = formData.get("serviceArea");
    const description = formData.get("description");

    const newService = {
      image,
      name,
      price,
      serviceArea,
      description,
      provider: {
        name: user.displayName,
        image: user.photoURL,
        email: user.email,
      },
    };

    try {
      axiosInstance.put(`/updateService/${_id}`, newService).then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Good job!",
            text: "service has been updated successfully!!",
            icon: "success",
          });
          navigate("/manageService");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center my-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Update a Service
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image URL */}
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-gray-600 font-medium mb-2"
            >
              Image URL of the Service
            </label>
            <input
              type="url"
              id="imageUrl"
              defaultValue={image}
              required
              name="image"
              placeholder="Enter the image URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Service Name */}
          <div>
            <label
              htmlFor="serviceName"
              className="block text-gray-600 font-medium mb-2"
            >
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              defaultValue={name}
              required
              name="name"
              placeholder="Enter the service name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-gray-600 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              required
              name="price"
              defaultValue={price}
              placeholder="Enter the price"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Service Area */}
          <div>
            <label
              htmlFor="serviceArea"
              className="block text-gray-600 font-medium mb-2"
            >
              Service Area
            </label>
            <input
              type="text"
              id="serviceArea"
              defaultValue={serviceArea}
              required
              name="serviceArea"
              placeholder="Enter the service area"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={description}
              required
              placeholder="Enter a description"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
