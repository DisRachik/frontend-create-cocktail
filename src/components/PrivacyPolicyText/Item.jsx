import PropTypes from 'prop-types';
import { Subtitle } from './PrivacyPolicyText.styled';

export const Item = ({ title, content }) => {
  return (
    <li>
      <Subtitle>{title}</Subtitle>
      <p>{content}</p>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
