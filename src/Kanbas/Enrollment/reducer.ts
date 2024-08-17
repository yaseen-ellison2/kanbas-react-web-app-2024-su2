import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};
const enrollmentsSlice = createSlice({
  name: "enrollments",

  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    deleteEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId) as any;
    },

    updateEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.map((e: any) =>
        e._id === enrollment._id ? enrollment : e
      ) as any;
    },
    editEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.map((e: any) =>
        e._id === enrollmentId ? { ...e, editing: true } : e
      ) as any;
    },
  },
});
export const { addEnrollment, deleteEnrollment, updateEnrollment, editEnrollment, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;