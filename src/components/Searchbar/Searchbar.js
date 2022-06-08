import { useState } from 'react';

import Button from '../Button';

import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [nameImage, setNameImage] = useState('');

  const handleNameChange = e => {
    setNameImage(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (nameImage.trim() === '') {
      toast.error('введите имя', { theme: 'colored' });
      return;
    }
    onSubmit(nameImage);

    setNameImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="header-form">
      <input
        className="header-form__input-search"
        type="text"
        value={nameImage}
        onChange={handleNameChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button />
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
