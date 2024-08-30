import { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';

export function Gap() {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: 'new-item',
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
      className={`h-[0.625rem] ${isOver ? 'bg-red-300' : ''}`}
    ></div>
  );
}
