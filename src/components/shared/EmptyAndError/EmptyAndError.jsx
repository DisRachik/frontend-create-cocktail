import PropTypes from 'prop-types';
import drink from 'img/mobile-yellow-drink.png';
import drinkMedium from 'img/tablet-yellow-drink.png';
import {
  ErrorScreen,
  ImgWrap,
  Picture,
  Text,
  Wrapper,
} from './EmptyAndError.styled';

export const EmptyAndError = ({ text, errorScreen }) => {
  return (
    <Wrapper>
      <ImgWrap>
        {/* <ErrorScreen>4</ErrorScreen> */}
        <Picture>
          <source srcSet={drink} media="(max-width: 767px)" />
          <source srcSet={drinkMedium} media="(min-width: 768px)" />
          <img src={drink} alt="cocktail" />
        </Picture>
        {errorScreen && (
          <ErrorScreen>
            4<span>0</span>4
          </ErrorScreen>
        )}
      </ImgWrap>
      {text && <Text>{text}</Text>}
    </Wrapper>
  );
};

EmptyAndError.propTypes = {
  text: PropTypes.string,
  errorScreen: PropTypes.bool,
};
