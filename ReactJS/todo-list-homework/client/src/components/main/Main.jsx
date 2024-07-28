import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import TodoItem from "./todoItem/TodoItem";
import AddNewTodo from "./addNewTodo/AddNewTodo";


export const baseURL = "http://localhost:3030/jsonstore";


export default function Main() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);


    useEffect(() => {
        (async function getTasks() {
            try {
                const response = await fetch(`${baseURL}/todos`);
                const responseResult = await response.json();
                const data = Object.values(responseResult);

                setTasks(data);

                setIsLoading(false);

            } catch (error) {
                console.log(error.message);
            }

        })();

    }, []);

    const onStatusChange = async (task) => {
        const newStatus = task.isCompleted ? false : true;

        try {
            const response = await fetch(`${baseURL}/todos/${task._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'aplication/json' },
                body: JSON.stringify({
                    _id: task._id,
                    text: task.text,
                    isCompleted: newStatus
                })
            });

            setTasks(tasks.map(t =>
                t._id === task._id ? { ...t, isCompleted: newStatus } : t
            ));

        } catch (error) {
            console.log(error.message);
        };

    }

    const showAddTodoForm = () => {
        setShowAddForm(true)
    }

    const closeAddTodoForm = () => {
        setShowAddForm(false);
    }

    const addTodoHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const todoText = formData.get('taskText');

        const newTodo = {
            text: todoText,
            isCompleted: false,
        };

        try {
            const response = await fetch(`${baseURL}/todos`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newTodo),
            });

            const responseData = await response.json();

            closeAddTodoForm();
            setTasks([responseData, ...tasks])
            
            
        } catch (error) {
            console.log(error.message)
        }

    };

    const removeTodoHandler = async (taskId) => {
        try {
            const response = await fetch(`${baseURL}/todos/${taskId}`, {
                method: 'DELETE',
            });

            setTasks(tasks => tasks.filter(t => t._id !== taskId));
            
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        // {/* <!-- Main content --> */}
        <main className="main">

            {/* <!-- Section container --> */}
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn" onClick={showAddTodoForm}>+ Add new Todo</button>
                </div>

                {showAddForm && <AddNewTodo onAdd={addTodoHandler} onClose={closeAddTodoForm} />}

                <div className="table-wrapper">

                    {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                    {isLoading && <Spinner />}

                    {/* <!-- Todo list table --> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task =>
                                <TodoItem
                                    key={task._id}
                                    task={task}
                                    onStatusChange={onStatusChange}
                                    onRemove={removeTodoHandler}
                                />
                            )}
                        </tbody>
                    </table>


                </div>
            </section>
        </main>
    )
}