export type MoshafInfo = {
  id: number;
  name: string;
  server: string;
  surah_total: number;
  moshaf_type: number;
  surah_list: string;
};

export type Reciter = {
  id: number;
  name: string;
  letter: string;
  moshaf: MoshafInfo[];
};

export type Reciters = {
  reciters: Reciter[];
};
