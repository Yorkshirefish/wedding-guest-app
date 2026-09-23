import GuestItem from "./guestItem"

export default function GuestTable({guests, deleteGuest, editGuest, toggleVisibility}) {
    return (
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
                {guests.map((guest) => <GuestItem guest={guest} key={guest._id} deleteGuest={deleteGuest} editGuest={editGuest} toggleVisibility={toggleVisibility}/>)}
            </tbody>
        </table>
    )
}