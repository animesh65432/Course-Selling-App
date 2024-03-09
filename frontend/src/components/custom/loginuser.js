import axios from "axios";

export const loginuser = async (obj) => {
  try {
    let response = await axios.post("http://localhost:3000/User/login", obj);
    console.log(response);
    let token = response?.data?.token;

    return token;
  } catch (error) {
    alert("Please Sign in First ");
  }
};
