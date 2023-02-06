import { useState, useEffect } from "react";

export const useUuid = (): string => {
  const [uuidValue, setUuidValue] = useState(generateUuid());

  useEffect(() => {
    setUuidValue(generateUuid());
  }, []);

  return uuidValue;
};

const generateUuid = (): string => {
  const crypto = window.crypto || (window as any).msCrypto;
  const buf = new Uint32Array(4);
  crypto.getRandomValues(buf);
  let idx = -1;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    idx = (idx + 1) % 4;
    const r =
      (idx === 0
        ? buf[idx]
        : (buf[idx] + crypto.getRandomValues(new Uint32Array(1))[0]) % 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
