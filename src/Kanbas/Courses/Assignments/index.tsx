import { BsGripVertical } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import * as db from "../../Database";
import { useParams } from "react-router";
import { useState } from "react";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import IndividualControls from "./IndividualControls";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";



export default function Assignments() {
    const { cid } = useParams();
    
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    // const handleDeleteAssignment = (assignment: any) => {
    //     const remove = window.confirm(`Delete assignment ${assignment.title}?`)
    //     if (remove) {
    //         dispatch(deleteAssignment(assignment._id));
    //     }
    // }

    return (
        <div id="wd-assignments" >
            <AssignmentsControls 
                assignmentName="A101" assignmentId="24"
             />
            <br /><br /><br />
            <ul id="wd-assignments" className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    ASSIGNMENTS
                    <AssignmentsControlButtons />
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
                            <IndividualControls
                                deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))}
                                assignmentId={assignment._id} />
                        </li> 
                ))}
            </ul>
        </div>
    );
}