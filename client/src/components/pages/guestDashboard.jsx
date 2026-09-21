import { useState } from "react";

import SideBar from "../layouts/sidebar";
import Dashboard from "../layouts/dashboard";
import GuestForm from "../forms/guestForm";





export function GuestDashboard() {

    const[formVisibility, setFormVisibility] = useState(false);

    function toggleVisibility() {
        setFormVisibility((prev) => !prev);
    }

    return (
        <div className="h-full flex flex-row p-5 bg-cream-wedding min-h-screen">
            <SideBar toggleVisibility={toggleVisibility}/>
            <Dashboard toggleVisibility={toggleVisibility}/>
            <GuestForm visibility={formVisibility} toggleVisibility={toggleVisibility}/>
        </div>
    )
}