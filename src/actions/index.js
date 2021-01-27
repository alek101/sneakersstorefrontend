export const changeNumProd = (num) =>{
    return{
            type: "CHANGE_NUM_PROD",
            payload: num
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