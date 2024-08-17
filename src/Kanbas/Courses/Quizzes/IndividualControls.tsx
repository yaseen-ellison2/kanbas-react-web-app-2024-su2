import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateQuiz } from "./reducer";
import { useParams } from "react-router";
import * as client from "./client";
import { FaBan } from "react-icons/fa";

export default function IndividualControls(
  { 
    quizId, 
    deleteQuiz,
    quiz,
  }: 
  {
    quizId: string; 
    deleteQuiz: (moduleId: string) => void;
    quiz: any;
  
  }

) {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const handlePublishQuiz = async () => {
    const postQuiz = await client.publishQuiz(quizId);
    dispatch(updateQuiz(postQuiz)); // Update redux store
    window.location.reload(); 
  };

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteQuiz(quizId)} />
      {quiz.published === "True" ? (
        <GreenCheckmark />
      ) : (
        <FaBan className="text-danger" onClick={handlePublishQuiz}/>
      )}
      <div className="dropdown d-inline me-1 float-end">
        {/* Directly apply data-bs-toggle to the icon */}
        <IoEllipsisVertical
          className="fs-4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ cursor: "pointer" }}
        />
        <ul className="dropdown-menu">
          <li>
            <a id="wd-edit-quiz-button" className="dropdown-item" href= {`#/Kanbas/Courses/${cid}/Quizzes/${quizId}/Editor`}>
              Edit
            </a>
          </li>
          <li>
            <a id="wd-delete-quiz-button" className="dropdown-item" onClick={() => deleteQuiz(quizId)}>
              Delete
            </a>
          </li>
          <li>
            <a id="wd-publish-quiz-button" className="dropdown-item" onClick={handlePublishQuiz}>
              Publish 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

