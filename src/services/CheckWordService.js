import axios from "axios";

class CheckWordService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
    });   
  }
  
  checkWord = async (newWord) => {
      try {
        const response = await this.post("/", newWord);
        return response.data.title;
      } catch {
        console.error("Check word error");
      }
    };
}

export const checkWordService = new CheckWordService();