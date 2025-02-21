import axios from "axios";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();
export default class AuthService {
  constructor(
    private ts = new Date().getTime(),
    private privateKey: any = process.env.PRIVATE_KEY,
    private publicKey: any = process.env.PUBLIC_KEY
  ) {}

  public async TestGetApi() {
    try {
      const baseUrl: any = process.env.BASE_URL;
      const hash = crypto
        .createHash("md5")
        .update(this.ts + this.privateKey + this.publicKey)
        .digest("hex");
      const response = await axios.get(
        `${baseUrl}/characters?ts=${this.ts}&apikey=${this.publicKey}&hash=${hash}`
      );
     
      return response.data.data;
    } catch (error: any) {
        console.log(error);
      console.error("error ---->", error?.response?.data);
      console.error("error status---->", error.status);
    }
  }
}
