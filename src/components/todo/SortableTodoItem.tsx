import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Todo } from '../../stores/todoSlice';

type SortableTodoItemProps = {
  todo: Todo;
  index: number;
};

function SortableTodoItem({ todo, index }: SortableTodoItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <td>{index + 1}</td>
      <td className={todo.completed ? 'todo-text completed' : 'todo-text'}>{todo.text}</td>
      <td>
        <input type="checkbox" checked={todo.completed} onChange={() => {}} />
      </td>
      <td>
        <button className="action-btn edit">Sửa</button>
        <button className="action-btn delete">Xoá</button>
      </td>
    </tr>
  );
}

export default SortableTodoItem;
