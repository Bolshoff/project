export const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE';
export const DECREMENT_CURRENT_PAGE = 'DECREMENT_CURRENT_PAGE';
export const SET_CARDS_PER_PAGE = 'SET_CARDS_PER_PAGE';
export const SET_SORTED_CARDS = 'SET_SORTED_CARDS';
export const SET_SELECT_VALUE = 'SET_SELECT_VALUE';

export const incrementCurrentPage = (currentPage: number) => ({
  type: INCREMENT_CURRENT_PAGE,
  currentPage,
});

export const decrementCurrentPage = (currentPage: number) => ({
  type: INCREMENT_CURRENT_PAGE,
  currentPage,
}
);

export const setCardsPerPage = (cardsPerPage: number) => ({
  type: SET_CARDS_PER_PAGE,
  cardsPerPage,
});

export const setSortedCards = (sortedCards: object) => ({
  type: SET_SORTED_CARDS,
  sortedCards,
});
