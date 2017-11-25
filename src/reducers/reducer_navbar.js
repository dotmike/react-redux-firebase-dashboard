import { SET_NAVBAR_ACTIVE_ITEM } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_NAVBAR_ACTIVE_ITEM:
      return action.payload;
  }
  return state;
}
