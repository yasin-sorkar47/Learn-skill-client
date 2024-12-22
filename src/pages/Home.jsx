import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
  const services = useLoaderData();

  return (
    <div className="space-y-8">
      <Banner />
      <Services services={services} />
      <div className="w-11/12 mx-auto space-y-8">
        <WhyChooseUs />
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;
