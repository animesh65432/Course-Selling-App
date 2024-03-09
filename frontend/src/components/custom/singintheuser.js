import axios from "axios";

export const singintheuser = async (obj) => {
  try {
    let response = await axios.post("http://localhost:3000/User", obj);
    console.log(response);
    alert("Sucefully Sign In ");
  } catch (error) {
    console(error.messge);
  }
};
