import * as db from "../../Database";
import { useParams } from "react-router";

export default function AssignmentEditor() {

    const { cid, id  } = useParams();
    
    const assignments = db.assignments;

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
                    id="input1" value={`${assignment._id}: ${assignment.title}`} />
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
                        id="wd-points" value={`${assignment.points}`} />
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
                            id="input-due" value={`${assignment.due_date}`} />
                    </div>
                    <div className="row m-3">
                        <div className="col-6 ">
                            <label htmlFor="input-available" className="form-label"><b>
                                Available from</b></label>
                            <input type="text" className="form-control"
                                id="input-available" value={`${assignment.available_date}`} />
                        </div>
                        <div className="col-6 ">
                            <label htmlFor="input-until" className="form-label"><b>
                                Until</b></label>
                            <input type="text" className="form-control"
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
                        onClick={() => window.location.hash = `#/Kanbas/Courses/${assignment.course}/Assignments/`}
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



// export default function AssignmentEditor() {

//     const { cid } = useParams();
//     const assignments = db.assignments;

//     return (
//         <div id="wd-assignments-editor">
//             <div className="mb-3">
//                 <label htmlFor="input1" className="form-label">
//                     Assignment Name</label>
//                 <input type="text" className="form-control"
//                     id="input1" value="A1" />
//             </div>

//             <textarea className="form-control" id="wd-description"
//                 rows={5}>

//                 The assignment is available online . Submit a link to the landing page of your Web application running on Netlify. the landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The kanbas application should include a link to navigate back to the landing page.
//             </textarea>

//             <div className="row m-3">
//                 <div className="col-4 ">
//                     <a>Points</a>
//                 </div>
//                 <div className="col-8 ">
//                     <input type="text" className="form-control"
//                         id="wd-points" value="100" />
//                 </div>
//             </div>

//             <div className="row m-3">
//                 <div className="col-4">
//                     <a>Assignment Group</a>
//                 </div>
//                 <div className="col-8 ">
//                     <select className="form-select">
//                         <option selected>ASSIGNMENTS</option>
//                         <option value="OTHER">Other</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="row m-3">
//                 <div className="col-4 ">
//                     <a>Display Grade as</a>
//                 </div>
//                 <div className="col-8 ">
//                     <select className="form-select">
//                         <option selected>Percentage</option>
//                         <option value="POINTS">Points</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="row m-3">
//                 <div className="col-4">
//                     <a>Submission Type</a>
//                 </div>
//                 <div className="col-8 border rounded">
//                     <div className="row-12 m-3">
//                         <select className="form-select">
//                             <option selected value="ONLINE">Online</option>
//                             <option value="OFFLINE">Offline</option></select>
//                     </div>
//                     <div className="row-12 m-3">
//                         <label><b>Online Entry Options</b></label><br /><br />
//                         <input type="checkbox" name="check-genre" id="wd-text-entry" />
//                         <label htmlFor="wd-text-entry">Text Entry</label><br /><br />
//                         <input type="checkbox" name="check-genre" id="wd-website-url" />
//                         <label htmlFor="wd-website-url">Website URL</label><br /><br />
//                         <input type="checkbox" name="check-genre" id="wd-media-recordings" />
//                         <label htmlFor="wd-media-recordings">Media Recordings</label><br /><br />
//                         <input type="checkbox" name="check-genre" id="wd-student-annotation" />
//                         <label htmlFor="wd-student-annotation">Student Annotation</label><br /><br />
//                         <input type="checkbox" name="check-genre" id="wd-file-upload" />
//                         <label htmlFor="wd-file-upload">File Upload</label><br /><br />
//                     </div>
//                 </div>
//             </div>
//             <div className="row m-3">
//                 <div className="col-4 ">
//                     <a>Assign</a>
//                 </div>
//                 <div className="col-8 border rounded">
//                     <div className="row-12 m-3">
//                         <label htmlFor="input-assign" className="form-label"><b>
//                             Assign to</b></label>
//                         <input type="text" className="form-control"
//                             id="input-assign" value="Everyone" />
//                     </div>
//                     <div className="row-12 m-3">
//                         <label htmlFor="input-due" className="form-label"><b>
//                             Due</b></label>
//                         <input type="text" className="form-control"
//                             id="input-due" value="May 13, 2024, 11:59" />
//                     </div>
//                     <div className="row m-3">
//                         <div className="col-6 ">
//                             <label htmlFor="input-available" className="form-label"><b>
//                                 Available from</b></label>
//                             <input type="text" className="form-control"
//                                 id="input-available" value="May 13, 2024, 11:59" />
//                         </div>
//                         <div className="col-6 ">
//                             <label htmlFor="input-until" className="form-label"><b>
//                                 Until</b></label>
//                             <input type="text" className="form-control"
//                                 id="input-until" value="May 13, 2024, 11:59" />
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <hr />

//             <button id="savebut" className="btn btn-md btn-danger me-1  float-end">
//                 Save
//             </button>
//             <button id="cancelbut" className="btn btn-md btn-secondary me-1 float-end">
//                 Cancel
//             </button>
//         </div>
//     );
// }