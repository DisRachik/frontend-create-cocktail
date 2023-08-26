import {
  DropDawnContainer,
  DropDawnText,
  LogOutBtn,
  DropDawnTextWrapper,
  EditIcon,
} from './ProfileDropDawn.styled';

const ProfileDropDawn = () => {
  return (
    <DropDawnContainer>
      <DropDawnTextWrapper>
        <DropDawnText>Edit profile</DropDawnText>
        <EditIcon></EditIcon>
      </DropDawnTextWrapper>
      <LogOutBtn>Log out</LogOutBtn>
    </DropDawnContainer>
  );
};

export default ProfileDropDawn;
