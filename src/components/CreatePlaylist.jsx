'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CreatePlaylist = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white dark:bg-black rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Create Playlist</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <Input
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block w-full"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <Textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            className="mt-1 block w-full"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <Button type="submit" className="w-full">Create Playlist</Button>
      </form>
    </div>
  );
};

export default CreatePlaylist;