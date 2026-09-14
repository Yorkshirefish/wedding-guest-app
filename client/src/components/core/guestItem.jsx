
export default function GuestItem({guest}) {
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
                <i className="fa-light fa-pencil"></i>
                <i className="fa-regular fa-trash-can"></i>
            </td>
        </tr>
    )
}