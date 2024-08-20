//old version in case new breaks
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from "react-router";
// import { useSelector } from 'react-redux';
// import { saveAttempt } from './Attempts/client';
// import ProtectedContent from '../../Account/ProtectedContent';

// export default function TakeQuiz() {
//   const { cid, qid } = useParams();
//   const { quizzes } = useSelector((state: any) => state.quizzesReducer);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   const [quiz, setQuiz] = useState<any>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);
//     if (currentQuiz) {
//       setQuiz(currentQuiz);
//     }
//   }, [qid, quizzes]);

//   const handleSubmit = async () => {
//     const answers = quiz.questions.map((question: any, index: number) => {
//       const questionId = question._id;
//       let answer = [];

//       // For multiple choice and true/false questions
//       if (question.type === 'multiple_choice' || question.type === 'true_false') {
//         const answerElement = document.querySelector(
//           `input[name="question-${index}"]:checked`
//         ) as HTMLInputElement;

//         if (answerElement) {
//           answer.push(answerElement.value);
//         }
//       }

//       // For fill-in-the-blanks questions
//       if (question.type === 'fill_in_the_blanks') {
//         const blankElements = document.querySelectorAll(
//           `input[name^="question-${index}-blank-"]`
//         ) as NodeListOf<HTMLInputElement>;

//         blankElements.forEach((element) => {
//           if (element.value.trim() !== "") {
//             answer.push(element.value.trim());
//           }
//         });
//       }

//       return {
//         qqid: questionId,
//         question: question.question,  // Optionally store the question text
//         answer: answer,  // Store the answer as an array
//         points: question.points
//       };
//     });

//     const attempt = {
//       taker: currentUser._id,
//       quiz: qid,
//       answers: answers,
//       submittedDate: new Date().toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true,
//       }),
//     };

//     await saveAttempt(currentUser._id, attempt);

//     // Navigate back to the quizzes page 
//     navigate(`/Kanbas/Courses/${cid}/Quizzes`);
//   };

//   if (!quiz) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="take-quiz">
//       <h2>{quiz.title}</h2>
//       <p>{quiz.description}</p>

//       {quiz.questions.map((question: any, index: number) => (
//         <div key={index} className="question-block">
//           <h4>{question.question}</h4>

//           {question.type === 'multiple_choice' && (
//             <div className="options">
//               {question.options.map((option: string, optionIndex: number) => (
//                 <div key={optionIndex}>
//                   <input
//                     type="radio"
//                     name={`question-${index}`}
//                     value={option}
//                     id={`question-${index}-option-${optionIndex}`}
//                   />
//                   <label htmlFor={`question-${index}-option-${optionIndex}`}>{option}</label>
//                 </div>
//               ))}
//             </div>
//           )}

//           {question.type === 'true_false' && (
//             <div className="options">
//               <div>
//                 <input
//                   type="radio"
//                   name={`question-${index}`}
//                   value="True"
//                   id={`question-${index}-true`}
//                 />
//                 <label htmlFor={`question-${index}-true`}>True</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   name={`question-${index}`}
//                   value="False"
//                   id={`question-${index}-false`}
//                 />
//                 <label htmlFor={`question-${index}-false`}>False</label>
//               </div>
//             </div>
//           )}

//           {question.type === 'fill_in_the_blanks' && (
//             <div className="fill-in-the-blanks">
//               {Array.from({ length: parseInt(question.options[0], 10) }, (_, blankIndex) => (
//                 <input
//                   key={blankIndex}
//                   type="text"
//                   name={`question-${index}-blank-${blankIndex}`}
//                   placeholder={`Blank ${blankIndex + 1}`}
//                   className="form-control mb-2"
//                 />
//               ))}
//             </div>
//           )}

//           <br />
//         </div>
//       ))}

//       <button type="button" className="btn btn-primary" onClick={handleSubmit}>
//         Submit Quiz
//       </button>
//       <ProtectedContent>
//         <button
//           className="btn btn-danger"
//           onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}
//         >
//           Cancel Attempt
//         </button>
//       </ProtectedContent>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router";
import { useSelector } from 'react-redux';
import { saveAttempt, findAttemptsForUser } from './Attempts/client';  // Import the function to fetch attempts
import ProtectedContent from '../../Account/ProtectedContent';

export default function TakeQuiz() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [quiz, setQuiz] = useState<any>(null);
  const [attemptNumber, setAttemptNumber] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);
    if (currentQuiz) {
      setQuiz(currentQuiz);

      // Fetch the only attempt for this quiz and user
      findAttemptsForUser(currentUser._id).then((attempts: any[]) => {
        const relevantAttempt = attempts.find(
          (attempt) => attempt.quiz === qid
        );
        if (relevantAttempt) {
          setAttemptNumber(relevantAttempt.attempt_number);
        }
      });
    }
  }, [qid, quizzes, currentUser._id]);

  const handleSubmit = async () => {
    const answers = quiz.questions.map((question: any, index: number) => {
      const questionId = question._id;
      let answer = [];

      // For multiple choice and true/false questions
      if (question.type === 'multiple_choice' || question.type === 'true_false') {
        const answerElement = document.querySelector(
          `input[name="question-${index}"]:checked`
        ) as HTMLInputElement;

        if (answerElement) {
          answer.push(answerElement.value);
        }
      }

      // For fill-in-the-blanks questions
      if (question.type === 'fill_in_the_blanks') {
        const blankElements = document.querySelectorAll(
          `input[name^="question-${index}-blank-"]`
        ) as NodeListOf<HTMLInputElement>;

        blankElements.forEach((element) => {
          if (element.value.trim() !== "") {
            answer.push(element.value.trim());
          }
        });
      }

      return {
        qqid: questionId,
        question: question.question,  // Optionally store the question text
        answer: answer,  // Store the answer as an array
        points: question.points
      };
    });

    const attempt = {
      taker: currentUser._id,
      quiz: qid,
      answers: answers,
      attempt_number: attemptNumber + 1,  // Increment the attempt number
      submittedDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }),
    };

    await saveAttempt(currentUser._id, attempt);

    // Navigate back to the quizzes page 
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  if (quiz && attemptNumber === quiz.max_attempts) {
    return <div>Max Attempts Reached</div>;
  }

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
      <ProtectedContent>
        <button
          className="btn btn-danger"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}
        >
          Cancel Attempt
        </button>
      </ProtectedContent>
    </div>
  );
}
