import _ from 'lodash';
import {
  FETCH_RECIPES,
  CREATE_RECIPE,
  DELETE_RECIPE,
  FETCH_RECIPE
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload;
    case CREATE_RECIPE:
      return { ...state, ...action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    case FETCH_RECIPE:
      return action.payload;
  }

  return state;
}
