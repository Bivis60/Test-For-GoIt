import { BiHeart } from 'react-icons/bi';

export const CarsGalleryItems = ({ cars, openModal }) => {
  return (
    <>
      {cars.map(
        ({
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
        }) => (
          <li key={id}>
            <div>
              <img loading="lazy" src={img} alt="car" />
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
                <li>{accessories.splice(2, 1)}</li>
              </ul>
              <button type="button" onClick={openModal}>
                Learn more
              </button>
            </div>
          </li>
        )
      )}
    </>
  );
};
