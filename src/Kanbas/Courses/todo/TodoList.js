import TodoItem from "./ToDoItem";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <b>ToDo:</b>
     <hr/>
     <ul className="list-group" style={{width: "250px"}}>
       {
         todos.map(todo => {
           return(<TodoItem todo={todo}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;