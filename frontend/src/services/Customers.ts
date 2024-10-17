import axios from "axios";

const ROOT_URL = "http://localhost:8080/api";

export const getCustomers = async () => {
  const res = await axios.get(`${ROOT_URL}/customers`);
  return res.data;
};
