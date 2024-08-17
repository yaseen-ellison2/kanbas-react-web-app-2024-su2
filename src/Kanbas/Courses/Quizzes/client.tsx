import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;


export const deleteQuiz = async (qid: string) => {
  const response = await axios
    .delete(`${QUIZZES_API}/${qid}`);
  return response.data;
};

export const findQuizzesForCourse = async (cid: string) => {
  const response = await axios
    .get(`${COURSES_API}/${cid}/quizzes`);
  return response.data;
};

export const createQuiz = async (cid: any, quiz: any) => {
  const response = await axios.post(`${COURSES_API}/${cid}/quizzes`, quiz);
  return response.data;
};

export const updateQuiz = async (quiz: any) => {
  const response = await axios.
    put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
};

export const publishQuiz = async (qid: string) => {
  const response = await axios.put(`${QUIZZES_API}/${qid}`, { published: "True" });
  return response.data;
};


