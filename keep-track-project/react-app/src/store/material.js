const GET_ALL_MATERIALS = "material/GET_ALL_MATERIALS"
const GET_MATERIAL = "material/GET_MATERIAL"
const ADD_MATERIAL = "material/ADD_MATERIAL"
const EDIT_MATERIAL = "material/EDIT_MATERIAL"
const DELETE_MATERIAL = "material/DELETE_MATERIAL"

export const getMaterialsAction = (materials) => ({
    type: GET_ALL_MATERIALS,
    payload: materials,
});

export const getMaterialAction = (material) => ({
    type: GET_MATERIAL,
    payload: material,
});

export const addMaterialAction = (material) => ({
    type: ADD_MATERIAL,
    payload: material
})

export const editMaterialAction = (materialId) => ({
    type: EDIT_MATERIAL,
    payload: materialId,
})

export const deleteMaterialAction = (materialId) => ({
    type: DELETE_MATERIAL,
    payload: materialId
})

export const getMaterials = () => async (dispatch) => {
    const response = await fetch(`/api/materials/`);

    const materials = await response.json()
    if (materials.errors) {
        return;
    }
    dispatch(getMaterialsAction(materials.materials))
    // return materials
}

export const getMaterial = (materialId) => async (dispatch) => {
    const response = await fetch(`/api/materials/${materialId}`)

    const materials = await response.json()
    if (materials.errors) {
        return;
    }
    dispatch(getMaterialAction(materials.materials))
}
// edit
export const addMaterial = (data) => async (dispatch) => {
    const response = await fetch(`/api/materials/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const material = await response.json(); 
    if (material.errors) {
        return;
    }
    dispatch(addMaterialAction(material))
}

export const editMaterial = (materialId) => async (dispatch) => {
    const response = await fetch(`/api/${materialId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    name: JSON.stringify({ materialId })
    })

    const material = await response.json();
    if (material.errors) {
        return;
    }
    dispatch(editMaterialAction(material))
}


export const deleteMaterial = (materialId) => async (dispatch) => {
    const response = await fetch(`/api/materials/${materialId}`, {
    method: 'DELETE'
    });
    const material = await response.json();
    if (material.errors) {
        return;
    }
    dispatch(deleteMaterialAction(materialId))
}

// const flatMaterials = (materials) => {
//     const fMaterial = {}
//     materials.forEach(material => {
//         fMaterial[materials.id] = material
//     })
//     return fMaterial
// }

const initialState = { material:null, materials:[]  }

const MaterialReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_MATERIALS:
            // creates new copy of state and assigning it to the object
            newState = Object.assign({}, state)
            newState.materials = action.payload
            return newState
        case GET_MATERIAL:
            newState = Object.assign({}, state)
            newState.material = action.payload
            return newState
        case ADD_MATERIAL:
            newState = Object.assign({}, state)
            newState.material = action.payload
            return newState
        case EDIT_MATERIAL:
            newState = Object.assign({}, state)
            newState.material = action.payload
            return newState
        case DELETE_MATERIAL:
            newState = Object.assign({}, state)
            newState.material = action.payload
            newState.materials= newState.materials.filter(material=>material.id !== action.payload )
            return newState
        default:
            return state
    }
}

export default MaterialReducer;
