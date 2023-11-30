"use client";
import { useAudioStore } from "@/stores/audioStore";
import { FC, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import SURAHS_INFO from "@/constants/SURAHS_INFO.json";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  const [autoPlay, setAutoPlay] = useState(false);
  const { selectedSurah, setSelectedSurah } = useAudioStore();
  const parts = selectedSurah.split("/");
  const lastPartWithExtension = parts.pop();
  const fileNameWithoutExtension = lastPartWithExtension?.split(".")[0];
  const baseUrl = selectedSurah.split("/").slice(0, -1).join("/") + "/";

  return (
    <div
      style={{ direction: "ltr" }}
      className={`${
        selectedSurah === "" && "hidden"
      } fixed bottom-0 left-0 w-full h-[60px] bg-[#0f1010]  border-[#2f2f2f] border-t-2 text-white px-2`}
    >
      <AudioPlayer
        onEnded={() => {
          if (fileNameWithoutExtension) {
            console.log(
              "🚀 ~ file: Footer.tsx:29 ~ fileNameWithoutExtension:",
              fileNameWithoutExtension
            );
            let surahNo =
              parseInt(fileNameWithoutExtension) + 1 < 10
                ? `00${parseInt(fileNameWithoutExtension) + 1}`
                : parseInt(fileNameWithoutExtension) + 1 < 100 &&
                  parseInt(fileNameWithoutExtension) + 1 > 9
                ? `0${parseInt(fileNameWithoutExtension) + 1}`
                : parseInt(fileNameWithoutExtension) + 1;
            let x = baseUrl + surahNo + ".mp3";
            console.log("🚀 ~ file: Footer.tsx:27 ~ x:", x);
            setSelectedSurah(x);
          }
        }}
        src={selectedSurah}
        layout="horizontal"
        autoPlay
        autoPlayAfterSrcChange
        customAdditionalControls={[
          <button
            onClick={() => {
              setSelectedSurah("");
            }}
            key={selectedSurah}
            className="text-white rounded bg-black border-white border-2 px-2 py-2"
          >
            إيقاف
          </button>,
          <div className="infinite-slide w-fit " key={fileNameWithoutExtension}>
            {fileNameWithoutExtension !== "" &&
              "السورة الحالية : " +
                //@ts-ignore
                SURAHS_INFO[parseInt(fileNameWithoutExtension) - 1].titleAr}
          </div>,
        ]}
      />
    </div>
  );
};

export default Footer;
