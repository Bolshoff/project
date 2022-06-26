import { PayloadAction } from '@reduxjs/toolkit';

interface IsetFilterValue{
    filterValue: string
}
const defaultState: IsetFilterValue = {
  filterValue: 'Популярные по убыванию',
};

const setFilterValue = (state = defaultState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'setFilterValue':
      return {
        filterValue: state.filterValue,
      };
    default:
      return state;
  }
};

export default setFilterValue;
