import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react"
import { setAssignments, addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";



export default function AssignmentEditor(
) {

const { cid, id  } = useParams();
const [assignmentName, setAssignmentName] = useState("");
const { assignments } = useSelector((state: any) => state.assignmentsReducer);
                                        
const navigate = useNavigate(); 
const dispatch = useDispatch();

const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
};


const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
};


const [assignment, setAssignment] = useState<any>({
    title: 'New Assignment', 
    description: "New Description",
    points: 100,
    due_date: new Date().toISOString().split("T")[0],
    available_date: new Date().toISOString().split("T")[0],
    available_until_date: new Date().toISOString().split("T")[0],
  });

  const handleSaveAssignment = () => {
    if (id !== 'New') {
        saveAssignment({ title: assignmentName, course: cid });
    } else {
        createAssignment({ title: assignmentName, course: cid });
    }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);}


    //useEffect Hook: fetch assignment if editing
  useEffect(() => {
    if (id !== 'New') { //check if id != New
      const current = assignments.find((assignment: any) =>
        assignment._id === id); //find correct assignment to update via matching id
      setAssignments(current)                                                    
      //set state of found assignment                     
    }}, [id]) 


    return (
        <div>
        <div id="wd-assignments-editor">  
            <div className="mb-3">
                <label htmlFor="input1" className="form-label">
                    Assignment Name</label>
                <input type="text" className="form-control"
                    id="input1" value={assignment.title}
                    onChange = {(e) => setAssignment({ ...assignment, title: e.target.value })} 
                    />
            </div>

            <textarea className="form-control" id="wd-description"
                    onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} 
                rows={5} value={assignment.description}/>

            <div className="row m-3">
                <div className="col-4 ">
                    <a>Points</a>
                </div>
                <div className="col-8 ">
                    <input type="text" className="form-control"
                        id="wd-points" value={`${assignment.points}`}
                        onChange={(e) => setAssignment({ ...assignment, points: e.target.value })
                        } />
                </div>
            </div>

            <div className="row m-3">
                <div className="col-4">
                    <a>Assignment Group</a>
                </div>
                <div className="col-8 ">
                    <select className="form-select">
                        <option selected>ASSIGNMENTS</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
            </div>
            <div className="row m-3">
                <div className="col-4 ">
                    <a>Display Grade as</a>
                </div>
                <div className="col-8 ">
                    <select className="form-select">
                        <option selected>Percentage</option>
                        <option value="POINTS">Points</option>
                    </select>
                </div>
            </div>
            <div className="row m-3">
                <div className="col-4">
                    <a>Submission Type</a>
                </div>
                <div className="col-8 border rounded">
                    <div className="row-12 m-3">
                    <select className="form-select">
                        <option selected value="ONLINE">Online</option>
                        <option value="OFFLINE">Offline</option></select>
                    </div>
                    <div className="row-12 m-3">
                        <label><b>Online Entry Options</b></label><br /><br />
                        <input type="checkbox" name="check-genre" id="wd-text-entry" /> 
                        <label htmlFor="wd-text-entry">Text Entry</label><br /><br />
                        <input type="checkbox" name="check-genre" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br /><br />
                        <input type="checkbox" name="check-genre" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br /><br />
                        <input type="checkbox" name="check-genre" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br /><br />
                        <input type="checkbox" name="check-genre" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label><br /><br />
                    </div>
                </div>
            </div>
            <div className="row m-3">
                <div className="col-4 ">
                    <a>Assign</a>
                </div>
                <div className="col-8 border rounded">
                    <div className="row-12 m-3">
                        <label htmlFor="input-assign" className="form-label"><b>
                            Assign to</b></label>
                        <input type="text" className="form-control"
                            id="input-assign" value="Everyone" />
                    </div>
                    <div className="row-12 m-3">
                        <label htmlFor="input-due" className="form-label"><b>
                            Due</b></label>
                        <input type="date" className="form-control"
                            id="input-due" value={`${assignment.due_date}`}
                            onChange={(e) => setAssignment({ ...assignment, due_date: e.target.value })
                            } />
                    </div>
                    <div className="row m-3">
                        <div className="col-6 ">
                            <label htmlFor="input-available" className="form-label"><b>
                                Available from</b></label>
                            <input type="date" className="form-control"
                                id="input-available" value={`${assignment.available_date}`}
                                onChange={(e) => setAssignment({ ...assignment, available_date: e.target.value })
                                } />
                        </div>
                        <div className="col-6 ">
                            <label htmlFor="input-until" className="form-label"><b>
                                Until</b></label>
                            <input type="date" className="form-control"
                                id="input-available" value={`${assignment.available_until_date}`}
                                onChange={(e) => setAssignment({ ...assignment, available_until_date: e.target.value })
                                } />
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr/>

                        <button 
                        id="savebut" 
                        className="btn btn-md btn-danger me-1  
                        float-end" 
                            onClick={ handleSaveAssignment }
                        >
            Save
        </button>
        <button id="cancelbut" className="btn btn-md btn-secondary me-1 float-end"onClick={() => window.location.hash = `#/Kanbas/Courses/${cid}/Assignments/`}>
            Cancel
        </button>
        </div>
    </div>
    );
}
