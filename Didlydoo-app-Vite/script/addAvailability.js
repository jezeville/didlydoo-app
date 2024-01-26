export let addAvailability = async (id , tab) =>{
        
    let name = document.getElementById('addName').value;
     let objectData = {
        name : name, 
        dates : tab
        };
    let response = await fetch (`http://localhost:3000/api/events/${id}/attend`,{
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(objectData)
    })
}