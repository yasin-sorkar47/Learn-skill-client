import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

export default function ServiceToDoRow({ index, service }) {
  const [status, setStatus] = useState(service.status);
  const axiosInstance = useAxios();

  useEffect(() => {
    try {
      axiosInstance.patch(`/bookings/${service._id}`, {
        status,
      });
    } catch (error) {
      console.error(error);
    }
  }, [status]);

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
      <td>{service.currentUserEmail}</td>
      <td>${service.price}</td>
      <td>{service.serviceTakingDate}</td>
      <td>
        <span
          className={`px-2 p-1 rounded-full ${
            status === "pending" ? "text-purple-500 bg-purple-200 " : ""
          } ${status === "working" ? "text-yellow-500 bg-yellow-200 " : ""}  ${
            status === "completed" ? "text-green-500 bg-green-200 " : ""
          }`}
        >
          {status}
        </span>
      </td>
      <td>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select select-bordered select-sm w-full max-w-xs"
        >
          <option value="pic an option" disabled>
            pic an option
          </option>
          <option value="pending">pending</option>
          <option value="working">working</option>
          <option value="completed">completed</option>
        </select>
      </td>
    </tr>
  );
}
