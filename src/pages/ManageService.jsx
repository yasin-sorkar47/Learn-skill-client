import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ManageServiceCard from "../components/ManageServiceCard";
import useAuth from "../hooks/useAuth";

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
      setServices(data);
    }

    fetchData();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .delete(`http://localhost:5000/deleteService/${id}`)
            .then((res) => {
              if (res.data.deletedCount) {
                const newServices = services.filter(
                  (service) => service._id !== id
                );
                setServices(newServices);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="min-h-screen  flex  justify-center">
      {services.length > 0 ? (
        <div className=" p-8 rounded-lg  w-full max-w-4xl">
          <h1 className="text-2xl lg:text-3xl font-bold dark:text-gray-100 text-gray-800 text-center">
            Manage Your Services
          </h1>
          <p className="mb-8 mt-2 text-center text-gray-600 dark:text-gray-300 mx-auto w-[700px]">
            Enthusiastically maximize virtual methodologies whereas
            backward-compatible e-services. Quickly develop principle-centered
            scenarios before next-generation action items
          </p>
          <div className="space-y-6">
            {services.map((service) => (
              <ManageServiceCard
                key={service._id}
                service={service}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
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
  );
};

export default ManageServices;
