export default function BookServiceRow({ index, service }) {
  return (
    <tr className="dark:text-green-100">
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-14 w-14">
              <img src={service.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{service.name}</td>
      <td>
        {service.specialInstruction.length > 30
          ? service.specialInstruction.slice(0, 30) + "..."
          : service.specialInstruction}
      </td>
      <td>{service.providerEmail}</td>
      <td>${service.price}</td>
      <td>{service.serviceTakingDate}</td>
      <td>
        <span
          className={`px-2 p-1 rounded-full  ${
            service.status === "pending" ? "text-purple-500 bg-purple-200 " : ""
          } ${
            service.status === "working" ? "text-yellow-500 bg-yellow-200 " : ""
          }  ${
            service.status === "completed" ? "text-green-500 bg-green-200 " : ""
          }`}
        >
          {service.status}
        </span>
      </td>
    </tr>
  );
}
