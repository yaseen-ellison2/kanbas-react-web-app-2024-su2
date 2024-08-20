import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router";
import { useSelector } from 'react-redux';
import { findAttemptsForUser } from './client';
import { FcCheckmark } from "react-icons/fc";
import { GiSkullCrossedBones } from "react-icons/gi";

export default function ViewAttempt() {
  const { qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);

  const [attempt, setAttempt] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);
  const navigate = useNavigate();
  const { cid } = useParams();

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
    return (
      <div>
        <button
          className="btn btn-danger"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}  // Navigate back to the quiz list
        >
          No Attempt Recorded. Go Back
        </button>
      </div>
    );
  }

  let totalPoints = 0;
  let maxPoints = 0;

  return (
    <div className="view-attempt">
      <h2>{quiz.title} - Attempt Review</h2>
      <p>Your Last Attempt at {attempt.submittedDate} </p>
      <button
        className="btn btn-danger"
        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}  // Navigate back to the quiz list
      >
        Close
      </button>
      <hr /><hr />

      {quiz.questions.map((question: any, index: number) => {
        const userAnswer = attempt.answers.find((ans: any) => ans.qqid === question._id);

        // Check if the answer is correct
        const isCorrect = userAnswer &&
          Array.isArray(userAnswer.answer) &&
          Array.isArray(question.answer) &&
          userAnswer.answer.length === question.answer.length &&
          userAnswer.answer.every((ans: string, i: number) => ans === question.answer[i]);

        if (isCorrect) {
          totalPoints += question.points;  // Add the question's points to the total
        }

        maxPoints += question.points;  // Add the maximum points for the question

        return (
          <div key={index} className="answer-block">
            <h5>Question: {question.question}</h5>
            <br />
            <p>Your answer :
              {userAnswer ? (
                userAnswer.answer.map((ans: string, i: number) => (
                  <div key={i} style={{ display: 'inline-flex', alignItems: 'center', marginRight: '10px' }}>
                    <span>{ans}</span>
                    {ans === question.answer[i] ? (
                      <FcCheckmark style={{ marginLeft: '5px', color: 'green' }} />
                    ) : (
                      <GiSkullCrossedBones style={{ marginLeft: '5px', color: 'red' }} />
                    )}

                  </div>

                ))
              ) : (
                <span>No answer provided</span>
              )}</p>

            <hr />
          </div>
        );
      })}

      <div className="score-summary" style={{ color: 'blue' }}>
        <h3>Total Points Scored: {totalPoints} / {maxPoints}</h3>  
      </div>

    </div>
  );
}
