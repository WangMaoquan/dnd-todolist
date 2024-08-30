import { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';

export function Item() {
  const ref = useRef<HTMLDivElement>(null);

  const [{ dragging }, drag] = useDrag({
    type: 'list-item',
    item: {},
    collect(monitor) {
      return {
        dragging: monitor.isDragging(),
      };
    },
  });

  useEffect(() => {
    drag(ref);
  }, []);

  return (
    <div
      ref={ref}
      className={`h-[6.25rem] border-2 border-black bg-blue-300 p-[0.625rem]
        flex justify-start items-center
        text-xl tracking-wide ${dragging ? 'bg-white border-dashed' : ''}`}
    >
      <input type="checkbox" className="w-[2.5rem] h-[2.5rem] mr-[0.625rem]" />
      <p>待办事项</p>
    </div>
  );
}
