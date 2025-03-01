import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

const VideoCard = ({ thumbnail, title, channel, views, timestamp }) => {
  return (
    <div className='flex-1 basis-80 h-fit min-w-[250px] max-w-[500px]  rounded-lg overflow-hidden  '>
      <div className='relative w-full h-56'>
        <Image src={thumbnail} alt={title} layout='fill' objectFit='fill' className='rounded-t-lg ' />
      </div>
      <div className='p-3'>
        <div className='flex gap-2'>
          <User/>
        <h3 className='text-base font-semibold text-gray-900 pb-2'>{title}</h3>
        </div>
        <p className='text-sm font-semibold text-gray-600 pb-2'>{channel}</p>
        <p className='text-xs font-semibold text-gray-500'>{views} views • {timestamp}</p>
      </div>
    </div>
  );
};

export default VideoCard;
