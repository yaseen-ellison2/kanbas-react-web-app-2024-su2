export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"> <b>Assignment Name</b> </label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. the landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The kanbas application should include a link to navigate back to the landing page. 
            </textarea>

            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr> 
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="OTHER">Other</option>
                            <option selected value="ASSIGN">
                                ASSIGNMENTS </option>
                        </select>
                    </td>
                </tr>
                <tr><td align="right" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Grade As</label>
                </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="POINTS">Points</option>
                            <option selected value="PERCENT">
                                Percentage </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="OFFLINE">Offline</option>
                            <option selected value="ONLINE">
                                Online </option>
                        </select>
                    </td> 
                </tr>
                <tr>
                    <label>Online Entry Options</label><br />
                    <input type="checkbox" name="check-genre" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label><br />
                    <input type="checkbox" name="check-genre" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label><br />
                    <input type="checkbox" name="check-genre" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                    <input type="checkbox" name="check-genre" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                    <input type="checkbox" name="check-genre" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Upload</label><br />
                </tr>
                <tr>
                    Assign <br/>
                    <td align="left" valign="top">  
                        <label htmlFor="wd-assign-to"> Assign to </label>
                        <input id="wd-assign-to" placeholder="Everyone" /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                    <label htmlFor="wd-due-date"> Due: </label>
                    <input type="date"
                        id="wd-due-date"
                        min="2000-01-15"
                        max="2000-01-25"
                        value="2000-01-21"
                    /><br />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="wd-available-from"> Available from: </label>
                    <input type="date"
                        id="wd-available-from"
                        min="2000-01-15"
                        max="2000-01-25"
                        value="2000-01-21"
                    />
                    <label htmlFor="wd-available-until"> Until: </label>
                    <input type="date"
                        id="wd-available-until"
                        min="2000-01-15"
                        max="2000-01-25"
                        value="2000-01-21"
                    /><br />
                    </td>
                </tr>
                <tr>
                    <td>
                    <hr />
                    <button>Cancel</button> <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}


// export default function AssignmentEditor() {
//     return (
//         <div id="wd-assignments-editor">
//             <label htmlFor="wd-name"> <b>Assignment Name</b> </label>
//             <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

//             <textarea id="wd-description">
//                 The assignment is available online Submit a link to the landing page of your Web application running on Netlify. the landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The kanbas application should include a link to navigate back to the landing page. 
//             </textarea>

//             <br />
//             <table>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-points">Points</label>
//                     </td>
//                     <td>
//                         <input id="wd-points" value={100} />
//                     </td>
//                 </tr> 
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-group">Assignment Group</label>
//                     </td>
//                     <td>
//                         <select id="wd-group">
//                             <option value="OTHER">Other</option>
//                             <option selected value="ASSIGN">
//                                 ASSIGNMENTS </option>
//                         </select>
//                     </td>
//                 </tr>
//                 <tr><td align="right" valign="top">
//                     <label htmlFor="wd-display-grade-as">Display Grade As</label>
//                 </td>
//                     <td>
//                         <select id="wd-display-grade-as">
//                             <option value="POINTS">Points</option>
//                             <option selected value="PERCENT">
//                                 Percentage </option>
//                         </select>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-submission-type">Submission Type</label>
//                     </td>
//                     <td>
//                         <select id="wd-submission-type">
//                             <option value="OFFLINE">Offline</option>
//                             <option selected value="ONLINE">
//                                 Online </option>
//                         </select>
//                     </td> 
//                 </tr>
//                 <tr>
//                     <label>Online Entry Options</label><br />
//                     <input type="checkbox" name="check-genre" id="wd-text-entry" />
//                     <label htmlFor="wd-text-entry">Text Entry</label><br />
//                     <input type="checkbox" name="check-genre" id="wd-website-url" />
//                     <label htmlFor="wd-website-url">Website URL</label><br />
//                     <input type="checkbox" name="check-genre" id="wd-media-recordings" />
//                     <label htmlFor="wd-media-recordings">Media Recordings</label><br />
//                     <input type="checkbox" name="check-genre" id="wd-student-annotation" />
//                     <label htmlFor="wd-student-annotation">Student Annotation</label><br />
//                     <input type="checkbox" name="check-genre" id="wd-file-upload" />
//                     <label htmlFor="wd-file-upload">File Upload</label><br />
//                 </tr>
//                 <tr>
//                     Assign <br/>
//                     <td align="left" valign="top">  
//                         <label htmlFor="wd-assign-to"> Assign to </label>
//                         <input id="wd-assign-to" placeholder="Everyone" /><br /><br />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="left" valign="top">
//                     <label htmlFor="wd-due-date"> Due: </label>
//                     <input type="date"
//                         id="wd-due-date"
//                         min="2000-01-15"
//                         max="2000-01-25"
//                         value="2000-01-21"
//                     /><br />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                     <label htmlFor="wd-available-from"> Available from: </label>
//                     <input type="date"
//                         id="wd-available-from"
//                         min="2000-01-15"
//                         max="2000-01-25"
//                         value="2000-01-21"
//                     />
//                     <label htmlFor="wd-available-until"> Until: </label>
//                     <input type="date"
//                         id="wd-available-until"
//                         min="2000-01-15"
//                         max="2000-01-25"
//                         value="2000-01-21"
//                     /><br />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                     <hr />
//                     <button>Cancel</button> <button>Save</button>
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     );
// }


