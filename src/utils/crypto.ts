import crypto from "node:crypto";

export function decrypt(encryptedString: string): string {
  const key = "key";
  const iv = "iv";

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decryptedString = decipher.update(encryptedString, "base64", "utf8");
  decryptedString += decipher.final("utf8");

  return decryptedString;
}
