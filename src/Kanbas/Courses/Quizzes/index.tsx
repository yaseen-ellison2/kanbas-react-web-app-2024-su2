import { BsRocketTakeoff } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { useParams } from "react-router";
import { useState } from "react";
import QuizzesControls from "./QuizzesControls";
import { deleteQuiz }
  from "./reducer";
//import * as client from "./client";
// stopped at this point, client reducer etc set up, need to reference them in Quizzes. 

import { useSelector, useDispatch } from "react-redux";
import IndividualControls from "./IndividualControls";



export default function Quizzes() {
  const { cid } = useParams();
  

  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();


  return (
    <div id="wd-quizzes" >
      <QuizzesControls
        quizName="A101" quizId="24"
      />
      <br /><br /><br />
      <ul id="wd-quizzes" className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <RiArrowDownSFill className="me-2 fs-3" />
          Assignment Quizzes
        </div>

        {quizzes
          .filter((quiz: any) => quiz.course === cid)
          .map((quiz: any) => (
            <li className="wd-lesson list-group-item p-3 ps-2">
              <BsRocketTakeoff className="me-2 fs-3 " />
              <a className="wd-quiz-link"
                href={`#/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`}>
                {quiz._id} - {quiz.title} </a><br />
              Multiple Modules | <b>Not available until</b> {new Date(quiz.available_date).toLocaleDateString("en-US", {
                year: 'numeric', month: 'long', day: 'numeric'
              })} | <br />
              <b>Due </b> {new Date(quiz.due_date).toLocaleDateString("en-US", {
                year: 'numeric', month: 'long', day: 'numeric'
              })} | {quiz.points} Points
              <IndividualControls 
                deleteQuiz={(quizId) => dispatch(deleteQuiz(quizId))}
                quizId={quiz._id}  />
            <hr/>
            </li>
          ))}
      </ul>
    </div>
  );
}