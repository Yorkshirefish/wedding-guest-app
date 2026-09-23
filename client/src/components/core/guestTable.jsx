import GuestItem from "./guestItem"
import ConfirmDelete from "./deleteConfirm"
import { useState } from "react"

export default function GuestTable({guests, deleteGuest, editGuest, toggleVisibility}) {

    const [guestChild, setGuestChild] = useState("");
    const [deleteVisibility, setDeleteVisibility] = useState(false);

    function showConfirmDelete(guest) {
        setGuestChild(guest);
        setDeleteVisibility(true);
    }

    function hideConfirmDelete() {
        setDeleteVisibility(false);
    }

    return (
        <>
            <table className="guest-table w-full mt-10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Side</th>
                        <th>Relationship</th>
                        <th>Day Type</th>
                        <th>Guest Type</th>
                        <th>RSVP</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {guests.map((guest) => <GuestItem guest={guest} key={guest._id} editGuest={editGuest} toggleVisibility={toggleVisibility} showConfirmDelete={showConfirmDelete}  />)}
                </tbody>
            </table>
            {deleteVisibility? <ConfirmDelete guest={guestChild} deleteGuest={deleteGuest} hideConfirmDelete={hideConfirmDelete}/> : null}
        </>
    )
}