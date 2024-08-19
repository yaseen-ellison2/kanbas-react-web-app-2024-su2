
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import { findAttemptsForUser } from './client';

export default function ViewAttempt() {
  const { qid } = useParams();  // Assuming qid is the quiz ID from the URL
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);

  const [attempt, setAttempt] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);

  useEffect(() => {
    const loadAttempt = async () => {
      const attempts = await findAttemptsForUser(currentUser._id);
      const currentAttempt = attempts.find((att: any) => att.quiz === qid);
      setAttempt(currentAttempt);
    };

    const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);
    setQuiz(currentQuiz);

    loadAttempt();
  }, [qid, currentUser, quizzes]);

  if (!attempt || !quiz) {
    return <div> No Attempts Recorded</div>;
  }

  return (
    <div className="view-attempt">
      <h2>{quiz.title} - Attempt Review</h2>
      <p>{quiz.description}</p>
      <hr/><hr />

      {quiz.questions.map((question: any, index: number) => {
        const userAnswer = attempt.answers.find((ans: any) => ans.qqid === question._id);

        return (
          <div key={index} className="answer-block">
            <h5>Question: {question.question} </h5>
            <br/>
            <p>Your answer: {userAnswer ? userAnswer.answer : "No answer provided"}</p>
            <p>Correct answer: {question.answer}</p> 
            <hr/>

            {/* Show whether the answer was correct or not */}


          </div>
        );
      })}
    </div>
  );
}

