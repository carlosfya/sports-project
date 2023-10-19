import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/ToDoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";
function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);
 return (
   <div>
     <h1>Assignment 3</h1>
     <TodoList/>
     <TodoItem/>
     <ConditionalOutput/>
     <Styles/>
     <JavaScript/>
     <DynamicStyling/>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
   </div>
 );
}
export default Assignment3;