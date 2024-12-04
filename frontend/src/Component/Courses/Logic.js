import axios from 'axios';


const token = localStorage.getItem('token');

 export const fetchProfile = async () => {
  try {
    const response = await axios.get('http://localhost:5454/adminuser/get-profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (err) {
    console.error('Failed to fetch profile:', err);
    throw err;
  }
};
export const enrollUser = async (userId, courseId) => {
  try {
    const response = await axios.post(
      `http://localhost:5454/users/enroll/courses?userId=${userId}&courseId=${courseId}`,
      null, // No request body
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    );

    console.log('Enrollment successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error enrolling in course:', error);
  }
};
