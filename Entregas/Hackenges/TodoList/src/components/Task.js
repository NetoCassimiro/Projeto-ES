import {FaTimes} from 'react-icons/fa'

function Task({ task, onDelete, toggleReminder}) {

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>toggleReminder(task.id)}>
            <h3>{task.text} <FaTimes onClick={()=> onDelete(task.id)}/></h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
