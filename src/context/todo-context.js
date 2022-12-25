import React from "react";
const TodoContext = React.createContext(
    {
        todoList : [],
        newTodo: (item) => {},
        editTodo: () => {},
        deleteTodo: () => {},

    }
)

export default TodoContext;




