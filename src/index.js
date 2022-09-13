//global variables
let parsedReleases = []
// let reissues = []

addEventListener('DOMContentLoaded', () => {

//fetch data from Discogs, send to be parsed, send to be alphabetized by artist
function fetchDiscogsFull() {
    fetch(`https://api.discogs.com/users/${userName}/collection/folders/0/releases?per_page=25`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let returnData = data.releases;
            // console.log(returnData);
            returnData.forEach(parseInfo);
            parsedReleases.forEach(checkChar);
            orderByYear(parsedReleases);
            alphabetizeByArtist(parsedReleases);
            console.log(parsedReleases)})
            .then(createTable)
}

//create table
    function createTable() {
        let x = parsedReleases.length;
        for (let i = 0; i < x; i++) {
            if ((i % 5) === 0) {
                createRow(i);
            } else {
                createCell(i);
            }
        }
    }
  
// creates rows for the first and then every fifth item in array    
    function createRow(i) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let p = document.createElement('p');
        let theTable = document.querySelector('table')
    
        tr.classList = 'row';
        tr.id = `${i / 5}`;

        td.classList = 'album';
        td.id = 'td' + `${i}`;

        p.innerText = parsedReleases[i].artist;
        p.classList = 'artistName';



        // if (i<9) {
        // td.setAttribute('background', `./images/image0${i + 1}.png`);
        // } else{ 
        //     td.setAttribute('background', `./images/image${i + 1}.png`);
        // }

        td.appendChild(p);
        tr.appendChild(td);
        theTable.appendChild(tr);
    }

//creates cells for all remaining array items    
    function createCell(i) {
        let td = document.createElement('td');
        let trID = Math.floor(i / 5)
        let p = document.createElement('p');

        td.classList = 'album';
        td.id = 'td' + `${i}`;

        p.innerText = parsedReleases[i].artist;
        p.classList = 'artistName';

        // if (i<9) {
        //     td.setAttribute('background', `./images/image0${i + 1}.png`);
        //     } else{ 
        //         td.setAttribute('background', `./images/image${i + 1}.png`);
        //     }

        td.appendChild(p);
        document.getElementById(trID).appendChild(td);
    
    }
    
    function checkChar (array) {
        if (array.artist.charAt(array.artist.length - 3) === '(') {
          array.artist = array.artist.substring(0,array.artist.length - 4)
          return (array.artist)
        }
    }

    setTimeout(() => { 
        fetchDiscogsFull() 
    }, 500);
    
});

//take returned data from discogs, parse out desired info, return in array
function parseInfo(release) {
    ;
    let singleParsedRelease = 
        {
            'artist': release.basic_information.artists[0].name,
            'title': release.basic_information.title,
            // 'year': getYear(release.basic_information.master_url),
            'year': release.basic_information.year,
            'genre': release.basic_information.genres[0],
            'descriptions': release.basic_information.formats[0].descriptions
        };
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
        let aValue = a.year;
        let bValue = b.year;
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
        let aValue = a.artist;
        let bArtist = b.artist;

        if (aValue.localeCompare(bArtist) < 0) {
            return -1
        } else if (aValue.localeCompare(bArtist) > 0) {
            return 1
        } else if (aValue.localeCompare(bArtist) === 0) {
            return 0
        }

    })
}



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
