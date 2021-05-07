const GET_ALL_MATERIALS = "material/GET_ALL_MATERIAL"
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

export const editMaterialAction = (materialId, data) => ({
    type: EDIT_MATERIAL,
    payload: materialId,
    data
})

export const deleteMaterialItem = (materialId) => ({
    type: DELETE_MATERIAL,
    materialId
})

export const getMaterials = (materialId) => async (dispatch) => {
    const response = await fetch(`/api/materials/${materialId}`)

    materials = await response.json()
    if (materials.errors) {
        return;
    }
    dispactch(getMaterialsAction(materials.materials))
}

export const addMaterial = (name) => async (dispatch) => {
    const response = await fetch(`/api/servers/${serverId}/channels/${channelId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        name: JSON.stringify({ name })
    })

    const material = await response.json();   // message.message or w/e the key is
    if (material.errors) {
        return;
    }
    dispatch(addMaterialAction(material))
}

export const editMaterial = (name) => async (dispatch) => {
    const response = await fetch(`/api/${materialId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    name: JSON.stringify({ name })
    })

    const material = await response.json();
    if (material.errors) {
        return;
    }
    dispatch(editMaterialAction(material))
}

const initialState = {  }

