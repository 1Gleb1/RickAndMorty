import axios from "axios";

export default class LocationService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(location) {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location/" + location
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getByFilter(name, type, dimension) {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/?name=${name}&type=${type}&dimension=${dimension}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
