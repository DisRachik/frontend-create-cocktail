import {
  DropDawnContainer,
  DropDawnText,
  LogOutBtn,
  DropDawnTextWrapper,
  EditIcon,
} from './UserLogoModal.styled';

export const UserLogoModal = ({ userModalToggle, logOutModalToggle }) => {
  return (
    <>
      <DropDawnContainer>
        <DropDawnTextWrapper onClick={userModalToggle}>
          <DropDawnText>Edit profile</DropDawnText>
          <EditIcon />
        </DropDawnTextWrapper>
        <LogOutBtn onClick={logOutModalToggle}>Log out</LogOutBtn>
      </DropDawnContainer>
    </>
  );
};
