import { FaPlus } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";


export default function GradesButtons() {
  return (
    <div id="wd-grades-controls" className="text-nowrap">
      <button id="wd-gear-btn" className="btn btn-md btn-secondary me-1 float-end">
        <FaGear className="position-relative" style={{ bottom: "1px" }} />
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-export-btn" className="btn btn-md btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <FaFileExport className="position-relative me-2" style={{ bottom: "1px" }} />
          Export
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-export-pdf-btn" className="dropdown-item" href="#">
  
              Export as PDF
            </a>
          </li>
          <li>
            <a id="wd-export-csv-button" className="dropdown-item" href="#">
  
              Export as CSV
            </a>
          </li>
          <li>
            <a id="wd-export-doc" className="dropdown-item" href="#">
  
              Export as Doc
            </a>
          </li>
        </ul>
      </div>
      <button id="wd-import-btn" className="btn btn-md btn-secondary me-1 float-end">
        <FaFileImport className="position-relative me-2" style={{ bottom: "1px" }} />
        Import
      </button>
    </div>
  );
}
