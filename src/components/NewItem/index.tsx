import { FC, useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';

interface NewItemProps {
  className?: string;
}

export const NewItem: FC<NewItemProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ dragging }, drag] = useDrag({
    type: 'new-item',
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
      className={`h-[6.25rem] border-2 bg-green-300 leading-[6.25rem] text-center text-2xl cursor-move select-none ${
        props.className
      } ${dragging ? 'border-dashed bg-white' : ''}`}
    >
      新的待办事项
    </div>
  );
};
