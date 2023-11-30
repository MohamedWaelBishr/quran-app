import { Reciter } from "@/types/reciters.type";
import Link from "next/link";
import { FC } from "react";

type ReciterCardProps = {
  className?: string;
  reciter: Reciter;
};

const ReciterCard: FC<ReciterCardProps> = ({ className, reciter }) => {
  return (
    <Link
      href={`/reciters/${reciter.id}`}
      className="bg-black px-5 h-10 flex flex-col items-center justify-center rounded cursor-pointer  hover:bg-slate-500"
    >
      <p className="font-semibold text-white"> الشيخ {reciter.name}</p>
    </Link>
  );
};

export default ReciterCard;
