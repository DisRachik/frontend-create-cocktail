// Libs
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';

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

const modalRoot = document.querySelector('#modal-root');

export const RecipesItem = ({
  data: { drink, instructions, drinkThumb, _id, about },
  action,
  params: { title, agreementBtnText },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      setIsOpen(prevState => !prevState);
    }
  };

  useEffect(() => {
    const handleCloseEsc = evt => {
      if (evt.code === 'Escape') {
        setIsOpen(false);
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, []);

  const isModalOpen = () => {
    if (isOpen) {
      return (document.body.style.overflow = 'hidden');
    }
    return (document.body.style.overflow = 'auto');
  };

  isModalOpen();

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
          onClick={() => setIsOpen(prevState => !prevState)}
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

        {isOpen &&
          createPortal(
            <Backdrop onClick={handleCloseOverlay}>
              <CheckoutModal
                cancelClick={() => {
                  setIsOpen(prevState => !prevState);
                }}
                contentText={title}
                agreementBtnText={agreementBtnText}
                agreeClick={() => {
                  setIsOpen(prevState => !prevState);
                  action(_id);
                  toast.success('Cocktail removed');
                }}
                disagreeClick={() => {
                  setIsOpen(prevState => !prevState);
                }}
              />
            </Backdrop>,
            modalRoot
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
