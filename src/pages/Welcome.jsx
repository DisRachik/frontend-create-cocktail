import { NavLink } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <div>Welcome</div>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/signin">Signin</NavLink>
    </>
  );
};

export default Welcome;
