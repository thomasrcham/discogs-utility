// 1 Obtain consumer key and consumer secret by registering as a developer
//done
// 2
// send a GET request to the Discogs request token URL
let response = "";
let authorizationObj = {
    "OAuth oauth_consumer_key": "JbKhfAHeBoYpONHrwhFo",
    oauth_nonce: "random_string_or_timestamp",
    oauth_signature: "BurOLQOKBMGrjVfZUCFvXJlVqwOYjASp",
    oauth_signature_method: "PLAINTEXT",
    oauth_timestamp: Date.now(),
    oauth_callback: "https://ashtonmackenzie.com/discogs-utility/"
}

let formattedAuthorizationObj = objectToString(authorizationObj);

let requestTokenHeadersObj = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": formattedAuthorizationObj,
    "User-Agent": navigator.userAgent
}

function objectToString (object) {
  let stringObject =  Object.entries(object).map((mapResponse) => {
        let key = mapResponse[0];
        let value = mapResponse[1];
        return `${key}="${value}"`;
    }).join(',\n        ');
    return "\n        "+stringObject;
}

console.log(requestTokenHeadersObj);
 response = fetch('https://api.discogs.com/oauth/request_token', requestTokenHeadersObj).then(console.log(response));
// 3
// redirect user to Discogs Auth page
// 4 
// send POST to discogs access token URL
// 5 
// send auth'd requests to discogs endpoints