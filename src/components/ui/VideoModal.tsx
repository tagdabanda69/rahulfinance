import React from 'react';
import Modal from './Modal';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Video Player">
      <div className="flex justify-center">
        <video
          className="w-full"
          controls
          src={videoUrl}
          // Dummy video link for testing
          poster="https://via.placeholder.com/640x360"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
};

export default VideoModal;
