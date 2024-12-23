import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ServiceToDoTable from "../components/ServiceToDoTable";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

export default function ServiceToDo() {
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const axiosInstance = useAxios();

  useEffect(() => {
    // Fetch services from the API
    async function fetchData() {
      const { data } = await axiosInstance.get(
        `/bookings/${user?.email}?provider=true`
      );
      setServices(data);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen  flex  justify-center">
      <Helmet>
        <title>LearnSkills | Services To Do</title>
      </Helmet>
      <div className=" p-8 rounded-lg  w-full max-w-[1500px]">
        <h1 className="text-2xl lg:text-3xl font-bold dark:text-gray-100 text-gray-800 text-center">
          Services To Do{" "}
          <span className="bg-purple-300 px-3 text-purple-500 text-xl rounded-full">
            {services.length}
          </span>
        </h1>
        <p className="mb-8 mt-2 text-center text-gray-600 dark:text-gray-300 mx-auto max-w-[700px]">
          Rapidiously initiate customer directed innovation without customer
          directed benefits. Holisticly conceptualize functional testing
          procedures whereas customer directed channels.
        </p>
        <div className="space-y-6">
          <ServiceToDoTable services={services} />
        </div>
      </div>
    </div>
  );
}
