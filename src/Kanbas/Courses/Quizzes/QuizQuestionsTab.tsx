import React, { useState } from 'react';

export default function QuizQuestionsTab({
  quiz,
  setQuiz,
}: {
  quiz: any;
  setQuiz: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [editingQuestionIndex, setEditingQuestionIndex] = useState<number | null>(null);

  const handleAddQuestion = () => {
    const newQuestion = {
      _id: null, // Temporary ID or keep null until saved
      question: '',
      answer: '',
      quiz: quiz._id,
      points: 0, // Add a points field to each question
      type: 'multiple_choice', // Default to multiple choice
      options: [], // Add options for multiple choice questions
    };
    setQuiz((prevQuiz: any) => ({
      ...prevQuiz,
      questions: [...prevQuiz.questions, newQuestion],
    }));
    setEditingQuestionIndex(quiz.questions.length); // Set the new question to be edited
  };

  const handleEditQuestion = (index: number) => {
    setEditingQuestionIndex(index);
  };

  const handleRemoveQuestion = (index: number) => {
    const updatedQuestions = quiz.questions.filter((_: any, i: number) => i !== index);
    setQuiz((prevQuiz: any) => ({
      ...prevQuiz,
      questions: updatedQuestions,
    }));
  };

  const handleSaveQuestion = () => {
    setEditingQuestionIndex(null); // Exit edit mode after saving
  };

  const handleQuestionChange = (index: number, field: string, value: any) => {
    const updatedQuestions = quiz.questions.map((q: any, i: number) =>
      i === index ? { ...q, [field]: value } : q
    );
    setQuiz((prevQuiz: any) => ({
      ...prevQuiz,
      questions: updatedQuestions,
    }));
  };

  const totalPoints = quiz.questions.reduce((sum: number, q: any) => sum + (q.points || 0), 0);

  return (
    <div>
      <h3>Questions (Total Points: {totalPoints})</h3>
      <ul className="list-group">
        {quiz.questions.length > 0 ? (
          quiz.questions.map((q: any, index: number) => (
            <li key={index} className="list-group-item">
              {editingQuestionIndex === index ? (
                <div>
                  <select
                    value={q.type}
                    onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
                    className="form-select mb-2"
                  >
                    <option value="true_false">True/False</option>
                    <option value="multiple_choice">Multiple Choice</option>
                    <option value="fill_in_the_blanks">Fill in Multiple Blanks</option>
                  </select>
                  <input
                    type="text"
                    value={q.question}
                    onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                    placeholder="Question"
                    className="form-control mb-2"
                  />
                  <input
                    type="number"
                    value={q.points}
                    onChange={(e) => handleQuestionChange(index, 'points', parseInt(e.target.value))}
                    placeholder="Points"
                    className="form-control mb-2"
                  />
                  <button className="btn btn-success" onClick={handleSaveQuestion}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => setEditingQuestionIndex(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <span>
                    {q.question} ({q.points} Points)
                  </span>
                  <button className="btn btn-primary ms-2" onClick={() => handleEditQuestion(index)}>
                    Edit
                  </button>
                  <button className="btn btn-danger ms-2" onClick={() => handleRemoveQuestion(index)}>
                    Remove
                  </button>
                </div>
              )}
            </li>
          ))
        ) : (
          <li className="list-group-item">No questions added yet.</li>
        )}
      </ul>
      <button className="btn btn-primary mt-3" onClick={handleAddQuestion}>
        New Question
      </button>
    </div>
  );
}




