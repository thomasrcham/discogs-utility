
document.addEventListener('DOMContentLoaded', () => checkKey());

function checkKey() {
    if (!key || !userName) {

        const loginContainer = document.getElementById('loginForm');
        const loginForm = document.createElement('form');
        const loginUserName = document.createElement('input');
        const loginPAT = document.createElement('input');
        const loginSubmit = document.createElement('button');
        const loginLink = document.createElement('a');

        loginLink.href = "https://www.discogs.com/settings/developers";
        loginLink.innerText = "Get Personal Access Token here!"

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

        loginForm.append(loginUserName, loginPAT, loginSubmit, loginLink);
        loginContainer.append(loginForm);

        //Attempting to send out loginUserName and loginPat to loginSubmit function
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            //console.log(e.target.loginUserName.value); //Works
            //console.log(e.target.loginPAT.value) //Works
            userName = e.target.loginUserName.value;
            key = e.target.loginPAT.value;
            loginForm.remove();

            main();
        })

    }
    else {
        main();
    }
}
//assign authUsername and authToken so they can be used in fetches here


//test authenticated response
//  response = fetch(`https://api.discogs.com/database/search?q=Nirvana${authToken}`)
//  .then((response) => response.json())
//  .then((response) => console.log(response));

