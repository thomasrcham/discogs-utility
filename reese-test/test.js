// let fetchYear = ''
// async function getYear(url) {
//     await fetch(url)
//         .then((res) => res.json())
//         .then((master) => fetchYear = master.year)
//     return fetchYear
// }


// console.log(getYear('https://api.discogs.com/masters/910103'))



fetch('https://api.discogs.com/releases/1158751')
    .then((res) => res.json())
    .then((data) => console.log(data.uri))


/**
 * 
 * @param {function} array checks if release is reissue then reassigns year to master release
 */
function fixYear(array) {
    array.forEach((array) => {
        if (array.reissue === true) {
            let newYear = getYear(array.masterURL);
            array.year = newYear;
            return array
        }
    });
    console.log(array)
}

/**
 * pulls master release year from Discogs
 */
function getYear(url) {
    let newYearFetch =
        fetch(url)
            .then((res) => res.json())
            .then((master) => {
                debugger;
                return master.year
            })
    return newYearFetch;
}