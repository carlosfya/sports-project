import kanbasNavigation from "../../../kanbasNavigation/kanbasNavigation.js";

function AssignmentEditor(){
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
            <div class="wd-flex-row-container wd-full">
                <div class="wd-breadcrumb wd-home" style="margin-left: 10px;">
                    <i class="fa fa-bars" aria-hidden="true" style="position: absolute;top: 3px;left: 1px;"></i>
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">CS4500</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Assignments</li>
                      <li class="breadcrumb-item active" aria-current="page">A1-HTML</li>
                    </ol>
                  </nav>
                    <hr/>
                </div>
                <div class="content-container">
                    <ul class="wd-course-navigation d-none d-md-block">
                    <li><a href="/kanbas/Courses/Home/index.html">Home</a></li>
                    <li><a href="/kanbas/Courses/Modules/index.html">Modules</a></li>
                    <li ><a href="/kanbas/Courses/Piazza/index.html">Piazza</a></li>
                    <li><a href="#">Zoom Meetings</a></li>
                    <li class="wd-active"><a href="/kanbas/Courses/Assignments/index.html">Assignments</a></li>
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
    <div class="content-container wd-full" style="margin-left: 20px;">
                    
    <button class="btn btn-secondary float-end" type="button"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
    
    <button class="btn float-end" style="color: green;" type="button">Published</button><br/>
    <i class="fa fa-check-circle" aria-hidden="true" style="color: green; right: 0; position: absolute;top: 70px; margin-right: 120px;"></i>
    <hr/>
    <h4>Assignment Name</h4>
    <form action="/kanbas/Courses/Assignments/index.html">
    <div>
        <input class = "form-control" id = "assignmentName" title="This is the name of the assignment"value="A1 - HTML"placeholder = "Assignment1">
    </div>
    <textarea class = "form-control" cols = "50" rows="10">This is the description of the assignment</textarea>
    <br />
    <div class="wd-flex-row-container" style="margin-left: 100px;">
        Points: 
        <input class = "form-control" type="number" max="100" min="0" value="100">
    </div>
    
    <div class="wd-flex-row-container" style="margin-left: 100px;">
        Assignment Group
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Assignments
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
    </div>
    
    <div class="wd-flex-row-container" style="margin-left: 100px;">
        Display Grade as
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Percentage
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">decimal</a></li>
              <li><a class="dropdown-item" href="#">integer</a></li>
            </ul>
          </div>
    </div>

    <div class="wd-flex-row-container" style="margin-left: 100px;">
        Submission Type
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Type
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Online</a></li>
              <li><a class="dropdown-item" href="#">In Person</a></li>
            </ul>
          </div>
    </div>
    <div style="width: 50%; margin-left: 100px;">
            <li class="list-group">
                
                <ul class="list-group-item">
                    <li class="list-group">
                        <b>Assign to:</b>
                    </li>
                    <li class="list-group">
                        <input class = "form-control" type="text" placeholder="Everyone">
                    </li>
                    <li class="list-group">
                        <b>Due:</b>
                    </li>
                    <li class="list-group">
                        <li class="list-group"><input class = "form-control" type="date" value="2023-09-25" min="2023-09-07" max="2023-09-28"></li>
                    </li>
                    <div class="wd-flex-row-container">
                        <div style="flex-direction: column;">
                            <li class="list-group"> <b>Available From:</b></li>
                            <li class="list-group">
                                <input class = "form-control" type="date" value="2023-09-21" min="2023-09-07" max="2023-09-28">
                            </li>
                        </div>
                        <div style="flex-direction: column;">
                            <li class="list-group"><b> Until:</b></li>
                            <li class="list-group"><input class = "form-control" type="date" value="2023-09-25" min="2023-09-07" max="2023-09-28"></li>
                        </div>
                    </div>
                    <button class="form-control" style="text-align: center; background-color: rgb(209, 200, 200);">Add</button>
                </ul>
            </li>

    </div>
    <div class="wd-flex-row-container" style="right: 10; position: absolute;">
        <button class = "btn float-end">Cancel</button>
        <button class = "btn btn-danger float-end">Save</button>
    </div>

    </form>
</div>`);
}

export default AssignmentEditor;