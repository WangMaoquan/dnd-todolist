import { FC } from 'react';
import { GarbageBin } from '../GarbageBin.tsx';
import { NewItem } from '../NewItem/index.tsx';
import { List } from '../List/index.tsx';

interface TodoListProps {
  x?: number;
}

export const TodoList: FC<TodoListProps> = (props) => {
  console.log(props);
  return (
    <div className="w-[62.5rem] h-[37.5rem] m-auto mt-[6.25rem] p-[0.625rem] border-2 border-black flex justify-between items-start">
      <div className="flex-2 h-full mr-[0.625rem] overflow-auto">
        <List />
      </div>

      <div className="flex-1 h-full flex flex-col justify-start">
        <NewItem />
        <GarbageBin className="mt-[0.625rem]" />
      </div>
    </div>
  );
};
