function main() {

    //global variables
    let parsedReleases = [];
    // let reissues = []

    addEventListener('DOMContentLoaded', () => {

        //fetch data from Discogs, send to be parsed, send to be alphabetized by artist
        function fetchDiscogsFull() {
            fetch(`https://api.discogs.com/users/${userName}/collection/folders/0/releases?per_page=25${authToken}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    let returnData = data.releases;
                    // console.log(returnData);
                    //this is where parsedReleases gets data
                    returnData.forEach(parseInfo);
                    parsedReleases.forEach(checkChar);
                    orderByYear(parsedReleases);
                    alphabetizeByArtist(parsedReleases);
                    console.log(parsedReleases);
                })
                .then(createTable);
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
            let theTable = document.querySelector('table')

            tr.classList = 'row';
            tr.id = `${i / 5}`;

            theTable.appendChild(tr);
            createCell(i);
        }

        //creates cells for all remaining array items    
        function createCell(i) {
            let td = document.createElement('td');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let trID = Math.floor(i / 5);
            let p = document.createElement('p');

            td.classList = 'albumCell';
            td.id = `albumCell ${i}`;

            div.classList = 'overlayText';

            img.src = parsedReleases[i].cover;
            img.alt = `${parsedReleases[i].artist} - ${parsedReleases[i].title}`;
            img.id = `coverImage ${i}`;
            img.classList = 'coverImage';

            p.innerText = parsedReleases[i].artist;
            p.classList = 'artistNameText';

            div.appendChild(p);
            td.append(img, div);
            document.getElementById(trID).appendChild(td);

            td.addEventListener('click', (tdClickEvent) => { detailReflow(tdClickEvent) });

            /**
             * reflow the table when an album is clicked
             * @param {object} tdClickEvent - the event generated by clicking an album
             */
            function detailReflow(tdClickEvent) {
                const targetTd = tdClickEvent.target.parentElement;
                const targetTdId = targetTd.id.split(' ')[1];
                if (document.getElementById('trDetail')) {
                    if (document.getElementById('trDetail').metaID != targetTdId) {
                        deleteTrDetail();
                        populateTrDetail();
                    }
                    else { deleteTrDetail(); }
                }
                else {
                    populateTrDetail();
                }

                function deleteTrDetail() {
                    const oldDetails = document.getElementById('trDetail');
                    if (oldDetails) {
                        oldDetails.remove();
                    }
                }
                function populateTrDetail() {
                    const trDetail = document.createElement('tr');
                    const tdDetailImage = document.createElement('td');
                    const tdDetailText = document.createElement('td');
                    const targetTr = tdClickEvent.target.parentElement.parentElement;



                    trDetail.id = "trDetail";
                    trDetail.metaID = targetTdId;
                    trDetail.append(tdDetailImage);
                    trDetail.append(tdDetailText);

                    tdDetailImage.colSpan = 2;
                    tdDetailImage.className = "tdDetail";

                    tdDetailText.colSpan = 3;
                    tdDetailText.className = "tdDetail";

                    //MORE DETAIL HERE!

                    let parsedDetails = parsedReleases[targetTdId]
                    let displayDetailsArray = ['artist', 'title', 'year', 'genre', 'descriptions', 'url'];
                    /**
                     * Populate the description row table data with multiple p tags and the associated data from parsedReleases
                     * @param {array} displayDetailsArray - the list of details we want from parsedReleases
                     * @param {object} parsedReleases[id] - the object representing the album we want details on from parsedReleases
                     */
                    displayDetailsArray.forEach((key) => {
                        let tdDetailP = document.createElement('p');
                        //if the data type is an array, then convert to a string with spaces between the elements
                        if (key == 'descriptions') {
                            tdDetailP.innerText = `${key}: ${Object.values(parsedDetails[key]).join(', ')}`;
                        }
                        else if (key == 'url') {
                            // tdDetailP.innerHTML = `<a href="${parsedDetails[key]}">Album Page on Discogs</a>`;
                            fetch(parsedDetails[key])
                                .then((res) => {
                                    return res.json();;
                                })
                                .then((data) => {
                                    console.log(data.uri);
                                    tdDetailP.innerHTML = `<a href ="${data.uri}"> Album Page on Discogs</a>`;
                                })


                        }
                        else {
                            tdDetailP.innerText = `${key}: ${parsedDetails[key]}`;
                        }
                        tdDetailP.id = key;
                        tdDetailText.append(tdDetailP);

                    })

                    let tdDetailImageCover = document.createElement('img');
                    tdDetailImageCover.src = parsedDetails.cover;
                    tdDetailImage.append(tdDetailImageCover);

                    targetTr.insertAdjacentElement('afterEnd', trDetail);

                    trDetail.addEventListener('click', (trClickEvent) => {
                        deleteTrDetail();
                    })

                }

            }
        }
        function checkChar(array) {
            if (array.artist.charAt(array.artist.length - 3) === '(') {
                array.artist = array.artist.substring(0, array.artist.length - 4);
                return (array.artist);
            }
        }
        setTimeout(() => {
            fetchDiscogsFull()
        }, 500);



        //take returned data from discogs, parse out desired info, return in array
        // or in jsdocs form
        /**
         * Take the returned data from Discogs
         * parse out desired info
         * append to parsedReleases array
         * @param {object} release - parsed json of release from discogs
         */
        function parseInfo(release) {
            ;
            let singleParsedRelease =
            {
                'artist': release.basic_information.artists[0].name,
                'title': release.basic_information.title,
                // 'year': getYear(release.basic_information.master_url),
                'year': release.basic_information.year,
                'genre': release.basic_information.genres[0],
                'descriptions': release.basic_information.formats[0].descriptions,
                'folderID': release.folder_id,
                'cover': release.basic_information.cover_image,
                'url': release.basic_information.resource_url
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
    })
}