export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/reactjs.webp" width="100%" />
                            <div className = "card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1234 React JS
                                </h5>
                                    <p className="card-text">
                                    Full Stack software developer
                                </p>
                                    <button className="btn btn-primary"> Go </button>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/algo.webp" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2202 Data Structures and Algorithms
                                    </h5>
                                    <p className="card-text">
                                        Data Management & Algo design.
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/supervised.png" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3303 Supervised ML
                                    </h5>
                                    <p className="card-text">
                                        Supervised ML Techniques
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/opsys.png" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4404 Operating Systems
                                    </h5>
                                    <p className="card-text">
                                        Fundamentals of OS design and functionality.
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/dbsys.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5505 Database Systems
                                    </h5>
                                    <p className="card-text">
                                        Principles of database design and SQL.
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/compnet.png" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS6606 Computer Networks
                                    </h5>
                                    <p className="card-text">
                                        Networking principles and protocols.
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/unsup.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS7707 Unsupervised ML
                                    </h5>
                                    <p className="card-text">
                                        Techniques for clustering and pattern discovery.
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}
