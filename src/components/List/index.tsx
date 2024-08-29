import { FC } from 'react';
import { Item } from '../Item.tsx';

interface ListProps {
  className?: string;
}

export const List: FC<ListProps> = (props) => {
  return (
    <div className={`h-full border-2 ${props.className}`}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};
