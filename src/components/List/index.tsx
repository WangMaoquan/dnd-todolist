import { FC, Fragment } from 'react';
import { Item } from '../Item.tsx';
import { Gap } from '../Gap';
import { useTodoListStore } from '../../store';

interface ListProps {
  className?: string;
}

export const List: FC<ListProps> = (props) => {
  const list = useTodoListStore((state) => state.list);
  return (
    <div className={`h-full p-[0.625rem] ${props?.className}`}>
      {list.length
        ? list.map((item) => {
            return (
              <Fragment key={item.id}>
                <Gap />
                <Item data={item} />
              </Fragment>
            );
          })
        : '暂无待办事项'}
      <Gap />
    </div>
  );
};
