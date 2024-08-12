import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import * as client from "./Courses/client";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";
import Session from "./Account/Session";
import ProtectedRoute from "./Account/ProtectedRoute";


export default function Kanbas() {
    
    const [courses, setCourses] = useState<any[]>([]);
    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);


    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });

    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        setCourses([...courses, newCourse]);
    };


    const deleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId);
        setCourses(courses.filter((course: any) => course._id !== courseId));
    };

    const updateCourse = async () => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c: any) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
        <Session>
        <div id="wd-kanbas" className="h-100">
            <div className="d-flex h-100">
                <div className="d-none d-md-block bg-black">
                    <KanbasNavigation />
                </div>
                <div className="flex-fill p-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account/*" element={<Account/>} />
                        <Route path="Dashboard" element={
                            <ProtectedRoute>
                            <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />
                            </ProtectedRoute>
                            } 
                            />
                            
                        <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute> } />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
        </Session>
        </Provider>
    );
}

//Suggestion at 1:20:00 in July 25 class.


// This was mine below, changed it to encorporate what he did
// export default function Kanbas() {
//     return (
//         <div id="wd-kanbas">
//             <KanbasNavigation />
//             <div className="wd-main-content-offset p-3">
//                     <Routes>
//                         <Route path="/" element={<Navigate to="Dashboard" />} />
//                         <Route path="Dashboard" element={<Dashboard />} />
//                         <Route path="Courses/:id/*" element={<Courses />} />
//                     </Routes>
//                 </div>
//         </div>
//     );
// }
