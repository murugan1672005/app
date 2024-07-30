import axios from "axios";

// Base URL for the JSON server
const BASE_URL = "http://localhost:5000";

// Function to check login credentials
export const LoginData = async (email, password) => {
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
      console.log(response);
    // If data exists, return true, else return false
    return formData.length > 0;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to add a new user
export const postData = async (username, email, password,role) => {
  try {
    // Get the existing data from JSON Server
    const response = await axios.get(`${BASE_URL}/users`);
    const formData = response.data;
    console.log(formData);

    // Check if the email already exists
    const emailExists = formData.some((item) => item.email === email);
    if (emailExists) {
      throw new Error("Email already exists");
    }

    // Determine the next ID
    const nextId = formData.length > 0 ? Math.max(...formData.map((item) => item.id)) + 1 : 1;

    // Create a new entry
    const newData = {
      id: nextId,
      username: username,
      email: email,
      password: password,
      role:role
    };

    // Post the new entry to JSON Server
    const result = await axios.post(`${BASE_URL}/users`, newData);
    console.log(result.data);
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Function to check login credentials
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