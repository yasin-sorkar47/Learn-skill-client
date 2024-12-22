import { Link } from "react-router-dom";

export default function ManageServiceCard({ service, handleDelete }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        className="w-full h-60 object-cover"
        src={service.image}
        alt={service.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{service.name}</h2>
        <p className="text-gray-600 mt-2">{service.description}</p>
        <p className="text-gray-800 mt-2">
          <strong>Price:</strong> ${service.price}
        </p>
        <p className="text-gray-800 mt-1">
          <strong>Service Area:</strong> {service.serviceArea}
        </p>
        <div className="mt-4 flex space-x-4">
          <Link
            to={`/updateService/${service._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(service._id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
