import axios from 'axios';

const API_URL = 'http://localhost:5454';

export const fetchUsers = async (token) => {
  const response = await axios.get(`${API_URL}/admin/getAllUsers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.usersList;
};

export const deleteUser = async (id, token) => {
  await axios.delete(`${API_URL}/admin/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateUser = async (id, updatedUser, token) => {
  await axios.put(`${API_URL}/admin/update/${id}`, updatedUser, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addUser = async (newUser, token) => {
  const response = await axios.post(`${API_URL}/auth/register`, newUser, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.user;
};
