import React from 'react';
import './Filters.css';
import ButtonReset from './ButtonReset/ButtonReset';
import SortSelect from './select/SortSelect';
import YearSelect from './select/YearSelect';

function Filters() {
  return (
    <div className="filters">
      <h2>Фильтры:</h2>
      <ButtonReset />
      <h2>Сортировать по:</h2>
      <SortSelect />
      <h2>Год релиза:</h2>
      <YearSelect />
    </div>
  );
}

export default Filters;
