"use client";
import ContentLayout from "@/components/ContentLayout";
import Loading from "@/components/Loading";
import MoshafCard from "@/components/MoshafCard";
import SurahCard from "@/components/SurahCard";
import { ENDPOINTS } from "@/constants/endpoints";
import { decodeArabicUnicode } from "@/lib/decodeArabicUnicode";
import { MoshafInfo, Reciter } from "@/types/reciters.type";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function ReciterDetails({ params }: any) {
  const { reciterId } = params;
  const [reciter, setReciter] = useState<Reciter | undefined>();
  const [selectedMushaf, setSelectedMushaf] = useState<any>(null);
  const [selectedSurah, setSelectedSurah] = useState<any>(null);

  useEffect(() => {
    if (selectedMushaf !== null) {
      let localSurahs: any =
        reciter?.moshaf[selectedMushaf]?.surah_list?.split(",");
      localSurahs = localSurahs?.map((s: string) => {
        return +s;
      });
      setSurahs(localSurahs);
    }
  }, [reciter?.moshaf, selectedMushaf]);

  const [surahs, setSurahs] = useState<number[] | undefined>([]);

  useEffect(() => {
    const getReciter = async () => {
      fetch(ENDPOINTS.getReciter + reciterId).then(async (res) => {
        try {
          let response = await res.json();
          let decodedReciters: { reciters: Reciter[] } =
            await decodeArabicUnicode(JSON.stringify(response));
          setReciter(decodedReciters?.reciters?.[0]);
        } catch (error) {
          console.log("🚀 ~ file: page.tsx:17 ~ fetch ~ error:", error);
        }
      });
    };
    if (reciterId) {
      getReciter();
    }
  }, [reciterId]);

  return (
    <>
      {!reciter && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Loading />
        </div>
      )}

      {reciter?.id && (
        <>
          <p className="text-3xl font-bold mb-10">{reciter?.name}</p>
          <ContentLayout title="اختر مصحفًا" direction="row">
            {reciter?.moshaf.map((moshaf: MoshafInfo, index: number) => {
              return (
                <MoshafCard
                  moshaf={moshaf}
                  key={moshaf.id}
                  index={index}
                  setSelectedMushaf={setSelectedMushaf}
                  selectedMushaf={selectedMushaf}
                />
              );
            })}
          </ContentLayout>
        </>
      )}
      {selectedMushaf !== null && surahs !== undefined && (
        <ContentLayout title="اختر سورةً">
          <div className="w-full grid  gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
            {surahs?.map((surah: number, index: number) => {
              return (
                <SurahCard
                  selectedSurah={selectedSurah}
                  setSelectedSurah={setSelectedSurah}
                  surahNo={index}
                  key={index}
                  server={reciter?.moshaf?.[selectedMushaf]?.server}
                />
              );
            })}
          </div>
        </ContentLayout>
      )}
    </>
  );
}
