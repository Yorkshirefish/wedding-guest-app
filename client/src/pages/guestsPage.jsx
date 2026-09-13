import { useGuests } from "../hooks/guestHook"



export function GuestsPage() {
    const { 
        guests,
        loading,
        addGuest,
        deleteGuest,
        updateGuest
     } = useGuests();

     function removeGuest(id) {
        deleteGuest(id);
        console.log(guests);
     }

    console.log(guests);

    return (
        <>
            <button onClick={() => removeGuest("6aa6b684cf9303f4766a475c")}>Click to delete Test</button>
        </>
    )
}