import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import AssignmentEditor from "./Editor";
import { addAssignment } from './reducer'; 
import { useParams } from "react-router";
import { useDispatch } from 'react-redux';


export default function AssignmentsControls(

  { assignmentName, 
    assignmentId
    // assignmentName, setDeleteAssignment 
  }:
    {
      assignmentName: string;
      assignmentId: string;
      // setDeleteAssignment: (assignmentName: string) => void; 
    })
{


  const { cid } = useParams();
  const dispatch = useDispatch();
  
  const handleAddAssignment = () => {
    const newAssignmentData = {
      course: cid,
    };
    dispatch(addAssignment(newAssignmentData));
  };



  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
      onClick={() => window.location.hash = `#/Kanbas/Courses/${cid}/Assignments/New`}>

        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <button id="wd-search" className="btn btn-lg me-1">
        <FaSearch className="position-relative me-3" style={{ bottom: "1px" }} />
      <input type="text"
        placeholder="Search..."/><br />
      </button>
      {/* <AssignmentEditor 
      // dialogTitle="Add Module" 
      // assignmentName={assignmentName}
      // setAssignmentName={setAssignmentName} 
      // addAssignment={addAssignment} 
      /> */}
    </div>
  );
}
