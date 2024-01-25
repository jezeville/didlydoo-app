export let editEvent = async() =>{

    //element à automatiser par après
    let name = "Soirée chez Ugur";
    let author = "Ugur F";
    let description = "Super annif pour une soirée chez Ugur";
    let id = '3bb5d56d234f';
    //fin des elements 

    let objectData = {};
    if (name){objectData.name = name}
    if (author){objectData.author = author}
    if (description){objectData.description = description}
    
    let response = await fetch(`http://localhost:3000/api/events/${id}/`,{
        method : "PATCH",
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(objectData)
    })
}