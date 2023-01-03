import React from "react";
const TodoContext = React.createContext(
    {
        todoList : [],
        newTodo: (item) => {},
        editTodo: (item) => {},
        deleteTodo: (item) => {},

    }
)

export default TodoContext;




