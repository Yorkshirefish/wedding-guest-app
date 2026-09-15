import GuestTable from "../core/guestTable"
import GuestForm from "../forms/guestForm"
import GuestFitlers from "../core/guestFilters"



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
            <div id="guest-count" className="flex flex-row gap-5">
                <div className="count-cont">
                    <div><i className="fa-light fa-people-group"></i></div>
                    <div>
                        <p>Total Guests</p>
                        <p>100</p>
                    </div>
                </div>
                <div className="count-cont">
                    <div><i className="fa-regular fa-venus"></i></div>
                    <div>
                         <p>Bride's Side</p>
                        <p>100</p>
                     </div>
                 </div>
                <div className="count-cont">
                     <div><i className="fa-regular fa-mars-stroke"></i></div>
                     <div>
                          <p>Groom's Side</p>
                          <p>100</p>
                     </div>
                </div>
             </div>    

            {/*Guest Table section*/}
             <GuestTable/>
             <GuestForm  />
        </div>
    )
}