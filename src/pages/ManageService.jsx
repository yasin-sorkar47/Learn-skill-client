import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ManageServiceCard from "./ManageServiceCard";

const ManageServices = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from the API
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:5000/services/${user.email}`
      );
      console.log(data);
      setServices(data);
    }

    fetchData();
  }, []);

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
          {services.length > 0 ? (
            services.map((service) => (
              <ManageServiceCard
                key={service._id}
                service={service}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))
          ) : (
            <div className="text-center text-gray-800 dark:text-gray-100">
              <p>You have not added any services yet.</p>
              <p>Click the button below to add a new service.</p>
              <button
                className="btn btn-primary btn-md mt-4"
                onClick={() => navigate("/addService")}
              >
                Add Service
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
