import { combineReducers } from "redux";
import searchArticle from "./SearchArticle";

const reducer = combineReducers({
  search: searchArticle,
});

export default reducer;