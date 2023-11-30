"use client";
import { MoshafInfo, Reciter } from "@/types/reciters.type";
import Link from "next/link";
import { FC } from "react";
import SURAHS_INFO from "@/constants/SURAHS_INFO.json";
import { useAudioStore } from "@/stores/audioStore";
type SurahCardProps = {
  className?: string;
  surahNo: number;
  server: string | undefined;
  selectedSurah: number;
  setSelectedSurah: (surah: number) => void;
};

const SurahCard: FC<SurahCardProps> = ({
  className,
  surahNo,
  server,
  selectedSurah: sS,
  setSelectedSurah: setSurah,
}) => {
  const { setSelectedSurah, selectedSurah } = useAudioStore();
  const parts = selectedSurah.split("/");
  const lastPartWithExtension = parts.pop();
  const fileNameWithoutExtension = lastPartWithExtension?.split(".")[0];
  return (
    <div
      onClick={() => {
        setSurah(surahNo);

        let x = `${server}${
          surahNo + 1 < 10
            ? `00${surahNo + 1}`
            : surahNo + 1 < 100 && surahNo + 1 > 9
            ? `0${surahNo + 1}`
            : surahNo + 1
        }.mp3`;
        console.log("🚀 ~ file: SurahCard.tsx:38 ~ x:", x);
        setSelectedSurah(x);
        // window.open(
        //   `${server}${
        //     surahNo < 10
        //       ? `00${surahNo + 1}`
        //       : surahNo < 100
        //       ? `0${surahNo + 1}`
        //       : surahNo + 1
        //   }.mp3`,
        //   "_blank"
        // )
      }}
      key={surahNo}
      className={` ${
        //@ts-ignore
        parseInt(fileNameWithoutExtension) - 1 === surahNo &&
        "border-white border-2"
      } bg-black px-5 h-10 flex flex-col items-center justify-center rounded cursor-pointer hover:bg-slate-500`}
    >
      <p className="font-semibold text-white">
        {surahNo + 1}
        {"- "}
        {SURAHS_INFO?.[surahNo]?.titleAr}
      </p>
    </div>
  );
};

export default SurahCard;
