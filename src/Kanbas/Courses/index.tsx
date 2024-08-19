import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from 'react-icons/fa';
import "./styles.css";
import Grades from "./Grades";
import Quizzes from "./Quizzes";
import QuizDetailsEditor from "./Quizzes/QuizDetailsEditor";
import PeopleTable from "./People/Table";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizTakingComponent from "./Quizzes/TakeQuiz";
import ViewAttempt from "./Quizzes/Attempts/ViewAttempt";



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
                        <Route path="/People" element={<PeopleTable/>} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                        <Route path="/Quizzes" element={<Quizzes />} />
                        {/* <Route path="/Quizzes/:qid/details/*" element={<h1>Quiz Details</h1>} /> */}
                        <Route path="/Quizzes/:qid/Editor" element={< QuizDetailsEditor />} />
                        <Route path="Quizzes/:qid/details" element={<QuizDetails />} />
                        <Route path="Quizzes/:qid/Form" element={<QuizTakingComponent />} />
                        <Route path="/Quizzes/:qid/Attempt" element={<ViewAttempt />} />  
                        <Route path="/Grades" element={<Grades />} />
                    </Routes>
                </div>
        </div>
    );
}
