import React from "react";

const ManageServices = () => {
  const services = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/800x200",
      serviceName: "Service Name 1",
      description: "Description of the service goes here.",
      price: 100,
      serviceArea: "New York",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/800x200",
      serviceName: "Service Name 2",
      description: "Description of the service goes here.",
      price: 150,
      serviceArea: "Los Angeles",
    },
    // Add more services as needed
  ];

  const handleUpdate = (id) => {
    // Handle update logic here
    console.log(`Update service with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    if (window.confirm("Are you sure you want to delete this service?")) {
      console.log(`Deleted service with ID: ${id}`);
      // Implement service deletion logic (e.g., API call to delete the service)
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className=" p-8 rounded-lg  w-full max-w-4xl">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 dark:text-gray-100 text-gray-800 text-center">
          Manage Your Services
        </h1>
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={service.imageUrl}
                alt={service.serviceName}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{service.serviceName}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <p className="text-gray-800 mt-2">
                  <strong>Price:</strong> ${service.price}
                </p>
                <p className="text-gray-800 mt-1">
                  <strong>Service Area:</strong> {service.serviceArea}
                </p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleUpdate(service.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
