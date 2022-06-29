import React from 'react';
import './Select.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { SET_SELECT_VALUE } from '../../../store/actions/actions';

const SortSelect = () => {
  const sortSelectValue = useAppSelector((state) => state.setFilterValue.selectValue);
  const isLogined = useAppSelector((state) => state.setLoginedUser.loginedUser);
  const dispatch = useAppDispatch();
  const sortOptions = [
    { key: 'Популярные по убыванию', type: 'popularityToLow' },
    { key: 'Популярные по возрастанию', type: 'popularityToUp' },
    { key: 'Рейтинг по убыванию', type: 'ratingToLow' },
    { key: 'Рейтинг по возрастанию', type: 'ratingToUp' },
  ];

  const isLoginedSortOptions = [
    { key: 'Избранные', type: 'favorites' },
    { key: 'Смотреть позже', type: 'watchlataer' },
  ];
  if (isLogined) {
    sortOptions.push(...isLoginedSortOptions);
  }

  const changeFilterValue = (e: any) => {
    dispatch({ type: SET_SELECT_VALUE, payload: e.target.value });
  };

  return (
    <select key={sortSelectValue} onChange={changeFilterValue}>
      {sortOptions.map((option) => <option key={option.key}>{option.key}</option>)}
    </select>
  );
};
export default SortSelect;
