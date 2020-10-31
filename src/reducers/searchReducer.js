const initialState = {
  searchKeyword:''
}


export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_SEARCH_KEYWORD":
      return {
        searchKeyword: action.searchKeyword
      }
    default:
      return state;
  }
}
