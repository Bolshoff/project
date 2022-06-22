import React from 'react';
import './Pagination.css';
import PageToggleButton from './PageToggleButton/PageToggleButton';
import PageCounter from './PageCounter/PageCounter';

function Pagination() {
  return (
    <div className="pagination">
      <PageToggleButton title="Prev" />
      <PageToggleButton title="Next" />
      <PageCounter />
    </div>
  );
}

export default Pagination;
