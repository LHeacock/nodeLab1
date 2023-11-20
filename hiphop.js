//part 2
const rp = require("request-promise");
const fs = require('fs');

let albumArray = []

rp.get(' https://lukes-projects.herokuapp.com/v1/hiphop')
    .then((res) => {
        let resJson = JSON.parse(res);
        resJson.result.forEach(music => {
            let data = {
                id: music.id,
                title: music.title,
                artist: music.artist,
                year: music.year,
            };
            albumArray.push(data)
            console.log(albumArray)
        });
    }).finally(() => fs.writeFileSync("favorite-albums.json", JSON.stringify(albumArray)));

