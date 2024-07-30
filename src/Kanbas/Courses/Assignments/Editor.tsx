import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react"
import { addAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export default function AssignmentEditor(
) {

const { cid, id  } = useParams();
const { assignments } = useSelector((state: any) => state.assignmentsReducer);
                                        
const navigate = useNavigate(); 
const dispatch = useDispatch();

const [assignment, setAssignment] = useState<any>({
    title: 'New Assignment', 
    description: "New Description",
    points: 100,
    dueDate: new Date().toISOString().split("T")[0],
    availableDate: new Date().toISOString().split("T")[0],
  });

  const handleSaveAssignment = () => {
    if (id !== 'New') {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }))
    }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);}


    //useEffect Hook: fetch assignment if editing
  useEffect(() => {
    if (id !== 'New') { //check if id != New
      const current = assignments.find((assignment: any) =>
        assignment._id === id); //find correct assignment to update via matching id
      setAssignment(current)                                                    
      //set state of found assignment                     
    }}, [id]) 


    return (
        <div>
        {
                assignments.filter((assignment: any) => assignment.course === cid && assignment._id === id)
                .map((assignment: any) => (
        <div id="wd-assignments-editor">  
            <div className="mb-3">
                <label htmlFor="input1" className="form-label">
                    Assignment Name</label>
                <input type="text" className="form-control"
                    id="input1" value={`${assignment._id}: ${assignment.title}`}
                    onChange = {(e) => setAssignment({ ...assignment, title: e.target.value })} 
                    />
            </div>

            <textarea className="form-control" id="wd-description"
                rows={5}>
                {assignment.description}
                </textarea>

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
                        <input type="text" className="form-control"
                            id="input-due" value={`${assignment.due_date}`}
                            onChange={(e) => setAssignment({ ...assignment, due_date: e.target.value })
                            } />
                    </div>
                    <div className="row m-3">
                        <div className="col-6 ">
                            <label htmlFor="input-available" className="form-label"><b>
                                Available from</b></label>
                            <input type="text" className="form-control"
                                id="input-available" value={`${assignment.available_date}`}
                                onChange={(e) => setAssignment({ ...assignment, available_date: e.target.value })
                                } />
                        </div>
                        <div className="col-6 ">
                            <label htmlFor="input-until" className="form-label"><b>
                                Until</b></label>
                            <input type="text" className="form-control"
                            // add guts after making json have this.
                            id="input-until"  />
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
        <button id="cancelbut" className="btn btn-md btn-secondary me-1 float-end"onClick={() => window.location.hash = `#/Kanbas/Courses/${assignment.course}/Assignments/`}>
            Cancel
        </button>
        </div>
    ))}
    </div>
    );
}
