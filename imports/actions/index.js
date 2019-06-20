/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/prefer-default-export
import { Meteor } from 'meteor/meteor';
import '../api/methods';

// eslint-disable-next-line import/prefer-default-export
export function getDataAction() {
  return () => {
    Meteor.call('getData');
  };
}

export function sortByColumn(column) {
  return {
    type: 'SORT_ACTION',
    column,
  };
}

export function search(text) {
  return {
    type: 'SEARCH_ACTION',
    text,
  };
}

export function fetchFilmsByPage(page) {
  return () => {
    Meteor.call('getPage', page);
  };
}

export function setPage(page) {
  return {
    type: 'SET_PAGE',
    page,
  };
}

export function loadMore(page) {
  return (dispatch) => {
    dispatch(fetchFilmsByPage(page + 1));
    dispatch(setPage(page));
  };
}
