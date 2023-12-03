import { useSelector } from "react-redux";


function Title(){
    const { currentUser } = useSelector((state) => state.user);
    return(
        <div style={{display: "flex"}}>
            <h2>Boston Sports</h2>
            Logged in as:
            {currentUser.username}
        </div>
    );
}

export default Title;