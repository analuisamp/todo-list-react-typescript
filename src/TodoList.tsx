import { useState } from "react";
import TodoItemList from "./TodoItemList";
import "./TodoList.css"; 

const INPUT_ID = "task-input";

export type TaskItem = {
    id: number;
    text: string;
}

export default function TodoList() {
    const [ taskList, setTaskList ] = useState<TaskItem[]>([]);
    const [ nextTaskId, setNextTaskId ] = useState(1);
    const [ errorMessage, setErrorMessage ] = useState<string | null>(null);

    const onTaskAdd = () => {
        const inputElement = document.getElementById(INPUT_ID) as HTMLInputElement;
        const taskText = inputElement.value.trim();

        if(!taskText) {
            setErrorMessage('A tarefa não pode ser vazia!')
            return;
        }
 
        const newTask: TaskItem = { id: nextTaskId, text: taskText };

        setNextTaskId(nextTaskId + 1);
        setTaskList([...taskList, newTask]);
        inputElement.value = '';

    };

    const onTaskRemove = (task: TaskItem) =>{
        setTaskList([...taskList.filter(({ id }) => id !== task.id)]);
    };

    return(
        <>
            <input id={INPUT_ID} type="text" placeholder="Digite uma nova tarefa" />
            <button onClick={onTaskAdd}>Adicionar tarefa</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}  {/* Exibe mensagem de erro */}
            <ul>
                {taskList.map((task) => (
                    <TodoItemList key={task.id} onTaskRemove={onTaskRemove} task={task} />
                ))}
            </ul>
        </>
    );
}