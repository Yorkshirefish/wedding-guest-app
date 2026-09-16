import GuestTable from "../core/guestTable"
import GuestForm from "../forms/guestForm"
import GuestFitlers from "../core/guestFilters"
import GuestCount from "../core/guestCount"



export function Dashboard() {
    return (
        <div className="w-full h-full p-10">
            
            {/*Intro Seciton and Add Guest Button*/}
            <div id="intro-section" className="flex flex-row justify-between">
                <div>
                    <h1>Guests</h1>
                    <p>Add, edit and manage guests for our upcoming 2028 wedding!</p>
                </div>
                <button className="btn"><i className="fa-solid fa-plus"></i><span>Add Guest</span></button>
            </div>
            
            {/*Filter Section*/}
            <GuestFitlers />

            {/*Guest Count Section*/}
            <GuestCount/>  

            {/*Guest Table section*/}
             <GuestTable/>
             <GuestForm  />
        </div>
    )
}