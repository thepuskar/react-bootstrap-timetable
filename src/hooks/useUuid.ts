import { useState, useEffect } from "react";

/**
 * It generates a random UUID and returns it.
 * @returns A function that returns a UUID.
 */
export function useUUID() {
  const [uuid, setUUID] = useState("");

  useEffect(() => {
    setUUID(() => {
      const cryptoObj = window.crypto || (window as any).msCrypto;
      const buf = new Uint32Array(4);
      cryptoObj.getRandomValues(buf);
      let idx = -1;
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          idx++;
          const r = (buf[idx >> 3] >> ((idx % 8) * 4)) & 15;
          const v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    });
  }, []);

  return uuid;
}
