import axios from "axios";


// Create Axios instance using env variables
const instance = axios.create({
  baseURL:  import.meta.env.VITE_API,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ import.meta.env.VITE_TMDB_TOKEN}` // ✅ Use template string
  }
});

export default instance;
