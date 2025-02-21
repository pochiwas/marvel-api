import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

export function getHash(){
    const privateKey:any = process.env.PRIVATE_KEY;
    const publicKey:any = process.env.PUBLIC_KEY;
    const ts = new Date().getTime();

    const hash = crypto
        .createHash("md5")
        .update(ts + privateKey + publicKey)
        .digest("hex");
        return {hash,ts};
}
