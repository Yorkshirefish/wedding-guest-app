export default function ConfirmDelete({guest, deleteGuest, hideConfirmDelete}) {

    function handleCancel() {
        hideConfirmDelete()
    }

    function handleConfirm() {
        deleteGuest(guest._id)
        hideConfirmDelete()
    }

    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/40">
            <div className="min-w-100 min-h-75 bg-gray-200 p-10 rounded-xl">
                <p>Are you sure you want to delete {guest.first_name} {guest.last_name}</p>
                <div className="flex flex-row ">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    )
}