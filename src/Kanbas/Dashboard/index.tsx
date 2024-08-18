import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProtectedContent from "../Account/ProtectedContent";
import { addEnrollment, setEnrollments } from "../Enrollment/reducer";
import * as client from "../Enrollment/client";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => Promise<any>;  // Update the signature to return the new course
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);

  // Fetch enrollments when the component mounts or when a course is added
  useEffect(() => {
    if (currentUser) {
      const fetchEnrollments = async () => {
        const userEnrollments = await client.findEnrollmentsForUser(currentUser._id);
        dispatch(setEnrollments(userEnrollments));
      };
      fetchEnrollments();
    }
  }, [currentUser, dispatch, courses]);  // Adding `courses` to the dependency array

  const enrolledCourses = courses.filter(course =>
    enrollments.some((enrollment: { course: any; }) => enrollment.course === course._id)
  );


  //handle enrollments after delete
  const deleteCourseWithEnrollments = async (courseId: string) => {
    // Call the original deleteCourse function
    await deleteCourse(courseId);

    // Find and delete all related enrollments. since only faculty can delete.
    // small tweak needed here  
    const relatedEnrollments = enrollments.filter(
      (enrollment: any) => enrollment.course === courseId
    );

    // Delete each related enrollment using the client.deleteEnrollment function
    for (const enrollment of relatedEnrollments) {
      await client.deleteEnrollment(enrollment._id);
    }
  };
  



  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard {currentUser && <>({currentUser.username})</>}</h1>
      <hr />

      <ProtectedContent>
        <h5>
          Edit Course / Add New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={async () => {
              const newCourse = await addNewCourse();  // Get the new course with its ID

              // Logic to add an enrollment after the course is added
              if (newCourse && newCourse._id && currentUser) {  // Ensure the course and user are available
                const enrollment = {
                  user: currentUser._id,
                  course: newCourse._id,  // Use the new course's ID
                  date: new Date().toISOString(),
                };
                try {
                  await client.createEnrollment(currentUser._id, enrollment);
                  dispatch(addEnrollment(enrollment));
                  // alert('Course Created Succesfully!');
                } catch (error) {
                  console.error("Error creating enrollment:", error);
                  alert('Failed to create enrollment.');
                }
              }
            }} >
            Add
          </button>

          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5>

        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
        />
        <hr />
      </ProtectedContent>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {enrolledCourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" height="{160}" alt={course.name} />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                    >
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <ProtectedContent>
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourseWithEnrollments(course._id);
                        }}
                        className="btn btn-danger float-end" id="wd-delete-course-click">
                        Delete
                      </button>

                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </ProtectedContent>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
