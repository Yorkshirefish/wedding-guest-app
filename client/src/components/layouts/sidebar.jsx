import React from "react";

export default function SideBar({toggleVisibility}) {

    function handleAddClick() {
        toggleVisibility()
    }

    return (
        <div id="sidebar" className="bg-green-wedding w-full min-h-full max-w-90 p-15 flex flex-col justify-start items-start gap-3 rounded-2xl">
            <h1 className="text-4xl text-amber-100 font-thin italic pb-13" >Sam & Will's <br></br> Wedding App</h1>
            <button className="sidebar-btn"><i className="fa-light fa-people-group"></i><span>Guests</span></button>
            <button onClick={handleAddClick} className="sidebar-btn"><i className="fa-solid fa-plus"></i><span>Add Guest</span></button>
        </div>
    )
}