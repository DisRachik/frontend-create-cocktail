import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from 'redux/auth/useAuth';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required(),
});

export const SigninPage = () => {
  const { handleSignIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    handleSignIn(data);
  };

  return (
    <>
      <NavLink to="/signup">Registration</NavLink>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>

        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        <input type="submit" />
      </form>
    </>
  );
};
