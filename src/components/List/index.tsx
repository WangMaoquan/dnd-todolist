import { FC } from 'react';
import { Item } from '../Item.tsx';
import { Gap } from '../Gap';

interface ListProps {
  className?: string;
}

export const List: FC<ListProps> = (props) => {
  return (
    <div className={`h-full p-[0.625rem] ${props?.className}`}>
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
    </div>
  );
};
