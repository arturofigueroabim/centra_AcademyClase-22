
const resgisterButton = document.getElementById('register');

resgisterButton.addEventListener('click',printValues);

window.addEventListener('load', getUsers);

function getUsers(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return fetch('http://localhost:3000/user',{
    method: 'GET',
    headers: headers
    }).then(response =>{
        return response.json();
    }).then(res => console.log(res));
}


function printValues(event){
    event.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        username: document.getElementById('userName').value,
        password: document.getElementById('password').value
    };

    console.log(data);
}