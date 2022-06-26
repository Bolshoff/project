import React from 'react';
import './Select.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { DECREMENT_CURRENT_PAGE } from '../../../store/actions/actions';

const SortSelect = () => {
  const sortValue = useAppSelector((state) => state.setFilterValue.filterValue);
  const dispatch = useAppDispatch();
  const sortOptions = [
    { key: 'Популярные по убыванию', type: 'popularityToLow' },
    { key: 'Популярные по возрастанию', type: 'popularityToUp' },
    { key: 'Рейтинг по убыванию', type: 'ratingToLow' },
    { key: 'Рейтинг по возрастанию', type: 'ratingToUp' },
  ];

  const changeFilterValue = (e: any) => {
    const filterValue = e.target.value;
    dispatch({ type: DECREMENT_CURRENT_PAGE, payload: filterValue });
  };

  return (
    <select key={sortValue} onChange={changeFilterValue}>
      {sortOptions.map((option) => <option key={option.key}>{option.key}</option>)}
    </select>
  );
};
export default SortSelect;
