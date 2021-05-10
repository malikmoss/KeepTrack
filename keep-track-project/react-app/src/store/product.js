const GET_ALL_PRODUCTS = "product/GET_ALL_PRODUCTS"
const ADD_PRODUCT = "product/ADD_PRODUCTS"
const EDIT_PRODUCT = "product/EDIT_PRODUCT"
const DELETE_PRODUCT = "product/DELETE_PRODUCT"

const getProductsAction = (products) => ({
    type: GET_ALL_PRODUCTS,
    payload: products,
});

export const addProductAction = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

export const editProductAction = (productId) => ({
    type: EDIT_PRODUCT,
    payload: productId,
})

export const deleteProductItem = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId
})

export const getProducts = (productId) => async (dispatch) => {
    const response = await fetch(`/api/materials/${productId}`)

    const products = await response.json()
    if (products.errors) {
        return;
    }
    dispatch(getProductsAction(products.products))
}

export const addProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/materials/${productId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        name: JSON.stringify({ productId })
    })

    const product = await response.json();   // message.message or w/e the key is
    if (product.errors) {
        return;
    }
    dispatch(addProductAction(product))
}

export const editProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/${productId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    name: JSON.stringify({ productId })
    })

    const product = await response.json();
    if (product.errors) {
        return;
    }
    dispatch(editProductAction(product))
}

const flatProducts = (products) => {
    const fProduct = {}
    products.forEach(product => {
        fProduct[products.id] = products
    })
    return fProduct
}

const initialState = { materials:null, materials: null  }

const ProductsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            // creates new copy of state and assigning it to the object
            newState.Object.assign({}, state)
            newState.product = action.payload
        case ADD_PRODUCT:
            newState.Object.assign({}, state)
            newState.product = action.payload
        case EDIT_PRODUCT:
            newState.Object.assign({}, state)
            newState.product = action.payload
        case DELETE_PRODUCT:
            newState.Object.assign({}, state)
            newState.product = action.payload
        default:
            return state
    }
}