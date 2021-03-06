export const changeNumProd = (num) =>{
    return{
            type: "CHANGE_NUM_PROD",
            payload: num
        } 
}

export const clearNumProd = () =>{
    return{
            type: "CLEAR_NUM_PROD",
        } 
}

export const addBasket = (product) =>{
    return{
            type: "ADD_BASKET",
            payload: product
        } 
}

export const removeBasket = (id) =>{
    return{
            type: "REMOVE_BASKET",
            payload: id
        } 
}

export const decreaseBasket = (id) =>{
    return{
            type: "DECREASE_BASKET",
            payload: id
        } 
}

export const increaseBasket = (id) =>{
    return{
            type: "INCREASE_BASKET",
            payload: id
        } 
}

export const clearBasket = () =>{
    return{
            type: "CLEAR_BASKET",
        } 
}
