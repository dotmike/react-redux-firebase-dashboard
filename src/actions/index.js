import * as firebase from "firebase";
import _ from "lodash";
import { FETCH_RECIPES, FETCH_RECIPE, FETCH_FANTASY, SET_NAVBAR_ACTIVE_ITEM } from "./types";
import config from "../../config/firebase";
import axios from "axios";

const ROOT_URL_FANTASY =
  "http://api.fantasy.nfl.com/v1/players/news?format=json";

firebase.initializeApp(config);
const database = firebase.database();

export function fetchRecipes() {
  return dispatch => {
    database.ref("/Recipes").on("value", snapshot => {
      dispatch({
        type: FETCH_RECIPES,
        payload: snapshot.val()
      });
    });
  };
}

export function addRecipe(recipe, callback) {
  return dispatch =>
    database
      .ref("/Recipes")
      .push(recipe)
      .then(() => callback());
}

export function deleteRecipe(key) {
  return dispatch =>
    database
      .ref("/Recipes")
      .child(key)
      .remove();
}

export function fetchRecipe(id) {
  return dispatch => {
    database.ref(`/Recipes/${id}`).on("value", snapshot => {
      dispatch({
        type: FETCH_RECIPE,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchFantasy() {
  return dispatch => {
    axios.get(`${ROOT_URL_FANTASY}`).then(response => {
      dispatch({
        type: FETCH_FANTASY,
        payload: response.data.news
      });
    });
  };
}

export function setNavbarActiveItem(tab) {
  return dispatch => {
    let newActiveItem = {
      activeItem: tab
    }

    dispatch({
      type: SET_NAVBAR_ACTIVE_ITEM,
      payload: newActiveItem
    })
  }
}
