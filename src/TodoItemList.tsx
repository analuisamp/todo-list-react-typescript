import { TaskItem } from "./TodoList";

type TodoItemListProps = {
  onTaskRemove: (task: TaskItem) => void;
  task: TaskItem;
};

export default function TodoItemList({
  onTaskRemove,
  task,
}: TodoItemListProps) {
  const { id, text } = task;

  const onClick = () => {
    onTaskRemove(task);
  };

  return (
    <div className="task-item-container" id={`task-${id}`}>
      <li className="task-item-text">
        {text}
      </li>
      <button className="remove-button" onClick={onClick}>
        remover tarefa
      </button>
    </div>
  );
}