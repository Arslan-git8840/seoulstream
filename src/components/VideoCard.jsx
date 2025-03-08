'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { MoreVertical, PlusCircle, List } from 'lucide-react';
import CreatePlaylist from '@/components/CreatePlaylist';
import { Button } from './ui/button';

const VideoCard = ({ thumbnail, title, channel, views, timestamp, channelImage }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);
  const [showPlaylists, setShowPlaylists] = useState(false);

  const playlists = [
    'Playlist 1',
    'Playlist 2',
    'Playlist 3',
  ];

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleAddToPlaylistClick = () => {
    setShowCreatePlaylist(!showCreatePlaylist);
    setShowOptions(false); // Hide options menu when opening the form
  };

  const togglePlaylists = () => {
    setShowPlaylists(!showPlaylists);
    setShowCreatePlaylist(false); // Hide create playlist form when showing playlists
  };

  return (
    <div className='flex-1 basis-80 h-fit min-w-[250px] rounded-3xl overflow-hidden dark:bg-[#0C0E10] bg-white p-2 relative'>
      <div className='relative w-full h-56'>
        <Image src={thumbnail} alt={title} layout='fill' objectFit='fill' className='rounded-3xl' />
        <span className="absolute bottom-1 right-3 bg-white text-black text-xs px-1 py-0.5 rounded-md">
          12:30
        </span>
      </div>
      <div className='p-3 pb-0'>
        {/* Channel Image - Positioned Absolutely */}
        <div className='relative bottom-[30px] left-0 h-12 w-12 p-1 rounded-full bg-gray-200 overflow-hidden'>
          <Image src={channelImage || '/youtube-icon.svg'} width={48} height={48} alt='Channel' objectFit='cover'/>
        </div>
        {/* Title and details */}
        <div className='relative bottom-4'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-base font-semibold text-gray-900 dark:text-gray-200'>{title}</h3>
              <p className='text-sm font-semibold text-gray-600 dark:text-gray-400 pb-2'>{channel}</p>
              <p className='text-xs font-semibold text-gray-500'>{views} views • {timestamp}</p>
            </div>
            <MoreVertical className="cursor-pointer" onClick={toggleOptions} />
          </div>
          {showOptions && (
            <div className="absolute right-0 -top-8 mt-8 mr-4 bg-white dark:bg-black border  shadow-lg">
              <Button className="flex rounded-none items-center px-4 py-2 text-left w-full" onClick={handleAddToPlaylistClick}>
                <PlusCircle className="mr-2" size={20}/> Add to Playlist
              </Button>
              <Button className="flex rounded-none items-center px-4 py-2 text-left w-full" onClick={togglePlaylists}>
                <List className="mr-2" size={20}/> Show Playlists
              </Button>
            </div>
          )}
        </div>
      </div>
      {(showCreatePlaylist || showPlaylists) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-lg">
            {showCreatePlaylist && (
              <>
                <CreatePlaylist />
                <Button className="mt-4 px-4 py-2 bg-red-500 text-white" onClick={() => setShowCreatePlaylist(false)}>Close</Button>
              </>
            )}
            {showPlaylists && (
              <>
                <div className="mt-2">
                  {playlists.map((playlist, index) => (
                    <Button key={index} className="flex items-center px-4 py-2 rounded-none text-left w-full">
                      <PlusCircle className="mr-2" size={20}/> {playlist}
                    </Button>
                  ))}
                </div>
                <Button className="mt-4 px-4 py-2 bg-red-500 text-white" onClick={() => setShowPlaylists(false)}>Close</Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
