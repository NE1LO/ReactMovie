import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const searchMovies = async (query: string) => {
  try {
    const { data } = await apiInstance.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDk3YWNmY2JiMDUzYjBlODcwMmZhZDY1Mzc0OTM4ZiIsInN1YiI6IjY1ZDBhZjZjMWQzMTQzMDE4NGJhMWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-BvX4OF2A1Bvvo_nFUQyFPBFoWdgy3JZZJ61-IhEeLc",
        },
      }
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
