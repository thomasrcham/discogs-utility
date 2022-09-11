let artistArray = []
// // const discogsURL = 'https://api.discogs.com/users/theyear1000/collection/folders/0/releases?per_page=500&token=MpvxclVusZVUOFzPynNMoHjRMUqrvxTJXTAxSgWS'


function fetchDiscogsUnique (){
    fetch('https://api.discogs.com/users/pikeminnow/collection/folders/0/releases?per_page=50')
    .then((res) => res.json())
    .then((data) => {debugger;
        let dataArray = data.releases
        dataArray.forEach(createArtistsArray)
        artistArray.sort();
        let uniqueArtists = [...new Set(artistArray)]
        console.log(uniqueArtists)
    }
    )
}

// function createArtistsArray (array) {
//     // const artist = createElement ('p')
//     artistArray.push(array.basic_information.artists[0].name)
//     return artistArray    
// }

let parsedReleases = []

function fetchDiscogsFull (){
    fetch('https://api.discogs.com/users/theyear1000/collection/folders/0/releases?per_page=25')
    .then((res) => res.json())
    .then((data) => {
        debugger;
        let returnData = data.releases;
        returnData.forEach(parseInfo);
        console.log(parsedReleases)
    })
}

function parseInfo(release) {;
    // console.log(release)
    let singleParsedRelease = [
        {'artist': release.basic_information.artists[0].name}, 
        {'title': release.basic_information.title},
        {'year': release.basic_information.year},
        {'genre': release.basic_information.genres[0]}];
    parsedReleases.push(singleParsedRelease)
    // debugger;
    // console.log(parsedReleases)
    
    return parsedReleases;
}




fetchDiscogsFull()

// function discogsImage() {
//     fetch('https://hidden-plateau-87951.herokuapp.com/https://api.discogs.com/masters/21520'
//     , { token: 'MpvxclVusZVUOFzPynNMoHjRMUqrvxTJXTAxSgWS'}

//     )
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(console.error)
// }

// discogsImage()

//


// function getToken() {
//     debugger;
//     fetch('https://hidden-plateau-87951.herokuapp.com/https://api.discogs.com/oauth/request_token', {
//         method: 'GET',
//         headers: { discogsHeader }
//     })
//         .then((data) =>{console.log(data)})
//         .catch(console.error)
// }

// getToken()