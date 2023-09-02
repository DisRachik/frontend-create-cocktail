import { useState } from 'react';

export const useToggleForInfoModal = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const userModalOpen = () => setIsUserModalOpen(true);
  const userModalClose = () => setIsUserModalOpen(false);
  const userModalToggle = () =>
    setIsUserModalOpen(userModalOpen => !userModalOpen);

  return { isUserModalOpen, userModalOpen, userModalClose, userModalToggle };
};

export const useToggleForLogOutModal = () => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const logOutModalOpen = () => setIsLogOutModalOpen(true);
  const logOutModalClose = () => setIsLogOutModalOpen(false);
  const logOutModalToggle = () =>
    setIsLogOutModalOpen(logOutModalOpen => !logOutModalOpen);

  return {
    isLogOutModalOpen,
    logOutModalOpen,
    logOutModalClose,
    logOutModalToggle,
  };
};
