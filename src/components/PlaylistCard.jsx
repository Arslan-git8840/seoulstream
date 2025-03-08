import Image from 'next/image';
import React from 'react';

const PlaylistCard = ({ playlist }) => {
    return (
        <div className="flex flex-1 basis-80  flex-col items-center gap-4 p-4 bg-white shadow-md rounded-lg transition cursor-pointer w-60 hover:bg-gray-100 dark:hover:bg-black dark:bg-black">
            <div className="relative w-full h-40">
                <Image src={playlist.thumbnail} alt={playlist.title} layout="fill" className="rounded-md object-cover" />
                <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 py-0.5 rounded-md">
                    {playlist.videoCount} Videos
                </span>
            </div>
            <div className="flex flex-col items-center text-center">
                <h3 className="text-sm font-semibold line-clamp-2">{playlist.title}</h3>
                <p className="text-xs text-gray-500">{playlist.channelName}</p>
            </div>
        </div>
    );
};

export default PlaylistCard;
