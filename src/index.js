let parsedReleases = []


//fetch data from Discogs, send to be parsed, send to be alphabetized by artist
function fetchDiscogsFull() {
    fetch('https://api.discogs.com/users/theyear1000/collection/folders/0/releases?per_page=10')
        .then((res) => res.json())
        .then((data) => {
            let returnData = data.releases;
            returnData.forEach(parseInfo);
            alphabetize(parsedReleases);
            console.log(parsedReleases)
        })
}

//take returned data from discogs, parse out desired info, return in array
function parseInfo(release) {
    ;
    let singleParsedRelease = [
        {
            'artist': release.basic_information.artists[0].name,
            'title': release.basic_information.title,
            'year': release.basic_information.year,
            'genre': release.basic_information.genres[0]
        }];
    parsedReleases.push(singleParsedRelease)

    return parsedReleases;
}

//alphabetize by artist and return changed array
function alphabetize(array) {
    array.sort((a, b) => {
        let aValue = a[0].artist;
        let bArtist = b[0].artist;

        if (aValue.localeCompare(bArtist) < 0) {
            return -1
        } else if (aValue.localeCompare(bArtist) > 0) {
            return 1
        } else if (aValue.localeCompare(bArtist) === 0) {
            return 0
        }

    })
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

// function fetchDiscogsUnique() {
//     fetch('https://api.discogs.com/users/pikeminnow/collection/folders/0/releases?per_page=50')
//         .then((res) => res.json())
//         .then((data) => {
//             debugger;
//             let dataArray = data.releases
//             dataArray.forEach(createArtistsArray)
//             artistArray.sort();
//             let uniqueArtists = [...new Set(artistArray)]
//             console.log(uniqueArtists)
//         }
//         )
// }
