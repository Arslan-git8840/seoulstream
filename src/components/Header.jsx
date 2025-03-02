import Image from 'next/image';
import React from 'react';
import { Input } from './ui/input';
import { AvatarDemo } from './UseAvatar';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="flex flex-1 w-full gap-4 py-2 px-2 dark:bg-[#0C0E10] bg-white rounded-3xl">
            {/* Search Bar and Avatar */}
            <div className="flex justify-center items-center gap-2 sm:gap-4 w-full">
                <div className="relative flex-1 w-full sm:max-w-lg">
                    <Input
                        type="text"
                        className="w-full h-12 px-4 py-2 focus:outline-none dark:focus:border-none bg-[#F3F3F3] dark:bg-black rounded-xl text-lg"
                        placeholder="Search"
                    />
                </div>  

                <div className="flex-shrink-0 md:block hidden p-2">
                    <AvatarDemo />
                </div>

            </div>
        </div>
    );
};

export default Header;
