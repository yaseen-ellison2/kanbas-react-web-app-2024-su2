export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS1101 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/supervised.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS2202 Supervised Machine Learning
                        </a>
                        <p className="wd-dashboard-course-title">
                            Supervised ML Techniques
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/algo.webp" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS3303 Data Structures and Algorithms
                        </a>
                        <p className="wd-dashboard-course-title">
                            Efficient data management and algorithm design.
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/opsys.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS4404 Operating Systems
                        </a>
                        <p className="wd-dashboard-course-title">
                            Fundamentals of OS design and functionality.
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/dbsys.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS5505 Database Systems
                        </a>
                        <p className="wd-dashboard-course-title">
                            Principles of database design and SQL.
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/compnet.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS6606 Computer Networks
                        </a>
                        <p className="wd-dashboard-course-title">
                            Networking principles and protocols.
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/unsup.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS7707 Unsupervised Machine Learning
                        </a>
                        <p className="wd-dashboard-course-title">
                            Techniques for clustering and pattern discovery.
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
            </div>
            </div>
    );
}
