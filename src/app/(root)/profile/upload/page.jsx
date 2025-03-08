'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import VideoUploadForm from '@/components/VideoUploadForm';

function Page() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">Upload a video</h1>
      <Button className="mb-4" onClick={handleButtonClick}>
        {showForm ? 'Hide Form' : 'Upload a video'}
      </Button>
      {showForm && <VideoUploadForm />}
    </div>
  );
}

export default Page;