import { CarsGallery } from 'components/CarsGallery/CarsGallery';
import { getPageCars } from 'components/GetCars';
import { Loader } from 'components/Loader/Loader';
import { MenuBar } from 'components/MenuBar/MenuBar';
import { Modal } from 'components/Modal/Modal';
import { ModalCard } from 'components/ModalCard/ModalCard';
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [carId, setCarId] = useState('');
  const [carInfo, setCarInfo] = useState('');

  // const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const getCars = async () => {
      try {
        setError(false);
        const result = await getPageCars(page);
        setPage(page);
        setCars(prevState => [...prevState, ...result]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCars();
  }, [page]);

  const getCarInfo = carId => {
    setCarInfo(...cars.filter(car => car.id === carId));
  };

  console.log(error);

  const addPage = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = id => {
    // setCarId(id);
    setShowModal(true);
    getCarInfo(id);
  };

  const closeModal = () => {
    // setCarId('');
    setShowModal(false);
    setCarInfo('');
  };
  return (
    <>
      <MenuBar />
      {loading && <Loader />}

      <CarsGallery cars={cars} openModal={openModal} />

      {showModal && (
        <Modal closeModal={closeModal}>
          <ModalCard carInfo={carInfo} />
        </Modal>
      )}

      <button type="button" onClick={addPage}>
        load more
      </button>
    </>
  );
};

export default Catalog;
