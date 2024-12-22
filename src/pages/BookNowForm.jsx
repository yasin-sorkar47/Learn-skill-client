import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const BookNowForm = () => {
  const [serviceTakingDate, setServiceTakingDate] = useState("");
  const [specialInstruction, setSpecialInstruction] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService] = useState({});
  const { image, name, price, _id, provider } = service;

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:5000/service/${id}`);
      setService(data);
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ serviceTakingDate, specialInstruction });
  };

  return (
    <div className="min-h-screen my-10 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Service Purchase Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service ID (Not Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Service ID
            </label>
            <input
              type="text"
              defaultValue={_id}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Service Name (Not Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Service Name
            </label>
            <input
              type="text"
              defaultValue={name}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Service Image (Not Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Service Image
            </label>
            <input
              type="text"
              defaultValue={image}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Provider Email (Not Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Provider Email
            </label>
            <input
              type="email"
              defaultValue={provider?.email}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Provider Name (Not Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Provider Name
            </label>
            <input
              type="text"
              defaultValue={provider?.name}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Current User Email (Not Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Current User Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Current User Name (Not Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Current User Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Service Taking Date (Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Service Taking Date
            </label>
            <input
              type="date"
              value={serviceTakingDate}
              onChange={(e) => setServiceTakingDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Special Instruction (Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Special Instruction
            </label>
            <textarea
              value={specialInstruction}
              onChange={(e) => setSpecialInstruction(e.target.value)}
              placeholder="Enter any special instructions, address, or customized service plan"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Price (Not Editable) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Price
            </label>
            <input
              type="text"
              defaultValue={price}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Purchase Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
