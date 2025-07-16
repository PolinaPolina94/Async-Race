import CarRow from '../CarRow';

const RaceContainer = () => {
  const cars = [
    {
      id: 1,
      model: 'Tesla',
      speed: 5000,
      color: 'red',
    },
    {
      id: 2,
      model: 'Audi',
      speed: 2000,
      color: 'white',
    },
    {
      id: 3,
      model: 'BMW',
      speed: 3000,
      color: 'yellow',
    },
    {
      id: 4,
      model: 'Opel',
      speed: 3000,
      color: 'pink',
    },
    {
      id: 5,
      model: 'Porsche',
      speed: 3000,
      color: 'orange',
    },
  ];

  return (
    <div className="race-container">
      {cars.map((el) => (
        <CarRow color={el?.color} model={el?.model} />
      ))}
    </div>
  );
};

export default RaceContainer;
