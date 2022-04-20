import React, {FC} from "react";
import {ITask} from "../interfaces";

interface Props {
    task: ITask,
    removeTask(taskRemove: string): void,
}

const ToDoTask: FC<Props> = ({task,removeTask}) => {

    return (
        <div className={'task'}>
            <div className="content">
                <span>{task.taskName}</span>
                <span>{String(task.priority)}</span>
            </div>
            <button onClick={()=>{removeTask(task.taskName)}}>X</button>
        </div>
    )
}

export default ToDoTask