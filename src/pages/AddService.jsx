import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddService = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

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
      axios.post("http://localhost:5000/addService", newService).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Service added successfully!!",
            icon: "success",
          });
          e.target.reset();
          navigate("/manageService");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add a New Service
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
              required
              id="imageUrl"
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
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
