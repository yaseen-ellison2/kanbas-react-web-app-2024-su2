import React, { useState } from 'react';

type QuestionType = 'multiple_choice' | 'true_false' | 'fill_in_the_blanks';

interface Question {
  //_id: string | null;
  question: string;
  answer: string[]; // Use 'answer' instead of 'answers'
  quiz: string;
  points: number;
  type: QuestionType;
  options: string[];
  numBlanks?: number;
}

interface Quiz {
  questions: Question[];
  _id: string;
}

type QuizQuestionsTabProps = {
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
};

export default function QuizQuestionsTab({ quiz, setQuiz }: QuizQuestionsTabProps) {
  const [editingQuestionIndex, setEditingQuestionIndex] = useState<number | null>(null);

  const initializeQuestion = (type: QuestionType) => {
    const options = type === 'true_false' ? ['True', 'False'] : [];
    const answer: string[] = [];
    return { options, answer };
  };

  const handleAddQuestion = () => {
    const initialSettings = initializeQuestion('multiple_choice');
    
    const newQuestion: Question = {
      //_id: null,
      question: '',
      ...initialSettings,
      quiz: quiz._id,
      points: 0,
      type: 'multiple_choice',
    };
    setQuiz(prevQuiz => ({
      ...prevQuiz,
      questions: [...prevQuiz.questions, newQuestion],
    }));
    setEditingQuestionIndex(quiz.questions.length);
  };

  const handleEditQuestion = (index: number) => {
    setEditingQuestionIndex(index);
  };

  const handleQuestionChange = (index: number, field: keyof Question, value: any) => {
    setQuiz(prevQuiz => {
      const updatedQuestions = prevQuiz.questions.map((q, i) => {
        if (i === index) {
          if (field === 'type') {
            const { options, answer } = initializeQuestion(value as QuestionType);
            return { ...q, [field]: value, options, answer }; // Reinitialize options based on type
          } else if (field === 'answer') {
            const updatedAnswer = Array.isArray(q.answer) ? [...q.answer] : [];
            
            if (value.index >= 0 && value.index < updatedAnswer.length) {
              updatedAnswer[value.index] = value.newAnswer;
            } else {
              updatedAnswer.push(value.newAnswer);
            }
            
            return { ...q, answer: updatedAnswer };
          } else if (field === 'numBlanks') {
            const numBlanks = parseInt(value, 10);
            const updatedOptions = [`${numBlanks}`]; // Store the number of blanks in options
            return { ...q, numBlanks, options: updatedOptions };
          } else {
            return { ...q, [field]: value };
          }
        }
        return q;
      });
      return { ...prevQuiz, questions: updatedQuestions };
    });
  };
  
  const handleAddOption = (index: number) => {
    setQuiz(prevQuiz => {
      const updatedQuestions = prevQuiz.questions.map((q, i) => {
        if (i === index) {
          return { ...q, options: [...q.options, ''] };
        }
        return q;
      });
      return { ...prevQuiz, questions: updatedQuestions };
    });
  };

  const handleAddAnswer = (index: number) => {
    setQuiz(prevQuiz => {
      const updatedQuestions = prevQuiz.questions.map((q, i) => {
        if (i === index) {
          const updatedAnswer = Array.isArray(q.answer) ? [...q.answer] : [];
          updatedAnswer.push('');  // Add an empty string for a new answer
          return { ...q, answer: updatedAnswer };
        }
        return q;
      });
      return { ...prevQuiz, questions: updatedQuestions };
    });
  };

  const handleSaveQuestion = () => {
    console.log('Saving quiz with answers:', quiz.questions.map(q => q.answer));
    setEditingQuestionIndex(null);
  };

  const handleRemoveQuestion = (index: number) => {
    setQuiz(prevQuiz => ({
      ...prevQuiz,
      questions: prevQuiz.questions.filter((_, i) => i !== index)
    }));
  };

  const handleRemoveOption = (index: number, optionIndex: number) => {
    setQuiz(prevQuiz => {
      const updatedQuestions = prevQuiz.questions.map((q, i) => {
        if (i === index) {
          const updatedOptions = q.options.filter((_, oi) => oi !== optionIndex);
          return { ...q, options: updatedOptions };
        }
        return q;
      });
      return { ...prevQuiz, questions: updatedQuestions };
    });
  };

  const handleRemoveAnswer = (index: number, answerIndex: number) => {
    setQuiz(prevQuiz => {
      const updatedQuestions = prevQuiz.questions.map((q, i) => {
        if (i === index) {
          const updatedAnswer = Array.isArray(q.answer)
            ? q.answer.filter((_, ai) => ai !== answerIndex)
            : [];
          return { ...q, answer: updatedAnswer };
        }
        return q;
      });
      return { ...prevQuiz, questions: updatedQuestions };
    });
  };

  return (
    <div>
      <h3>Questions (Total Points: {quiz.questions.reduce((sum, q) => sum + q.points, 0)})</h3>
      <ul className="list-group">
        {quiz.questions.map((q, index) => (
          <li key={index} className="list-group-item">
            {editingQuestionIndex === index ? (
              <div>
                <select value={q.type} onChange={e => handleQuestionChange(index, 'type', e.target.value as QuestionType)} className="form-select mb-2">
                  <option value="true_false">True/False</option>
                  <option value="multiple_choice">Multiple Choice</option>
                  <option value="fill_in_the_blanks">Fill in the Blanks</option>
                </select>
                <input type="text" value={q.question} onChange={e => handleQuestionChange(index, 'question', e.target.value)} placeholder="Question" className="form-control mb-2" />
                <input type="number" value={q.points} onChange={e => handleQuestionChange(index, 'points', parseInt(e.target.value, 10))} placeholder="Points" className="form-control mb-2" />

                {q.type === 'fill_in_the_blanks' && (
                  <input
                    type="number"
                    value={q.numBlanks || ''}
                    onChange={e => handleQuestionChange(index, 'numBlanks', e.target.value)}
                    placeholder="Number of Blanks"
                    className="form-control mb-2"
                  />
                )}

                {q.options && q.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="input-group mb-2">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleQuestionChange(index, 'options', [...q.options.slice(0, optionIndex), e.target.value, ...q.options.slice(optionIndex + 1)])}
                      className="form-control"
                      placeholder="Option"
                    />
                    <button className="btn btn-danger" onClick={() => handleRemoveOption(index, optionIndex)}>Remove Option</button>
                  </div>
                ))}
                {q.type === 'multiple_choice' && (
                  <button className="btn btn-primary mb-2" onClick={() => handleAddOption(index)}>Add Option</button>
                )}

                {Array.isArray(q.answer) && q.answer.length > 0 ? (
                  q.answer.map((ans, answerIndex) => (
                    <div key={answerIndex} className="input-group mb-2">
                      <input
                        type="text"
                        value={ans}
                        onChange={(e) => handleQuestionChange(index, 'answer', { index: answerIndex, newAnswer: e.target.value })}
                        className="form-control"
                        placeholder="Correct Answer"
                      />
                      <button className="btn btn-danger" onClick={() => handleRemoveAnswer(index, answerIndex)}>Remove Answer</button>
                    </div>
                  ))
                ) : (
                  <div>No answers available.</div>
                )}
                <button className="btn btn-primary mb-2" onClick={() => handleAddAnswer(index)}>Add Answer</button>

                <button className="btn btn-success" onClick={handleSaveQuestion}>Save</button>
                <button className="btn btn-secondary" onClick={() => setEditingQuestionIndex(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{q.question} ({q.points} Points)</span>
                <button className="btn btn-primary" onClick={() => handleEditQuestion(index)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleRemoveQuestion(index)}>Remove</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleAddQuestion}>Add New Question</button>
    </div>
  );
}
