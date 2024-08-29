import { FC, useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';

interface GarbaseProps {
  className?: string;
}

export const GarbageBin: FC<GarbaseProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: 'list-item',
      // drop(item) {},
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
      className={`h-[12.5rem] border-2 bg-orange-300 leading-[12.5rem] text-center text-2xl cursor-move select-none ${
        props.className
      } ${isOver ? 'bg-yellow-400 border-dashed' : ''}`}
    >
      垃圾箱
    </div>
  );
};
