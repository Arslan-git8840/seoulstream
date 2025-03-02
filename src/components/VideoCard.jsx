import React from 'react';
import Image from 'next/image';

const VideoCard = ({ thumbnail, title, channel, views, timestamp, channelImage }) => {
  return (
    <div className='flex-1 basis-80 h-fit min-w-[250px] max-w-[500px] rounded-3xl overflow-hidden dark:bg-[#0C0E10] bg-white p-2 relative'>
      <div className='relative w-full h-56'>
        <Image src={thumbnail} alt={title} layout='fill' objectFit='fill' className='rounded-3xl' />
      </div>
      <div className='p-3 pb-0'>
        {/* Channel Image - Positioned Absolutely */}
        <div className='relative bottom-[30px] left-0 h-12 w-12 p-1 rounded-full bg-gray-200 overflow-hidden'>
          <Image src={channelImage || '/youtube-icon.svg'} width={48} height={48} alt='Channel' objectFit='cover'/>
        </div>
        {/* Title and details */}
        <div className='relative bottom-4'> {/* Added left padding to avoid overlap */}
          <h3 className='text-base font-semibold text-gray-900 dark:text-gray-200'>{title}</h3>
          <p className='text-sm font-semibold text-gray-600 dark:text-gray-400 pb-2'>{channel}</p>
          <p className='text-xs font-semibold text-gray-500'>{views} views • {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
