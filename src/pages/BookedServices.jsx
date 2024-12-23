import axios from "axios";
import { useEffect, useState } from "react";
import BookedServicesTable from "../components/BookedServicesTable";
import useAuth from "../hooks/useAuth";

export default function BookedServices() {
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    // Fetch services from the API
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:5000/bookings/${user?.email}`
      );
      setServices(data);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen  flex  justify-center">
      <div className=" p-8 rounded-lg  w-full max-w-7xl">
        <h1 className="text-2xl lg:text-3xl font-bold dark:text-gray-100 text-gray-800 text-center">
          My BooKed Services{" "}
          <span className="bg-purple-300 px-3 text-purple-500 text-xl rounded-full">
            {services.length}
          </span>
        </h1>
        <p className="mb-8 mt-2 text-center text-gray-600 dark:text-gray-300 mx-auto w-[700px]">
          Rapidiously initiate customer directed innovation without customer
          directed benefits. Holisticly conceptualize functional testing
          procedures whereas customer directed channels.
        </p>
        <div className="space-y-6">
          <BookedServicesTable services={services} />
        </div>
      </div>
    </div>
  );
}
