import axios from "axios";

const AuthService = {
  async auth(param) {
    let data = await axios.post("https://kino-1.onrender.com/login", param);
    return data;
  },
};

export default AuthService;
