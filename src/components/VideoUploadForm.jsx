'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const VideoUploadForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const onSubmit = data => {
    console.log(data);
    // Handle form submission
  };

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-3xl shadow-md max-w-xl w-full mx-auto">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <Input
          id="title"
          {...register('title', { required: 'Title is required' })}
          className="mt-1 block w-full"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <Textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          className="mt-1 block w-full"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="videoFile" className="block text-sm font-medium text-gray-700">Video Upload</label>
        <Input
          id="videoFile"
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="mt-1 block w-full"
        />
        {videoFile && <p className="text-sm mt-1">{videoFile.name}</p>}
      </div>

      <div>
        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail Upload</label>
        <Input
          id="thumbnail"
          type="file"
          accept="image/*"
          onChange={handleThumbnailChange}
          className="mt-1 block w-full"
        />
        {thumbnail && <p className="text-sm mt-1">{thumbnail.name}</p>}
      </div>

      <Button type="submit" className="w-full">Upload Video</Button>
    </form>
  );
};

export default VideoUploadForm;