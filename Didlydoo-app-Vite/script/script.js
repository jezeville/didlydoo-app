let Test1 = async () =>{
    let response = await fetch('http://localhost:3000/api/events');
    let tableau = await response.json();
    console.log(tableau);
}
Test1();