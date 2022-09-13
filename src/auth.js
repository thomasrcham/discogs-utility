


function objectToString (object) {
  let stringObject =  Object.entries(object).map((mapResponse) => {
        let key = mapResponse[0];
        let value = mapResponse[1];
        return `${key}="${value}"`;
    }).join(', ');
    return stringObject;
}
//test authenticated response
 response = fetch(`https://api.discogs.com/database/search?q=Nirvana&token=${key}`)
 .then((response) => response.json())
 .then((response) => console.log(response));

