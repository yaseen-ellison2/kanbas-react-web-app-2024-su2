import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router";
import { useSelector } from 'react-redux';
import { saveAttempt } from './Attempts/client';

export default function TakeQuiz() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [quiz, setQuiz] = useState<any>(null);
  const navigate = useNavigate();  // Add this hook

  useEffect(() => {
    const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);
    if (currentQuiz) {
      setQuiz(currentQuiz);
    }
  }, [qid, quizzes]);

  const handleSubmit = async () => {
    const answers = quiz.questions.map((question: any, index: number) => {
      const questionId = question._id;
      const answerElement = document.querySelector(
        `input[name="question-${index}"]:checked`
      ) as HTMLInputElement;

      const answer = answerElement ? answerElement.value : null;

      return {
        qqid: questionId,
        question: question.question,  // Optionally store the question text
        answer: answer,
      };
    });

    const attempt = {
      taker: currentUser._id,
      quiz: qid,
      answers: answers,
      submittedDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', // Use 'short' for abbreviated month names
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,  // Change to `false` for 24-hour time
      }),    };

    await saveAttempt(currentUser._id, attempt);

    // Navigate back to the quizzes page 
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);  
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="take-quiz">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      {quiz.questions.map((question: any, index: number) => (
        <div key={index} className="question-block">
          <h4>{question.question}</h4>

          {question.type === 'multiple_choice' && (
            <div className="options">
              {question.options.map((option: string, optionIndex: number) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    id={`question-${index}-option-${optionIndex}`}
                  />
                  <label htmlFor={`question-${index}-option-${optionIndex}`}>{option}</label>
                </div>
              ))}
            </div>
          )}

          {question.type === 'true_false' && (
            <div className="options">
              <div>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="True"
                  id={`question-${index}-true`}
                />
                <label htmlFor={`question-${index}-true`}>True</label>
              </div>
              <div>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="False"
                  id={`question-${index}-false`}
                />
                <label htmlFor={`question-${index}-false`}>False</label>
              </div>
            </div>
          )}

          {question.type === 'fill_in_the_blanks' && (
            <div className="fill-in-the-blanks">
              {Array.from({ length: parseInt(question.options[0], 10) }, (_, blankIndex) => (
                <input
                  key={blankIndex}
                  type="text"
                  name={`question-${index}-blank-${blankIndex}`}
                  placeholder={`Blank ${blankIndex + 1}`}
                  className="form-control mb-2"
                />
              ))}
            </div>
          )}

          <br />
        </div>
      ))}

      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
}
