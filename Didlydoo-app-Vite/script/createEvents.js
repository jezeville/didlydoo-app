export let createEvents = async(author , name , description , date) =>{

        let objectData = {
            name: name,
            author: author,
            description: description,
            dates: date,
        };
        let response = await fetch('http://localhost:3000/api/events/', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objectData),
        });
        let tableau = await response.json();
        console.log(tableau);
}