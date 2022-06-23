import React from 'react';
import './Filters.css';
import ButtonReset from './ButtonReset/ButtonReset';
import SortSelect from './select/SortSelect';
import YearSelect from './select/YearSelect';
import CheckboxBlock from './checkbox/CheckboxBlock';
import Pagination from '../Pagination/Pagination';

const Filters = () => (
  <div className="filters">
    <h2>Фильтры:</h2>
    <ButtonReset />
    <h2>Сортировать по:</h2>
    <SortSelect />
    <h2>Год релиза:</h2>
    <YearSelect />
    <CheckboxBlock />
    <Pagination />
  </div>
);

export default Filters;
