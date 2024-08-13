import { useParams, useLocation, Link } from "react-router-dom";
import { courses } from "../../Database";
import "./index.css";

export default function CoursesNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 position-fixed bottom-1 top-1 d-none d-lg-block bg-white z-2">
            {links.map((link) => (
                <Link
                    key={link}
                    to={`/Kanbas/Courses/${cid}/${link}`}
                    className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}

