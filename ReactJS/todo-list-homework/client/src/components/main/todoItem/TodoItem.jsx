export default function ({ 
    task,
    onStatusChange,
    onRemove
 }) {

    return (
        <tr className={`todo ${task.isCompleted ? "is-completed" : ""}`}> 
            <td>{task.text}</td>
            <td>{task.isCompleted ? "Completed" : "Incomplete"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => onStatusChange(task)}>Change status</button>
                <button className="btn delete-btn" onClick={() => {onRemove(task._id)}}>Remove</button>
            </td>
        </tr>
    )
}