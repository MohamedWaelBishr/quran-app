import { MoshafInfo, Reciter } from "@/types/reciters.type";
import Link from "next/link";
import { FC } from "react";

type MoshafCardProps = {
  className?: string;
  moshaf: MoshafInfo;
  selectedMushaf: number;
  setSelectedMushaf: (index: number) => void;
  index: number;
};

const MoshafCard: FC<MoshafCardProps> = ({
  className,
  moshaf,
  selectedMushaf,
  setSelectedMushaf,
  index,
}) => {
  return (
    <div
      onClick={() => setSelectedMushaf(index)}
      className={`${
        selectedMushaf === index && "border-white border-2"
      } bg-black px-5 h-10 flex flex-col items-center justify-center rounded cursor-pointer  hover:bg-slate-500`}
    >
      <p className="font-semibold text-white">{moshaf?.name}</p>
    </div>
  );
};

export default MoshafCard;
