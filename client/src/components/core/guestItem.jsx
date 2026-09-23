
export default function GuestItem({guest, deleteGuest, editGuest, toggleVisibility}) {

    function handleDelete() {
        deleteGuest(guest._id)
    }

    function handleEdit() {
        editGuest(guest)
        toggleVisibility()
    }

    return (
        <tr>
            <td>
                {guest.first_name} {guest.last_name}
            </td>
            <td>
                {guest.side}
            </td>
            <td>
                {guest.relation}
            </td>
            <td>
                {guest.day_type}
            </td>
            <td>
                {guest.guest_type}
            </td>
            <td>
                {guest.rsvp}
            </td>
            <td>
                <div className="flex flex-row gap-5">
                    <i onClick={handleEdit} className="fa-light fa-pencil bg-cream-wedding text-black transition duration-300 hover:bg-green-wedding"></i>
                    <i onClick={handleDelete} className="fa-regular fa-trash-can  bg-cream-wedding text-black transition duration-300 hover:bg-green-wedding"></i>
                </div>
            </td>
        </tr>
    )
}