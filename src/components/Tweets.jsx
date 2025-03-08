'use client'
import React, { useState } from 'react';
import { Heart, MessageSquare, MoreHorizontal, Trash, Edit } from 'lucide-react';
import Image from 'next/image';

const tweetsData = [
  {
    id: 1,
    username: 'user1',
    userImage: '/boy.png',
    content: 'This is the first tweet',
    likes: 10,
    comments: [
      { id: 1, username: 'commenter1', userImage: '/boy.png', content: 'Nice tweet!' },
      { id: 2, username: 'commenter2', userImage: '/boy.png', content: 'I agree!' },
    ],
  },
  {
    id: 2,
    username: 'user2',
    userImage: '/boy.png',
    content: 'This is the second tweet',
    likes: 20,
    comments: [
      { id: 1, username: 'commenter3', userImage: '/boy.png', content: 'Interesting!' },
    ],
  },
  // Add more tweets as needed
];

const Tweet = ({ tweet }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="flex flex-col border-b p-4 bg-white dark:bg-black rounded-3xl relative">
      <div className="flex items-start">
        <Image src={tweet.userImage} alt={`${tweet.username}'s profile`} height={48} width={48} className="w-12 h-12 rounded-full mr-4" />
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-bold">{tweet.username}</h3>
            <MoreHorizontal className="cursor-pointer" onClick={toggleOptions} />
          </div>
          <p className="mt-1">{tweet.content}</p>
          <div className="flex space-x-4 mt-2 text-gray-600">
            <span className="flex items-center"><Heart className="dark:text-white mr-1" /> {tweet.likes}</span>
            <span className="flex items-center cursor-pointer" onClick={toggleComments}><MessageSquare className="dark:text-white mr-1" /> {tweet.comments.length}</span>
          </div>
          {showComments && (
            <div className="mt-4">
              {tweet.comments.map(comment => (
                <div key={comment.id} className="flex items-start mt-2">
                  <Image src={comment.userImage} alt={`${comment.username}'s avatar`} height={24} width={24} className="w-6 h-6 rounded-full mr-2" />
                  <div>
                    <span className="font-bold mr-2">{comment.username}:</span>
                    <span>{comment.content}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {showOptions && (
        <div className="absolute right-0 top-0 mt-8 mr-4 bg-white dark:bg-black border rounded shadow-lg">
          <button className="flex items-center px-4 py-2 text-left w-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Edit className="mr-2 text-green-400" size={20} /> Update
          </button>
          <button className="flex items-center px-4 py-2 text-left w-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Trash className="mr-2 text-red-400" size={20} /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

const Tweets = () => {
  return (
    <div className='flex flex-col gap-2'>
      {tweetsData.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Tweets;