import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const deleteEnrollment = async (enrollmentId: string) => {
  const response = await axios
    .delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.data;
};

export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axios
    .get(`${USERS_API}/${userId}/enrollments`);
  return response.data;
};

export const createEnrollment = async (userId: string, enrollment: any) => {
  const response = await axios.post(`${USERS_API}/${userId}/enrollments`, enrollment);
  return response.data;
};

export const updateEnrollment = async (enrollment: any) => {
  const response = await axios.
    put(`${ENROLLMENTS_API}/${enrollment._id}`, enrollment);
  return response.data;
};


