'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const subscribersData = [
  {
    id: 1,
    username: 'subscriber1',
    userImage: '/boy.png',
    isSubscribed: true,
  },
  {
    id: 2,
    username: 'subscriber2',
    userImage: '/boy.png',
    isSubscribed: false,
  },
  // Add more subscribers as needed
];

const Subscriber = ({ subscriber }) => {
  const [isSubscribed, setIsSubscribed] = useState(subscriber.isSubscribed);

  const toggleSubscription = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="dark:bg-black bg-white flex items-center border-b p-4 rounded-3xl">
      <Image src={subscriber.userImage} alt={`${subscriber.username}'s avatar`} height={48} width={48} className="w-12 h-12 rounded-full mr-4" />
      <div className="flex-1">
        <h3 className="font-bold">{subscriber.username}</h3>
      </div>
      <Button
        onClick={toggleSubscription}
        className={`px-4 py-2 rounded ${isSubscribed ? 'bg-gray-500' : 'bg-black text-white dark:bg-white dark:text-black'}`}
      >
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </Button>
    </div>
  );
};

const Subscribers = () => {
  return (
    <div className="flex flex-col gap-2">
      {subscribersData.map(subscriber => (
        <Subscriber key={subscriber.id} subscriber={subscriber} />
      ))}
    </div>
  );
};

export default Subscribers;