import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

import { useAuth } from 'redux/auth/useAuth';
import {
  DropDown,
  LogoutBtn,
  ProfileBtn,
  ProfileBtnText,
} from './UserLogoModal.styled';
import { Modal } from 'components/Modal/Modal';

export const UserLogoModal = ({ drop }) => {
  const [logout, setLogout] = useState(false);
  const [profile, setProfile] = useState(false);
  const { handleSignOut } = useAuth();

  const openLogout = () => {
    setLogout(!logout);
  };
  const openProfile = () => {
    setProfile(!profile);
  };
  return (
    <div>
      <DropDown drop={drop}>
        <ProfileBtn>
          <ProfileBtnText onClick={openProfile}>Edit profile</ProfileBtnText>
          <FiEdit2 size={14} />
        </ProfileBtn>
        <LogoutBtn onClick={openLogout}>Log out</LogoutBtn>
      </DropDown>

      <Modal modal={profile} setModal={setProfile}>
        Profile
      </Modal>
      <Modal modal={logout} setModal={setLogout}>
        <button type="button">Cancel</button>
        <button
          type="button"
          onClick={() => {
            handleSignOut();
          }}
        >
          Log out
        </button>
      </Modal>
    </div>
  );
};
