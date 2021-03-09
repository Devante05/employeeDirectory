import axios from "axios";

// random person generator api
const API = {
  getRandomSet: function () {
    return axios.get("https://randomuser.me/api/?results=40");
  }
};

export default API