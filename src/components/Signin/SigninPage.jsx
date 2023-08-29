import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'redux/auth/useAuth';
import { ContainerWrap } from 'components/shared/Container/Container.styled';
import { SectionWrap } from 'components/shared/Section/Section.styled';
import { BackgroundImage } from 'components/Welcome/WelcomePage.styled';
import { Button, FormIcons, FormMessages } from 'components';
import { Input, InputBox } from 'components/SubscribeForm/SubscribeForm.styled';
import { signInSchema } from 'schema/signInSchema';
import { FormWrap, LinkWrap } from 'components/Signup/SignupPage.styled';

export const SigninPage = () => {
  const { handleSignIn, navigation } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = data => {
    console.log(data);
    handleSignIn(data);
    reset();
    navigation('/main');
  };

  return (
    <ContainerWrap>
      <BackgroundImage>
        <SectionWrap>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <InputBox>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                {...register('email')}
                valid={isValid}
                invalid={isDirty && !isValid}
              />
              <FormIcons valid={isValid} invalid={!isValid && isDirty} />
            </InputBox>
            <FormMessages
              invalidValue={errors.email}
              validValue={isValid && isDirty}
              errorMessage={errors.name?.message}
              checkMessage="This is valid email"
            />

            <InputBox>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                {...register('password')}
                valid={isValid}
                invalid={isDirty && !isValid}
              />
              <FormIcons valid={isValid} invalid={!isValid && isDirty} />
            </InputBox>
            <FormMessages
              invalidValue={errors.password}
              validValue={isValid && isDirty}
              errorMessage={errors.password?.message}
              checkMessage="This is valid password"
            />

            <Button
              disabled={!isValid || !isDirty}
              transparent
              minWidth={'100%'}
              minHeight="56px"
            >
              Sign In
            </Button>
            <LinkWrap>
              <Link to="/signup">Registration</Link>
            </LinkWrap>
          </FormWrap>
        </SectionWrap>
      </BackgroundImage>
    </ContainerWrap>
  );
};
