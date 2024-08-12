import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedContent from "../Account/ProtectedContent";

export default function Dashboard({ 
  courses, 
  course, 
  setCourse, 
  addNewCourse,
  deleteCourse, 
  updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; 
}) {

//take notes, this how to use current user in a nother jawn w an import and a const
  const {currentUser} = useSelector((state:any) => state.accountReducer);

  return (
      <div id="wd-dashboard">
      {/* below, we use <> { && etc} to render if exists, an alternate is to put a question mark, but this will show a blank parenthesis*/} 
      <h1 id="wd-dashboard-title">Dashboard {currentUser && <>({currentUser.username})</>} </h1> <hr /> 
<ProtectedContent>
  {/* protectedcontent will be moot since im protecting the route, but this how she works.  */}
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>

        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5>

      <br />
      <input value={course.name} className="form-control mb-2" 
      onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control" 
      onChange={(e) => setCourse({ ...course, description: e.target.value })} /><hr />
</ProtectedContent>


        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                      <div className="card rounded-3 overflow-hidden">
                        <img src="/images/reactjs.jpg" height="{160}" />
                        <div className="card-body">
                          <span className="wd-dashboard-course-link"
                              style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                              {course.name}
                          </span>
                          <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                              {course.description}
                          </p>

                          <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                          
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>

                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>

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