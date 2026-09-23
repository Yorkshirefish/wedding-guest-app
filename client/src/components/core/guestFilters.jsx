
export default function GuestFitlers({changeFilter}) {

    function handleChange({target}) {
        const {value, name} = target;

        changeFilter(name, value)
    }

    return (
        <div id="filter-section" className="mb-10 flex flex-row gap-5 filters">
            <input onChange={handleChange} name="search" type="text" placeholder="Search for guest..." className="min-w-100 border py-2 px-5 rounded-xl"></input>
            <select onChange={handleChange} name="side" id="side">
                <option value="All" >All Sides</option>
                <option value="Bride">Bride</option>
                <option value="Groom">Groom</option>
             </select>
            <select onChange={handleChange} name="relation" id="relation">
                <option value="All">All Relationships</option>
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
            </select>
            <select onChange={handleChange} name="day_type" id="day_type">
                <option value="All">All Guests</option>
                <option value="Full Day">Full Day</option>
                <option value="Night Only">Night Only</option>
            </select>
        </div>
    )
}