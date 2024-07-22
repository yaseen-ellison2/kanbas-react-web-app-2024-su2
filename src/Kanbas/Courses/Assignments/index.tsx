import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { SlNotebook } from "react-icons/sl";
import { MdEditNote } from "react-icons/md";
import * as db from "../../Database";
import { useParams } from "react-router";


export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <div id="wd-assignments" >
            <AssignmentsControls />
            <br /><br /><br />
            <ul id="wd-assignments" className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    ASSIGNMENTS
                    <LessonControlButtons />
                </div>
                
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <SlNotebook />
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                {assignment._id} - {assignment.title} </a><br />
                            Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
                            <b>Due </b> May 13 at 11:59 pm | 100 points
                            <LessonControlButtons />
                        </li> 
                ))}
            </ul>
        </div>
    );
}

// <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">


// export default function Assignments() {
//     const { cid } = useParams();
//     const assignments = db.assignments;

//     return (
//         <div id="wd-assignments" >
//             <AssignmentsControls />
//             <br /><br /><br />
//             <ul id="wd-assignments" className="list-group rounded-0">
//                 {assignments
//                     .filter((assignment: any) => assignment.course === cid)
//                     .map((assignment: any) => (
//                         <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
//                             <div className="wd-title p-3 ps-2 bg-secondary">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 ASSIGNMENTS
//                                 <LessonControlButtons />
//                             </div>
//                             <ul className="wd-lessons list-group rounded-0">
//                                 <li className="wd-lesson list-group-item p-3 ps-1">
//                                     <BsGripVertical className="me-2 fs-3" />
//                                     <SlNotebook />
//                                     <a className="wd-assignment-link"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         {assignment._id} - {assignment.title} </a><br />
//                                     Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
//                                     <b>Due </b> May 13 at 11:59 pm | 100 points
//                                     <LessonControlButtons />
//                                 </li>
//                             </ul>
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     );
// }



// export default function Assignments() {
//     return (
//         <div id="wd-assignments" >
//             <ul id="wd-assignments" className="list-group rounded-0">
//                 <AssignmentsControls />
//                 <br /><br /><br />
//                 <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//                     <div className="wd-title p-3 ps-2 bg-secondary">
//                         <BsGripVertical className="me-2 fs-3" />
//                         ASSIGNMENTS
//                         {/* 40%TOTALBUTTON */}
//                         <LessonControlButtons />
//                     </div>
//                     <ul className="wd-lessons list-group rounded-0">
                        
//                         <li className="wd-lesson list-group-item p-3 ps-1">
//                         <BsGripVertical className="me-2 fs-3" />
//                             <SlNotebook />
//                         <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A1 - ENV + HTML </a><br/>
//                         Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
//                         <b>Due </b> May 13 at 11:59 pm | 100 points
//                             <LessonControlButtons />
//                         </li>
//                         <li className="wd-lesson list-group-item p-3 ps-1">
//                             <BsGripVertical className="me-2 fs-3" />
//                             <SlNotebook />
//                             <a className="wd-assignment-link"
//                             href="#/Kanbas/Courses/1234/Assignments/123">
//                             A2 - CSS + BOOTSTRAP </a>
//                             <br />
//                             Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br />
//                             <b>Due </b> May 20 at 11:59 pm | 100 points
//                             <LessonControlButtons />
//                         </li>
//                         <li className="wd-lesson list-group-item p-3 ps-1">
//                             <BsGripVertical className="me-2 fs-3" />
//                             <SlNotebook />
//                             <a className="wd-assignment-link"
//                             href="#/Kanbas/Courses/1234/Assignments/123">
//                              A3 - JAVASCRIPT + REACT </a>
//                             <br />
//                             Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br />
//                             <b>Due </b> May 27 at 11:59 pm | 100 points
//                             <LessonControlButtons />
//                         </li>
                
                        
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }
