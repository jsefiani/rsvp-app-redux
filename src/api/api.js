const API_URL = "http://localhost:5000/api/guests";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText, 'Hello');
    }
    return response;
}


export const fetchGuests = () => {
    return fetch(API_URL, {
        method: "GET",
        mode: "cors",
        credentials: 'same-origin',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application/json'
        }
    })
    .then(handleErrors)
    .then(response => response.json())
    .catch(error => error)
}

export const deleteGuest = (id) => {
    return fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application / json',
                'Content-Type': 'application/json'
            }
    })
    .then(handleErrors)    
    .catch(error => error)
}

export const addGuest = (name) => {
    return fetch(API_URL, {
            method: "POST",
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application / json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
    })
    .then(handleErrors)
    .then(response => {
        if (response.status === 201) {
            return response.json()
        }
    })
    .catch(error => error)
}

export const updateGuestName = (name, id, isConfirmed) => {
    return fetch(`${API_URL}/${id}`, {
            method: "PUT",
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application / json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                isConfirmed
            })
    })
    .then(handleErrors)
    .catch(error => error)
}

export const updateGuestIsConfirmed = (id, isConfirmed, name) => {
    return fetch(`${API_URL}/${id}`, {
            method: "PUT",
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application / json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isConfirmed: !isConfirmed,
                name
            })
    })
    .then(handleErrors)
    .catch(error => error)
}