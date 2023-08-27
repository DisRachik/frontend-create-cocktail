import { NavLink } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <>
      <NavLink to="/signup">Registration</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </>
  );
};
