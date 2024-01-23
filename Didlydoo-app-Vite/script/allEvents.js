export let allEvents = async () =>{
    let response = await fetch('http://localhost:3000/api/events/');
    let tableau = await response.json();
    console.log(tableau);
}
