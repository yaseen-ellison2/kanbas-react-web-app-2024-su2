import { BsRocketTakeoff } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { useParams, useNavigate  } from "react-router";
import { useState, useEffect } from "react";
import QuizzesControls from "./QuizzesControls";
import { deleteQuiz, setQuizzes } from "./reducer";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import IndividualControls from "./IndividualControls";
import ProtectedContent from "../../Account/ProtectedContent";




export default function Quizzes() {

  
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state: any) => state.accountReducer);


  const removeQuiz = async (qid: string) => {
    await client.deleteQuiz(qid);
    dispatch(deleteQuiz(qid));
  };

  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handlePreviewClick = (qid: string) => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/details`);
  };

  return (
    <div id="wd-quizzes">
      <QuizzesControls quizName="A101" quizId="24" />
      <br /><br /><br />
      <ul id="wd-quizzes" className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <RiArrowDownSFill className="me-2 fs-3" />
          Assignment Quizzes
        </div>

        {/* {quizzes
          .filter((quiz: any) => quiz.course === cid)
          .map((quiz: any) => { */}

        {quizzes
          .filter((quiz: any) => {
            return currentUser.role === "FACULTY" || quiz.published === "True";  // Filter logic
          })
          .filter((quiz: any) => quiz.course === cid)
          .map((quiz: any) => {
            
            const dueDate = new Date(quiz.due_date);
            const currentDate = new Date();

            return (
              <li className="wd-lesson list-group-item p-3 ps-2" key={quiz._id}>
                <BsRocketTakeoff className="me-2 fs-3" />
                <a
                  className="wd-quiz-link"
                  href={`#/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/Form`}
                >
                  {quiz._id} - {quiz.title}
                </a>
                <br />
                {quiz.num_questions} Questions|{" "}
                {currentDate > dueDate ? (
                  <b>Closed</b>
                ) : (
                  <>
                    <b>Not available until</b>{" "}
                    {new Date(quiz.available_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </>
                )}{" "}
                | <br />
                <b>Due </b>{" "}
                {dueDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                | {quiz.points} Points
                <div className="d-flex align-items-center"></div>
                  <button onClick={() => handlePreviewClick(quiz._id)} className="btn btn-primary mt-2">
                    Quiz Details
                  </button>

              <ProtectedContent>
                  <IndividualControls
                    deleteQuiz={(quizId) => {
                      removeQuiz(quizId);
                    }}
                    quizId={quiz._id}
                    quiz={quiz}
                  />
              </ProtectedContent>
                <div />
                <hr/>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
