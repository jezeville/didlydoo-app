export let editEvent = async(id) =>{

    //element à automatiser par après
    let name = document.querySelector('.form_edit-name').value;
    let author = document.querySelector('.form_edit-author').value;
    let description = document.querySelector('.form_edit-desc').value;
    //fin des elements 

    console.log(name);
    console.log(author);
    console.log(description);

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