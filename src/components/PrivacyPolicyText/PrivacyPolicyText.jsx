import privacyPolicyData from './privacy_policy.json';
import { Section } from 'components';
import { Item } from './Item';
import { Title, Text, List } from './PrivacyPolicyText.styled';

export const PrivacyPolicyText = () => {
  return (
    <Section>
      <Title>Privacy Polisy</Title>
      <Text>
        Your privacy is important to us. This section outlines how we collect,
        use, process, and protect your personal data. This Privacy Policy
        applies to the use of our website, applications, and services, so please
        take a moment to read it.
      </Text>
      <List>
        {privacyPolicyData.map(({ id, title, content }) => (
          <Item key={id} title={title} content={content} />
        ))}
      </List>
    </Section>
  );
};
