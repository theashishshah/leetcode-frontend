import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://leetcode-r4zq.onrender.com/api/v1"
      : "https://leetcode-r4zq.onrender.com/api/v1",
  withCredentials: true,
});
