import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ProtectedContent from '../../Account/ProtectedContent';

export default function QuizDetails() {
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

  return (
    <div className="quiz-preview">
      <h2>Quiz Details</h2>
      <ul>
        <li><b>Quiz Type:</b> {quiz.quiz_type}</li>
        <li><b>Points:</b> {quiz.points}</li>
        <li><b>Assignment Group:</b> {quiz.assignment_group}</li>
        <li><b>Shuffle Answers:</b> {quiz.shuffle_answers === 'True' ? 'Yes' : 'No'}</li>
        <li><b>Time Limit:</b> {quiz.time_limit || '20 Minutes'}</li>
        <li><b>Multiple Attempts:</b> {quiz.multiple_attempts === 'True' ? 'Yes' : 'No'}</li>
        {quiz.multiple_attempts === 'True' && (
          <li><b>How Many Attempts:</b> {quiz.num_attempts || '1'}</li>
        )}
        <li><b>Show Correct Answers:</b> {quiz.show_correct === 'True' ? 'Yes' : 'No'}</li>
        <li><b>Access Code:</b> {quiz.access_code || 'None'}</li>
        <li><b>One Question at a Time:</b> {quiz.one_q_at_a_time === 'True' ? 'Yes' : 'No'}</li>
        <li><b>Webcam Required:</b> {quiz.webcam_required === 'True' ? 'Yes' : 'No'}</li>
        <li><b>Lock Questions After Answering:</b> {quiz.lock_q_after_answer === 'True' ? 'Yes' : 'No'}</li>
        <li><b>Due Date:</b> {new Date(quiz.due_date).toLocaleDateString('en-US')}</li>
        <li><b>Available Date:</b> {new Date(quiz.available_date).toLocaleDateString('en-US')}</li>
        <li><b>Until Date:</b> {new Date(quiz.available_until_date).toLocaleDateString('en-US')}</li>
      </ul>
      <button
        className="btn btn-secondary"
        onClick={() => (window.location.hash = `#/Kanbas/Courses/${cid}/Quizzes/`)}
      >
        Close
      </button>
      <ProtectedContent>
      <button
        className="btn btn-primary"
        onClick={() => (window.location.hash = `#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`)}
      >
        Edit
      </button>
      </ProtectedContent>
    </div>
  );
}


