import { useParams } from "react-router";
import { courses } from "../../Database";
import "./index.css";

export default function CoursesNavigation() {

    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
    // The above will be used to swap the border to the active course, like we did the Navigation 



    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 position-fixed bottom-1 top-1 d-none d-lg-block bg-white z-2">
        {/* maybe insert ^above^: position-fixed bottom-0 top-0 d-none d-lg-block bg-black z-2 (or delete all after rounded-0)*/}
        
            <a id="wd-course-home-link" href={`#/Kanbas/Courses/${course?._id}/Home`} 
            className="list-group-item active border border-0">Home </a>

            <a id="wd-course-modules-link" href={`#/Kanbas/Courses/${course?._id}/Modules`} 
            className="list-group-item text-danger border border-0" >Modules </a>

            <a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza" 
            className="list-group-item text-danger border border-0">Piazza </a>

            <a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom" 
            className="list-group-item text-danger border border-0">Zoom </a>

            <a id="wd-course-quizzes-link" href={`#/Kanbas/Courses/${course?._id}/Assignments`} 
            className="list-group-item text-danger border border-0">Assignments </a>

            <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes" 
            className="list-group-item text-danger border border-0">Quizzes </a>
            
            <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades" 
            className="list-group-item text-danger border border-0">Grades </a>
        </div>
    );
}
