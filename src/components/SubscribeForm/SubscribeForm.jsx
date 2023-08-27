import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { subscripe } from 'api';
import { selectSubsription } from 'redux/auth/selectors';
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
  const subscription = useSelector(selectSubsription);
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
    console.log({ email });

    dispatch(subscripe({ email }));
    // Ви успішно підписались на розсилку!
    // Очійкуте повідомлення для підтвердження
    // підписки на ваш e-mail

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

        <Button transparent={true} minWidth={'100%'} minHeight="56px">
          Subscribe
        </Button>
      </form>
    </Container>
  );
};
