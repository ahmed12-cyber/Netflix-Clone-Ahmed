// import axios from 'axios';

// const instance = axios.create({
    // baseURL: "https://api.themoviedb.org/3"});
// instance.get("/movie/top_rated");

// export default instance;

import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your Movie Database API key
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

// Making the GET request with the API key
instance.get("/movie/top_rated", {
    params: {
        api_key: API_KEY
    }
})
.then(response => {
    // Handle the response data here
    console.log(response.data);
})
.catch(error => {
    // Handle any errors here
    console.error(error);
});

export default instance;
