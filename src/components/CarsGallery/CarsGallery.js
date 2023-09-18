import { CarsGalleryItems } from 'components/CarsGalleyItems/CarsGalleryItems';

export const CarsGallery = ({ cars, openModal }) => {
  return (
    <ul>
      {cars.map(car => (
        <CarsGalleryItems car={car} key={car.id} openModal={openModal} />
      ))}
    </ul>
  );
};
