'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const EditAccountForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-black rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Edit Account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <Input
            id="fullName"
            {...register('fullName', { required: 'Full Name is required' })}
            className="mt-1 block w-full"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
          <Input
            id="username"
            {...register('username', { required: 'Username is required' })}
            className="mt-1 block w-full"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <Input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="mt-1 block w-full"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Cover Image</label>
          <Input
            id="coverImage"
            type="file"
            accept="image/*"
            {...register('coverImage')}
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Avatar</label>
          <Input
            id="avatar"
            type="file"
            accept="image/*"
            {...register('avatar')}
            className="mt-1 block w-full"
          />
        </div>

        <Button type="submit" className="w-full">Save Changes</Button>
      </form>
    </div>
  );
};

export default EditAccountForm;