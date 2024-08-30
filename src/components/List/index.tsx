import { FC, Fragment } from 'react';
import { Item } from '../Item.tsx';
import { Gap } from '../Gap';
import { useTodoListStore } from '../../store';
import { animated, useTransition } from '@react-spring/web';

interface ListProps {
  className?: string;
}

export const List: FC<ListProps> = (props) => {
  const list = useTodoListStore((state) => state.list);

  const transitions = useTransition(list, {
    from: { transform: 'translate3d(100%,0,0)', opacity: 0 },
    enter: { transform: 'translate3d(0%,0,0)', opacity: 1 },
    leave: { transform: 'translate3d(-100%,0,0)', opacity: 0 },
    keys: list.map((i) => i.id),
  });

  return (
    <div className={`h-full p-[0.625rem] ${props?.className}`}>
      {list.length
        ? transitions((style, item) => {
            return (
              <animated.div style={style}>
                <Gap id={item.id} />
                <Item data={item} />
              </animated.div>
            );
          })
        : '暂无待办事项'}
      <Gap />
    </div>
  );
};
