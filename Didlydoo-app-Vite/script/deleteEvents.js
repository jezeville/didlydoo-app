export async function deleteEvent(id) {
    await fetch(`http://localhost:3000/api/events/${id}/`, {
        method: "DELETE"
    })
}