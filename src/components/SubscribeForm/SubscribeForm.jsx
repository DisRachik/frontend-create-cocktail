import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from 'schema';
import { Button, FormIcons, FormMessages } from 'components';
import {
  Container,
  Description,
  Input,
  InputBox,
  // ErrorMessage,
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
          <FormIcons valid={isValid} invalid={!isValid && isDirty} />
        </InputBox>
        <FormMessages
          invalidValue={errors.email}
          validValue={isValid && isDirty}
          errorMessage={errors.email?.message}
          checkMessage="This is valid email"
        />

        <Button
          transparent={true}
          minWidth={'100%'}
          onClick={() => {}}
          style={{ marginTop: '18px' }}
        >
          Subscribe
        </Button>
      </form>
    </Container>
  );
};
