import React from 'react';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Box, Container, TablePagination } from '@mui/material';
import { Delete, Edit, Save, Cancel } from '@mui/icons-material';
import useUserManagement from './service/useUserManagement';
import './UserManagement.css';
import { useNavigate } from 'react-router-dom';

const UserManagement = () => {
  const navigate = useNavigate();
  const {
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
  } = useUserManagement(navigate);  

  return (
    <Container>
      <Box sx={{ mb: 2, position: 'relative' }}>
        <h1>User Management</h1>
        {showAddForm && (
          <Paper elevation="11" className="add-user-form">
            <h3>Add New User</h3>
            <TextField
              name="name"
              label="Name"
              value={newUser.name}
              onChange={handleNewUserChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              value={newUser.email}
              onChange={handleNewUserChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="role"
              label="Role"
              value={newUser.role}
              onChange={handleNewUserChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="city"
              label="City"
              value={newUser.city}
              onChange={handleNewUserChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={newUser.password}
              onChange={handleNewUserChange}
              fullWidth
              margin="normal"
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddUser}
              sx={{ mt: 2 }}
            >
              Add User
            </Button>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={() => setShowAddForm(false)}
              sx={{ mt: 2, ml: 1 }}
            >
              Cancel
            </Button>
          </Paper>
        )}
      </Box>

      {(loading||users==null) ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          <TableContainer component={Paper} className="table-container">
            <Table className='table'>
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>UserId</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>
                        {editMode === user.id ? (
                          <TextField
                            value={user.name}
                            onChange={(e) => handleInputChange(e, user.id, 'name')}
                          />
                        ) : (
                          user.name
                        )}
                      </TableCell>
                      <TableCell>
                        {editMode === user.id ? (
                          <TextField
                            value={user.email}
                            onChange={(e) => handleInputChange(e, user.id, 'email')}
                          />
                        ) : (
                          user.email
                        )}
                      </TableCell>
                      <TableCell>
                        {editMode === user.id ? (
                          <TextField
                            value={user.role}
                            onChange={(e) => handleInputChange(e, user.id, 'role')}
                          />
                        ) : (
                          user.role
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {editMode === user.id ? (
                          <>
                            <IconButton color="primary" onClick={() => handleSave(user.id)}>
                              <Save />
                            </IconButton>
                            <IconButton color="secondary" onClick={handleCancel}>
                              <Cancel />
                            </IconButton>
                          </>
                        ) : (
                          <>
                            <IconButton color="primary" onClick={() => handleEdit(user.id)}>
                              <Edit />
                            </IconButton>
                            <IconButton color="error" onClick={() => handleDelete(user.id)}>
                              <Delete />
                            </IconButton>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
      
      {/* Add User and Logout Button at the Bottom Right */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowAddForm(!showAddForm)}
          sx={{ mr: 2 }}
        >
          Add User
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={Logout}
          className="logout-button"
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default UserManagement;
