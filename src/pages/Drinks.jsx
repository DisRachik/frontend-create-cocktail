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

  // const indexOfLastDrink = currentPage * drinksPerPage;
  // const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  // const currentDrinks = drinks
  //   ? drinks.slice(indexOfFirstDrink, indexOfLastDrink)
  //   : [];

  // const paginate = pageNumber => setCurrentPage(pageNumber);
  // const nextPage = () => setCurrentPage(prev => prev + 1);
  // const prevPage = () => setCurrentPage(prev => prev - 1);
  console.log('drinks', drinks);
  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = drinks.drinks.slice(
    indexOfFirstDrink,
    indexOfLastDrink
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  // const { loadedDrinks } = useSelector(getDrinksByQuery); // Оновлений селектор
  // const [currentPage, setCurrentPage] = useState(1);
  // const [drinksPerPage, setDrinksPerPage] = useState(10);
  // // const params = useParams();
  // const { control, handleSubmit, getValues } = useForm({
  //   defaultValues: {
  //     search: '',
  //     categories: null,
  //     ingridients: null,
  //   },
  // });
  // const categories = useSelector(selectCategories.data);
  // const ingridients = useSelector(selectIngredients.data);

  // // Оновлення списку коктейлів на основі стану loadedDrinks
  // const { drinks: queriedDrinks } = useSelector(getDrinksByQuery);
  // const drinks = loadedDrinks.length > 0 ? loadedDrinks : queriedDrinks;

  // useEffect(() => {
  //   dispatch(fetchCategories());
  //   dispatch(fetchIngredients());

  //   function calculatePerPage(windowWidth) {
  //     return windowWidth < 1440 ? 10 : 9;
  //   }

  //   function handleResize() {
  //     setDrinksPerPage(calculatePerPage(window.innerWidth));
  //   }

  //   setDrinksPerPage(calculatePerPage(window.innerWidth));
  //   window.addEventListener('resize', handleResize);

  //   const query = {
  //     category: 'Cocktail',
  //   };

  //   dispatch(fetchDrinksByQuery(query));

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [dispatch]);

  // const onSubmit = async () => {
  //   const formData = getValues();
  //   const { search, category, ingridients } = formData;
  //   const searchValue = search || '';
  //   const categoryValue = category ? category.value : '';
  //   const ingridientValue = ingridients ? ingridients.value : '';

  //   if (searchValue && categoryValue && ingridientValue) {
  //     const search = {
  //       search: searchValue,
  //       category: categoryValue,
  //       ingridients: ingridientValue,
  //     };
  //     dispatch(fetchDrinksByQuery(search));
  //   } else if (searchValue && categoryValue) {
  //     const search = {
  //       search: searchValue,
  //       category: categoryValue,
  //     };
  //     dispatch(fetchDrinksByQuery(search));
  //   } else if (searchValue && ingridientValue) {
  //     const search = {
  //       search: searchValue,
  //       ingridients: ingridientValue,
  //     };
  //     dispatch(fetchDrinksByQuery(search));
  //   } else if (category && ingridientValue) {
  //     const search = {
  //       category: categoryValue,
  //       ingridients: ingridientValue,
  //     };
  //     dispatch(fetchDrinksByQuery(search));
  //   } else if (searchValue) {
  //     const search = {
  //       search: searchValue,
  //     };
  //     dispatch(fetchDrinksByQuery(search));
  //   } else if (categoryValue) {
  //     const search = {
  //       category: categoryValue,
  //     };
  //     dispatch(fetchDrinksByQuery(search));
  //   } else if (ingridientValue) {
  //     const search = {
  //       ingridients: ingridientValue,
  //     };
  //     dispatch(fetchDrinksByQuery(search));
  //   } else {
  //     // Обробка інших випадків
  //   }
  // };

  // const indexOfLastDrink = currentPage * drinksPerPage;
  // const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  // const currentDrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

  // const paginate = pageNumber => setCurrentPage(pageNumber);
  // const nextPage = () => setCurrentPage(prev => prev + 1);
  // const prevPage = () => setCurrentPage(prev => prev - 1);

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
        {/* {currentDrinks ? (
          <>
            <DrinkSearchBar
              categories={categories}
              ingridients={ingridients}
              control={control}
              handleSubmit={handleSubmit(onSubmit)}
            />
            <DrinkList data={drinks} />
            <Pagination
              drinksPerPage={drinksPerPage}
              totalDrinks={drinks.length}
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        ) : (
          <EmptyFavoritePage />
        )} */}
      </Section>
    </>
  );
};

//     // if (params.length !== 0) {
//     //   const queryUrl = params.value;
//     //   dispatch(fetchDrinksByQuery(queryUrl));
//     // }
//     const query = {
//       category: 'Cocktail',
//     };
//     dispatch(fetchDrinksByQuery(query));

export default Drinks;
