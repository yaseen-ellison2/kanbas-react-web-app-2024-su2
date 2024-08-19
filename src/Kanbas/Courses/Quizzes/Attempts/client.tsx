// import axios from "axios";
// export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// export const USERS_API = `${REMOTE_SERVER}/api/users`;

// export const ATTEMPTS_API = `${REMOTE_SERVER}/api/attempts`;




// export const deleteAttempt = async (attemptId: string) => {
//   const response = await axios
//     .delete(`${ATTEMPTS_API}/${attemptId}`);
//   return response.data;
// };

// export const findAttemptsForUser = async (userId: string) => {
//   const response = await axios
//     .get(`${USERS_API}/${userId}/attempts`);
//   return response.data;
// };

// export const createAttempt = async (userId: string, attempt: any) => {
//   const response = await axios.post(`${USERS_API}/${userId}/attempts`, attempt);
//   return response.data;
// };

// export const updateAttempt = async (attempt: any) => {
//   const response = await axios.
//     put(`${ATTEMPTS_API}/${attempt._id}`, attempt);
//   return response.data;
// };


import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const ATTEMPTS_API = `${REMOTE_SERVER}/api/attempts`;

export const deleteAttempt = async (attemptId: string) => {
  const response = await axios.delete(`${ATTEMPTS_API}/${attemptId}`);
  return response.data;
};

export const findAttemptsForUser = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}/attempts`);
  return response.data;
};

// Combined create and update into a single function
export const saveAttempt = async (userId: string, attempt: any) => {
  if (attempt._id) {
    const response = await axios.put(`${ATTEMPTS_API}/${attempt._id}`, attempt);
    return response.data;
  } else {
    const response = await axios.post(`${USERS_API}/${userId}/attempts`, attempt);
    return response.data;
  }
};
