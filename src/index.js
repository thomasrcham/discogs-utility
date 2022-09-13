//global variables
let parsedReleases = []
let reissues =[]

//fetch data from Discogs, send to be parsed, send to be alphabetized by artist
function fetchDiscogsFull() {
    fetch(`https://api.discogs.com/users/${userName}/collection/folders/0/releases?per_page=15`)
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

function getYear (url) {
    let year =
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // debugger
        year = data.year;
        return year;
    })
    return year
}

function orderByYear(array) {
    array.sort((a, b) => {
        let aValue = a[0].year;
        let bValue = b[0].year;
        if (aValue < bValue) {
            return -1
        } else if (aValue > bValue)  {
            return 1
        } else if (aValue === bValue)  {
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


setTimeout(() => {fetchDiscogsFull()}, 500); 

function generateTable (array) {
    let i = array.length;
    if (i>5) {
        
    }
}


