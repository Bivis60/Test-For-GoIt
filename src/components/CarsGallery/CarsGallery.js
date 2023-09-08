import { CarsGalleryItems } from 'components/CarsGalleyItems/CarsGalleryItems';

export const CarsGallery = ({ carsData, openModal }) => {
  return (
    <ul>
      <CarsGalleryItems cars={carsData} openModal={openModal} />
    </ul>
  );
};
