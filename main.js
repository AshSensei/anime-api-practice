
const { parseString } = require('xml2js');



async function getAnimeTitle(animeId) {
    try{
        const baseUrl = 'http://api.anidb.net:9001/httpapi?';
        const clientName = 'aaaaa';
        const clientVersion = 1;
        const animeId = 239;
        const response = await fetch (`${baseUrl}request=anime&client=${clientName}&clientver=${clientVersion}&protover=1&aid=${animeId}`, {
            method: 'GET',
            headers:{

            }
        });
        //console.log('response', response.text());
        response.text()
        .then(data => {
            console.log('Response Body:', data);
        })
        .catch(error => {
            console.error('Error reading response body:', error);
        });


        //trying to parse the xml data
        parseString(xmlData, { explicitArray: false, ignoreAttrs: true }, (err, result) => {
            if (err) {
                console.error('Error parsing XML', err);
            } else {
                // Process the parsed XML data (result) here
                console.log('Parsed XML:', result);
            }
        });
        
    } catch (err){
        console.error ('Error in getAnimeTitle', err);
    }
}
getAnimeTitle();

// http://api.anidb.net:9001/httpapi?client={str}&clientver={int}&protover=1