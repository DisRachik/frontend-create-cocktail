import PropTypes from 'prop-types';
import drink from 'img/mobile-yellow-drink.png';
import drinkMedium from 'img/tablet-yellow-drink.png';
import { Picture, Text, Wrapper } from './EmptyAndError.styled';

export const EmptyAndError = ({ text }) => {
  return (
    <Wrapper>
      <Picture>
        <source srcSet={drink} media="(max-width: 767px)" />
        <source srcSet={drinkMedium} media="(min-width: 768px)" />
        <img src={drink} alt="cocktail" />
      </Picture>
      <Text>{text}</Text>
    </Wrapper>
  );
};

EmptyAndError.propTypes = {
  text: PropTypes.string.isRequired,
};
