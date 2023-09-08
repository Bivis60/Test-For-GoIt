import { getPageCars } from 'components/GetCars';
import { MenuBar } from 'components/MenuBar/MenuBar';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCars = async () => {
      try {
        setError(false);
        const result = await getPageCars(page);
        setPage(page);
        setCars(prevState => [...prevState, ...result]);
      } catch (error) {
        setError(true);
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

  return (
    <>
      <MenuBar />
      <button type="button" onClick={addPage}>
        load more
      </button>
    </>
  );
};

export default Catalog;
