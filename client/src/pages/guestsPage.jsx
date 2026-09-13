import { useGuests } from "../hooks/guestHook"



export function GuestsPage() {
    const { 
        guests,
        loading,
        addGuest,
        deleteGuest,
        updateGuest
     } = useGuests();

     async function newGuest(guest) {
        await addGuest(guest);
        console.log(guests);
     }


    return (
        <>
            <button onClick={() => newGuest({"first_name": "Test",
  "last_name": "Test",
  "side": "Bride",
  "guest_type": "Normal Guest",
  "dayType": "Full day",
  "age_category": "Adult",
  "relation": "Friend",
  "rsvp": "Not Sent",
  "status": "Safe"})}>Click to delete Test</button>
        </>
    )
}