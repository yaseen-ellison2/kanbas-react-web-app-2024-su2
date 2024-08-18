import React from 'react';

export default function QuizDetailsTab({ quiz, setQuiz }: { quiz: any; setQuiz: any }) {
  // Handle changes in the "Multiple Attempts" select box
  const handleMultipleAttemptsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const multipleAttempts = e.target.value;
    // Ensures num_attempts is set to 1 if "Multiple Attempts" is "No"
    const numAttempts = multipleAttempts === "True" ? (quiz.num_attempts || 1) : 1;
    setQuiz({ ...quiz, multiple_attempts: multipleAttempts, num_attempts: numAttempts });
  };

  // Handle changes in the number of attempts input when "Multiple Attempts" is "Yes"
  const handleNumAttemptsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numAttempts = parseInt(e.target.value, 10) || 1; // Ensuring a minimum of 1 attempt
    setQuiz({ ...quiz, num_attempts: numAttempts });
  };

  return (
    <div id="wd-quizzes-editor">
      {/* Quiz Name */}
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">Quiz Name</label>
        <input
          type="text"
          className="form-control"
          id="input1"
          value={quiz.title}
          onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
        />
      </div>

      {/* Quiz Instructions */}
      <label htmlFor="wd-description" className="form-label">Quiz Instructions</label>
      <textarea
        className="form-control"
        id="wd-description"
        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
        rows={5}
        value={quiz.description}
      />

      {/* Points */}
      <div className="row m-3">
        <div className="col-4">
          <label>Points</label>
        </div>
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            id="wd-points"
            value={`${quiz.points}`}
            onChange={(e) => setQuiz({ ...quiz, points: e.target.value })}
          />
        </div>
      </div>

      {/* Quiz Type */}
      <div className="row m-3">
        <div className="col-4">
          <label>Quiz Type</label>
        </div>
        <div className="col-8">
          <select
            className="form-select"
            value={quiz.quiz_type}
            onChange={(e) => setQuiz({ ...quiz, quiz_type: e.target.value })}
          >
            <option value="GRADED_QUIZ">Graded Quiz</option>
            <option value="PRACTICE_QUIZ">Practice Quiz</option>
            <option value="GRADED_SURVEY">Graded Survey</option>
            <option value="UNGRADED_SURVEY">Ungraded Survey</option>
          </select>
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row m-3">
        <div className="col-4">
          <label>Assignment Group</label>
        </div>
        <div className="col-8">
          <select
            className="form-select"
            value={quiz.assignment_group}
            onChange={(e) => setQuiz({ ...quiz, assignment_group: e.target.value })}
          >
            <option value="QUIZ">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="PROJECT">Project</option>
          </select>
        </div>
      </div>

      {/* Access Code */}
      <div className="row m-3">
        <div className="col-4">
          <label>Access Code</label>
        </div>
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            value={quiz.access_code || ''}
            onChange={(e) => setQuiz({ ...quiz, access_code: e.target.value })}
          />
        </div>
      </div>

      {/* Shuffle Answers */}
      <div className="row m-3">
        <div className="col-4">
          <label>Shuffle Answers</label>
        </div>
        <div className="col-8">
          <select
            className="form-select"
            value={quiz.shuffle_answers}
            onChange={(e) => setQuiz({ ...quiz, shuffle_answers: e.target.value })}
          >
            <option value="True">Yes</option>
            <option value="False">No</option>
          </select>
        </div>
      </div>

      {/* Time Limit */}
      <div className="row m-3">
        <div className="col-4">
          <label>Time Limit (Minutes)</label>
        </div>
        <div className="col-8">
          <input
            type="number"
            className="form-control"
            value={quiz.time_limit || ''}
            onChange={(e) => setQuiz({ ...quiz, time_limit: e.target.value })}
          />
        </div>
      </div>

      {/* Multiple Attempts */}
      <div className="row m-3">
        <div className="col-4">
          <label>Multiple Attempts</label>
        </div>
        <div className="col-8">
          <select
            className="form-select"
            value={quiz.multiple_attempts}
            onChange={handleMultipleAttemptsChange}
          >
            <option value="False">No</option>
            <option value="True">Yes</option>
          </select>
        </div>
      </div>

      {/* Conditional rendering for Number of Attempts */}
      {quiz.multiple_attempts === "True" && (
        <div className="row m-3">
          <div className="col-4">
            <label>Number of Attempts Allowed</label>
          </div>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              value={quiz.num_attempts || 1}
              onChange={handleNumAttemptsChange}
              min="1"
            />
          </div>
        </div>
      )}

      {/* Show Correct Answers */}
      <div className="row m-3">
        <div className="col-4">
          <label>Show Correct Answers</label>
        </div>
        <div className="col-8">
          <select
            className="form-select"
            value={quiz.show_correct}
            onChange={(e) => setQuiz({ ...quiz, show_correct: e.target.value })}
          >
            <option value="False">No</option>
            <option value="True">Yes</option>
          </select>
        </div>
      </div>

      {/* One Question at a Time */}
      <div className="row m-3">
        <div className="col-4">
          <label>One Question at a Time</label>
        </div>
        <div className="col-8">
          <select
            className="form-select"
            value={quiz.one_q_at_a_time}
            onChange={(e) => setQuiz({ ...quiz, one_q_at_a_time: e.target.value })}
          >
            <option value="True">Yes</option>
            <option value="False">No</option>
          </select>
        </div>
      </div>

      {/* Webcam Required */}
      <div className="row m-3">
        <div className="col-4">
          <label>Webcam Required</label>
        </div>
        <div className="col-8">
          <select
            className="form-select"
            value={quiz.webcam_required}
            onChange={(e) => setQuiz({ ...quiz, webcam_required: e.target.value })}
          >
            <option value="False">No</option>
            <option value="True">Yes</option>
          </select>
        </div>
      </div>

      {/* Lock Questions After Answering */}
      <div className="row m-3">
        <div className="col-4">
          <label>Lock Questions After Answering</label>
        </div>
        <div className="col-8">
          <select
            className="form-select"
            value={quiz.lock_q_after_answer}
            onChange={(e) => setQuiz({ ...quiz, lock_q_after_answer: e.target.value })}
          >
            <option value="False">No</option>
            <option value="True">Yes</option>
          </select>
        </div>
      </div>

      {/* Due Date, Available Date, and Until Date */}
      <div className="row m-3">
        <div className="col-4">
          <label>Assign</label>
        </div>
        <div className="col-8 border rounded">
          <div className="row-12 m-3">
            <label htmlFor="input-assign" className="form-label"><b>Assign to</b></label>
            <input
              type="text"
              className="form-control"
              id="input-assign"
              value="Everyone"
            />
          </div>
          <div className="row-12 m-3">
            <label htmlFor="input-due" className="form-label"><b>Due</b></label>
            <input
              type="date"
              className="form-control"
              id="input-due"
              value={quiz.due_date}
              onChange={(e) => setQuiz({ ...quiz, due_date: e.target.value })}
            />
          </div>
          <div className="row m-3">
            <div className="col-6">
              <label htmlFor="input-available" className="form-label"><b>Available from</b></label>
              <input
                type="date"
                className="form-control"
                id="input-available"
                value={quiz.available_date}
                onChange={(e) => setQuiz({ ...quiz, available_date: e.target.value })}
              />
            </div>
            <div className="col-6">
              <label htmlFor="input-until" className="form-label"><b>Until</b></label>
              <input
                type="date"
                className="form-control"
                id="input-until"
                value={quiz.available_until_date}
                onChange={(e) => setQuiz({ ...quiz, available_until_date: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

