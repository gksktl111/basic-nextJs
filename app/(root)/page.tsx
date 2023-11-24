'use client';

import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  return (
    <div>
      <Modal title='Test' description='Test Desc' isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
