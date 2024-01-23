export let addAvailability = async (valeur) =>{
        
     //element à automatiser par après
    let name = "Ugur F";
    let dates = [{ "date" : '2024-02-22', available : valeur}];
    let id = "3bb5d56d234f";
     //fin des elements 

     let objectData = {
        name : name, 
        dates : dates
    };
    let response = await fetch (`http://localhost:3000/api/events/${id}/attend`,{
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(objectData)
    })
}