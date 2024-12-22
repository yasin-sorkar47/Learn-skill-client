import Service from "./Service";

export default function Services() {
  const services = [
    {
      id: 1,
      provider: {
        name: "Tamim",
        image: "https://via.placeholder.com/50",
        location: "Comilla",
      },
      image:
        "https://images.uniapply.com/uploads/college/image/500/3613/Young_Scholars_Academy_4222_Smartclass_UA_6.jpg",
      name: "Smart Scholars Academy",
      description:
        "Prepare for science competitions with in-depth training and practice sessions.",
      price: 6500,
    },
    {
      id: 2,
      provider: {
        name: "John Doe",
        image: "https://via.placeholder.com/50",
        location: "Dhaka",
      },
      image: "https://via.placeholder.com/300x200",
      name: "Elite Learning Hub",
      description: "Comprehensive coaching for university admission tests.",
      price: 7500,
    },
    {
      id: 3,
      provider: {
        name: "Jane Smith",
        image: "https://via.placeholder.com/50",
        location: "Chittagong",
      },
      image: "https://via.placeholder.com/300x200",
      name: "Future Bright Academy",
      description: "Prepare for competitive exams and career counseling.",
      price: 8000,
    },
    {
      id: 4,
      provider: {
        name: "Aminul Islam",
        image: "https://via.placeholder.com/50",
        location: "Sylhet",
      },
      image: "https://via.placeholder.com/300x200",
      name: "Tech Scholars Institute",
      description: "Train in programming and software development.",
      price: 9000,
    },
    {
      id: 5,
      provider: {
        name: "Maria Rahman",
        image: "https://via.placeholder.com/50",
        location: "Rajshahi",
      },
      image: "https://via.placeholder.com/300x200",
      name: "Creative Arts Academy",
      description: "Enhance your creative skills in arts and design.",
      price: 7000,
    },
    {
      id: 6,
      provider: {
        name: "Sabbir Ahmed",
        image: "https://via.placeholder.com/50",
        location: "Khulna",
      },
      image: "https://via.placeholder.com/300x200",
      name: "Math Wiz Academy",
      description: "Master math concepts and excel in competitions.",
      price: 6500,
    },
    {
      id: 7,
      provider: {
        name: "Laila Ahmed",
        image: "https://via.placeholder.com/50",
        location: "Barisal",
      },
      image: "https://via.placeholder.com/300x200",
      name: "Language Pro Institute",
      description: "Improve your language skills for competitive exams.",
      price: 7500,
    },
    {
      id: 8,
      provider: {
        name: "Rahim Uddin",
        image: "https://via.placeholder.com/50",
        location: "Mymensingh",
      },
      image: "https://via.placeholder.com/300x200",
      name: "Professional Courses Hub",
      description: "Offering technical and vocational courses.",
      price: 8000,
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl lg:text-4xl font-bold text-center  text-gray-700 mb-8">
        Popular Services
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/services")}
          className="btn btn-secondary"
        >
          Show All
        </button>
      </div>
    </div>
  );
}
