const reducer = (state, action) => {
  let newObj = Object.assign({}, state);
  let idx;
  switch(action.type) {
    case "SET_NEW_HOME_STATE" : newObj.homeState = action.newStateArray.slice(0); break;
    case "SET_NEW_CLICKED_CHECKBOXES" : newObj.clickedCheckboxes = action.newStateArray.slice(0); break;
    case "ADD_ITEM_TO_HOME_STATE" : newObj.homeState.push(action.newItem); break;
    case "ADD_ITEM_TO_CLICKED_CHECKBOXES" : newObj.clickedCheckboxes.push(action.newItem); break;
    case "REMOVE_ITEM_FROM_HOME_STATE" : 
      newObj.homeState.forEach((item, index) => {if(item.id === action.item.id) idx = index;});
      newObj.homeState.splice(idx, 1);
      break;
    case "REMOVE_ITEM_FROM_CLICKED_CHECKBOXES" :
      newObj.clickedCheckboxes.forEach((item, index) => {if(item.id === action.item.id) idx = index;});
      newObj.clickedCheckboxes.splice(idx, 1);
      break;
    case "CHANGE_SEARCH_TEXT" : newObj.searchText = action.text; break;
    case "INCREMENT_PAGE" : if(newObj.page < 3) newObj.page = newObj.page + 1; break;
    case "DECREMENT_PAGE" : if(newObj.page > 0) newObj.page = newObj.page - 1; break;
    case "CHANGE_PAGE" : newObj.page = action.page; break;
    default: return state;
  }
  return newObj;
}

export default reducer;