import axios from "axios";

export const loginuser = async (obj) => {
  try {
    let response = await axios.post("http://localhost:3000/User/login", obj);
    console.log(response);
  } catch (error) {
    alert("Please LogIn ");
  }
};
