
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";

export default function Modules() {
    return (
        <div id="wd-modules" >
            <ul id="wd-modules" className="list-group rounded-0">
                <AssignmentsControls />
                <br /><br /><br />
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        {/* 40%TOTALBUTTON */}
                        <LessonControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        
                        <li className="wd-lesson list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        {/* notebookreactjs */}
                        <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML </a><br/>
                        Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
                        <b>Due </b> May 13 at 11:59 pm | 100 points
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            {/* notebookreactjs */}
                            <a className="wd-assignment-link"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            A2 - CSS + BOOTSTRAP </a>
                            <br />
                            Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br />
                            <b>Due </b> May 20 at 11:59 pm | 100 points
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            {/* notebookreactjs */}
                            <a className="wd-assignment-link"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                            A3 - JAVASCRIPT + REACT </a>
                            <br />
                            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br />
                            <b>Due </b> May 27 at 11:59 pm | 100 points
                            <LessonControlButtons />
                        </li>
                
                        
                    </ul>
                </li>
            </ul>
        </div>
    );
}



// export default function Assignments() {
//     return (
//         <div id="wd-assignments">
//             <input id="wd-search-assignment"
//                 placeholder="Search for Assignments" />
//             <button id="wd-add-assignment-group">+ Group</button>
//             <button id="wd-add-assignment">+ Assignment</button>
//             <h3 id="wd-assignments-title">
//                 ASSIGNMENTS 40% of Total <button>+</button>
//             </h3>
//             <ul id="wd-assignment-list">
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A1 - ENV + HTML
//                     </a><br/>
//                     Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br />
//                     <b>Due </b> May 13 at 11:59 pm | 100 points
//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A2 - CSS + BOOTSTRAP
//                     </a><br />
//                     Multiple Modules | <b>Not available until</b> May 13 at 12:00am |<br />
//                     <b>Due </b> May 20 at 11:59 pm | 100 points
//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A3 - JAVASCRIPT + REACT
//                     </a><br />
//                     Multiple Modules | <b>Not available until</b> May 20 at 12:00am |<br />
//                     <b>Due </b> May 27 at 11:59 pm | 100 points
//                 </li>
//             </ul>
//         </div>
//     );
// }
