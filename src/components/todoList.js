import React, { useState } from 'react';
function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div>
            <div >  

                {  <div className="p-3 todo row" style={{ boxShadow: "  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}>
                    <div className="float-left col-lg-8">
                    {/* style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} */}
                        {todo.text}
                    </div>
                    <div className="text-right col-lg-4">
                        <button type="submit" className=" btn btn-success mr-3" onClick={() => completeTodo(index)}>
                            Complete
                       </button>
                        <button type="submit" className=" btn btn-danger" onClick={() => removeTodo(index)}>
                            Delete
                </button>
                    </div>
                </div>  }

            </div>
        </div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (

        <div className="ui container">
            <div className="row">
                <div className="col-lg-12 text-center border-success p-4">
                    <h1 className="pb-4">Please Add Your Todo Items</h1>
                    <div className="col-lg-8 ml-auto mr-auto">
                        <form className="d-flex text-center ui action input">
                            <input
                                type="text"
                                className="input"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            <button type="submit" className=" btn btn-primary" onClick={handleSubmit} >
                                Add Item
                        </button>
                        </form>
                       
                    </div>
                   
                </div>
            </div>
            
        </div>

    );
}

function TodoList() {
    const [todos, setTodos] = useState([

    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}

            </div>
        </div>
    );
}

export default TodoList;