import { combineReducers } from "redux";
import recipeReducer from "./reducer_recipes";
import fantasyReducer from './reducer_fantasy';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  form: formReducer,
  fantasy: fantasyReducer
});

export default rootReducer;
