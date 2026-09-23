import { useState } from "react"

import GuestTable from "../core/guestTable"
import GuestForm from "../forms/guestForm"
import GuestFitlers from "../core/guestFilters"
import GuestCount from "../core/guestCount"

import { useGuests } from "../../hooks/guestHook"



export default function Dashboard({toggleVisibility, formVisibility}) {

    //This calls all the hooks functions
    const {
        guests,
        loading,
        addGuest,
        deleteGuest,
        updateGuest
    } = useGuests()

    //This state controls the filters
    const [filters, setFilters] = useState({
        search: "",
        side: "All",
        relation: "All",
        day_type: "All"
    })

    //This function allows the dropdowns to change the filters state
    function changeFilter(name, value) {
        setFilters((prev) => ( {...prev, [name]: value} ));
    }

    /*This creates a variable based off the filtered values and is passed down to the Table and Count*/
    const filteredGuests = guests.filter((guest) => (filters.search === "" || guest.first_name.startsWith(filters.search) || guest.last_name.startsWith(filters.search)) && (filters.side === "All" || guest.side === filters.side) && (filters.relation === "All" || guest.relation === filters.relation) && (filters.day_type === "All" || guest.day_type === filters.day_type))

    console.log(filteredGuests);

    //This is a state that specifies is the guestForm is an edit guest or add guest form
    const [guest, setGuest] = useState({})

    //This allows us to set the guest state and is passed down to the guest item and tied with the edit button
    function editGuest(guest) {
        setGuest(guest)
    }

    //This function allows us to toggle the form on the add guest button
    function handleAdd() {
        toggleVisibility()
    }


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
            <GuestFitlers changeFilter={changeFilter}/>

            {/*Guest Count Section*/}
            <GuestCount guests={filteredGuests}/>  

            {/*Guest Table section*/}
             <GuestTable guests={filteredGuests} deleteGuest={deleteGuest} editGuest={editGuest} toggleVisibility={toggleVisibility}/>

            {/*Guest Add Form*/}
             <GuestForm visibility={formVisibility} toggleVisibility={toggleVisibility} guest={guest} addGuest={addGuest} updateGuest={updateGuest} editGuest={editGuest}/>
        </div>
    )
}