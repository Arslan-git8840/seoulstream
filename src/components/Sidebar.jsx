import React from "react";
import Link from "next/link";
import { Home, Compass, PlaySquare, Clock, User, Heart, ListMusic } from "lucide-react";
import { AvatarDemo } from "./UseAvatar";

const sidebarItems = [
  { name: "Home", icon: <Home size={20}/>, path: "/" },
  { name: "Explore", icon: <Compass size={20}/>, path: "/explore" },
  { name: "Subscriptions", icon: <PlaySquare size={20}/>, path: "/subscriptions" },
  { name: "History", icon: <Clock size={20}/>, path: "/history" },
  { name: "Profile", icon: <User size={20}/>, path: "/profile" },
  { name: "Liked Videos", icon: <Heart size={20}/>, path: "/liked" },
  { name: "Playlist", icon: <ListMusic size={20}/>, path: "/playlist" },
];

const Sidebar = () => {
  return (
    <div className="w-fit h-screen overflow-y-auto py-3 flex flex-col justify-between ">
      <ul className="space-y-1">
        {sidebarItems.map((item, index) => (    
          <li
            key={index}
            className="flex items-center gap-4 p-3 hover:bg-gray-200 rounded-lg cursor-pointer md:w-48"
          >
            <Link href={item.path} className="flex items-center gap-4">
              {item.icon}
              <span className="text-sm md:block hidden">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full align-center justify-center md:hidden flex">
        <AvatarDemo/>
      </div>
    </div>
  );
};

export default Sidebar;