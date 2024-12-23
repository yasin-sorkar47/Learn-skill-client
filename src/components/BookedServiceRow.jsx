export default function BookServiceRow({ index, service }) {
  return (
    <tr>
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
        <span className={`bg-purple-200 px-2 p-1 rounded-full text-purple-500`}>
          {service.status}
        </span>
      </td>
    </tr>
  );
}
