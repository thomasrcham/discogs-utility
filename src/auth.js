// 1 Obtain consumer key and consumer secret by registering as a developer
//done
// 2
// send a GET request to the Discogs request token URL
var response = "";
let authorizationObj = {
    "OAuth oauth_consumer_key": "JbKhfAHeBoYpONHrwhFo",
    oauth_nonce: "random_string_or_timestamp",
    oauth_signature: "BurOLQOKBMGrjVfZUCFvXJlVqwOYjASp",
    oauth_signature_method: "PLAINTEXT",
    oauth_timestamp: Date.now(),
    oauth_callback: "https://ashtonmackenzie.com/discogs-utility/"
}

let formattedAuth = Object.entries(authorizationObj).map((mapResponse) => {
    let key = mapResponse[0];
    let value = mapResponse[1];
    return `${key}="${value}"`;})
    .join(',\n');

let requestTokenHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": formattedAuth
    // "User-Agent": navigator.userAgent
}
console.log(requestTokenHeaders);
// response = fetch('https://api.discogs.com/oauth/request_token', requestTokenHeaders)

// 3
// redirect user to Discogs Auth page
// 4 
// send POST to discogs access token URL
// 5 
// send auth'd requests to discogs endpoints