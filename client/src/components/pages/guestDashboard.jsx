import { useGuests } from "../../hooks/guestHook";

useGuests



export function GuestDashboard() {
    const { 
        guests,
        loading,
        addGuest,
        deleteGuest,
        updateGuest
     } = useGuests();


    return (
        <>
        </>
    )
}