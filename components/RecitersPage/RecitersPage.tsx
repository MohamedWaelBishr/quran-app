import ReciterCard from "@/components/ReciterCard";
import { Reciter } from "@/types/reciters.type";
import { FC } from "react";

//@ts-ignore
interface RecitersPageProps {
  reciters: Reciter[] | undefined;
}

const RecitersPage: FC<RecitersPageProps> = ({ reciters }) => {
  return (
    <div className="grid  gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5">
      {!reciters && <>asdasd</>}
      {reciters?.map((reciter: Reciter) => {
        return <ReciterCard reciter={reciter} key={reciter.id} />;
      })}
    </div>
  );
};

export default RecitersPage;
