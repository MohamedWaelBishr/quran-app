import { ENDPOINTS } from "@/constants/endpoints";
import { decodeArabicUnicode } from "@/lib/decodeArabicUnicode";
import { Reciter } from "@/types/reciters.type";
import React from "react";

const getReciters = async (): Promise<Reciter[] | undefined> => {
  try {
    const reciters = await fetch(ENDPOINTS.getReciters).then(
      async (res: any) => {
        let response = await res.json();
        let decodedReciters: { reciters: Reciter[] } =
          await decodeArabicUnicode(JSON.stringify(response));
        return decodedReciters.reciters;
      }
    );
    return reciters;
  } catch (error) {
    console.log("🚀 ~ file: getReciters.ts:9 ~ getReciters ~ error:", error);
    return;
  }
};

export default getReciters;
