import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Car brand
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter the text"
          onChange={handleChange}
        />
      </label>
      <label>
        Price/ 1 hour
        <input
          type="number"
          name="price"
          value={price}
          placeholder="To $"
          onChange={handleChange}
        />
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
