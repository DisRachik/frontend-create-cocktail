import { ProfileCancelBtn, CloseIcon } from './CancelBtn.styled';

export const CancelBtn = ({ cancelClick, autoFocus }) => {
  return (
    <>
      <ProfileCancelBtn onClick={cancelClick} autoFocus={autoFocus}>
        <CloseIcon />
      </ProfileCancelBtn>
    </>
  );
};
