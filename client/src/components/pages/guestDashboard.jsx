import { useGuests } from "../../hooks/guestHook";
import SideBar from "../layouts/sidebar";



export function GuestDashboard() {
    const { 
        guests,
        loading,
        addGuest,
        deleteGuest,
        updateGuest
     } = useGuests();


    return (
        <div className="h-full">
        <SideBar/>
        <h1>Hello</h1>
        </div>
    )
}