import { PayloadAction } from '@reduxjs/toolkit';
import { DELETE_CHECKBOX_FILTER, SET_CHECKBOX_FILTER } from './actions/actions';

interface IsetCheckboxFilter{
    checkboxFilter: []
}
const defaultState: IsetCheckboxFilter = {
  checkboxFilter: [],
};

const setCheckboxFilter = (state = defaultState, action: PayloadAction<any>) => {
  const { index } = action.payload;
  switch (action.type) {
    case SET_CHECKBOX_FILTER:
      return {
        ...state,
        checkboxFilter: [state.checkboxFilter, action.payload],
      };
    case DELETE_CHECKBOX_FILTER:

      return {
        ...state,
        checkboxFilter: [...state.checkboxFilter.slice(0, index),
          ...state.checkboxFilter.slice(index + 1)],
      };
    default:
      return state;
  }
};

export default setCheckboxFilter;
