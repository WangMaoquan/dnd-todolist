import { FC } from 'react';

interface NewItemProps {
  className?: string;
}

export const NewItem: FC<NewItemProps> = (props) => {
  return (
    <div
      className={`h-[6.25rem] border-2 bg-green-300 leading-[6.25rem] text-center text-2xl cursor-move select-none ${props.className}`}
    >
      新的待办事项
    </div>
  );
};
