import axios from "axios";
import { getHash } from "../utils/formats.utils";

export default class CharactersService {
  constructor
  (
    private baseUrl: any = process.env.BASE_URL,
    private publicKey: any = process.env.PUBLIC_KEY
  ) {}
  public async getAllCharacters() {
    try {
      const baseUrl: any = process.env.BASE_URL;
      const publicKey = process.env.PUBLIC_KEY;
      const {hash,ts} = getHash();
      const response = await axios.get(
        `${baseUrl}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );
     
      return response.data.data;
    } catch (error: any) {
        console.log(error);
      console.error("error ---->", error?.response?.data);
      console.error("error status---->", error.status);
    }
  }

  public async getCharacterById(id: string) {
    try {
      const baseUrl: any = process.env.BASE_URL;
      const publicKey = process.env.PUBLIC_KEY;
      const {hash,ts} = getHash();
      const response = await axios.get(
        `${baseUrl}/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );
     
      return response.data.data;
    } catch (error: any) {
        console.log(error);
      console.error("error ---->", error?.response?.data);
      console.error("error status---->", error.status);
    }
  }
}



