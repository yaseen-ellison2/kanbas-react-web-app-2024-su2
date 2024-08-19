// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   attempts: [],
// };
// const attemptsSlice = createSlice({
//   name: "attempts",

//   initialState,
//   reducers: {
//     setAttempts: (state, action) => {
//       state.attempts = action.payload;
//     },
//     addAttempt: (state, { payload: attempt }) => {
//       const newAttempt: any = {
//         _id: new Date().getTime().toString(),
//         user: attempt.user,
//         quiz: attempt.quiz,
//       };
//       state.attempts = [...state.attempts, newAttempt] as any;
//     },
//     deleteAttempt: (state, { payload: attemptId }) => {
//       state.attempts = state.attempts.filter(
//         (at: any) => at._id !== attemptId) as any;
//     },

//     updateAttempt: (state, { payload: attempt }) => {
//       state.attempts = state.attempts.map((at: any) =>
//         at._id === attempt._id ? attempt : at
//       ) as any;
//     },
//     editAttempt: (state, { payload: attemptId }) => {
//       state.attempts = state.attempts.map((at: any) =>
//         at._id === attemptId ? { ...at, editing: true } : at
//       ) as any;
//     },
//   },
// });
// export const { addAttempt, deleteAttempt, updateAttempt, editAttempt, setAttempts } =
//   attemptsSlice.actions;
// export default attemptsSlice.reducer;




// latest i did for persistance before currentAttempt
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state with clear typing
const initialState: { attempts: any[] } = {
  attempts: [],
};

const attemptsSlice = createSlice({
  name: "attempts",
  initialState,
  reducers: {
    setAttempts: (state, action) => {
      state.attempts = action.payload;
    },
    saveAttempt: (state, { payload: attempt }) => {
      const existingIndex = state.attempts.findIndex((e: any) => e._id === attempt._id);
      if (existingIndex !== -1) {
        state.attempts[existingIndex] = attempt;
      } else {
        state.attempts.push(attempt);
      }
    },
    deleteAttempt: (state, { payload: attemptId }) => {
      state.attempts = state.attempts.filter((e: any) => e._id !== attemptId);
    },
    editAttempt: (state, { payload: attemptId }) => {
      state.attempts = state.attempts.map((e: any) =>
        e._id === attemptId ? { ...e, editing: true } : e
      );
    },
  },
});

export const { saveAttempt, deleteAttempt, editAttempt, setAttempts } =
  attemptsSlice.actions;
export default attemptsSlice.reducer;


