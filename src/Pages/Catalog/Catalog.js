import { CarsGallery } from 'components/CarsGallery/CarsGallery';
import { getPageCars } from 'components/GetCars';
import { Loader } from 'components/Loader/Loader';
import { MenuBar } from 'components/MenuBar/MenuBar';
import { Modal } from 'components/Modal/Modal';
import { ModalCard } from 'components/ModalCard/ModalCard';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
  console.log(cars);
  console.log(page);
  console.log(error);

  const addPage = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  console.log(showModal);
  return (
    <>
      <MenuBar />
      {loading && <Loader />}

      <CarsGallery carsData={cars} openModal={openModal} />

      {showModal && (
        <Modal closeModal={closeModal}>
          <ModalCard />
        </Modal>
      )}

      <button type="button" onClick={addPage}>
        load more
      </button>
    </>
  );
};

export default Catalog;
