import React, { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import Modal from '../../ui/Modal';

interface TestimonialFormProps {
  testimonial?: any;
  onClose: () => void;
  onSubmit: () => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({
  testimonial,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    author: testimonial?.author || '',
    position: testimonial?.position || '',
    content: testimonial?.content || '',
    image_url: testimonial?.image_url || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (testimonial?.id) {
      const { error } = await supabase
        .from('testimonials')
        .update(formData)
        .eq('id', testimonial.id);

      if (error) {
        console.error('Error updating testimonial:', error);
        return;
      }
    } else {
      const { error } = await supabase
        .from('testimonials')
        .insert([formData]);

      if (error) {
        console.error('Error creating testimonial:', error);
        return;
      }
    }

    onSubmit();
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title={testimonial ? 'Edit Testimonial' : 'Add Testimonial'}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Position</label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
            {testimonial ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TestimonialForm;