import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { SlNotebook } from "react-icons/sl";
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
                                href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
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