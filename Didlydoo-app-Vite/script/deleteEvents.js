export async function deleteEvent() {
    //element à automatiser par après
        let id = "460fefc37b98";

    await fetch(`http://localhost:3000/api/events/${id}/`, {
        method: "DELETE"
    })
}