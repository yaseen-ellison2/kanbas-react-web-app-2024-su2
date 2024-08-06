import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function IndividualControls(
  { 
    quizId, 
    deleteQuiz, 
  }: 
  {
    quizId: string; 
    deleteQuiz: (moduleId: string) => void;
  
  }

) {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteQuiz(quizId)} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
