import { Section } from 'components';
import { DrinkList, DrinkSearchBar } from 'components';
import { Pagination } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories, selectCategories, selectIngredients } from '../redux';
import { fetchIngredients } from '../redux';
import { useSearchParams } from 'react-router-dom';
import { getDrinks } from 'api';
import { useForm } from 'react-hook-form';

const Drinks = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [drinks, setDrinks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [drinksPerPage, setDrinksPerPage] = useState(
    calculatePerPage(window.innerWidth)
  );
  function calculatePerPage(windowWidth) {
    return windowWidth < 1440 ? 10 : 9;
  }

  const categoriesList = useSelector(selectCategories.data);
  const ingredientsList = useSelector(selectIngredients.data);
  if (categoriesList.length === 0) {
    dispatch(fetchCategories());
  }

  if (ingredientsList.length === 0) {
    dispatch(fetchIngredients());
  }

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      drink: '',
      category: null,
      ingredients: null,
    },
  });

  useEffect(() => {
    function handleResize() {
      setDrinksPerPage(calculatePerPage(window.innerWidth));
    }

    setDrinksPerPage(calculatePerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);

    if (searchParams.get('category')) {
      const initialCategory = searchParams.get('category') || '';
      const queryUrl = {
        category: initialCategory,
        limit: drinksPerPage,
        page: currentPage,
      };
      getDrinks(queryUrl).then(data => {
        setDrinks(data.results);
        setTotalPages(data.totalPages);
      });
    } else {
      const query = {
        category: 'Cocktail',
        limit: drinksPerPage,
        page: currentPage,
      };
      getDrinks(query).then(data => {
        setDrinks(data.results);
        setTotalPages(data.totalPages);
      });
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage, drinksPerPage, searchParams]);

  const getQuery = () => {
    const formData = getValues();
    const { drink, category, ingredients } = formData;
    const searchValue = drink || '';
    const categoryValue = category ? category.value : '';
    const ingridientValue = ingredients ? ingredients.value : '';
    const querySearch = {
      drink: searchValue,
      category: categoryValue,
      ingredients: ingridientValue,
      limit: drinksPerPage,
      page: currentPage,
    };

    return querySearch;
  };

  const onSubmit = async () => {
    getDrinks(getQuery()).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };

  const handleCategoryChange = () => {
    getDrinks(getQuery()).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };

  const handleIngredientChange = () => {
    getDrinks(getQuery()).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  return (
    <>
      <Section title="Drinks">
        <DrinkSearchBar
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          categories={categoriesList}
          ingredients={ingredientsList}
          onChangeCategory={handleCategoryChange}
          onChangeIngredient={handleIngredientChange}
          initialCategory={searchParams.get('category')}
        />
        <DrinkList drinks={drinks} />
        <Pagination
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Section>
    </>
  );
};

export default Drinks;
