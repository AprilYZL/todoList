import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import {ITask} from "./interfaces";
import ToDoTask from "./Component/ToDoTask";
//TO DO
const App: FC = () => {
    const [task, setTask] = useState<string>('')
    const [priority, setPriority] = useState<number>(0)
    const [toDoList, setTodoList] = useState<ITask[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'task') {
            setTask(event.target.value)
        } else {
            setPriority(Number(event.target.value))
        }
    }

    const addTask = (): void => {
        const newTask = {taskName: task, priority: priority}
        setTodoList([...toDoList, newTask])
        setTask('')
        setPriority(0)
    }

    const removeTask = (taskRemove:string):void =>{
        setTodoList(toDoList.filter((task)=>{
            return task.taskName !== taskRemove
        }))
    }
    return (
        <div className="App">
            <div className={'header'}>
                    <input type="text" placeholder={'Task...'} name={'task'} onChange={handleChange}/>
                    <input type="number" name={'priority'} onChange={handleChange} value={priority} placeholder={'Priority Number'}/>
                    <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList">
                {toDoList.map((task,key)=>{
                    return <ToDoTask key={key} task={task} removeTask={removeTask}/>
                })}
            </div>
        </div>
    );
}

export default App;
