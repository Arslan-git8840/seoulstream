import Image from 'next/image';
import React from 'react';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HistoryCard = ({ video }) => {
  return (
    <div className="flex gap-4 p-2 hover:bg-gray-100 dark:hover:bg-black rounded-lg cursor-pointer">
      <div className="relative w-32 h-20 flex-shrink-0">
        <Image src={video.thumbnail} alt={video.title} layout="fill" className="rounded-md" />
        <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 py-0.5 rounded-md">
          {video.duration}
        </span>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <h3 className="text-sm font-medium line-clamp-2">{video.title}</h3>
        <p className="text-xs text-gray-500">{video.channelName}</p>
        <p className="text-xs text-gray-500">{video.views} views</p>
      </div>
      <div className='flex items-center'>
      <Button className="flex items-center justify-center p-2 dark:bg-[#0C0E10] rounded-lg">
        <Trash className="w-4 h-4 text-red-400" />
      </Button>
      </div>
    </div>
  );
};

export default HistoryCard;
