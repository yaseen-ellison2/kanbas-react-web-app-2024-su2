import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from 'react-icons/fa';
import "./styles.css";
import Grades from "./Grades";
// import { courses } from "../Database";



export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {/* && means if defined, then do */}
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <CoursesNavigation />
            <div className="wd-main-content-offset2">
                    <Routes>
                        {/* <Route path="/" element={<Navigate to="Home" />} /> */}
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Modules" element={<Modules />} />
                        <Route path="/Piazza" element={<h1>Piazza</h1>} />
                        <Route path="/Zoom" element={<h1>Zoom</h1>} />
                        <Route path="/Assignments" element={<Assignments />} />
                        <Route path="/Assignments/:id/*" element={<AssignmentEditor />} />
                        <Route path="/Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="/Grades" element={<Grades />} />
                    </Routes>
                </div>
        </div>
    );
}
