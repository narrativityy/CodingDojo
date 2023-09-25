async function getStreaming(imbdID) {
    const url = `https://streaming-availability.p.rapidapi.com/get?output_language=en&imdb_id=${imbdID}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bf3904921emsh824bb3d208c9b70p10e228jsnef8b60565498',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.result.streamingInfo.us)
    } catch (error) {
        console.error(error);
    }
}

console.log(getStreaming("tt10293938"))