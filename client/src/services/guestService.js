const API_URI = "http://localhost:5001/api/guests/"

//Function that calls all guests
export async function getGuests() {
    const response = await fetch(API_URI);

    if(!response.ok) {
        throw new Error("Failed to get guests");
    }

    return response.json();
}

//Function to call the POST method and create a new Guest
export async function addGuest(guest) {
    const response = await fetch(API_URI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })

    if(!response.ok) {
        throw new Error("Could not add new Guest")
    }

    return response.json();
}

export async function deleteGuest(id) {
    const response = await fetch(`${API_URI}${id}`, {
        method: "DELETE"
    });

    if(!response.ok) {
        throw new Error("Failed to remove guest")
    }

    return response.json();
}

//Function to update a Guest's info
export async function updateGuest(id, update) {
    const response = await fetch(`${API_URI}${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(update)
    })

    return response.json();
}