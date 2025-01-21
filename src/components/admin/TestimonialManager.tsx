import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { PencilIcon, TrashIcon, PlusIcon } from 'lucide-react';
import TestimonialForm from './forms/TestimonialForm';

const TestimonialManager = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading testimonials:', error);
      return;
    }

    setTestimonials(data || []);
  };

  const handleEdit = (testimonial: any) => {
    setEditingTestimonial(testimonial);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting testimonial:', error);
      return;
    }

    await loadTestimonials();
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingTestimonial(null);
  };

  const handleFormSubmit = async () => {
    await loadTestimonials();
    handleFormClose();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Testimonials</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Testimonial
        </button>
      </div>

      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{testimonial.author}</h3>
                <p className="text-gray-600">{testimonial.position}</p>
                <p className="mt-2">{testimonial.content}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="p-2 text-blue-600 hover:text-blue-800"
                >
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="p-2 text-red-600 hover:text-red-800"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <TestimonialForm
          testimonial={editingTestimonial}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default TestimonialManager;