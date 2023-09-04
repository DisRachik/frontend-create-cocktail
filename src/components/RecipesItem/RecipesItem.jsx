// Libs
import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
// Icons
import { RiDeleteBinLine } from 'react-icons/ri';
// Components
import { Backdrop, CheckoutModal } from 'components';
// Styled components
import {
  BatonsContainer,
  DeleteFavoriteDrinksBtn,
  DescriptionDrinks,
  FavoriteItem,
  ImageDrinks,
  SeeRecipe,
  Text,
  TitleDrinks,
} from './RecipesItem.styled';
// Other
import defaultImageUrl from '../../img/thumb400x400.png';

export const RecipesItem = ({
  data: { drink, instructions, drinkThumb, _id },
  action,
  params: { title, agreementBtnText },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      setIsOpen(prevState => !prevState);
    }
  };

  return (
    <FavoriteItem>
      <ImageDrinks
        loading="lazy"
        src={drinkThumb || defaultImageUrl}
        alt="drink"
      />
      <TitleDrinks>{drink ? drink : 'N/a'}</TitleDrinks>
      <Text to={`/recipe/${_id}`}>Ingredients</Text>
      <DescriptionDrinks>
        {instructions ? instructions : 'N/a'}
      </DescriptionDrinks>
      <BatonsContainer>
        <SeeRecipe to={`/recipe/${_id}`}>See recipe</SeeRecipe>

        <DeleteFavoriteDrinksBtn
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiDeleteBinLine />
        </DeleteFavoriteDrinksBtn>
        {isOpen && (
          <Backdrop onClick={handleCloseOverlay}>
            <CheckoutModal
              cancelClick={() => {
                setIsOpen(!isOpen);
              }}
              contentText={title}
              agreementBtnText={agreementBtnText}
              agreeClick={() => {
                action(_id);
                setIsOpen(!isOpen);
                toast.success('Cocktail removed');
              }}
              disagreeClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </Backdrop>
        )}
      </BatonsContainer>
    </FavoriteItem>
  );
};

RecipesItem.propTypes = {
  data: PropTypes.shape({
    drink: PropTypes.string.isRequired,
    instructions: PropTypes.array.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  action: PropTypes.func,
  params: PropTypes.shape({
    title: PropTypes.string.isRequired,
    agreementBtnText: PropTypes.string.isRequired,
  }),
};
