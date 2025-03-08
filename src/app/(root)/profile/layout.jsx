'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';
import EditAccountForm from '@/components/EditAccountForm';

function Layout({ children }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <div className="sm:p-4 p-1 dark:bg-[#0C0E10] rounded-2xl">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/boy.png"
          alt="User Avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex-1">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">My Account</h1>
          <p className="text-sm sm:text-base text-gray-500">@username</p>
        </div>
        <Edit3 className="cursor-pointer" onClick={handleEditClick} />
      </div>

      {/* Subscriber Info */}
      <div className="mb-2 flex justify-between">
        <div className="flex sm:flex-row gap-2 flex-col">
          <span className="px-3 py-2 text-sm sm:text-base rounded-2xl dark:bg-black bg-white">
            1k Subscribers
          </span>
          <span className="px-3 py-2 text-sm sm:text-base rounded-2xl dark:bg-black bg-white">
            1k Subscribed
          </span>
        </div>
        <div>
          <Button className="text-sm sm:text-base">Subscribe</Button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-2xl mb-2">
        {[
          { href: '/profile', label: 'Posts' },
          { href: '/profile/tweets', label: 'Tweets' },
          { href: '/profile/subscribers', label: 'Subscribers' },
          { href: '/profile/upload', label: 'Upload' },
        ].map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm sm:text-base px-4 py-2 rounded-xl transition duration-300 hover:text-black dark:hover:text-white border-b"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {children}

      {showEditForm && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-lg">
            <EditAccountForm />
            <Button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={handleEditClick}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
