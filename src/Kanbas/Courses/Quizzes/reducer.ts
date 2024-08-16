import { createSlice } from "@reduxjs/toolkit";
//import { quizzes } from "../../Database";


const initialState = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: "quizzes",
  
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, { payload: quiz }) => {
      //TA has this commented out.
      const newQuiz: any = {
        _id: new Date().getTime().toString(),
        title: quiz.title,
        course: quiz.course,
        description: quiz.description,
        points: quiz.points,
        due_date: quiz.due_date,
        available_date: quiz.available_date,

      };

      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (a: any) => a._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === quiz._id ? quiz : a
      ) as any;
    },
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === quizId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;