// import { EmptyFavoritePage } from 'components';

import { getDrinksByQuery } from 'redux/drinks';
import { DrinkList, DrinkSearchBar } from 'components';
import { Pagination } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { fetchDrinksByQuery } from 'redux/drinks';

export const DrinksPage = () => {
  const dispatch = useDispatch();
  const { drinks } = useSelector(getDrinksByQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [drinksPerPage, setDrinksPerPage] = useState(10);
  // const params = useParams();

  useEffect(() => {
    function calculatePerPage(windowWidth) {
      return windowWidth < 1440 ? 10 : 9;
    }
    function handleResize() {
      setDrinksPerPage(calculatePerPage(window.innerWidth));
    }
    setDrinksPerPage(calculatePerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);

    // if (params.length !== 0) {
    //   const queryUrl = params.value;
    //   dispatch(fetchDrinksByQuery(queryUrl));
    // }
    dispatch(fetchDrinksByQuery('Cocktail'));
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

  console.log(currentDrinks);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);
  return (
    // <>
    //   {queryData ? (
    <>
      <DrinkSearchBar />
      <DrinkList currentDrinks={currentDrinks} />
      <Pagination
        drinksPerPage={drinksPerPage}
        totalDrinks={drinks.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
    </>
    //   ) : (
    //     <EmptyFavoritePage />
    //   )}
    // </>
  );
};
