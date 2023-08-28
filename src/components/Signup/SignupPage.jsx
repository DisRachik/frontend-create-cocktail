import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from 'redux/auth/useAuth';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required(),
});

export const SignupPage = () => {
  const { handleSignUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    handleSignUp(data);
  };

  return (
    <>
      <NavLink to="/signin">Sign In</NavLink>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>

        <input {...register('email')} />
        <p>{errors.email?.message}</p>

        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        <input type="submit" />
      </form>
    </>
  );
};
