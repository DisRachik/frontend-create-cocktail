import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn, signUp } from 'redux/auth/operations';
import { signUpSchema } from 'schema/signUpSchema';
import {
  BackgroundGradient,
  BackgroundImage,
  ContainerWelcome,
  Left,
  Right,
  SectionWelcome,
  Top,
  WelcomeWrap,
  Wrapper,
} from 'components/Welcome/WelcomePage.styled';
import { Button, FormIcons, FormMessages } from 'components';
import { Input, InputBox } from 'components/SubscribeForm/SubscribeForm.styled';
import {
  AuthTitle,
  ButtonWrap,
  FormWrap,
  HideIcon,
  Link,
  LinkWrap,
  ShowIcon,
} from './SignupPage.styled';

export const SignupPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async data => {
    const lowercasedData = {
      ...data,
      email: data.email.toLowerCase(),
    };

    try {
      const responseSignUp = await dispatch(signUp(lowercasedData));

      if (responseSignUp.type === 'auth/signup/fulfilled') {
        const { email, password } = lowercasedData;

        await dispatch(signIn({ email, password }));
        navigation('/main');
      }

      reset();
    } catch (error) {
      return console.log(error.message);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <BackgroundGradient>
        <BackgroundImage>
          <Top />
          <Left />
          <ContainerWelcome>
            <SectionWelcome>
              <WelcomeWrap>
                <AuthTitle>Registration</AuthTitle>
                <FormWrap onSubmit={handleSubmit(onSubmit)}>
                  <InputBox>
                    <Input
                      type="name"
                      name="name"
                      placeholder="Name"
                      {...register('name')}
                      valid={!errors.name && dirtyFields.name}
                      invalid={errors.name && dirtyFields.name}
                      autoComplete="off"
                    />
                    <FormIcons
                      valid={!errors.name && dirtyFields.name}
                      invalid={errors.name && dirtyFields.name}
                    />
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
                      valid={!errors.email && dirtyFields.email}
                      invalid={errors.email && dirtyFields.email}
                      autoComplete="off"
                    />
                    <FormIcons
                      valid={!errors.email && dirtyFields.email}
                      invalid={errors.email && dirtyFields.email}
                    />
                  </InputBox>
                  <FormMessages
                    invalidValue={errors.email}
                    validValue={isValid && isDirty}
                    errorMessage={errors.name?.message}
                    checkMessage="This is valid email"
                  />

                  <InputBox>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      {...register('password')}
                      valid={!errors.password && dirtyFields.password}
                      invalid={errors.password && dirtyFields.password}
                      autoComplete="off"
                    />
                    <span onClick={togglePassword}>
                      {showPassword ? <HideIcon /> : <ShowIcon />}
                    </span>
                  </InputBox>

                  <FormMessages
                    invalidValue={errors.password}
                    validValue={isValid && isDirty}
                    errorMessage={errors.password?.message}
                    checkMessage="This is valid password"
                  />

                  <ButtonWrap>
                    <Button
                      disabled={!isValid || !isDirty}
                      transparent
                      minWidth="100%"
                      minHeight="56px"
                    >
                      Sign Up
                    </Button>
                  </ButtonWrap>
                  <LinkWrap>
                    <Link to="/signin">Sign In</Link>
                  </LinkWrap>
                </FormWrap>
              </WelcomeWrap>
            </SectionWelcome>
          </ContainerWelcome>
          <Right />
        </BackgroundImage>
      </BackgroundGradient>
    </Wrapper>
  );
};
