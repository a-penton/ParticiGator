import axios from "axios";
import Constants from "expo-constants";

let api = null;
if (Constants.expoConfig.extra.env === 'dev') {
  api = 'http://localhost:3000';
} else {
  api = Constants.expoConfig.extra.apiUrl;
}

// API that interfaces with backend so that data can be retrieved and displayed in frontend
export class API {
  static async getAllUsers() {
    const response = await axios.get(`${api}/users`);
    return response.data;
  }

  static async getQuestionData(){
    // TODO: Pull the question assigned by instructor from database (right now, the question number is hardcoded)
    const title = '9';
    const data = await axios.get(`${api}/questions/${title}`)
    .then(response => {
      if (response.status !== 404) {
        return response.data;
      }
    })
    .catch(error => {
        return null;
    });
    return data;
  }
  
}