import React from 'react';
import './Filters.css';
import ButtonReset from './ButtonReset/ButtonReset';
import SortSelect from './select/SortSelect';
import YearSelect from './select/YearSelect';
import Checkbox from './checkbox/Checkbox';
import Pagination from '../Pagination/Pagination';

function Filters() {
  return (
    <div className="filters">
      <h2>Фильтры:</h2>
      <ButtonReset />
      <h2>Сортировать по:</h2>
      <SortSelect />
      <h2>Год релиза:</h2>
      <YearSelect />
      <Checkbox />
      <Pagination />
    </div>
  );
}

export default Filters;
