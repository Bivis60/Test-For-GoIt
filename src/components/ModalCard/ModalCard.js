import { BiX } from 'react-icons/bi';

export const ModalCard = ({ carInfo }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
    img,
  } = carInfo;

  const addressInfo = address.split(',');
  const Conditions = rentalConditions.split('\n');
  const milageEdit = mileage.toLocaleString('en-EN');

  return (
    <div>
      <BiX />
      <img loading="lazy" src={img} alt="car" width={360} />
      <h1>
        {make} <span>{model}</span>, {year}
      </h1>
      <ul>
        <li>{addressInfo[1]}</li>
        <li>{addressInfo[2]}</li>
        <li>Id: {id}</li>
        <li>Year: {year}</li>
        <li>Type: {type}</li>
      </ul>
      <ul>
        <li>Fuel Consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </ul>
      <h2>{description}</h2>
      <h2>Accessories and functionalities:</h2>
      <ul>
        <li>{accessories[0]}</li>
        <li>{accessories[1]}</li>
        <li>{accessories[2]}</li>
      </ul>
      <ul>
        <li>{functionalities[0]}</li>
        <li>{functionalities[1]}</li>
        <li>{functionalities[2]}</li>
      </ul>
      <h2>Rental Conditions:</h2>
      <ul>
        <li>
          Minimum age : <span>{Conditions[0].split(' ').splice(2, 1)}</span>
        </li>
        <li>{Conditions[1]}</li>
        <li>{Conditions[2]}</li>
        <li>
          Mileage: <span>{milageEdit}</span>
        </li>
        <li>
          Price: <span>{rentalPrice}</span>
        </li>
      </ul>
      <button type="button">Rental car</button>
    </div>
  );
};
