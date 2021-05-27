const GET_ALL_PRODUCTS = "product/GET_ALL_PRODUCTS"
const GET_PRODUCT = "product/GET_PRODUCT"
const ADD_PRODUCT = "product/ADD_PRODUCT"
const EDIT_PRODUCT = "product/EDIT_PRODUCT"
const DELETE_PRODUCT = "product/DELETE_PRODUCT"

export const getProductsAction = (products) => ({
    type: GET_ALL_PRODUCTS,
    payload: products,
});

export const getProductAction = (product) => ({
    type: GET_PRODUCT,
    payload: product,
});

export const addProductAction = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

export const editProductAction = (productId) => ({
    type: EDIT_PRODUCT,
    payload: productId,
})

export const deleteProductAction = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId
})

export const getProducts = () => async (dispatch) => {
    const response = await fetch(`/api/products/`)

    const products = await response.json()
    if (products.errors) {
        return;
    }
    dispatch(getProductsAction(products.products))
    console.log(products)
    return products.products
}

export const getProduct = (productId) => async (dispatch) => {
    
    const response = await fetch(`/api/products/${productId}`)
    const products = await response.json()
    if (products.errors) {
        return;
    }
    dispatch(getProductAction(products))
}
// edit
export const addProduct = (data) => async (dispatch) => {
    const response = await fetch(`/api/products/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const product = await response.json();   // message.message or w/e the key is
    if (product.errors) {
        return;
    }
    dispatch(addProductAction(product))
}

export const editProduct = (data) => async (dispatch) => {
    const response = await fetch(`/api/products/${data.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })

    const product = await response.json();
    if (product.errors) {
        return;
    }
    dispatch(editProductAction(product))
}

//delete Product api
export const deleteProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE'
    })
        const product = await response.json();
        if (product.errors) {
            return;
        }
        dispatch(deleteProductAction(productId))
}

const initialState = { product:null, products:[]  }

const ProductReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            // creates new copy of state and assigning it to the object
            newState = Object.assign({}, state)
            newState.products = action.payload
            return newState
        case GET_PRODUCT:
            // creates new copy of state and assigning it to the object
            newState = Object.assign({}, state)
            newState.product = action.payload
            return newState
        case ADD_PRODUCT:
            newState = Object.assign({}, state)
            newState.product = action.payload
            return newState
        case EDIT_PRODUCT:
            newState = Object.assign({}, state)
            newState.product = action.payload
            return newState
        case DELETE_PRODUCT:
            newState = Object.assign({}, state)
            newState.products= newState.products.filter(product=>product.id !== action.payload )
            newState.product = action.payload
            return newState
        default:
            return state
    }
}

export default ProductReducer;