import { useEffect, useRef, useState } from 'react';
import { useDrag } from 'react-dnd';
import { ListItem, useTodoListStore } from '../../store';

interface ItemProps {
  data: ListItem;
}

export function Item(props: ItemProps) {
  const [editing, setEditing] = useState(false);

  const [editingContent, setEditingContent] = useState(props.data.content);

  const { updateItem } = useTodoListStore();

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
      onDoubleClick={() => {
        setEditing(true);
      }}
    >
      <input
        type="checkbox"
        className="w-[2.5rem] h-[2.5rem] mr-[0.625rem]"
        checked={props.data.status === 'done' ? true : false}
        onChange={(e) => {
          updateItem({
            ...props.data,
            status: e.target.checked ? 'done' : 'todo',
          });
        }}
      />
      <p>
        {editing ? (
          <input
            value={editingContent}
            onChange={(e) => {
              setEditingContent(e.target.value);
            }}
            onBlur={() => {
              setEditing(false);
              updateItem({
                ...props.data,
                content: editingContent,
              });
            }}
          />
        ) : (
          props.data.content
        )}
      </p>
    </div>
  );
}
