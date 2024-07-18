import { LiaFilterSolid } from "react-icons/lia";
import GradesButtons from "./GradesButtons"


export default function Grades(){
  return(
    <div id="wd-grades">
      <div className="row m-2">
        <div className="col-6 ">
        </div>
        <div className="col-6">
          <GradesButtons />
        </div>
      </div>
      
      <div className="row m-3">
        <div className="col-6 ">
          <label><b>Student Names</b></label>
          <select className="form-select my-2">
            <option selected>Search Students</option>
            <option value="STUDENT1">Student 1</option>
            <option value="STUDENT2">Student 2</option>
            <option value="STUDENT3">Student 3</option>
          </select>
        </div>
        <div className="col-6">
          <label><b>Assignment Names</b></label>
          <select className="form-select my-2">
            <option selected>Search Assignments</option>
            <option value="ASSG1">Assignment 1</option>
            <option value="ASSG2">Assignment 2</option>
            <option value="ASSG3">Assignment 3</option>
          </select>
        </div>
      </div>

      <div className="row m-3">
        <div className="col-6 left-0">
            <button id="wd-gear-btn" className="btn btn-md btn-secondary float-beginning">
              <LiaFilterSolid className="position-relative" style={{ bottom: "1px" }} />
              Apply Filters
            </button>
        </div>
      </div>

      <div className="row mx-3 wd-bg-color-gray">
        <div className="col-3 text-left border">
          <b>Student Name</b>
        </div>
        <div className="col-2 text-center border">
          A1 SETUP <br/>
          Out of 100
        </div>
        <div className="col-2 text-center  border">
          A2 HTML <br />
          Out of 100
        </div>
        <div className="col-2 text-center  border">
          A3 CSS <br />
          Out of 100
        </div>
        <div className="col-3 text-center  border">
          A4 BOOTSTRAP <br />
          Out of 100
        </div>
      </div>
      <div className="row mx-3 ">
        <div className="col-3 text-left border">
          <div className="wd-fg-color-red" ><b>Student 1</b></div>
        </div>
        <div className="col-2 text-center border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-3 text-center border">
          100%
        </div>
      </div>
      <div className="row mx-3 wd-bg-color-gray">
        <div className="col-3 text-left border">
          <div className="wd-fg-color-red" ><b>Student 2</b></div>
        </div>
        <div className="col-2 text-center border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-3 text-center border">
          100%
        </div>
      </div>
      <div className="row mx-3">
        <div className="col-3 text-left border">
          <div className="wd-fg-color-red" ><b>Student 3</b></div>
        </div>
        <div className="col-2 text-center border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-3 text-center border">
          100%
        </div>
      </div>
      <div className="row mx-3 wd-bg-color-gray">
        <div className="col-3 text-left border">
          <div className="wd-fg-color-red" ><b>Student 4</b></div>
        </div>
        <div className="col-2 text-center border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-2 text-center  border">
          <input type="text" className="form-control"
            id="input-grade" placeholder="88.03%" />
        </div>
        <div className="col-3 text-center border">
          100%
        </div>
      </div>
      <div className="row mx-3">
        <div className="col-3 text-left border">
          <div className="wd-fg-color-red" ><b>Student 5 </b></div>
        </div>
        <div className="col-2 text-center border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-2 text-center  border">
          100%
        </div>
        <div className="col-3 text-center border">
          100%
        </div>
      </div>


    </div>

  )
}

