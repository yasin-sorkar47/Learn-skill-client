import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Service from "../components/Service";
import useAxios from "../hooks/useAxios";

export default function AllServices() {
  const [textValue, setTextValue] = useState("");
  const [services, setServices] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axiosInstance.get(`/services?search=${textValue}`);
      setServices(data);
    }
    fetchData();
  }, [textValue]);

  return (
    <div className="rounded-lg min-h-screen  w-full max-w-4xl mx-auto p-8 ">
      <Helmet>
        <title>LearnSkills | All Services</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-400">
        All Services
      </h1>
      <p className=" mt-2 mb-10 text-center max-w-[600px] mx-auto text-gray-700 dark:text-gray-400">
        Authoritatively create 2.0 innovation rather than client-centered
        resources. Appropriately synthesize user-centric infrastructures
        vis-a-vis scalable initiatives
      </p>
      <div>
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="border bg-transparent rounded-sm px-3 py-1 mb-6 dark:text-gray-100"
          placeholder="Search services"
        />
      </div>
      <div className="  rounded-lg flex flex-col space-y-8">
        {services.map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
}
