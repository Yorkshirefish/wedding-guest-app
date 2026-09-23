import { useState } from "react"


export default function GuestForm({guest = {}, visibility, toggleVisibility}) {

    const [form, setForm] = useState({
        first_name: guest.first_name || "",
        last_name: guest.last_name || "",
        side: guest.side || "",
        guest_type: guest.guest_type || "",
        day_type: guest.day_type || "",
        age_category: guest.age_category || "",
        relation: guest.relation || "",
        rsvp: guest.rsvp || ""
    });

    function handleChange({target}) {
        const {name, value } = target;
        setForm((prev) => ({...prev, [name]: value }))
    }

    function handleCancel(e) {
        e.preventDefault();

        toggleVisibility()
    }

    if(!visibility) {
        return 
    }


    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/40">
            <form className="guest-form flex flex-col justify-end items-center min-w-150 bg-gray-200 p-10 rounded-xl gap-5">

                <h3 className="text-2xl text-left w-full  font-normal">{!guest.length > 0 ? "Add Guest" : "Edit Guest"}</h3>


                {/*Name Section*/}

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label htmlFor="first_name">First Name</label>
                        <input onChange={handleChange} value={form.first_name} type="text" id="first_name" name="first_name" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="last_name">Last Name</label>
                        <input onChange={handleChange} value={form.last_name} type="text" id="last_name" name="last_name" required/>
                    </div>
                </div>

                {/*Side-Relationship Section*/}

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label htmlFor="sides">Side</label>
                        <select onChange={handleChange} value={form.side} name="side" id="side" required>
                            <option value="" disabled>Select side</option>
                            <option value="Bride">Bride</option>
                            <option value="Groom">Groom</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="relation">Relationship</label>
                        <select onChange={handleChange} value={form.relation} name="relation" id="relation" required>
                            <option value="" disabled>Select relation</option>
                            <option value="Bride/Groom">Bride/Groom</option>
                            <option value="Family">Family</option>
                            <option value="Friend">Friend</option>
                            <option value="Work">Work</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {/*Guest-Day Section*/}

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label htmlFor="guest_type">Guest Type</label>
                        <select onChange={handleChange} value={form.guest_type} name="guest_type" id="guest_type" required>
                            <option value="" disabled>Select guest type</option>
                            <option value="Bride/Groom">Bride/Groom</option>
                            <option value="Groomsman">Groomsman</option>
                            <option value="Bridesmaid">Bridesmaid</option>
                            <option value="Normal Guest">Normal Guest</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="day_type">Day Type</label>
                        <select onChange={handleChange} value={form.day_type} name="day_type" id="day_type" required>
                            <option value="" disabled>Select day type</option>
                            <option value="Full Day">Full Day</option>
                            <option value="Night Only">Night Only</option>
                        </select>
                    </div>                
                </div>

                {/*Age-RSVP Section*/}

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label htmlFor="age_category">Age</label>
                        <select onChange={handleChange} value={form.age_category} name="age_category" id="age_category" required>
                            <option value="" disabled>Select age</option>
                            <option value="Adult">Adult</option>
                            <option value="Child">Child</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="rsvp">RSVP Confirmed</label>
                        <select onChange={handleChange} value={form.rsvp} name="rsvp" id="rsvp" required>
                            <option value="" disabled>Select rsvp</option>
                            <option value="Not Sent">Not Sent</option>
                            <option value="Pending">Pending</option>
                            <option value="Attending">Attending</option>
                            <option value="Not Attending">Not Attending</option>
                        </select>
                    </div>    
                </div>

                {/*Cancel-Submit Section*/}

                <div className="flex flex-row mt-8 justify-end">
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                    <button className="btn" type="submit">Save Guest</button>

                </div>
                
            </form>
        </div>
    )
}