const GET_ALL_MATERIALS = "material/GET_ALL_MATERIALS"
const ADD_MATERIAL = "material/ADD_MATERIAL"
const EDIT_MATERIAL = "material/EDIT_MATERIAL"
const DELETE_MATERIAL = "material/DELETE_MATERIAL"

const getMaterialsAction = (materials) => ({
    type: GET_ALL_MATERIALS,
    payload: materials,
});

export const addMaterialAction = (material) => ({
    type: ADD_MATERIAL,
    payload: material
})

export const editMaterialAction = (materialId) => ({
    type: EDIT_MATERIAL,
    payload: materialId,
})

export const deleteMaterialItem = (materialId) => ({
    type: DELETE_MATERIAL,
    payload: materialId
})

export const getMaterials = (materialId) => async (dispatch) => {
    const response = await fetch(`/api/materials/${materialId}`)

    const materials = await response.json()
    if (materials.errors) {
        return;
    }
    dispatch(getMaterialsAction(materials.materials))
}

export const addMaterial = (materialId) => async (dispatch) => {
    const response = await fetch(`/api/materials/${materialId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        name: JSON.stringify({ materialId })
    })

    const material = await response.json();   // message.message or w/e the key is
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

const flatMaterials = (materials) => {
    const fMaterial = {}
    materials.forEach(material => {
        fMaterial[materials.id] = materials
    })
    return fMaterial
}

const initialState = { materials:null, materials: null  }

const MaterialsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_MATERIALS:
            // creates new copy of state and assigning it to the object
            newState.Object.assign({}, state)
            newState.material = action.payload
        case ADD_MATERIAL:
            newState.Object.assign({}, state)
            newState.material = action.payload
        case EDIT_MATERIAL:
            newState.Object.assign({}, state)
            newState.material = action.payload
        case DELETE_MATERIAL:
            newState.Object.assign({}, state)
            newState.material = action.payload
        default:
            return state
    }
}
