import { Section, RecipesList, EmptyAndError, Button } from 'components';

import { useEffect, useState } from 'react';

import { deleteFromFavorites, getFavorites } from 'api';

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
              <Button type="button" onClick={seeMoreDrinks}>
                see other
              </Button>
            </div>
          )}
        </>
      ) : (
        <EmptyAndError
          text="You haven`t added any favorite cocktails yet"
          closeModalRoot
        />
      )}
    </Section>
  );
};

export default Favorite;
