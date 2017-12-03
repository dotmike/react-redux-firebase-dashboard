import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import HomePage from './components/HomePage';
import AddRecipe from './components/AddRecipe';
import RecipeShow from './components/RecipeShow';
import FantasyNews from './components/FantasyNews';
import RecipePage from './components/RecipePage';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fantasy" component={FantasyNews} />
          <Route path="/new" component={AddRecipe} />      
          <Route path="/recipes/:id" component={RecipeShow} />
          <Route path="/recipes" component={RecipePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
