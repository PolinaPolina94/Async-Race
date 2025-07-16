import type { FC } from 'react';
import Car from '../svgs/Car';

interface Props {
  color: string;
  model: string;
}

const CarModel: FC<Props> = ({ color, model }) => {
  return (
    <div className="car-model">
      <span>{model}</span>
      <Car color={color} />
    </div>
  );
};

export default CarModel;
