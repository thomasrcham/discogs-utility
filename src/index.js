let parsedReleases = []
let reissues = []


//fetch data from Discogs, send to be parsed, send to be alphabetized by artist
function fetchDiscogsFull() {
    fetch('https://api.discogs.com/users/theyear1000/collection/folders/0/releases?per_page=50')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let returnData = data.releases;
            // console.log(returnData);
            returnData.forEach(parseInfo);
            orderByYear(parsedReleases);
            alphabetizeByArtist(parsedReleases);
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
            // 'year': getYear(release.basic_information.master_url),
            'year': release.basic_information.year,
            'genre': release.basic_information.genres[0],
            'descriptions': release.basic_information.formats[0].descriptions
        }];
    // console.log(singleParsedRelease)
    parsedReleases.push(singleParsedRelease)

    return parsedReleases;
}

//pull year from Master Release
// function getYear(url) {
//     let year =
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 // debugger
//                 year = data.year;
//                 return year;
//             })
//     return year
// }

//order by year
function orderByYear(array) {
    array.sort((a, b) => {
        let aValue = a[0].year;
        let bValue = b[0].year;
        if (aValue < bValue) {
            return -1
        } else if (aValue > bValue) {
            return 1
        } else if (aValue === bValue) {
            return 0
        }

    })
}

//alphabetize by artist and return changed array
function alphabetizeByArtist(array) {
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

function createTable() {
    let x = 25;
    for (let i = 0; i < x; i++) {
        if ((i % 5) === 0) {
            createRow(i);
        } else {
            createCell(i);
        }
    }
}

function createRow(i) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let table = document.getElementById('thetable')

    tr.classList = 'row';
    tr.id = `${i / 5}`;
    td.classList = 'album';
    td.id = 'td' + `${i}`;
    td.setAttribute('background', `./images/image${i + 1}.png`);

    tr.appendChild(td);
    table.appendChild(tr);
}

function createCell(i) {
    let td = document.createElement('td');
    let trID = Math.floor(i / 5)

    td.classList = 'album';
    td.id = 'td' + `${i}`;
    td.setAttribute('background', `./images/image${i + 1}.png`);

    document.getElementById(trID).appendChild(td);

}

createTable()

setTimeout(() => { fetchDiscogsFull() }, 500);


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
