
document.addEventListener('DOMContentLoaded', () => checkKey());


function checkKey () {
    if (!key || !userName){
        const loginContainer = document.getElementById('loginForm');
        const loginForm = document.createElement('form');
        const loginUserName = document.createElement('input');
        const loginPAT = document.createElement('input');
        const loginSubmit = document.createElement('button');

        loginForm.id = "loginForm";     
        loginForm.addEventListener('submit', (loginSubmitEvent) => {
            loginSubmitEvent.preventDefault();
            console.log(loginSubmitEvent);

            //need to grab key and username and assign those values - RETURN THESE so that other functions may use them!
        });

        loginSubmit.type = "submit";
        loginSubmit.value = "submit";
        loginSubmit.innerText = "Submit";
        
        loginUserName.placeholder = "Discogs Username";
        loginUserName.id = "loginUserName";
        
        loginPAT.placeholder = "Discogs PAT";
        loginPAT.id = "loginPAT"
        
        loginForm.append(loginUserName, loginPAT, loginSubmit);
        loginContainer.append(loginForm);
    }
main();
}

//assign authUsername and authToken so they can be used in fetches here
const authToken = `&token=${key}`


//test authenticated response
//  response = fetch(`https://api.discogs.com/database/search?q=Nirvana${authToken}`)
//  .then((response) => response.json())
//  .then((response) => console.log(response));

