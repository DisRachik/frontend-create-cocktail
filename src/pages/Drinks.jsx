import { EmptyFavoritePage, Section } from 'components';
import { getDrinksByQuery } from 'redux/drinks';
import { DrinkList, DrinkSearchBar } from 'components';
import { Pagination } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { fetchDrinksByQuery } from 'redux/drinks';

import { fetchCategories } from '../redux';
import { fetchIngredients } from '../redux';
import { useSearchParams } from 'react-router-dom';

const Drinks = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { drinks, totalPages } = useSelector(getDrinksByQuery);
  const [currentPage, setCurrentPage] = useState(1);

  function calculatePerPage(windowWidth) {
    return windowWidth < 1440 ? 10 : 9;
  }
  const [drinksPerPage, setDrinksPerPage] = useState(
    calculatePerPage(window.innerWidth)
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchIngredients());

    function calculatePerPage(windowWidth) {
      return windowWidth < 1440 ? 10 : 9;
    }

    function handleResize() {
      setDrinksPerPage(calculatePerPage(window.innerWidth));
    }

    setDrinksPerPage(calculatePerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);

    if (searchParams) {
      // const queryUrl = params;
      const queryUrl = {
        category: searchParams.get('category'),
        limit: drinksPerPage,
        page: currentPage,
      };
      console.log(queryUrl);
      dispatch(fetchDrinksByQuery(queryUrl));
    } else {
      const query = {
        category: 'Cocktail',
        limit: drinksPerPage,
        page: currentPage,
      };

      dispatch(fetchDrinksByQuery(query));
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage, dispatch, drinksPerPage, searchParams]);

  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = drinks.drinks.slice(
    indexOfFirstDrink,
    indexOfLastDrink
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  return (
    <>
      <Section title="Drinks">
        <DrinkSearchBar
          currentPage={currentPage}
          drinksPerPage={drinksPerPage}
        />
        <DrinkList />
        <Pagination
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          totalPages={drinks.totalPages}
        />
      </Section>
    </>
  );
};

export default Drinks;
