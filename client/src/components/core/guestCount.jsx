

export default function GuestCount({guests}) {

    const groomCount = guests.filter((guest) => guest.side === "Groom") 
    const brideCount = guests.filter((guest) => guest.side === "Bride")

    return (
        <div id="guest-count" className="flex flex-row gap-5">
            <div className="count-cont">
                <div className=" icon-cont bg-green-100 text-green-800">
                    <i className="fa-light fa-people-group"></i>
                </div>
                <div>
                    <p className="count-title">Total Guests</p>
                    <p className="count-number">{guests.length}</p>
                </div>
            </div>
            <div className="count-cont">
                <div className="icon-cont bg-pink-100 text-pink-700">
                    <i className="fa-regular fa-venus"></i>
                </div>
                <div>
                    <p className="count-title">Bride's Side</p>
                    <p className="count-number">{brideCount.length}</p>
                </div>
            </div>
            <div className="count-cont">
                <div className="icon-cont bg-blue-100 text-blue-800">
                    <i className="fa-regular fa-mars-stroke"></i>
                </div>
                <div>
                    <p className="count-title">Groom's Side</p>
                    <p className="count-number">{groomCount.length}</p>
                </div>
            </div>
        </div>  
    )
}