import kanbasNavigation from "../../kanbasNavigation/kanbasNavigation.js";

function home(){
    return (`
    <div class="d-block d-md-none wd-full wd-bg-color-grey wd-flex-row-container wd-home">
            <a href="/kanbas/Account/index.html">
                <i class="fa fa-user" style="color: white;" aria-hidden="true"></i>
                Account                    </a>
            <a href="/kanbas/Dashboard/index.html">
                <i class="fa fa-tachometer" aria-hidden="true"></i>
                Dashboard</a>
            <a href="/kanbas/Courses/Home/index.html">
                <i class="fa fa-book" aria-hidden="true"></i>
                Courses
            </a>
            <a href="#">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                Calendar
            </a>
        </div>
        <div class="wd-flex-row-container">
            <div class="wd-bg-color-black d-none d-md-block">
               ${kanbasNavigation()}
            </div>
            <div class="wd-breadcrumb wd-home" >
                <i class="fa fa-bars" aria-hidden="true" style="position: absolute;top: 3px;left: 1px;"></i>
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">CS4500</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                  </nav>
                <hr/>
            </div>
            <div class="wd-flex-row-container wd-top">
                <div>
                    <ul class="wd-course-navigation d-none d-md-block">
                    <li class="wd-active"><a href="/kanbas/Courses/Home/index.html">Home</a></li>
                    <li><a href="/kanbas/Courses/Modules/index.html">Modules</a></li>
                    <li ><a href="/kanbas/Courses/Piazza/index.html">Piazza</a></li>
                    <li><a href="#">Zoom Meetings</a></li>
                    <li><a href="/kanbas/Courses/Assignments/index.html">Assignments</a></li>
                    <li><a href="#">Quizzes</a></li>
                    <li><a href="/kanbas/Courses/Grades/index.html">Grades</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Panopto Video</a></li>
                    <li><a href="#">Discussions</a></li>
                    <li><a href="#">Announcements</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Files</a></li>
                    <li><a href="#">Rubries</a></li>
                    <li><a href="#">Outcomes</a></li>
                    <li><a href="#">Collaborations</a></li>
                    <li><a href="#">Syllabus</a></li>
                    <li><a href="#">Settings</a></li>
                    
                </ul> </div>
                <div class="wd-home">
                    <button class="btn btn-secondary float-end"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                    <button class="btn btn-danger float-end" style="background-color: red;"><i class="fa fa-plus" aria-hidden="true"></i>Module</button>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                          Publish All
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                    <button class="btn btn-secondary float-end">Colapse All</button>
                    <button class="btn btn-secondary float-end">View Progress</button>
                    <br>
                    <hr/>
                    <ul class = "list-group">
                    <li class="list-group" style="border-left: solid green 3px; background-color: grey; color: white;">
                        <label style="margin-left: 20px;">Week0 Intro</label>
                        <ul class = "list-group">
                            <li class="list-group-item" style="margin-left: 0;">
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                LEARNING OBJECTIVES
                                <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute;"></i>    
                                <ul class = "list-group">
                                    <li class="list-group-item" style="margin-left: 30px;" >
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                        Introduction to the course
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>    
                                    </li>
                                    <li class="list-group-item" style="margin-left: 30px;"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>Learn what is Web Development
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item" style="margin-left: 30px;"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>Learn what is Web Development
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item" style="margin-left: 30px;"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>Creating a development environment
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item" style="margin-left: 30px;"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>Creating a Web Application
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item" style="margin-left: 30px;"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>Getting started with the 1st assignment
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                </ul>
                            </li>
                            <li class="list-group-item" style="margin-left: 0;" >
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                READING
                                <ul class = "list-group">
                                    <li class="list-group-item" style="margin-left: 30px;">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>Full Stack Developer - Chapter 1 - Introduction
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item" style="margin-left: 30px;">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                </ul>
                            </li>
                            <li class="list-group-item" style="margin-left: 0;">
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                SLIDES
                                <ul class = "list-group">
                                    <li class="list-group-item" style="margin-left: 30px;">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i><a href="">Introduction to Web Development</a>
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item" style="margin-left: 30px;">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i><a href="">Creating an HTTP server with Node.js</a>
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                  </li>
                                    <li class="list-group-item" style="margin-left: 30px;">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i><a href="">Creating a React Application Links to an external site</a>
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                   </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="list-group" style="border-left: solid green 3px; background-color: grey; color: white;">
                        <label style="margin-left: 20px;">  Week1 - HTML</label>

                        <ul class = "list-group">
                            <li class="list-group-item" style="margin-left: 0;">
                                LEARNING OBJECTIVES
                                <ul class = "list-group" >
                                    <li class="list-group-item">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                        Learn how to create user interfaces with HTML
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                        Keep working on assignment 1
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                        Deploy the assignment to Netlify
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                </ul>
                            </li>
                            <li class="list-group-item" style="margin-left: 0;">
                                READING
                                <ul class = "list-group">
                                    <li class="list-group-item">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                        <a href="">Full Stack Developer - Chapter 1 - Introduction</a>
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 20px;"></i>
                                        <a href="">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML Interfaces With HTML</a>
                                        <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute; margin-right: 20px;"></i>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px; right: 0; position: absolute;"></i>  
                                    </li>
                                </ul></div>
            </div>

            <div class="d-none d-lg-block wd-home wd-top" >
                <h4>Course Status</h4>
                <button type="button" class="btn btn-secondary">
                    <i class="fa fa-times-circle-o" aria-hidden="true"></i>Unpublish</button>
                <button type="button" class="btn btn-secondary" style="background-color: green;">
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>Published</button>
                <ul class="list-group-item">
                    <li class="list-group-item"><button type="button" class="btn btn-secondary">
                        <i class="fa fa-share-square-o" aria-hidden="true"></i>Importing existing content</button></li>
                    <li class="list-group-item"><button type="button" class="btn btn-secondary">
                        <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>Importing From Commons</button></li>
                    <li class="list-group-item"><button type="button" class="btn btn-secondary"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>Choose Home Page</button></li>
                    <li class="list-group-item"><button type="button" class="btn btn-secondary">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        View Course Stream</button></li>
                    <li class="list-group-item"><button type="button" class="btn btn-secondary"><i class="fa fa-bullhorn" aria-hidden="true"></i>New Announcement</button></li>
                    <li class="list-group-item"><button type="button" class="btn btn-secondary">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        New Analytics</button></li>
                    <li class="list-group-item"><button type="button" class="btn btn-secondary">
                        <i class="fa fa-bell-o" aria-hidden="true"></i>View Course Notifications</button></li>  
                </ul>
                <b >To Do</b>
                <hr/>
                <div>
                    <label style="color: red;"> Grade A1 - ENV-HTML</label>
                    <label style="color: grey;">100 points Sep 18 at 11:59pm</label>
                   
                </div>
                <div class="wd-flex-row-container" style="margin-top: 10px;">
                    <h4>Comming Up</h4>
                    <i class="fa fa-calendar-check-o float-end" aria-hidden="true"></i>
                    <a href="#" class="float-end">View Calendar</a>
                </div>
                <hr/>
                <ul class="list-group-item">
                    <li class="list-group-item"><a href="#">
                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>Lecture</a></li>
                    <li class="list-group-item"><label style="color: grey;">CS4550.12631.202410 Sep 7 at 11:45am</label></li>
                    <li class="list-group-item"><a href="#"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                        CS4550.12631.202410</a></li>
                    <li class="list-group-item"><label style="color: grey;">CS4550.12631.202410 Sep 11 at 11:45am</label></li>
                    <li class="list-group-item"><a href="#"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>CS5610.06.SP23 </a></li>
                    <li class="list-group-item"><label style="color: grey;">CS5610.06.SP23 Lecture Sep 11 at 6pm</label></li>
                </ul></div>
        </div>`);
}

export default home;