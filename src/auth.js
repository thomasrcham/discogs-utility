//if you do not have a key, it is undefined
let key = undefined;
let userName = undefined;

document.addEventListener('DOMContentLoaded', () => checkKey(key, userName));

function checkKey (key, userName) {
    if (!key || !userName){
        const loginContainer = document.getElementById('loginForm');
        const loginForm = document.createElement('form');
        const loginUserName = document.createElement('input');
        const loginPAT = document.createElement('input');
        const loginSubmit = document.createElement('input');

        loginForm.id = "loginForm";
        loginForm.action = "#";

        loginSubmit.type = "submit";
        loginSubmit.addEventListener('submit', loginSubmit);
        
        loginUserName.placeholder = "Discogs Username";
        loginUserName.id = "loginUserName";
        
        loginPAT.placeholder = "Discogs PAT";
        loginPAT.placeholder = "loginPAT"
        
        loginForm.append(loginUserName, loginPAT, loginSubmit);
        loginContainer.append(loginForm);
    }

}

function loginSubmit (loginSubmitEvent){
    console.log(loginSubmitEvent);
}


function objectToString (object) {
  let stringObject =  Object.entries(object).map((mapResponse) => {
        let key = mapResponse[0];
        let value = mapResponse[1];
        return `${key}="${value}"`;
    }).join(', ');
    return stringObject;
}
//test authenticated response
//  response = fetch(`https://api.discogs.com/database/search?q=Nirvana&token=${key}`)
//  .then((response) => response.json())
//  .then((response) => console.log(response));

