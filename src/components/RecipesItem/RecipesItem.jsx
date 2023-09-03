// Libs
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
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

import defaultImageUrl from '../../img/thumb400x400.png';
import { Backdrop, CheckoutModal } from 'components';

// Icons
import { RiDeleteBinLine } from 'react-icons/ri';

export const RecipesItem = ({
  data: { drink, instructions, drinkThumb, _id, about },
  action,
  params: { title, agreementBtnText },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      setIsOpen(!isOpen);
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
      <DescriptionDrinks>{about ? about : instructions}</DescriptionDrinks>
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
    action: PropTypes.func,
  }),
};
