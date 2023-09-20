import { BiHeart } from 'react-icons/bi';

export const CarsGalleryItems = ({ car, openModal }) => {
  const {
    id,
    img,
    make,
    molel,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
  } = car;

  return (
    <li>
      <div>
        <img loading="lazy" src={img} alt="car" width={240} />
        <BiHeart />
        <ul>
          <li>{make}</li>
          <li>{molel}</li>
          <li>{year}</li>
          <li>{rentalPrice}</li>
        </ul>
        <ul>
          <li>{address.split(',').splice(1, 1)}</li>
          <li>{address.split(',').splice(2, 1)}</li>
          <li>{rentalCompany}</li>
        </ul>
        <ul>
          <li>{type}</li>
          <li>{molel}</li>
          <li>{id}</li>
          <li>{accessories[2]}</li>
        </ul>
        <button
          type="button"
          onClick={() => {
            openModal(id);
          }}
        >
          Learn more
        </button>
      </div>
    </li>
  );
};
