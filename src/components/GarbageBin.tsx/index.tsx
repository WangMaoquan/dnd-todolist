import { FC } from 'react';

interface GarbaseProps {
  className?: string;
}

export const GarbageBin: FC<GarbaseProps> = (props) => {
  return (
    <div
      className={`h-[12.5rem] border-2 bg-orange-300 leading-[12.5rem] text-center text-2xl cursor-move select-none ${props.className}`}
    >
      垃圾箱
    </div>
  );
};
