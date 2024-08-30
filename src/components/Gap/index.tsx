import { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { useTodoListStore } from '../../store';

export function Gap() {
  const ref = useRef<HTMLDivElement>(null);

  const { addItem } = useTodoListStore();

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: 'new-item',
      drop() {
        addItem({
          id: Math.random().toString().slice(2, 8),
          status: 'todo',
          content: '待办事项',
        });
      },
      collect(monitor) {
        return {
          isOver: monitor.isOver(),
        };
      },
    };
  });

  useEffect(() => {
    drop(ref);
  }, []);

  return (
    <div
      ref={ref}
      className={`h-[0.625rem] ${isOver ? 'bg-red-300' : ''}`}
    ></div>
  );
}
