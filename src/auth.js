document.addEventListener('DOMContentLoaded', () => checkKey());

function checkKey () {
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
        loginPAT.id = "loginPAT"
        
        loginForm.append(loginUserName, loginPAT, loginSubmit);
        loginContainer.append(loginForm);

        //Attempting to send out loginUserName and loginPat to loginSubmit function
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            //console.log(e.target.loginUserName.value); //Works
            //console.log(e.target.loginPAT.value) //Works
            userName = e.target.loginUserName.value;
            key = e.target.loginPAT.value;
            loginForm.reset();
        })

    }



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

