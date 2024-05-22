import axios from "axios";

export default class CharacterService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(character) {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/" + character
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getByFilter(name, species, gender, status) {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}&species=${species}&gender=${gender}&status=${status}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
