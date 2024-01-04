

async function getAnimeTitle(animeId) {
    try{
        const baseUrl = 'http://api.anidb.net:9001/httpapi?';
        const clientName = 'aaaaa';
        const clientVersion = 1;
        const response = await fetch (`${baseUrl}request=anime&client=${clientName}&clientver=${clientVersion}&protover=1&aid=${animeId}`, {
            method: 'GET',
            headers:{

            }
        });
        //console.log('response', response.text());
        response.text()
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
        
            // Access the title of "Naruto" from the parsed XML
            const titleElement = xmlDoc.querySelector('title');
            const title = titleElement ? titleElement.textContent : null;
        
            console.log('Title:', title);

            const animeTitle = document.createElement("h2");
            animeTitle.innerText = title;
            
            document.getElementById("insertTitle").appendChild(animeTitle);
        })
        .catch(error => {
            console.error('Error reading response body:', error);
        });
        

    
    } catch (err){
        console.error ('Error in getAnimeTitle', err);
    }
}

// http://api.anidb.net:9001/httpapi?client={str}&clientver={int}&protover=1


document.getElementById("enterAnime").addEventListener("submit", (e) => {
    //console.log(document.getElementById('animeID').value)
    e.preventDefault();
  
    
    getAnimeTitle(document.getElementById('animeID').value);
});