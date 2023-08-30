import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
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
    console.log(email === user.subscription);

    if (email === user.subscription) {
      console.log('Підписка на цей email вже є'); // тут повинен бути toast
      return;
    }

    dispatch(subscripe({ email }));
    // тут повинен бути toast приблизно з таким повідомленням:
    // Ви успішно підписались на розсилку!
    // На ваш email надіслано повідомлення про підтвердження підписки...

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
