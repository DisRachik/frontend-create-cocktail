import { EmptyFavoritePage, Section } from 'components';
import { getDrinksByQuery } from 'redux/drinks';
import { DrinkList, DrinkSearchBar } from 'components';
import { Pagination } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { fetchDrinksByQuery } from 'redux/drinks';
import { useForm } from 'react-hook-form';
import { fetchCategories } from '../redux';
import { fetchIngredients } from '../redux';
import { selectCategories } from '../redux';
import { selectIngredients } from '../redux';

const Drinks = () => {
  const dispatch = useDispatch();
  const { drinks } = useSelector(getDrinksByQuery);
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
    setDrinksPerPage(calculatePerPage(window.innerWidth));
  }, [dispatch]);
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      search: '',
      categories: null,
      ingridients: null,
    },
  });
  const categories = useSelector(selectCategories.data);
  const ingridients = useSelector(selectIngredients.data);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchIngredients());

    // function calculatePerPage(windowWidth) {
    //   return windowWidth < 1440 ? 10 : 9;
    // }

    function handleResize() {
      setDrinksPerPage(calculatePerPage(window.innerWidth));
    }

    setDrinksPerPage(calculatePerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);

    const query = {
      // category: 'Cocktail',
      category: 'Cocktail',
      limit: drinksPerPage,
      offset: (currentPage - 1) * drinksPerPage,
    };
    dispatch(fetchDrinksByQuery(query));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage, dispatch, drinksPerPage]);

  const onSubmit = async () => {
    const formData = getValues();
    const { search, category, ingridients } = formData;
    const searchValue = search || '';
    const categoryValue = category ? category.value : '';
    const ingridientValue = ingridients ? ingridients.value : '';

    if (searchValue && categoryValue && ingridientValue) {
      const search = {
        search: searchValue,
        category: categoryValue,
        ingridients: ingridientValue,
      };
      dispatch(fetchDrinksByQuery(search));
    } else if (searchValue && categoryValue) {
      const search = {
        search: searchValue,
        category: categoryValue,
      };
      dispatch(fetchDrinksByQuery(search));
    } else if (searchValue && ingridientValue) {
      const search = {
        search: searchValue,
        ingridients: ingridientValue,
      };
      dispatch(fetchDrinksByQuery(search));
    } else if (category && ingridientValue) {
      const search = {
        category: categoryValue,
        ingridients: ingridientValue,
      };
      dispatch(fetchDrinksByQuery(search));
    } else if (searchValue) {
      const search = {
        search: searchValue,
      };
      dispatch(fetchDrinksByQuery(search));
    } else if (categoryValue) {
      const search = {
        category: categoryValue,
      };
      dispatch(fetchDrinksByQuery(search));
    } else if (ingridientValue) {
      const search = {
        ingridients: ingridientValue,
      };
      dispatch(fetchDrinksByQuery(search));
    }
  };

  // const indexOfLastDrink = currentPage * drinksPerPage;
  // const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  // const currentDrinks = drinks
  //   ? drinks.slice(indexOfFirstDrink, indexOfLastDrink)
  //   : [];

  // const paginate = pageNumber => setCurrentPage(pageNumber);
  // const nextPage = () => setCurrentPage(prev => prev + 1);
  // const prevPage = () => setCurrentPage(prev => prev - 1);
  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);
  // const dispatch = useDispatch();
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
        {currentDrinks ? (
          <>
            <DrinkSearchBar
              categories={categories}
              ingridients={ingridients}
              control={control}
              handleSubmit={handleSubmit(onSubmit)}
            />
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
        ) : (
          <EmptyFavoritePage />
        )}
      </Section>
    </>
  );
};

// const Drinks = () => {
//   const dispatch = useDispatch();
//   const { drinks } = useSelector(getDrinksByQuery);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [drinksPerPage, setDrinksPerPage] = useState(10);
//   // const params = useParams();
//   const { control, handleSubmit, getValues } = useForm({
//     defaultValues: {
//       search: '',
//       categories: null,
//       ingridients: null,
//     },
//   });
//   const categories = useSelector(selectCategories.data);
//   const ingridients = useSelector(selectIngredients.data);
//   useEffect(() => {
//     dispatch(fetchCategories());
//     dispatch(fetchIngredients());
//     function calculatePerPage(windowWidth) {
//       return windowWidth < 1440 ? 10 : 9;
//     }
//     function handleResize() {
//       setDrinksPerPage(calculatePerPage(window.innerWidth));
//     }
//     setDrinksPerPage(calculatePerPage(window.innerWidth));
//     window.addEventListener('resize', handleResize);

//     // if (params.length !== 0) {
//     //   const queryUrl = params.value;
//     //   dispatch(fetchDrinksByQuery(queryUrl));
//     // }
//     const query = {
//       category: 'Cocktail',
//     };
//     dispatch(fetchDrinksByQuery(query));

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [dispatch]);
//   const onSubmit = async () => {
//     const formData = getValues();
//     const { search, category, ingridients } = formData;
//     const searchValue = search || '';
//     const categoryValue = category ? category.value : '';
//     const ingridientValue = ingridients ? ingridients.value : '';

//     if (searchValue && categoryValue && ingridientValue) {
//       const search = {
//         search: searchValue,
//         category: categoryValue,
//         ingridients: ingridientValue,
//       };
//       dispatch(fetchDrinksByQuery(search));
//     } else if (searchValue && categoryValue) {
//       const search = {
//         search: searchValue,
//         category: categoryValue,
//       };
//       dispatch(fetchDrinksByQuery(search));
//     } else if (searchValue && ingridientValue) {
//       const search = {
//         search: searchValue,
//         ingridients: ingridientValue,
//       };
//       dispatch(fetchDrinksByQuery(search));
//     } else if (category && ingridientValue) {
//       const search = {
//         category: categoryValue,
//         ingridients: ingridientValue,
//       };
//       dispatch(fetchDrinksByQuery(search));
//     } else if (searchValue) {
//       const search = {
//         search: searchValue,
//       };
//       dispatch(fetchDrinksByQuery(search));
//     } else if (categoryValue) {
//       const search = {
//         category: categoryValue,
//       };
//       dispatch(fetchDrinksByQuery(search));
//     } else if (ingridientValue) {
//       const search = {
//         ingridients: ingridientValue,
//       };
//       dispatch(fetchDrinksByQuery(search));
//     } else {
//     }
//   };
//   const indexOfLastDrink = currentPage * drinksPerPage;
//   const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
//   const currentDrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

//   const paginate = pageNumber => setCurrentPage(pageNumber);
//   const nextPage = () => setCurrentPage(prev => prev + 1);
//   const prevPage = () => setCurrentPage(prev => prev - 1);
//   return (
//     <>
//       <Section title="Drinks">
//         {currentDrinks ? (
//           <>
//             <DrinkSearchBar
//               categories={categories}
//               ingridients={ingridients}
//               control={control}
//               handleSubmit={handleSubmit(onSubmit)}
//             />
//             <DrinkList currentDrinks={currentDrinks} />
//             <Pagination
//               drinksPerPage={drinksPerPage}
//               totalDrinks={drinks.length}
//               paginate={paginate}
//               nextPage={nextPage}
//               prevPage={prevPage}
//               currentPage={currentPage}
//             />
//           </>
//         ) : (
//           <EmptyFavoritePage />
//         )}
//       </Section>
//     </>
//   );
// };

export default Drinks;
