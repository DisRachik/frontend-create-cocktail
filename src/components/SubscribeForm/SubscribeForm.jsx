import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { subscripe } from 'api';
import { useAuth } from 'redux/auth/useAuth';
import { emailSchema } from 'schema';
import { Button, FormIcons, FormMessages } from 'components';
import {
  Container,
  Description,
  Input,
  InputBox,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(emailSchema),
  });

  const onSubmit = ({ email }) => {
    const lowerCaseEmail = email.toLowerCase();

    if (user.subscription !== '') {
      toast.error('You are already subscribed');
      return;
    }

    dispatch(subscripe({ email: lowerCaseEmail }))
      .unwrap()
      .then(
        toast.success(
          'You have successfully subscribed to the newsletter! A subscription confirmation message has been sent to your email'
        )
      )
      .catch(() => toast.error('Oops..., something wrong, please try again😢'));

    reset();
  };

  return (
    <Container>
      <Description>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </Description>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <Input
            type="email"
            name="email"
            placeholder="Enter the email"
            {...register('email')}
            valid={isValid}
            invalid={isDirty && !isValid}
          />
          <FormIcons valid={isValid} invalid={!isValid && isDirty} />
        </InputBox>
        <FormMessages
          invalidValue={errors.email}
          validValue={isValid && isDirty}
          errorMessage={errors.email?.message}
          checkMessage="This is valid email"
        />

        <Button
          disabled={!isValid || !isDirty}
          transparent={true}
          minWidth={'100%'}
          minHeight="56px"
        >
          Subscribe
        </Button>
      </form>
    </Container>
  );
};
