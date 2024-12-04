import axios from "axios";

const BASE_URL = "http://localhost:5454";
// Function to check login credentials
export const LoginData = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, { email, password })
  console.log(response.data);
  return response.data;

};

export const registerUser = async (username, email, password, city, role) => {
  try {
    const userData = {
      name: username,
      email: email,
      password: password,
      city: city,
      role: role
    };
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const AdminLoginData = async (email, password) => {
  try {
      if (email === "")
      {
          alert("Email cannot be empty");
          return false;
      }
      else if (password === "")
      {
          alert("Password cannot be empty");
          return false;
      }
  // Get the existing data from JSON Server with email and password as query parameters
  const response = await axios.get(`${BASE_URL}/users`, {
    params: {
      email: email,
      password: password,

    },
  });
  const formData = response.data;
    console.log(formData);
    
  // If data exists, return true, else return false
    if (formData.length <= 0)
    {
      return false;
    }
    else 
    {
      console.log(formData[0].role);
      if (formData[0].role === "admin")
      {
        return true;
      }
      else {
        alert("You are not admin");
        return false;
      }
      }
} catch (error) {
  console.error("Error fetching data:", error);
  throw error;
}
}