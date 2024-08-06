import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
// import QuizEditor from "./Editor";
import { addQuiz } from './reducer'; 
import { useParams } from "react-router";
import { useDispatch } from 'react-redux';


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
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
      onClick={() => window.location.hash = `#/Kanbas/Courses/${cid}/Quizzes/New`}>

        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Quiz
      </button>
      
      <button id="wd-search" className="btn btn-lg me-1">
        <FaSearch className="position-relative me-3" style={{ bottom: "1px" }} />
      <input type="text"
        placeholder="Search..."/><br />
      </button>
      
    </div>
  );
}
