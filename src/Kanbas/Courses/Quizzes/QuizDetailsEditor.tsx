import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import * as client from "./client";
import QuizDetailsTab from "./QuizDetailsTab";
import QuizQuestionsTab from "./QuizQuestionsTab";

export default function QuizDetailsEditor() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<"details" | "questions">("details");
  const [quiz, setQuiz] = useState<any>({
    title: 'New Quiz',
    course: cid,
    description: "New Description",
    points: 100,
    due_date: new Date().toISOString().split("T")[0],
    available_date: new Date().toISOString().split("T")[0],
    available_until_date: new Date().toISOString().split("T")[0],
    published: "False",
    quiz_type: "GRADED_QUIZ",
    assignment_group: "QUIZ",
    shuffle_answers: "True",
    time_limit: "20",
    multiple_attempts: "False",
    show_correct: "False",
    access_code: "",
    one_q_at_a_time: "False",
    webcam_required: "False",
    lock_q_after_answer: "False",
    questions: []
  });

  const handleSaveQuiz = async () => {
    try {
      if (qid !== 'New') {
        // Handle updating an existing quiz
        await client.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/details`);
      } else {
        // Handle creating a new quiz
        const createdQuiz = await client.createQuiz(cid, quiz);
        dispatch(addQuiz(createdQuiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
      }
    } catch (error) {
      console.error('Failed to save the quiz:', error);
    }
  };

  useEffect(() => {
    if (qid !== 'New') {
      const current = quizzes.find((quiz: any) => quiz._id === qid);
      setQuiz(current);
    }
  }, [qid, quizzes]);

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
            onClick={() => setActiveTab("questions")}
          >
            Questions
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {activeTab === "details" && <QuizDetailsTab quiz={quiz} setQuiz={setQuiz} />}
        {activeTab === "questions" && <QuizQuestionsTab quiz={quiz} setQuiz={setQuiz} />}
      </div>

      <button
        id="savebut"
        className="btn btn-md btn-danger me-1 float-end"
        onClick={handleSaveQuiz}
      >
        Save
      </button>
      <button
        id="cancelbut"
        className="btn btn-md btn-secondary me-1 float-end"
        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes`)}
      >
        Cancel
      </button>
    </div>
  );
}

