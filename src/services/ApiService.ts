import { enums } from "@/components/views/utils/helpers/Enums";
import MovieData from "@/services/types/MovieData";
import MovieDetails from "@/services/types/MovieDetails";
import DefaultMovieData from "@/services/types/DefaultMovieData";
import apiClient, { AxiosResponse } from "@/services/http-common";

export default {
  getDefaultMovies(): Promise<AxiosResponse<{ results: DefaultMovieData[] }>> {
    return apiClient.get(
      `/discover/movie?api_key=${enums.VUE_APP_API_KEY}&query=primary_release_year=2021&sort_by=popularity.desc`
    );
  },
  getMoviesData(
    query: string
  ): Promise<AxiosResponse<{ results: MovieData[] }>> {
    return apiClient.get(
      `/search/movie?api_key=${enums.VUE_APP_API_KEY}&query=${query}`
    );
  },
  getMovieDetails(
    id: string
  ): Promise<AxiosResponse<{ results: MovieDetails[] }>> {
    return apiClient.get(
      `/movie/${id}?api_key=${enums.VUE_APP_API_KEY}&append_to_response=videos`
    );
  },
};
