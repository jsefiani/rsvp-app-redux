export const getGuests = () => ({
    type: "GET_GUESTS"
})

export const deleteGuestSucceeded = (id) => ({
    type: "DELETE_GUEST_SUCCEEDED",
    id
})

export const addGuestSucceeded = ({ name, id, isConfirmed, isEditing }) => ({
    type: "ADD_GUEST_SUCCEEDED",
    guest: {
        id,
        name,
        isConfirmed,
        isEditing,
    }
});

export const updateGuestNameSucceeded = (name, id) => ({
    type: "UPDATE_GUEST_SUCCEEDED",
    name,
    id, 
})

export const toggleConfirmationGuestSucceeded = (id) => ({
    type: "TOGGLE_CONFIRMATION_GUEST_SUCCEEDED",
    id,
})