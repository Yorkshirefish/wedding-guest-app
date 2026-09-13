import { useGuests } from "../hooks/guestHook"



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