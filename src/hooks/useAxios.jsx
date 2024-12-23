const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default function useAxios() {
  return axiosInstance;
}
