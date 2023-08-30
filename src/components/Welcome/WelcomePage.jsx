import { ContainerWrap } from 'components/shared/Container/Container.styled';
import { NavLink } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <ContainerWrap>
      <ul>
        <li>
          <NavLink to="/signup">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign In</NavLink>
        </li>
      </ul>
    </ContainerWrap>
  );
};
