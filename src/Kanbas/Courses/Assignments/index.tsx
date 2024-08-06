import { BsGripVertical } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
// import * as db from "../../Database";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import IndividualControls from "./IndividualControls";
import { deleteAssignment, setAssignments }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";




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

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

    const removeAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

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
                            Multiple Modules | <b>Not available until</b> {new Date(assignment.available_date).toLocaleDateString("en-US", {
                                year: 'numeric', month: 'long', day: 'numeric'
                            })} | <br />
                            <b>Due </b> {new Date(assignment.due_date).toLocaleDateString("en-US", {
                                year: 'numeric', month: 'long', day: 'numeric'
                            })} | {assignment.points} Points
                            <IndividualControls
                                deleteAssignment={removeAssignment}
                                assignmentId={assignment._id} />
                        </li> 
                ))}
            </ul>
        </div>
    );
}