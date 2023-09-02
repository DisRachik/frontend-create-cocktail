import { Section, RecipesList, EmptyAndError } from 'components';

import { useEffect, useState } from 'react';

import { deleteFromFavorites, getFavorites } from 'api';
import { StyledButton } from 'components/shared/Button/Button.styled';

const Favorite = () => {
  const [favorites, setFavorite] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    function calculatePerPage(windowWidth) {
      return windowWidth < 1440 ? 8 : 9;
    }
    function handleResize() {
      setVisibleCount(calculatePerPage(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);

    (async () => {
      setFavorite(await getFavorites());
    })();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentDrinks = favorites.slice(0, visibleCount);

  const seeMoreDrinks = () => {
    setVisibleCount(prevState => prevState + 9);
  };

  const handleClick = async id => {
    deleteFromFavorites(id);

    const filterDrinks = favorites.filter(data => data._id !== id);
    setFavorite(filterDrinks);
  };

  return (
    <>
      <Section title="Favorites">
        {currentDrinks.length !== 0 ? (
          <>
            <RecipesList
              array={currentDrinks}
              action={handleClick}
              params={{
                title: 'Do you really want to delete this cocktail',
                agreementBtnText: 'Yes',
              }}
            />

            {visibleCount < favorites.length && (
              <div style={{ textAlign: 'center' }}>
                <StyledButton type="button" onClick={seeMoreDrinks}>
                  see other
                </StyledButton>
              </div>
            )}
          </>
        ) : (
          <EmptyAndError text="You haven`t added any favorite cocktails yet" />
        )}
      </Section>
    </>
  );
};

export default Favorite;
