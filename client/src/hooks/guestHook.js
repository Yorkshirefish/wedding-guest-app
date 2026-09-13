import { useEffect, useState } from "react";
import { 
    getGuests,
    addGuest as newGuest,
    deleteGuest as removeGuest,
    updateGuest as editGuest

} from "../services/guestService"

export function useGuests() {
    const [guests, setGuests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGuests() {
            try {
                const guests = await getGuests();
                setGuests(guests);
            } catch(e) {
                throw new Error(e)
            } finally {
                setLoading(false)
            }
        }

        loadGuests();
    }, [])

    async function addGuest(guest) {
        const newGuest = addGuest(guest);

        setGuests((prev) => [...prev, newGuest])
    }

    async function deleteGuest(id) {
        const deletedGuest = await removeGuest(id)

        setGuests((prev) => prev.filter((guest) => guest._id !== id))
    }

    async function updateGuest(id, update) {
        const updatedGuest = await editGuest(id, update);

        setGuests((prev) => prev.map((guest) => guest._id === id ? updateGuest : guest))
    }


    return {
        guests,
        loading,
        addGuest,
        deleteGuest,
        updateGuest
    }
}