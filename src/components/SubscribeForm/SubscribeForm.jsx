import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from 'schema';
import {
  Container,
  Description,
  Input,
  Button,
  InputBox,
  CheckIcon,
  ErrorIcon,
  ErrorMessage,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const {
    register,

    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(emailSchema),
  });

  const onSubmit = data => {
    console.log(data);
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

          {isValid && <CheckIcon />}

          {!isValid && isDirty && <ErrorIcon />}
        </InputBox>
        {errors.email && isDirty && (
          <ErrorMessage style={{ color: '#da14147f' }}>
            {errors.email?.message}
          </ErrorMessage>
        )}
        {isValid && isDirty && (
          <ErrorMessage style={{ color: '#3cbc81' }}>
            This is valid email
          </ErrorMessage>
        )}

        <Button type="submit" disabled={!isValid}>
          Subscribe
        </Button>
      </form>
    </Container>
  );
};
