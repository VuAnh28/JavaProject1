import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { userRoles } from '../../utils/roles';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: keyof typeof userRoles;
  handleRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onLogout: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, userRole, handleRoleChange, onLogout }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" ref={modalRef}>
          {/* Modal content */}
        </div>
      </div>
  );
};

export default SettingsModal;