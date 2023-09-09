import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
// import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

export const MenuBar = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const formData = { name, price, from, to };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(formData);
    resetForm();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'from':
        setFrom(value);
        break;
      case 'to':
        setTo(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setFrom('');
    setTo('');
  };

  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      <label>
        Car brand
        <input
          list="carBrand"
          type="text"
          name="name"
          value={name}
          placeholder="Enter the text"
          onChange={handleChange}
        />
        <datalist id="carBrand">
          <option>Buick</option>
          <option>MINI</option>
          <option>Volvo</option>
          <option>HUMMER</option>
          <option>Subaru</option>
          <option>Mitsubishi</option>
          <option>Nissan</option>
          <option>Lincoln</option>
          <option>GMC</option>
          <option>Bentley</option>
          <option>Mercedes-Benz</option>
          <option>Aston Martin</option>
          <option>Land Rover</option>
          <option>Pontiac</option>
          <option>Lamborghini</option>
          <option>Kia</option>
          <option>Audi</option>
          <option>BMW</option>
          <option>Hyundai</option>
          <option>Chevrolet</option>
          <option>Chrysler</option>
        </datalist>
        {/* <BiChevronDown size={20} /> */}
      </label>
      <label>
        Price/ 1 hour
        <input
          list="price"
          type="number"
          name="price"
          step={10}
          min={0}
          // max={550}
          value={price}
          placeholder="To $"
          onChange={handleChange}
        />
        <datalist id="price">
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>60</option>
          <option>70</option>
          <option>80</option>
          <option>90</option>
          <option>100</option>
          <option>110</option>
          <option>120</option>
          <option>130</option>
          <option>140</option>
          <option>150</option>
          <option>160</option>
          <option>170</option>
          <option>180</option>
          <option>190</option>
          <option>200</option>
          <option>210</option>
          <option>220</option>
          <option>230</option>
          <option>240</option>
          <option>250</option>
          <option>260</option>
          <option>270</option>
          <option>280</option>
          <option>290</option>
          <option>300</option>
          <option>310</option>
          <option>320</option>
          <option>330</option>
          <option>340</option>
          <option>350</option>
          <option>360</option>
          <option>370</option>
          <option>380</option>
          <option>390</option>
          <option>400</option>
          <option>410</option>
          <option>420</option>
          <option>430</option>
          <option>430</option>
          <option>440</option>
          <option>450</option>
          <option>460</option>
          <option>470</option>
          <option>480</option>
          <option>490</option>
          <option>500</option>
          <option>510</option>
          <option>520</option>
          <option>530</option>
          <option>540</option>
          <option>550</option>
        </datalist>
        <BiChevronDown size={20} />
      </label>
      <label>
        Car mileage / km
        <input
          type="number"
          name="from"
          value={from}
          placeholder="From"
          onChange={handleChange}
        />
        <input
          type="number"
          name="to"
          value={to}
          placeholder="To"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
