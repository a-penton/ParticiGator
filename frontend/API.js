import axios from "axios";
import Constants from "expo-constants";

let api = null;
if (Constants.expoConfig.extra.env === 'dev') {
  api = 'http://localhost:3000';
} else {
  api = Constants.expoConfig.extra.apiUrl;
}

export class API {
  static async getAllUsers() {
    const response = await axios.get(`${api}/users`);
    return response.data;
  }
}