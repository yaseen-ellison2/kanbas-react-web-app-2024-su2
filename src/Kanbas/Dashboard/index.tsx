import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

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


// import { Link } from "react-router-dom";
// import * as db from "../Database";

// export default function Dashboard() {
//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//             <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//             <div id="wd-dashboard-courses" className="row">
//                 <div className="row row-cols-1 row-cols-md-5 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//                         <div className="card">
//                             <a className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 href="#/Kanbas/Courses/1234/Home">
//                             <img src="/images/reactjs.webp" width="100%" />
//                             <div className = "card-body">
//                                 <h5 className="wd-dashboard-course-title card-title">
//                                     CS1234 React JS
//                                 </h5>
//                                     <p className="card-text">
//                                     Full Stack software developer
//                                 </p>
//                                     <button className="btn btn-primary"> Go </button>
//                             </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//                         <div className="card">
//                             <a className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 href="#/Kanbas/Courses/1234/Home">
//                                 <img src="/images/algo.webp" width="100%" />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS2202 Data Structures and Algorithms
//                                     </h5>
//                                     <p className="card-text">
//                                         Data Management & Algo design.
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//                         <div className="card">
//                             <a className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 href="#/Kanbas/Courses/1234/Home">
//                                 <img src="/images/supervised.png" width="100%" />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS3303 Supervised ML
//                                     </h5>
//                                     <p className="card-text">
//                                         Supervised ML Techniques
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//                         <div className="card">
//                             <a className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 href="#/Kanbas/Courses/1234/Home">
//                                 <img src="/images/opsys.png" width="100%" />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS4404 Operating Systems
//                                     </h5>
//                                     <p className="card-text">
//                                         Fundamentals of OS design and functionality.
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//                         <div className="card">
//                             <a className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 href="#/Kanbas/Courses/1234/Home">
//                                 <img src="/images/dbsys.jpg" width="100%" />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS5505 Database Systems
//                                     </h5>
//                                     <p className="card-text">
//                                         Principles of database design and SQL.
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//                         <div className="card">
//                             <a className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 href="#/Kanbas/Courses/1234/Home">
//                                 <img src="/images/compnet.png" width="100%" />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS6606 Computer Networks
//                                     </h5>
//                                     <p className="card-text">
//                                         Networking principles and protocols.
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//                         <div className="card">
//                             <a className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 href="#/Kanbas/Courses/1234/Home">
//                                 <img src="/images/unsup.jpg" width="100%" />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS7707 Unsupervised ML
//                                     </h5>
//                                     <p className="card-text">
//                                         Techniques for clustering and pattern discovery.
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
                    
//                 </div>
                
//             </div>
//         </div>
//     );
// }
