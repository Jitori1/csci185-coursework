const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {

    const trackEndpoint = baseURL + "?q=" + term + "&type=track"
    console.log(trackEndpoint);

    const data = await fetch(trackEndpoint).then(response => response.json());
    console.log(data);

    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
}

async function getAlbums (term) {

    const albumEndpoint = baseURL + "?q=" + term + "&type=album"
    console.log(albumEndpoint);

    const data = await fetch(albumEndpoint).then(response => response.json());
    console.log(data);

    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist (term) {

    const artistEndpoint = baseURL + "?q=" + term + "&type=artist"
    console.log(artistEndpoint);

    

    const data = await fetch(artistEndpoint).then(response => response.json());
    
    if (data.length === 0){
        document.querySelector('#artist').innerHTML = "No results found"
        return;
    }

    console.log(data);
    console.log(data[0].name);
    console.log(data[0].img_url);

    document.querySelector('#artist').innerHTML = data[0].name;

    const template = `
        <img src="${data[0].image_url}">
        `;

    console.log(template);
    document.querySelector('#artist').innerHTML = template;

    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}