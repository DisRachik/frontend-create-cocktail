import { ProfileCancelBtn, CloseIcon } from './CancelBtn.styled';

export const CancelBtn = ({ cancelClick }) => {
  return (
    <>
      <ProfileCancelBtn onClick={cancelClick}>
        <CloseIcon />
      </ProfileCancelBtn>
    </>
  );
};