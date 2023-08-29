import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'redux/auth/useAuth';
import { ContainerWrap } from 'components/shared/Container/Container.styled';
import { SectionWrap } from 'components/shared/Section/Section.styled';
import { BackgroundImage } from 'components/Welcome/WelcomePage.styled';
import { Button, FormIcons, FormMessages } from 'components';
import { Input, InputBox } from 'components/SubscribeForm/SubscribeForm.styled';
import { FormWrap, LinkWrap } from './SignupPage.styled';
import { signUpSchema } from 'schema/signUpSchema';

export const SignupPage = () => {
  const { handleSignUp, navigation } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = data => {
    console.log(data);
    handleSignUp(data);
    reset();
    navigation('/signin');
  };

  return (
    <ContainerWrap>
      <BackgroundImage>
        <SectionWrap>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <InputBox>
              <Input
                type="name"
                name="name"
                placeholder="Name"
                {...register('name')}
                valid={isValid}
                invalid={isDirty && !isValid}
              />
              <FormIcons valid={isValid} invalid={!isValid && isDirty} />
            </InputBox>
            <FormMessages
              invalidValue={errors.name}
              validValue={isValid && isDirty}
              errorMessage={errors.name?.message}
              checkMessage="This is valid name"
            />

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
              Subscribe
            </Button>
            <LinkWrap>
              <Link to="/signin">Sign In</Link>
            </LinkWrap>
          </FormWrap>
        </SectionWrap>
      </BackgroundImage>
    </ContainerWrap>
  );
};
