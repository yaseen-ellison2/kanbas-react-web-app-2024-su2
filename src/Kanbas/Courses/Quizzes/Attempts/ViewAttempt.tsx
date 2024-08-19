
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import { findAttemptsForUser } from './client';
import { FcCheckmark } from "react-icons/fc";
import { GiSkullCrossedBones } from "react-icons/gi";



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



  let correctCount = 0;

  return (
    <div className="view-attempt">
      <h2>{quiz.title} - Attempt Review</h2>
      <p>Your Last Attempt at {attempt.submittedDate} </p>
      <hr /><hr />

      {quiz.questions.map((question: any, index: number) => {
        const userAnswer = attempt.answers.find((ans: any) => ans.qqid === question._id);

        // Added: Calculate isCorrect and increment correctCount
        const isCorrect = userAnswer && (
          Array.isArray(question.answer)
            ? question.answer.includes(userAnswer.answer)
            : userAnswer.answer === question.answer
        );

        if (isCorrect) {
          correctCount++;
        }

        return (
          <div key={index} className="answer-block">
            <h5>Question: {question.question}</h5>
            <br />
            <p>Your answer: {userAnswer ? userAnswer.answer : "No answer provided"}</p>

            {isCorrect ? <FcCheckmark style={{ color: 'green' }} /> : <GiSkullCrossedBones style={{ color: 'red' }} />}

            <hr />
          </div>
        );
      })}

      {/* Added: Display the total correct count */}
      <div className="correct-count" style={{ color: 'blue' }}>
        <h3>Total Correct Answers: {correctCount} / {quiz.questions.length}</h3>
      </div>
      
    </div>
  );
}