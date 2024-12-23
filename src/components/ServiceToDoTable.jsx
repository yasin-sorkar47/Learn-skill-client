import ServiceToDoRow from "./ServiceToDoRow";

export default function ServiceToDoTable({ services }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="dark:text-green-100">
            <th>No</th>
            <th>Service Image</th>
            <th>Service Name</th>
            <th>Special Instruction </th>
            <th> Service taking email</th>
            <th>Price</th>
            <th>Date</th>
            <th> status</th>
            <th>change status</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? (
            services.map((service, index) => (
              <ServiceToDoRow
                service={service}
                index={index}
                key={service._id}
              />
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center dark:text-gray-100">
                No Services To Do
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
