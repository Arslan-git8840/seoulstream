import Image from 'next/image';
import React from 'react';
import { Input } from './ui/input';
import { AvatarDemo } from './UseAvatar';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full gap-4 ">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center sm:gap-2 gap-1">
                <Link href='/'>
                <Image
                    src="/youtube-icon.svg"
                    width={50}
                    height={50}
                    alt="icon"
                    priority
                />
                </Link>
                <h1>SeoulStream</h1>
            </div>

            {/* Search Bar and Avatar */}
            <div className="flex items-center sm:gap-4 flex-1 justify-end">
                <div className="relative flex-1 max-w-xs sm:max-w-lg">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={20}/>
                    <Input
                        type="text"
                        className="w-full px-4 py-2 pl-10 border-2 border-black rounded-full placeholder:text-black focus:outline-none"
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
