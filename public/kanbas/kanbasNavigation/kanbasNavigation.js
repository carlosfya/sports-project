function kanbasNavigation(){
    const links = [
        {href:"/kanbas/Account/index.html",text:"Account",icon:"fa fa-user", style:"color: white;"}


    ];
    return `<ul class = "wd-kanbas-navigation">
    ${
        links.map(
            link => `
    <li>
        <a href="${link.href}">
            ${link.text}
        </a>
    </li>
    `
        ).join("")
    }
    <li>
        <img src="/images/nu.png"
        class="card-img-top" alt="...">
    </li>
    <li><a href="/kanbas/Account/index.html">
        <i class="fa fa-user" style="color: white;" aria-hidden="true"></i>
        Account                    </a></li>
    <li><a href="/kanbas/Dashboard/index.html">
        <i class="fa fa-tachometer" aria-hidden="true"></i>
        Dashboard</a></li>
    <li class="wd-active"><a href="/kanbas/Courses/Home/index.html">
        <i class="fa fa-book" aria-hidden="true"></i>
        Courses
    </a></li>
    <li><a href="#">
        <i class="fa fa-calendar" aria-hidden="true"></i>
        Calendar
    </a></li>
    <li><a href="#">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        Inbox</a></li>
    <li><a href="#"><i class="fa fa-clock-o" aria-hidden="true"></i>
        History</a></li>
    <li><a href="#"><i class="fa fa-desktop" aria-hidden="true"></i>Studio</a></li>
    <li><a href="#"><i class="fa fa-creative-commons" aria-hidden="true"></i>Commons</a></li>
    <li><a href="#"><i class="fa fa-question-circle-o" aria-hidden="true"></i>Help</a></li>
</ul>`
}; 

export default kanbasNavigation;