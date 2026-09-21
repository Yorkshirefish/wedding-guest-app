
export default function GuestFitlers() {
    return (
        <div id="filter-section" className="mb-10">
            <input type="text" placeholder="Search for guest"></input>
            <select name="side" id="side">
                <option value="" >All Sides</option>
                <option value="Bride">Bride</option>
                <option value="Groom">Groom</option>
             </select>
            <select name="relation" id="relation">
                <option value="">All Relationships</option>
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
            </select>
            <select name="day_type" id="day_type">
                <option value="">All Guests</option>
                <option value="Full Day">Full Day</option>
                <option value="Night Only">Night Only</option>
            </select>
        </div>
    )
}