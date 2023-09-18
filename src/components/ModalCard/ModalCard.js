import { BiX } from 'react-icons/bi';

export const ModalCard = ({ carInfo }) => {
  const { img } = carInfo;

  return (
    <div>
      Modal card
      <img loading="lazy" src={img} alt="car" width={360} />
      <BiX />
    </div>
  );
};
