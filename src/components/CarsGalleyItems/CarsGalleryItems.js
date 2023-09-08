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
              <ul>
                <li>{make}</li>
                <li>{molel}</li>
                <li>{year}</li>
                <li>{rentalPrice}</li>
              </ul>
              <ul>
                <li>{address}</li>
                <li></li>
                <li>{rentalCompany}</li>
              </ul>
              <ul>
                <li>{type}</li>
                <li>{molel}</li>
                <li>{id}</li>
                <li>{accessories}</li>
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
