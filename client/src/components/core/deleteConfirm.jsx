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
            <div className="min-w-100 min-h-75 bg-gray-200 p-10 rounded-xl flex flex-col justify-center align-center">
                <p className="text-xl text-center mb-2.5">Are you sure you want to delete</p>
                <p className="text-xl font-bold text-center mb-10">{guest.first_name} {guest.last_name}</p>
                <div className="flex flex-row justify-center gap-10">
                    <button className="btn green-btn" onClick={handleCancel}>Cancel</button>
                    <button className="btn confirm-btn" onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    )
}