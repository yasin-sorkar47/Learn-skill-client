import BookServiceRow from "./BookedServiceRow";

export default function BookedServicesTable({ services }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Service Image</th>
            <th>Service Name</th>
            <th>Special Instruction </th>
            <th>Provider email</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <BookServiceRow service={service} index={index} key={service._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
