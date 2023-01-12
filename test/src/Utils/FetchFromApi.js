const axios = require("axios");

const options = {
    method: 'GET',
   
    params: {
   
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': 'fdd25b49efmsh3932c7a671dd052p171510jsn753fdaedbc33',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
export const fetchFromAPi = async (url) => {
    const { data } = await axios.get('https://youtube-v31.p.rapidapi.com/' + url, options);
    return data

}
