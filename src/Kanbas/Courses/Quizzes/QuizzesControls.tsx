import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
// import QuizEditor from "./Editor";
import { addQuiz } from './reducer'; 
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';



export default function QuizzesControls(

  { quizName, 
    quizId
    // quizName, setDeleteQuiz 
  }:
    {
      quizName: string;
      quizId: string;
      // setDeleteQuiz: (quizName: string) => void; 
    })
{


  const { cid } = useParams();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  
  const handleAddQuiz = () => {
    const newQuizData = {
      course: cid,
    };
    dispatch(addQuiz(newQuizData));
  };



  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
        <BsThreeDotsVertical className="position-relative me-2" />
      </button>

      {currentUser.role === "FACULTY" && (
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
      onClick={() => window.location.hash = `#/Kanbas/Courses/${cid}/Quizzes/New`}>
        
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Quiz
      </button>
      )}
      
      <button id="wd-search" className="btn btn-lg me-1">
        <FaSearch className="position-relative me-3" style={{ bottom: "1px" }} />
      <input type="text"
        placeholder="Search..."/><br />
      </button>
      
    </div>
  );
}


// Amari Stuff Below.



// import { FaPlus } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { addQuiz } from './reducer';
// import { useParams } from "react-router";
// import { useDispatch, useSelector } from 'react-redux';
// import { useState, useEffect } from "react";

// export default function QuizzesControls(
//   { quizName, quizId }:
//     {
//       quizName: string;
//       quizId: string;
//     }) {
//   const { cid } = useParams();  // Get the course ID from the URL
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);  // Access currentUser from the accountReducer
//   const [userRole, setUserRole] = useState<string>("STUDENT");

//   useEffect(() => {
//     if (currentUser) {
//       setUserRole(currentUser.role);  // Set the role based on the currentUser from the accountReducer
//     }
//   }, [currentUser]);

//   const handleAddQuiz = () => {
//     const newQuizData = {
//       course: cid,
//     };
//     dispatch(addQuiz(newQuizData));
//   };

//   console.log("Current User Role:", userRole);

//   return (
//     <div id="wd-modules-controls" className="text-nowrap">
//       <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
//         <BsThreeDotsVertical className="position-relative me-2" />
//       </button>

//       {userRole === "FACULTY" && (  // Render the button only if the role is FACULTY
//         <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
//           onClick={() => window.location.hash = `#/Kanbas/Courses/${cid}/Quizzes/New`}>
//           <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//           Quiz
//         </button>
//       )}

//       <button id="wd-search" className="btn btn-lg me-1">
//         <FaSearch className="position-relative me-3" style={{ bottom: "1px" }} />
//         <input type="text" placeholder="Search..." /><br />
//       </button>

//     </div>
//   );
// }


