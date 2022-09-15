// let url = 'https://api.discogs.com/masters/910103'
// let fYear = ''

const fetchYear = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((master) => { return master.year });
}

// fetchYear('https://api.discogs.com/masters/910103').then(res => { console.log(res) })
// result: 2015

console.log(() => fetchYear('https://api.discogs.com/masters/910103').then(res => { return res }))

