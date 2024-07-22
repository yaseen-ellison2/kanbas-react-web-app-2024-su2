import { LiaFilterSolid } from "react-icons/lia";
import GradesButtons from "./GradesButtons"
import { useParams } from "react-router";
import * as db from "../../Database";



export default function Grades(){

  const { cid } = useParams();
  const users = db.users;
  const enrollments = db.enrollments;
  const grades = db.grades;
  const assignments = db.assignments;


  const enrolledStudents = enrollments.filter(enrollment => enrollment.course === cid);
  
  const students = enrolledStudents.map(enrollment => {
    return users.find(user => user._id === enrollment.user);
  });

  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  return(
    // Buttons at Top
    <div id="wd-grades">
      <div className="row m-2">
        <div className="col-6 ">
        </div>
        <div className="col-6">
          <GradesButtons />
        </div>
      </div>
      
      {/* Student Name & Assignments List */}
      <div className="row m-3">
        <div className="col-6 ">
          <label><b>Student Names</b></label>
          <select className="form-select my-2">
            {students.map(student => (
              <option key={student?._id} value={`${student?.firstName} ${student?.lastName}`}>
                {student?.firstName} {student?.lastName}</option>
            ))}
            
          </select>
        </div>
        <div className="col-6">
          <label><b>Assignment Names</b></label>
          <select className="form-select my-2">
            {courseAssignments.map(assignment => (
              <option key={assignment._id} value={assignment.title}>{assignment.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Filters Button */}
      <div className="row m-3">
        <div className="col-6 left-0">
            <button id="wd-gear-btn" className="btn btn-md btn-secondary float-beginning">
              <LiaFilterSolid className="position-relative" style={{ bottom: "1px" }} />
              Apply Filters
            </button>
        </div>
      </div>

      {/* Table Top Column */}
      <div className="row mx-3 wd-bg-color-gray">
        <div className="col-3 text-left border">
          <b>Student Name</b>
      </div>
        {courseAssignments.map(assignment => (
      <div key={assignment._id} className="col text-center border">
            <b>{assignment.title}</b> <br />
        Out of {assignment.points}
      </div>
        ))}
      </div>
      
      {/* Rows for each student */}
          {students.map(student => (
          <div key={student?._id} className="row mx-3 wd-bg-color-white">
          <div className="col-3 text-left border wd-fg-color-red">
              <b>{student?.firstName} {student?.lastName}</b>
        </div>
        {courseAssignments.map(assignment => {
          const grade = grades.find(grade => grade.assignment === assignment?._id && grade.student === student?._id);
          return (
            <div key={assignment?._id} className="col text-center border">
              {grade ? `${grade.grade}%` : "N/A"}
            </div>
          );
        })}
      </div>
        ))}
    </div>
    );
}

// with 3 works, with 4 doesnt show 4th
