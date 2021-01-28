const changeNumProdReducer = (state = 0, action) => {
    switch(action.type)
    {
      case "CHANGE_NUM_PROD": 
        return state + action.payload;
      case "CLEAR_NUM_PROD":
        return state - state;
      default:
        return state;
    }
}

export default changeNumProdReducer;