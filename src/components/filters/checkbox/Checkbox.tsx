import React, { FC } from 'react';
import './Checkbox.css';
import { ICheckBox } from '../../../types/types';

interface CheckboxProps {
  genre: ICheckBox;
}
const Checkbox: FC<CheckboxProps> = ({ genre }) => (
  <div className="checkbox" key={genre.id}>
    <input type="checkbox" value="Some text" />
    {genre.name}
  </div>
);

export default Checkbox;
