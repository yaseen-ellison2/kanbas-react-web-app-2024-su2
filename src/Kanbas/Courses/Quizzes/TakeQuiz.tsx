import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';

export default function TakeQuiz() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [quiz, setQuiz] = useState<any>(null);

  // Fetch the correct quiz based on the quizId from params
  useEffect(() => {
    const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);
    if (currentQuiz) {
      setQuiz(currentQuiz);
    }
  }, [qid, quizzes]);

  // Ensure quiz data is loaded before rendering
  if (!quiz) {
    return <div>Loading...</div>;
  }

  // Render the quiz questions
  return (
    <div className="take-quiz">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      <form>
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
            
            <br /> {/* Add a line break here */}
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Submit Quiz
        </button>
      </form>
    </div>
  );
}


