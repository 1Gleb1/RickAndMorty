import axios from "axios";

export default class EpisodeService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(episode) {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode/" + episode
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getByFilter(name) {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/?name=${name}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
