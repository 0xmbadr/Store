'use client';

import { Modal } from '@/components/ui/modal';

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="test" onClose={() => {}} isOpen description="test dec">
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
