// let artistArray = []
// // const discogsURL = 'https://api.discogs.com/users/theyear1000/collection/folders/0/releases?per_page=500&token=MpvxclVusZVUOFzPynNMoHjRMUqrvxTJXTAxSgWS'


// function fetchDiscogs (){
//     fetch('https://api.discogs.com/users/pikeminnow/collection/folders/0/releases?per_page=50')
//     .then((res) => res.json())
//     .then((data) => {debugger;
//         let dataArray = data.releases
//         dataArray.forEach(createArtistsArray)
//         artistArray.sort();
//         let uniqueArtists = [...new Set(artistArray)]
//         console.log(uniqueArtists)
//     }
//     )
// }

// function createArtistsArray (array) {
//     // const artist = createElement ('p')
//     artistArray.push(array.basic_information.artists[0].name)
//     return artistArray    
// }

// fetchDiscogs()

// function discogsImage() {
//     fetch('https://hidden-plateau-87951.herokuapp.com/https://api.discogs.com/masters/21520'
//     , { token: 'MpvxclVusZVUOFzPynNMoHjRMUqrvxTJXTAxSgWS'}

//     )
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(console.error)
// }

// discogsImage()

//&token=MpvxclVusZVUOFzPynNMoHjRMUqrvxTJXTAxSgWS


function getToken() {
    debugger;
    fetch('https://hidden-plateau-87951.herokuapp.com/https://api.discogs.com/oauth/request_token', {
        method: 'GET',
        headers: { discogsHeader }
    })
        .then((data) =>{console.log(data)})
        .catch(console.error)
}

getToken()