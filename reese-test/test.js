const arrayTest =
    [
        {
            "artist": "Alanis Morissette",
            "title": "Jagged Little Pill",
            "year": 2020,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Limited Edition",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/BK8RF3UA5otdj_LVP-XkbIsJpRxkuSsdwAcRlvpSkg4/rs:fit/g:sm/q:90/h:609/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MzU0/MjczLTE2MjQ0MDMw/NzktMjEwMC5qcGVn.jpeg"
        },
        {
            "artist": "Alvvays",
            "title": "Alvvays",
            "year": 2020,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/Jw8-opdCUZPUhF3GPKPVsrD50e7K_HsqBhDRxASLRlQ/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0ODI2/MjM2LTE1ODIzNTE4/NDctOTAwMi5qcGVn.jpeg"
        },
        {
            "artist": "Alvvays",
            "title": "Antisocialites",
            "year": 2021,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/Ej1Z4BSgsVEbXn3acIUL7g69v10KMw0K3qAtVNdDN5Y/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3Njkz/OTI5LTE2MTQ5MDI1/NzItNTQ4NS5qcGVn.jpeg"
        },
        {
            "artist": "Amanda Shires",
            "title": "Take It Like A Man",
            "year": 2022,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/eyV_hrNFLa_oQMlxoXrcDM8KWLJjPZqTxsFD75hBrrs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MDUz/MTY4LTE2NTkyNTM2/ODYtNzU4My5qcGVn.jpeg"
        },
        {
            "artist": "Andra Day",
            "title": "Merry Christmas From Andra Day",
            "year": 2021,
            "genre": "Funk / Soul",
            "descriptions": [
                "12\"",
                "EP"
            ],
            "folderID": 4421972,
            "cover": "https://i.discogs.com/oE0bqhVrPOq_hXNLa69T58YmWoxIDOJEMussQ4P33Y4/rs:fit/g:sm/q:90/h:601/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMjI5/Mjc5LTE2Mzk1MjU4/MDMtNzA3OS5qcGVn.jpeg"
        },
        {
            "artist": "Andrew Bird",
            "title": "Break It Yourself",
            "year": 2012,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/PTR3YsXfkkIFJtXJEGH_qZlojZ7STd4pcm6CaOkgjqA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0NjQ3/NDMtMTYwOTA4OTU1/Ny03NzAyLmpwZWc.jpeg"
        },
        {
            "artist": "Andrew Bird",
            "title": "The Mysterious Production Of Eggs",
            "year": 2017,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/Ly9-pHGDNzvn27Wo_ElyVd0RTI2vbNa5ST-lboo4wCk/rs:fit/g:sm/q:90/h:616/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzMw/OTc5LTE1ODIzNDIw/ODktMjY4OS5qcGVn.jpeg"
        },
        {
            "artist": "Anjimile",
            "title": "Giver Taker",
            "year": 2020,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "45 RPM",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/AFuczZTpT5PMehbHXaMCtV-oTJoSLEy7wzd4gE_dncE/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNjY3/MzMxLTE2MzYzNDAw/ODctODYwMC5qcGVn.jpeg"
        },
        {
            "artist": "Anton Paulik",
            "title": "The Strauss Dynasty: Vienna Dances",
            "year": 0,
            "genre": "Classical",
            "descriptions": [
                "LP",
                "Compilation"
            ],
            "folderID": 4421966,
            "cover": "https://i.discogs.com/0qL5L2Y9aOjCLRFbXRdfZaHn6oBFC1f5_t-KypnIKKM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NjI3/NjUzLTE2MDg5MjA4/NzgtMTEyNC5tcG8.jpeg"
        },
        {
            "artist": "Arcade Fire",
            "title": "Reflektor",
            "year": 2013,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/5rUtiKEeEzNWvJt4IaainJR33ocOUyqLg5b-Oed-P8M/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwNDEz/NzAtMTYzMjEwMDQw/OC0zMTA5LmpwZWc.jpeg"
        },
        {
            "artist": "Arcade Fire",
            "title": "The Suburbs",
            "year": 2017,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/eeRalXZ7NFT_OKKpJOfwh0rSQDf0oYMiOCA8Wp8GzZI/rs:fit/g:sm/q:90/h:606/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMzQ2/NzY1LTE1MTUwMjMy/MjYtNjE1NS5qcGVn.jpeg"
        },
        {
            "artist": "Arcade Fire",
            "title": "Neon Bible",
            "year": 2017,
            "genre": "Rock",
            "descriptions": [
                "LP"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/daM9WlsU9pf5Xbxy6Ayowl6anSpZ-Pyjcl9eDdukI6w/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjEy/MDcyLTE1MTg4MDc4/NjgtOTUyNi5qcGVn.jpeg"
        },
        {
            "artist": "Arcade Fire",
            "title": "Funeral",
            "year": 2017,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/jfCtqubqWqxkspvxxxvTrAPyWN_kRIt5GnaB3JzGSAU/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjEy/MDMzLTE2MDE0MTAz/MDUtNDQwNi5qcGVn.jpeg"
        },
        {
            "artist": "Arcade Fire",
            "title": "We",
            "year": 2022,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/n-uvb0tqW6Z7_96MoaKwWK8Or766ua2Le-OFYei0OC4/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMTAz/MjI0LTE2NTE3NjQ5/MTAtNzQ4OS5qcGVn.jpeg"
        },
        {
            "artist": "Arooj Aftab",
            "title": "Vulture Prince",
            "year": 2022,
            "genre": "Electronic",
            "descriptions": [
                "LP",
                "Album",
                "Deluxe Edition"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/XslVVPeDOMeyJg2DPVIFmEMti4fur3bBo3IPuBt6868/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNjgz/MTc1LTE2NTYyMTE5/MTMtMTg5MS5qcGVn.jpeg"
        },
        {
            "artist": "Arthur Fiedler",
            "title": "Pops Festival",
            "year": 1967,
            "genre": "Pop",
            "descriptions": [
                "LP",
                "Compilation",
                "Mono"
            ],
            "folderID": 4421966,
            "cover": "https://i.discogs.com/yHpBPlzRqlrwILZG-8cxyyrd_xri_DvDAEhaNqb6VXQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4NzU2/NzMtMTYxMjgxNTQx/OC0zMzc0LmpwZWc.jpeg"
        },
        {
            "artist": "Arturo Toscanini",
            "title": "Nine Beethoven Symphonies",
            "year": 1958,
            "genre": "Classical",
            "descriptions": [
                "LP",
                "Reissue",
                "Mono"
            ],
            "folderID": 4421966,
            "cover": "https://i.discogs.com/gRD0py-P6LhTwOPt1Ofw-5wu4NdECCENp8DWrwgxDhQ/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MzEw/MzgtMTYwNzYyNTU5/NS0yNTU1LmpwZWc.jpeg"
        },
        {
            "artist": "At The Drive-In",
            "title": "Relationship Of Command",
            "year": 2021,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Unofficial Release"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/A5v85VLnmU9OjzP-jAIA-e2Q-pakcKiMLFKQHuZiLBU/rs:fit/g:sm/q:90/h:355/w:355/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NDUw/NTg4LTE2MjU5NzE4/MDItMTU0NC5qcGVn.jpeg"
        },
        {
            "artist": "Atoms For Peace",
            "title": "Amok",
            "year": 2013,
            "genre": "Electronic",
            "descriptions": [
                "LP",
                "45 RPM",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/mcIh1A6HEAVQ0pCwZ1mnLqxREjgwikqQijZafZMZ5uI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMTIy/NzMtMTM2MTUyOTY1/OS0zMzUzLmpwZWc.jpeg"
        },
        {
            "artist": "Beck",
            "title": "Sea Change",
            "year": 2016,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/i8lsC57oIKkZukq_aZJp4hPG4vwVrA3gVVZuwkV-ta8/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0MzYw/NjMtMTYwMTIzOTM1/NC05ODIzLmpwZWc.jpeg"
        },
        {
            "artist": "Beck",
            "title": "Modern Guilt",
            "year": 2017,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/TriM1vCr2T049JCkEpvRk1d8VjMu94kLwJI_tjKbvsU/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTI1/Nzk1LTE0OTIwNzYy/OTEtMjI5Mi5qcGVn.jpeg"
        },
        {
            "artist": "Beirut",
            "title": "Gallipoli",
            "year": 2019,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Limited Edition"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/8VZtPPH_lCv1I2OBk4ouWaSl3zzQAL8aZlvGR44Z3BU/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMTU4/MDM2LTE1NDk0MDYw/MjctMzMwNy5qcGVn.jpeg"
        },
        {
            "artist": "Belle & Sebastian",
            "title": "If You're Feeling Sinister",
            "year": 2021,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Limited Edition",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/BTtXq01ROtr05UuiCctnVABbqLlfmjfo07KGDBfQIEI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMTMw/ODYxLTE2Mzc5NDY0/NzMtODczNy5qcGVn.jpeg"
        },
        {
            "artist": "Ben Folds",
            "title": "So There",
            "year": 2015,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/bycF54QzIf16VtaamYuwibyPme1v5rP6qDl1hlrZynk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0ODk0/NjItMTQ0Mjc2NDU0/OC05NDgzLmpwZWc.jpeg"
        },
        {
            "artist": "Ben Folds Five",
            "title": "The Complete Sessions At West 54th",
            "year": 2022,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Limited Edition"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/sJQkdHDLjLenfuEdrVhqtTohTMmnwultBp-cnCOR7Co/rs:fit/g:sm/q:90/h:576/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMDA3/NTc4LTE2NTA5MDEx/NzktNjkyOS5qcGVn.jpeg"
        },
        {
            "artist": "Beverly Glenn-Copeland",
            "title": "...Keyboard Fantasies...",
            "year": 2021,
            "genre": "Electronic",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/tzmA7-oTsD8YUdCALCYPj1AAJ155gAN7Tn0ct24i9hQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MDky/MTU4LTE2MTg5Mzcw/MjktMzA2Ni5qcGVn.jpeg"
        },
        {
            "artist": "Beverly Glenn-Copeland",
            "title": "Beverly Glenn-Copeland",
            "year": 2021,
            "genre": "Jazz",
            "descriptions": [
                "LP",
                "Album",
                "Club Edition",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/bpHYdvsUl8_mrqCLpl2qbevDqVqbvjUmACH1GBX2eww/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5ODA2/MDM3LTE2Mjg2OTkx/MTItNjU0MC5qcGVn.jpeg"
        },
        {
            "artist": "Beyoncé",
            "title": "Lemonade",
            "year": 2017,
            "genre": "Electronic",
            "descriptions": [
                "LP",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/qbkunLjfk_cs5AQAKL7CznQNIx0RZX0njeS3BME7YXQ/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwODU3/ODQ1LTE2NDg1NTYx/MTQtODE5Ny5qcGVn.jpeg"
        },
        {
            "artist": "Beyoncé",
            "title": "Homecoming: The Live Album",
            "year": 2020,
            "genre": "Hip Hop",
            "descriptions": [
                "Album",
                "Limited Edition"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/5BALG1Gj3EfY2BHsEcwVGsonk5_A6tOD1F-VToxjKmw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NDEw/MTk1LTE2MDc2NDc3/NDAtMjcyOC5qcGVn.jpeg"
        },
        {
            "artist": "Big Red Machine",
            "title": "How Long Do You Think It's Gonna Last?",
            "year": 2021,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Limited Edition"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/W3ElzN60W9kzNz4ruD8VQDZ6h4cNQtxqGeuI3x9-Vgs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMjU4/NjQzLTE2Mzg4NTg1/OTMtNzE0NS5qcGVn.jpeg"
        },
        {
            "artist": "Björk",
            "title": "Homogenic",
            "year": 0,
            "genre": "Electronic",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/975z9R5455dPPxC34n8vu4jSU32tgwzfy-bLJnM8OWU/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNTc3/MTQ3LTE2NDExMzkw/NjktMjQzNS5qcGVn.jpeg"
        },
        {
            "artist": "Björk",
            "title": "Vespertine",
            "year": 0,
            "genre": "Electronic",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/WK1oilF2mfhoynCIN79Z_mgJW7ljJ5AjO3LsseLd1lQ/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxODM4/MjEzLTE2NDI4Mzk2/OTMtODg2NS5qcGVn.jpeg"
        },
        {
            "artist": "Björk",
            "title": "Post",
            "year": 2018,
            "genre": "Electronic",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/SaEI5vIXcrcwjILxThvdrtrJRi8WA9JR9tBmK6IeYYs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNTg1/Njc4LTE1MTg5NjE5/ODYtMTUxOC5qcGVn.jpeg"
        },
        {
            "artist": "Black Country, New Road",
            "title": "For The First Time",
            "year": 2021,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/fpQLnTqxLMV8vHrSxCaMEVeICWv1nn1DztSXZuVpQLY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNjMw/MTAwLTE2NDE0OTY0/MjctNjE2Mi5qcGVn.jpeg"
        },
        {
            "artist": "Black Country, New Road",
            "title": "Ants From Up There",
            "year": 2022,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Limited Edition"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/jl9k3Y2E7KHlfgBZIT6JSJMVwPtM1Mh9gcf8BbUpwY4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxOTc5/MTQ0LTE2NDM4MDEx/NDktMzA1MS5qcGVn.jpeg"
        },
        {
            "artist": "Black Midi",
            "title": "Schlagenheim",
            "year": 2019,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Stereo"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/LvXeCYVd41GPPoZwbXPIviqI-hRDYF7OveQVvpKFsvk/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNzc2/NTYzLTE1ODE0Njc2/OTAtOTY4NC5qcGVn.jpeg"
        },
        {
            "artist": "Black Midi",
            "title": "Cavalcade",
            "year": 2021,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Stereo"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/2IhMCFbmJAiS0Cfj86pFBK-Q1Eu29pL8BSDv6fbHK74/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODY5/NDg4LTE2MjIyMjM2/MzUtOTYwOC5qcGVn.jpeg"
        },
        {
            "artist": "Black Midi",
            "title": "Hellfire",
            "year": 2022,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Limited Edition"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/9GN6i-WyCNI5ijewbStNuBRuUQaBBhNJwFntwQQzbHY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzODg4/NTcwLTE2NTc4NTMy/NDktMTAxMS5qcGVn.jpeg"
        },
        {
            "artist": "Bob Dylan",
            "title": "Bob Dylan",
            "year": 2014,
            "genre": "Blues",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/5ZZ06LUlZmo-XpFxF3SX4-uG3jUaW9bRmPYo0tB4jg8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzNDQ5/OTMtMTY0OTkzMzE5/NC03MTE0LmpwZWc.jpeg"
        },
        {
            "artist": "Bob Dylan",
            "title": "The Freewheelin' Bob Dylan",
            "year": 2018,
            "genre": "Folk, World, & Country",
            "descriptions": [
                "LP",
                "Album",
                "Reissue",
                "Stereo"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/Ez8CDY7v_U6_DB-uhG6z_YswYmxezvwDuwDsp1wrIOU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODE1/ODM2LTE1MzM2OTE5/NDktOTk5OC5qcGVn.jpeg"
        },
        {
            "artist": "Bob Dylan",
            "title": "The Times They Are A-Changin'",
            "year": 2018,
            "genre": "Folk, World, & Country",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/ZWVTriCaxaX-U7IDC6iI3K39rie-sdKg5ootWQgesaE/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODA1/ODEyLTE1NDIzMDYx/NjUtMzg3My5qcGVn.jpeg"
        },
        {
            "artist": "Bob Dylan",
            "title": "Bringing It All Back Home",
            "year": 2022,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue",
                "Stereo"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/n7-gIVKdGefmGQLuboFyg4UoXgA7KpR4oOnhiWjzr_o/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyODI1/NDc1LTE2NDk2NzUx/ODMtNDA0OS5qcGVn.jpeg"
        },
        {
            "artist": "Bob Dylan",
            "title": "Highway 61 Revisited",
            "year": 2022,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue",
                "Stereo"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/XZWGyeGaPLgEJDIX9S0MOh4AiIlU3dl-lkprtiKG0lQ/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyODE0/NDY4LTE2NDk0Njc0/NTAtNzA2MC5qcGVn.jpeg"
        },
        {
            "artist": "Bobby Bare",
            "title": "Sings Lullabys, Legends And Lies",
            "year": 1973,
            "genre": "Folk, World, & Country",
            "descriptions": [
                "LP",
                "Album"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/DhSsEvIghcEAwR6ih6zVXU-x8P0E4Ki38t1y91Ntyk4/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MzU4/ODgyLTE1NzI5NzE3/ODQtOTM1OS5qcGVn.jpeg"
        },
        {
            "artist": "Bon Iver",
            "title": "For Emma, Forever Ago",
            "year": 2008,
            "genre": "Rock",
            "descriptions": [
                "LP",
                "Album",
                "Reissue"
            ],
            "folderID": 4007572,
            "cover": "https://i.discogs.com/hFHNJUdkVoa31ZHrmpEdLnFC6pjGIABkbv11vb1c8Fs/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNjM2/MTUtMTU4MTQzMDYx/Ni0yMzMxLmpwZWc.jpeg"
        }
    ];

function checkDescriptions(array) {
    for (let item of array) {
        let desc = item.descriptions
        if (desc.some((item) => {
            let check = item.slice(0, 2)
            if (check.toLowerCase() === 're') { return true }
        })) {
            item.reissue = 'yes'
        } else { item.reissue = 'no' }
    }
}
console.log(arrayTest)
checkDescriptions(arrayTest);