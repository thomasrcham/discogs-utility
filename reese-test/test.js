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