import CarModel from '../CarModel';
import type { FC } from 'react';
import FinishFlag from '../svgs/FinishFlag';

interface Props {
  color: string;
  model: string;
}

const CarRow: FC<Props> = ({ color, model }) => {
  return (
    <div className="row">
      <CarModel color={color} model={model} />
      <FinishFlag />
    </div>
  );
};

export default CarRow;
