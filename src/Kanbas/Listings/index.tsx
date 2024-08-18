
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createEnrollment, deleteEnrollment } from "../Enrollment/client";  // Importing the deleteEnrollment function

export default function Listings({ courses }: { courses: any[]; }) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("");
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);

  useEffect(() => {
    const filtered = courses.filter(course =>
      course.name.includes(searchTerm) &&
      (department === "" || course.department === department)
    );
    setFilteredCourses(filtered);
  }, [searchTerm, department, courses]);

  const handleRegister = async (courseId: string) => {
    if (currentUser) {
      const enrollment = {
        course: courseId,
        user: currentUser._id,
        date: new Date().toISOString()
      };
      try {
        await createEnrollment(currentUser._id, enrollment);
        alert('Enrollment successful!');
      } catch (error) {
        console.error("Enrollment failed", error);
        alert('Enrollment failed. Please try again.');
      }
    } else {
      alert('You must be logged in to register.');
    }
  };

  const handleUnenroll = async (enrollmentId: string) => {
    try {
      await deleteEnrollment(enrollmentId);
      alert('Unenrollment successful!');
    } catch (error) {
      console.error("Unenrollment failed", error);
      alert('Unenrollment failed. Please try again.');
    }
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some((enrollment: { course: any; }) => enrollment.course === courseId);
  };

  const getEnrollmentId = (courseId: string) => {
    const enrollment = enrollments.find((enrollment: { course: any; }) => enrollment.course === courseId);
    return enrollment ? enrollment._id : null;
  };

  return (
    <div>
      <h1 id="wd-dashboard-title">Welcome {currentUser && <>{currentUser.username}</>}!  Available Courses </h1>
      <hr />
      {filteredCourses.length} Courses Available.

      <div id="wd-courses-table">

        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Courses"
          className="form-control float-start w-25 me-2 wd-filter-by-name"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="form-select float-start w-25 wd-select-department"
        >
          <option value="">All Departments</option>
          {Array.from(new Set(courses.map(course => course.department)))
            .map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
        </select>
        <br /><br />

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Credits</th>
              <th>Department</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Registration</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.number}</td>
                <td>{course.credits}</td>
                <td>{course.department}</td>
                <td>{course.description}</td>
                <td>{course.startDate}</td>
                <td>{course.endDate}</td>
                <td>
                  {isEnrolled(course._id) ? (
                    <button
                      onClick={() => handleUnenroll(getEnrollmentId(course._id))}
                      className="btn btn-danger"
                    >
                      Unregister
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRegister(course._id)}
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
