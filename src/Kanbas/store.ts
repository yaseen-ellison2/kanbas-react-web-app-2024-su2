import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import quizzesReducer from "./Courses/Quizzes/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./Enrollment/reducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    quizzesReducer,
    accountReducer,
    enrollmentReducer,
  },
});
export default store;