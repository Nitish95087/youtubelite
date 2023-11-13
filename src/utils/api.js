import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
      gl: 'IN'   // 'IN' for India
    },
    headers: {
      'X-RapidAPI-Key': 'fb19bf4d4cmsh2d785fc1cf93368p14788ajsnb2291c1b4881',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  const fetchFromApi = async(url)=>{
     const response = await axios.get(`${BASE_URL}/${url}`,options);
     const data = response.data;
     return data;
  }

  export default fetchFromApi;