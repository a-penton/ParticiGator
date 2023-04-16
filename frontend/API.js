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

  static async getQuestionData(){
    const title = "Quiz 3";
    console.log("API: " + title);
    const data = await axios.get(`${api}/questions/${title}`)
    .then(response => {
      if (response.status !== 404) {
        console.log('Hello' + response.data.questionTitle);
        return response.data;
      }
    })
    .catch(error => {
        console.log("Whoops");
        return null;
    });
    console.log(data);
    return data;
  }
  
}