export let createEvents = async() =>{

        //element à automatiser par après
        let author = "Jeremy Frédéric";
        let name = "Party for my 18 years";
        let description = "Super party for my birthday";
        let date = ["2024-02-22", "2024-02-23"];
        //fin des elements 
    
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