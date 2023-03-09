import { httpService } from "./HttpService";
import { checkWordService } from "./CheckWordService";

class WordService {
sendWord(newWord){ 
if (newWord.checkWordService.checkWord === "No Definitions Found"){
    const response = "There is no such a word in English language";
    return response;
} else {
    const postWord = async (newWord) => {
      try {
        const response = await httpService.axiosInstance.post("/word", newWord);
        return response.data;
      } catch {
        console.error("POST word error");
      }
    };
}
}
async getScore() {
  try {
    const response = await httpService.axiosInstance.get("/word");
    return response.data;
  } catch {
    console.error("GET score error");
  }
}

}

export const wordService = new WordService();