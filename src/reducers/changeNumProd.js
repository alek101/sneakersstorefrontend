const changeNumProdReducer = (state = 0, action) => {
    switch(action.type)
    {
      case "CHANGE_NUM_PROD": 
        return state + action.payload;
      default:
        return state;
    }
}

export default changeNumProdReducer;