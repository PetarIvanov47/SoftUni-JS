export default function AddNewTodo({ 
    onAdd,
    onClose,
 }) {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Add Todo</h2>
                    </header>
                    <form onSubmit={onAdd}>

                        <div className="form-row">
                            <div className="form-group">
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-list-check"></i></span>
                                    <input id="taskText" name="taskText" type="text" required/>
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="form-btn add-todo" type="submit">Add</button>
                            <button id="action-cancel" className="form-btn form-cancel" type="button" onClick={onClose}>Cancel</button>
                        </div>
                    </form>
                </div > 
            </div >
        </div >
    )
};