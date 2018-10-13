export const addGuest = ({name}) => ({
    type: "ADD_GUEST",
    name
});

export const deleteGuest = (id) => ({
    type: "DELETE_GUEST",
    id
});

export const toggleConfirmation = (id, isConfirmed, name) => ({
    type: "TOGGLE_CONFIRMATION_GUEST",
    id,
    isConfirmed,
    name,
})

export const toggleEditing = (id) => ({
    type: "TOGGLE_EDITING_GUEST",
    id
})

export const editNameGuest = (name, id, isConfirmed) => ({
    type: "EDIT_NAME",
    name,
    id,
    isConfirmed,
})

export const setPendingGuest = (nameInput) => ({
    type: "SET_PENDING_GUEST",
    nameInput
})

export const clearPendingGuest = () => ({
    type: "CLEAR_PENDING_GUEST"
})

export const toggleFilter = () => ({
    type: "TOGGLE_FILTER"
})