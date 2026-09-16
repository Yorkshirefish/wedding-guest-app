export default function GuestCount() {
    return (
        <div id="guest-count" className="flex flex-row gap-5">
            <div className="count-cont">
                <div>
                    <i className="fa-light fa-people-group"></i>
                </div>
                <div>
                    <p>Total Guests</p>
                    <p>100</p>
                </div>
            </div>
            <div className="count-cont">
                <div>
                    <i className="fa-regular fa-venus"></i>
                </div>
                <div>
                    <p>Bride's Side</p>
                    <p>100</p>
                </div>
            </div>
            <div className="count-cont">
                <div>
                    <i className="fa-regular fa-mars-stroke"></i>
                </div>
                <div>
                    <p>Groom's Side</p>
                    <p>100</p>
                </div>
            </div>
        </div>  
    )
}