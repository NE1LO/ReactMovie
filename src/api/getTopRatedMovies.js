import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQ1OTNhZjBkMDYwMGY5ODgzMjNiYTFjODY1OGJmNCIsInN1YiI6IjY1ZTYyYTlhYjdhMTU0MDE4NjdkZmM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yqg0NGsW4G6vxu1qUxwKDxf_ANq8juHarX95DFzKVEs",
  },
});

const getTopRated = async () => {
  try {
    const response = await apiInstance.get("movie/top_rated?");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getTopRated;
