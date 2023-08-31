import publicOfferingData from './public_offering.json';
import { Section } from 'components';
import { Item } from 'components/PrivacyPolicyText/Item';
import {
  Text,
  List,
} from 'components/PrivacyPolicyText/PrivacyPolicyText.styled';

export const PublicOfferingAgreement = () => {
  return (
    <Section>
      <Text>
        This ""User Agreement"" (the ""Agreement"") sets forth the terms and
        conditions governing the use of the Drink Master application (""App"")
        and its services.
      </Text>
      <List>
        {publicOfferingData.map(({ id, title, content }) => (
          <Item key={id} title={title} content={content} />
        ))}
      </List>
      <Text>
        By accessing or using the Drink Master app, you acknowledge that you
        have read, understood, and agreed to be bound by this User Agreement. If
        you do not agree to these terms, you must cease using the App
        immediately.
      </Text>
    </Section>
  );
};
