const TodoItem = (
    {
      todo = {
        done: true,
        title: <label style={{ color: 'red' }}> Grade A1 - ENV-HTML</label>,
        subtitle: <label style={{ color: 'grey' }}>100 points Sep 18 at 11:59pm</label>,
        status: 'COMPLETED'
      }
    }) => {
    return (
      <li className="list-group-item" style={{fontSize: "16px"}}>
        <input type="checkbox"
               defaultChecked={todo.done}/>
        &nbsp;
        {todo.title}
        <label style={{color: "grey"}}>{todo.subtitle}</label>
        ({todo.status})
      </li>
    );
   }
   export default TodoItem;