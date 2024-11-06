import { useState, useEffect } from 'react';
import { fetchUsers, deleteUser, updateUser, addUser } from './apiService';
import { prepareUserData } from './userUtils';

const useUserManagement = (navigate) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', city: '', password: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetchUsers(token)
      .then(usersData => {
        const preparedUsers = usersData.map(prepareUserData);
        setUsers(preparedUsers);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error!', error);
        setError('Failed to load users. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem('token');
    deleteUser(id, token)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error(`Error deleting user with id ${id}:`, error);
      });
  };

  const handleEdit = (id) => {
    setEditMode(id);
  };

  const handleSave = (id) => {
    const token = localStorage.getItem('token');
    const updatedUser = users.find((user) => user.id === id);

    updateUser(id, updatedUser, token)
      .then(() => {
        setEditMode(null);
      })
      .catch((error) => {
        console.error(`Error updating user with id ${id}:`, error);
      });
  };

  const handleCancel = () => {
    setEditMode(null);
  };

  const handleInputChange = (e, id, field) => {
    const { value } = e.target;
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, [field]: value } : user))
    );
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser =async () => {
    const token = localStorage.getItem('token');
   await addUser(newUser, token)
      .then((user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
        setShowAddForm(false);
        setTimeout(() => {
          console.log("Waited for 2 seconds");
        }, 3000)
        
      })
      .catch((error) => {
        console.error('Error adding new user:', error);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page change
  };

  const Logout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return {
    users,
    loading,
    error,
    page,
    rowsPerPage,
    editMode,
    showAddForm,
    newUser,
    handleAddUser,
    handleCancel,
    handleChangePage,
    handleChangeRowsPerPage,
    handleDelete,
    handleEdit,
    handleInputChange,
    handleNewUserChange,
    handleSave,
    setShowAddForm,
    Logout
  };
};

export default useUserManagement;
