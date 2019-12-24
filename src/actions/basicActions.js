export function setNewHomeState(newStateArray) {
  return {type: 'SET_NEW_HOME_STATE', newStateArray: newStateArray};
}

export function setNewClickedCheckboxes(newStateArray) {
  return {type: 'SET_NEW_CLICKED_CHECKBOXES', newStateArray: newStateArray};
}

export function addItemToHomeState(newItem) {
  return {type: 'ADD_ITEM_TO_HOME_STATE', newItem: newItem};
}

export function addItemToClickedCheckboxes(newItem) {
  return {type: 'ADD_ITEM_TO_CLICKED_CHECKBOXES', newItem: newItem};
}

export function removeItemFromHomeState(item) {
  return {type: 'REMOVE_ITEM_FROM_HOME_STATE', item: item};
}

export function removeItemFromClickedCheckboxes(item) {
  return {type: 'REMOVE_ITEM_FROM_CLICKED_CHECKBOXES', item: item};
}

export function changeSearchText(text) {
  return {type: 'CHANGE_SEARCH_TEXT', text: text};
}

export function incPage(page) {
  return {type: 'INCREMENT_PAGE', page: page};
}

export function decPage(page) {
  return {type: 'DECREMENT_PAGE', page: page};
}

export function changePage(page) {
  return {type: 'CHANGE_PAGE', page: page};
}