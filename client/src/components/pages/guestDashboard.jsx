import { useGuests } from "../../hooks/guestHook";
import SideBar from "../layouts/sidebar";
import { Dashboard } from "../layouts/dashboard";



export function GuestDashboard() {
    const { 
        guests,
        loading,
        addGuest,
        deleteGuest,
        updateGuest
     } = useGuests();


    return (
        <div className="h-full flex flex-row p-5 bg-cream-wedding min-h-screen">
            <SideBar/>
            <Dashboard />
        </div>
    )
}