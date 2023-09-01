import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'redux/auth/operations';
import {
  BackgroundImage,
  ContainerWelcome,
  SectionWelcome,
  WelcomeWrap,
  Wrapper,
} from 'components/Welcome/WelcomePage.styled';
import { Button, FormIcons, FormMessages } from 'components';
import { Input, InputBox } from 'components/SubscribeForm/SubscribeForm.styled';
import { signInSchema } from 'schema/signInSchema';
import {
  AuthTitle,
  ButtonWrap,
  FormWrap,
  Link,
  LinkWrap,
} from 'components/Signup/SignupPage.styled';
import { toast } from 'react-toastify';

export const SigninPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async data => {
    const lowercasedData = {
      ...data,
      email: data.email.toLowerCase(),
    };

    try {
      const response = await dispatch(signIn(lowercasedData));

      if (response.type === 'auth/signin/fulfilled') {
        toast.success(`Congratulations ${data.email}`);
        navigation('/main');
      }

      reset();
    } catch (error) {
      return console.log(error.message);
    }
  };

  return (
    <BackgroundImage>
      <Wrapper>
        <ContainerWelcome>
          <SectionWelcome>
            <WelcomeWrap>
              <AuthTitle>Sign In</AuthTitle>
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

                <ButtonWrap>
                  <Button
                    disabled={!isValid || !isDirty}
                    transparent
                    minWidth="100%"
                    minHeight="56px"
                  >
                    Sign In
                  </Button>
                </ButtonWrap>
                <LinkWrap>
                  <Link to="/signup">Registration</Link>
                </LinkWrap>
              </FormWrap>
            </WelcomeWrap>
          </SectionWelcome>
        </ContainerWelcome>
      </Wrapper>
    </BackgroundImage>
  );
};
