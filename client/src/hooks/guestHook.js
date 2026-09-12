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
            console.log("Running Test")
            try {
                const guests = await getGuests();
                setGuests(guests);
                console.log("Guests Set")
            } catch(e) {
                throw new Error(e)
            } finally {
                setLoading(false)
            }
        }

        loadGuests();
    }, [])


    return {
        guests,
        loading
    }
}