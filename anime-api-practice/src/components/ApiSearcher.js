import React from "react"

// http://api.anidb.net:9001/httpapi?client={str}&clientver={int}&protover=1


export default function apiSearcher(){
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
    

    return (
        <div id="insertTitle">
            <h1>Enter the aniDB ID of the anime you want to find:</h1>
            <h5>(Naruto's ID is 239)</h5>
            <form action="" id="enterAnime">
                <input type="text" id="animeID" />
                <input type="submit" value="Find Anime" onClick={(e)=> { e.preventDefault(); getAnimeTitle(document.getElementById('animeID').value)}}/>
            </form>
        
        </div>
    );
}