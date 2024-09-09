import axios from 'axios';

// Ensure that the environment variable name is correct
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) => axiosClient.post('/user-resumes', data);
const GetUserResume = (userEmail) => axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);
const UpdateResumeDetail = (id,data) => axiosClient.put('/user-resumes/'+id,data);

export default {
  CreateNewResume,
  GetUserResume,
  UpdateResumeDetail
};
