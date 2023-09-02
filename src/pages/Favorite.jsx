import { useDispatch } from 'react-redux';
import { Section, RecipesList, EmptyAndError } from 'components';

import { deleteFavoriteDrink } from 'redux/favorite/operations';
import { useEffect, useState } from 'react';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

import { getFavorites } from 'api';

const Favorite = () => {
  const [favorites, setFavorite] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const dispatch = useDispatch();

  useEffect(() => {
    function calculatePerPage(windowWidth) {
      return windowWidth < 1440 ? 8 : 9;
    }
    function handleResize() {
      setVisibleCount(calculatePerPage(window.innerWidth));
    }
    setVisibleCount(calculatePerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);

    (async () => {
      setFavorite(await getFavorites());
    })();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const currentDrinks = favorites.slice(0, visibleCount);

  const seeMoreDrinks = () => {
    setVisibleCount(prevState => prevState + 9);
  };

  const handleClick = async id => {
    dispatch(deleteFavoriteDrink(id));

    const filterDrinks = favorites.filter(data => data._id !== id);
    setFavorite(filterDrinks);
  };

  return (
    <>
      <Section title="Favorites">
        {currentDrinks.length !== 0 ? (
          <>
            <RecipesList array={currentDrinks} action={handleClick} />

            {visibleCount < favorites.length && (
              <ButtonLoadMore onClick={seeMoreDrinks} />
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
