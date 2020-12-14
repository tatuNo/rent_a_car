import axios from "axios";
const baseUrl = "/api/cars";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const getOne =  async (id) => {
 const response = await axios.get(`${baseUrl}/${id}`);
 return response.data;
};

const deleteCar = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAll, create, setToken, getOne, deleteCar };
