import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

type Props = {
  getIconByName: (name: string) => JSX.Element | null;
  items: Array<string>;
};

function Sidebar({ getIconByName, items }: Props) {
  const param = useSearchParams();
  const view = param.get("view") ?? "general";
  return (
    <div className="flex flex-col gap-4">
      <div className="flex sm:hidden">
        <div className="flex">
          <Image
            src={"/foreteachLogo.png"}
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            href={`?view=${item.toLowerCase()}`}
            className={`flex flex-row items-center space-x-2 justify-start hover:bg-blue-300 p-2 rounded-xl cursor-pointer transition-colors  duration-300 ease-in-out

            ${view === item.toLowerCase() ? "bg-blue-300" : ""}`}
          >
            <span>{getIconByName(item.toLowerCase())}</span>
            <span className="lg:text-base text-xs ">{item}</span>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Sidebar;
