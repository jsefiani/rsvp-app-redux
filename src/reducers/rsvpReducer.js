const rsvpReducerDefaultState = [];

const rsvpReducer = (state = rsvpReducerDefaultState, action) => {
    switch(action.type) {
        case "GET_GUESTS":
            return state

        case "GUESTS_FETCH_SUCCEEDED":
            return [...state, ...action.guests]

        case "ADD_GUEST_SUCCEEDED":
            return [...state, action.guest];

        case "DELETE_GUEST_SUCCEEDED":
            return state.filter((guest) => guest.id !== action.id)

        case "TOGGLE_CONFIRMATION_GUEST_SUCCEEDED": 
            return state.map(guest => {
                if(action.id === guest.id) {
                    return {...guest, isConfirmed: !guest.isConfirmed}
                } else {
                    return guest;
                }
            })

        case "TOGGLE_EDITING_GUEST":
            return state.map(guest => {
                if (action.id === guest.id) {
                    return { ...guest, isEditing: !guest.isEditing }
                } else {
                    return guest;
                }
            })

        case "UPDATE_GUEST_SUCCEEDED":
            return state.map(guest => {
                if(action.id === guest.id) {
                    return {...guest, name: action.name}
                } else {
                    return guest;
                }
            })

        default:
            return state;
    }
}

export default rsvpReducer;