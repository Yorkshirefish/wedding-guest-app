import GuestTable from "../core/guestTable"
import GuestForm from "../forms/guestForm"
import GuestFitlers from "../core/guestFilters"
import GuestCount from "../core/guestCount"

import { useGuests } from "../../hooks/guestHook"



export default function Dashboard({toggleVisibility}) {

    const {
        guests,
        loading,
        addGuest,
        deleteGuest,
        updateGuest
    } = useGuests()

    function handleAdd() {
        toggleVisibility()
    }

    console.log(guests)

    return (
        <div className="w-full h-full p-10">
            
            {/*Intro Seciton and Add Guest Button*/}
            <div id="intro-section" className="flex flex-row justify-between">
                <div>
                    <h1 className="text-5xl font-normal mb-6" >Guests</h1>
                    <p className="text-xl mb-10">Add, edit and manage guests for our upcoming 2028 wedding!</p>
                </div>
                <button onClick={handleAdd} className="btn max-h-12.5"><i className="fa-solid fa-plus"></i><span>Add Guest</span></button>
            </div>
            
            {/*Filter Section*/}
            <GuestFitlers />

            {/*Guest Count Section*/}
            <GuestCount/>  

            {/*Guest Table section*/}
             <GuestTable guests={guests} deleteGuest={deleteGuest}/>
        </div>
    )
}