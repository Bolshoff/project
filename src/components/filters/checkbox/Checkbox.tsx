import React, { FC } from 'react';
import './Checkbox.css';
import { ICheckBox } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { SET_CHECKBOX_FILTER } from '../../../store/actions/actions';

interface CheckboxProps {
  genre: ICheckBox;
}
const Checkbox: FC<CheckboxProps> = ({ genre }) => {
  const checkboxFilter = useAppSelector((state) => state.setCheckboxFilter.checkboxFilter);
  const dispatch = useAppDispatch();
  const onChange = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch(SET_CHECKBOX_FILTER, e.target.value);
    }
  };

  return (
    <div className="checkbox" key={genre.id}>
      <input type="checkbox" value={genre.id} onChange={onChange} />
      {genre.name}
    </div>
  );
};

export default Checkbox;
