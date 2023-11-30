import create from "zustand";
import createVanilla from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { IAudioStore } from "../interfaces/IAudioStore";

export const audioStore = createVanilla<IAudioStore>(
  (set: any) =>
    ({
      selectedSurah: "",
      setSelectedSurah: (value: string) => set({ selectedSurah: value }),
    } as any)
);

export const useAudioStore = create<IAudioStore>(audioStore as any);
