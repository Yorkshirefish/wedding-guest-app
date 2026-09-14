import { GuestTable } from "../core/guestTable"


export function Dashboard() {
    return (
        <div className="w-full h-full p-10">
            
            {/*Intro Seciton and Add Guest Button*/}
            <div id="intro-section" className="flex flex-row justify-between">
                <div>
                    <h1>Guests</h1>
                    <p>Add, edit and manage guests for our upcoming 2028 wedding!</p>
                </div>
                <button className="sidebar-btn"><i className="fa-solid fa-plus"></i><span>Add Guest</span></button>
            </div>
            
            {/*Filter Section*/}
            <div id="filter-section">
                <input type="text" placeholder="Search for guest"></input>
                <select name="sides" id="sides">
                    <option value="" disabled>Select side</option>
                    <option value="Bride">Bride</option>
                    <option value="Groom">Groom</option>
                </select>
                <select name="relationship" id="relationship">
                    <option value="" disabled>Select relation</option>
                    <option value="Family">Family</option>
                    <option value="Friend">Friend</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                </select>
                <select name="day-type" id="day-type">
                    <option value="" disabled>Select day type</option>
                    <option value="Full Day">Full Day</option>
                    <option value="Night Only">Night Only</option>
                </select>
            </div>

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
        </div>
    )
}