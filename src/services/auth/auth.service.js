import axios from "axios";

const API_URL = "https://user-api-moviedb-production.up.railway.app/";

const register = (name, email, password, phone) => {
  return axios.post(API_URL + "users", {
    name,
    email,
    password,
    phone
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};