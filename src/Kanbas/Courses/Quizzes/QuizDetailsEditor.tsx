import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react"
import { addQuiz, updateQuiz } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";

import { quizzes } from "../../Database";

export default function QuizDetailsEditor(
) {

  const { cid, qid } = useParams();
  //const { quizzes } = useSelector((state: any) => state.quizzesReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quiz, setQuiz] = useState<any>({
    title: 'New Quiz',
    description: "New Description",
    points: 100,
    due_date: new Date().toISOString().split("T")[0],
    available_date: new Date().toISOString().split("T")[0],
    available_until_date: new Date().toISOString().split("T")[0],
    quiz_type: "Graded Quiz",
    assignment_group: "Quiz",
    shuffle_answers: "True",
    time_limit: "20",
    multiple_attempts: "False",
    show_correct: "False",
    access_code: "abc123",
    one_q_at_a_time: "False",
    webcam_required: "False",
    lock_q_after_answer: "False",
    questions: [
    {
      "_id": "qq101",
      "question": "What is the Problem",
      "answer": "A brief history of rocketry and space exploration.",
      "quiz": "Q101"
    },
    {
      "_id": "qq102",
      "name": "Rocket Propulsion Fundamentals",
      "answer": "Basic principles of rocket propulsion.",
      "quiz": "Q101"
    },
    {
      "_id": "qq103",
      "name": "Rocket Engine Types",
      "answer": "Overview of different types of rocket engines.",
      "quiz": "Q101"
    }
  ]
  });

  const handleSaveQuiz = () => {
    if (qid !== 'New') {
      dispatch(updateQuiz(quiz));
    } else {
      dispatch(addQuiz({ ...quiz, course: cid }))
    }
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  }


  //useEffect Hook: fetch quiz if editing
  useEffect(() => {
    if (qid !== 'New') { //check if id != New
      const current = quizzes.find((quiz: any) =>
        quiz._id === qid); //find correct quiz to update via matching id
      setQuiz(current)
      //set state of found quiz                     
    }
  }, [qid])


  return (
    <div>
      <div id="wd-quizzes-editor">
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">
            Quiz Name</label>
          <input type="text" className="form-control"
            id="input1" value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
          />
        </div>
        <label htmlFor="wd-description" className="form-label">
          Quiz Instructions</label>
        <textarea className="form-control" id="wd-description"
          onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
          rows={5} value={quiz.description} />

        <div className="row m-3">
          <div className="col-4 ">
            <a>Points</a>
          </div>
          <div className="col-8 ">
            <input type="text" className="form-control"
              id="wd-points" value={`${quiz.points}`}
              onChange={(e) => setQuiz({ ...quiz, points: e.target.value })
              } />
          </div>
        </div>

        <div className="row m-3">
          <div className="col-4">
            <a>Quiz Group</a>
          </div>
          <div className="col-8 ">
            <select className="form-select">
              <option selected>ASSIGNMENTS</option>
              <option value="OTHER">Other</option>
              
            </select>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-4 ">
            <a>Display Grade as</a>
          </div>
          <div className="col-8 ">
            <select className="form-select">
              <option selected>Percentage</option>
              <option value="POINTS">Points</option>
            </select>
          </div>
        </div>
        {/* <div className="row m-3">
          <div className="col-4">
            <a>Submission Type</a>
          </div>
          <div className="col-8 border rounded">
            <div className="row-12 m-3">
              <select className="form-select">
                <option selected value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option></select>
            </div>
            <div className="row-12 m-3">
              <label><b>Online Entry Options</b></label><br /><br />
              <input type="checkbox" name="check-genre" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br /><br />
              <input type="checkbox" name="check-genre" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br /><br />
              <input type="checkbox" name="check-genre" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br /><br />
              <input type="checkbox" name="check-genre" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br /><br />
              <input type="checkbox" name="check-genre" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label><br /><br />
            </div>
          </div>
        </div> */}
        
        <div className="row m-3">
          <div className="col-4 ">
            <a>Assign</a>
          </div>
          <div className="col-8 border rounded">
            <div className="row-12 m-3">
              <label htmlFor="input-assign" className="form-label"><b>
                Assign to</b></label>
              <input type="text" className="form-control"
                id="input-assign" value="Everyone" />
            </div>
            <div className="row-12 m-3">
              <label htmlFor="input-due" className="form-label"><b>
                Due</b></label>
              <input type="date" className="form-control"
                id="input-due" value={`${quiz.due_date}`}
                onChange={(e) => setQuiz({ ...quiz, due_date: e.target.value })
                } />
            </div>
            <div className="row m-3">
              <div className="col-6 ">
                <label htmlFor="input-available" className="form-label"><b>
                  Available from</b></label>
                <input type="date" className="form-control"
                  id="input-available" value={`${quiz.available_date}`}
                  onChange={(e) => setQuiz({ ...quiz, available_date: e.target.value })
                  } />
              </div>
              <div className="col-6 ">
                <label htmlFor="input-until" className="form-label"><b>
                  Until</b></label>
                <input type="date" className="form-control"
                  id="input-available" value={`${quiz.available_until_date}`}
                  onChange={(e) => setQuiz({ ...quiz, available_until_date: e.target.value })
                  } />
              </div>
            </div>

          </div>
        </div>
        <hr />

        <button
          id="savebut"
          className="btn btn-md btn-danger me-1  
                        float-end"
          onClick={handleSaveQuiz}
        >
          Save
        </button>
        <button id="cancelbut" className="btn btn-md btn-secondary me-1 float-end" onClick={() => window.location.hash = `#/Kanbas/Courses/${cid}/Quizzes/`}>
          Cancel
        </button>
      </div>
    </div>
  );
}