import getReciters from "@/api/getReciters";
import ReciterCard from "@/components/ReciterCard";
import { Reciter } from "@/types/reciters.type";
import Image from "next/image";

import ContentLayout from "@/components/ContentLayout";
import { Metadata } from "next";
import RecitersPage from "@/components/RecitersPage/RecitersPage";

async function Home() {
  const reciters = await getReciters();
  return (
    <main className="bg-primary flex min-h-screen flex-col items-center p-24">
      <ContentLayout title="اختر شيخًا">
        <RecitersPage reciters={reciters} />
      </ContentLayout>
    </main>
  );
}

export default Home;
