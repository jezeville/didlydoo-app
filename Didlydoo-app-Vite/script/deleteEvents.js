export async function deleteEvent(id) {

    await fetch(`http://localhost:3000/api/events/${id}/`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(res => console.log('res : ', res));

}