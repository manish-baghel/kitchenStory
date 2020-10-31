export const searchActions = {
  changeSearchKeyword
}

function changeSearchKeyword(value) {
  return (dispatch) => {
    dispatch({type: "CHANGE_SEARCH_KEYWORD", searchKeyword:value});
  }
}

