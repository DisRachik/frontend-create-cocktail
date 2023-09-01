import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { subscripe } from 'api';
import { emailSchema } from 'schema';
import { Button, FormIcons, FormMessages } from 'components';
import {
  Container,
  Description,
  Input,
  InputBox,
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

  const onSubmit = ({ email }) => {
    const lowerCaseEmail = email.toLowerCase();

    subscripe({ email: lowerCaseEmail })
      .then(() =>
        toast.success(
          'You have successfully subscribed to the newsletter! A subscription confirmation message has been sent to your email'
        )
      )
      .catch(error => {
        if (error.response.status === 409) {
          return toast.error('You are already subscribed');
        }
        return toast.error('Oops..., something wrong, please try again😢');
      });

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
