import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default function useAxios() {
  const { singOutUser, setLoader } = useAuth();
  const navigate = useNavigate();

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        singOutUser();
        then(() => {
          setLoader(false);
          navigate("/login");
        }).catch((error) => {
          console.log(error);
        });
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}
