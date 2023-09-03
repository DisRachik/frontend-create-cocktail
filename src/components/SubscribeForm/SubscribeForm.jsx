import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { subscripe, unsubscribe } from 'api';
import { emailSchema } from 'schema';
import { useAuth } from 'redux/auth/useAuth';
import { Button, FormIcons, FormMessages } from 'components';
import {
  Container,
  Description,
  Input,
  InputBox,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [subscribe, setSubscribe] = useState('');
  // console.log(subscribe);
  const { user } = useAuth();
  // console.log('isSubscribe', isSubscribe);
  // console.log('user', user.subscription);

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

    subscripe({ email: lowerCaseEmail })
      .then(() => {
        setIsSubscribe(true);
        toast.success(
          'You have successfully subscribed to the newsletter! Please, check your email'
        );
      })
      .catch(error => {
        if (error.response.status === 409) {
          return toast.error('You are already subscribed');
        }
        return toast.error('Oops..., something wrong, please try again😢');
      });

    reset();
  };

  const handleUnsubscribe = () => {
    unsubscribe()
      .then(({ unsubscriptionEmail }) => {
        setIsSubscribe(false);
        setSubscribe(unsubscriptionEmail);
        toast.success(
          'You have successfully unsubscribed from the newsletter! Please, check your email'
        );
      })
      .catch(error => {
        if (error.response.status === 400) {
          return toast.error('You are not subscribed');
        }
        return toast.error('Oops..., something wrong, please try again😢');
      });
  };

  const isUserSubscribed = (() => {
    if (isSubscribe) {
      return true;
    } else if (subscribe === user.subscription && !isSubscribe) {
      return false;
    } else if (user.subscription !== '') {
      return true;
    }

    return false;
  })();

  return (
    <Container>
      <Description>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </Description>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <Input
            type="email"
            name="email"
            placeholder="Enter the email"
            {...register('email')}
            disabled={isUserSubscribed}
            valid={isValid}
            invalid={isDirty && !isValid}
          />
          <FormIcons valid={isValid} invalid={!isValid && isDirty} />
        </InputBox>
        <FormMessages
          invalidValue={errors.email && isDirty}
          validValue={isValid && isDirty}
          errorMessage={errors.email?.message}
          checkMessage="This is valid email"
        />

        {isUserSubscribed ? (
          <Button
            transparent={true}
            minWidth={'100%'}
            minHeight="56px"
            onClick={handleUnsubscribe}
          >
            Unsubscribe
          </Button>
        ) : (
          <Button
            disabled={!isValid || !isDirty}
            transparent={true}
            minWidth={'100%'}
            minHeight="56px"
          >
            Subscribe
          </Button>
        )}
      </form>
    </Container>
  );
};
