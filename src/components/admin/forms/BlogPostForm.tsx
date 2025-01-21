import React, { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { useAuthStore } from '../../../stores/authStore';
import Modal from '../../ui/Modal';

interface BlogPostFormProps {
  post?: any;
  onClose: () => void;
  onSubmit: () => void;
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({
  post,
  onClose,
  onSubmit,
}) => {
  const user = useAuthStore((state) => state.user);
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    if (post?.id) {
      const { error } = await supabase
        .from('blog_posts')
        .update(formData)
        .eq('id', post.id);

      if (error) {
        console.error('Error updating blog post:', error);
        return;
      }
    } else {
      const { error } = await supabase
        .from('blog_posts')
        .insert([{ ...formData, author_id: user.id }]);

      if (error) {
        console.error('Error creating blog post:', error);
        return;
      }
    }

    onSubmit();
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title={post ? 'Edit Blog Post' : 'Add Blog Post'}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={8}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {post ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BlogPostForm;