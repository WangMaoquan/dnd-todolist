import { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { ListItem } from '../../store';

interface ItemProps {
  data: ListItem;
}

export function Item(props: ItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ dragging }, drag] = useDrag({
    type: 'list-item',
    item: {
      id: props.data.id,
    },
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
      <p>{props.data.content}</p>
    </div>
  );
}
