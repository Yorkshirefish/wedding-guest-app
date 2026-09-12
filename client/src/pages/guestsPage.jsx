import { useGuests } from "../hooks/guestHook"



export function GuestsPage() {
    const { guests } = useGuests();

    console.log(guests)

    return (
        <></>
    )
}