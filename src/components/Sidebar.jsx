import React from "react";
import Link from "next/link";
import { Home, Compass, PlaySquare, Clock, User, Heart, ListMusic, } from "lucide-react";
import { AvatarDemo } from "./UseAvatar";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const sidebarItems = [
  { name: "Home", icon: <Home size={20} />, path: "/" },
  { name: "Explore", icon: <Compass size={20} />, path: "/explore" },
  { name: "Subscriptions", icon: <PlaySquare size={20} />, path: "/subscriptions" },
  { name: "History", icon: <Clock size={20} />, path: "/history" },
  { name: "Profile", icon: <User size={20} />, path: "/profile" },
  { name: "Liked Videos", icon: <Heart size={20} />, path: "/liked" },
  { name: "Playlist", icon: <ListMusic size={20} />, path: "/playlist" },
];

const Sidebar = () => {
  return (
    <div className="w-fit h-[97vh] overflow-y-auto py-2 px-4 flex flex-col justify-between bg-white dark:bg-[#0C0E10] rounded-3xl">

      <div>
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center justify-center sm:gap-2 gap-1">
          <Link href='/'>
            <Image
              src="/youtube-icon.svg"
              width={50}
              height={50}
              alt="icon"
              priority
            />
          </Link>
          <h1 className="sm:block hidden">SeoulStream</h1>
        </div>

        <ul className="space-y-1 mt-8">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-3 hover:bg-[#dedcdc] rounded-lg cursor-pointer md:w-48 dark:hover:bg-[#FF0000]"
            >
              <Link href={item.path} className="flex items-center gap-4">
                {item.icon}
                <span className="text-sm md:block hidden">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="w-full align-center justify-center md:hidden flex mb-2">
          <AvatarDemo />
        </div>

        <div className="sm:mb-8 mb-3 flex-col justify-center items-center">
          <div className="flex sm:justify-normal items-center justify-center">
            <ModeToggle />
          </div>
          <p className="mt-2 sm:block hidden">© 2025 SeoulStream</p>
        </div>
      </div>


    </div>
  );
};

export default Sidebar;