"use client";
import { CSSProperties, FC, useState } from "react";
import { styles } from "./styles";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import Image from "next/image";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const [state, setState] = useState(false);

  const menus = [
    { title: "الشيخ عبدالباسط عبدالصمد", path: "/reciters/48" },
    { title: "المصحف المجود", path: "/your-path" },
    { title: "الحديث", path: "/your-path" },
    { title: "التفسير", path: "/your-path" },
  ];

  return (
    <nav className="bg-black h-fit w-full border-b md:border-0">
      <div className="items-center py-3 px-4 max-w-screen-xl mx-auto flex-row justify-between md:flex md:px-8 ">
        <div className="flex items-center justify-between md:py-4 md:block">
          <Link
            href="/"
            className="flex flex-row items-center justify-between  gap-3"
          >
            <Image
              src={"/images/quran-logo.png"}
              width={32}
              height={32}
              alt="logo"
              className=" block md:hidden"
            />
            <h1 className="text-2xl font-bold text-gray-100 block md:hidden">
              القرآن الكريم
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>

        <Link
          href="/"
          className="  flex-row items-center justify-between hidden md:flex gap-3"
        >
          <Image
            src={"/images/quran-logo.png"}
            width={32}
            height={32}
            alt="logo"
          />
          <h1 className="text-2xl font-bold text-gray-100">القرآن الكريم</h1>
        </Link>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-around items-center space-y-8 md:flex md:space-x-20 md:space-y-0 pr-10">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-400 hover:text-gray-200">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
