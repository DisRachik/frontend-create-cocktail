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
  const categories = useSelector(selectCategories.data);
  const ingredients = useSelector(selectIngredients.data);
  if (categories.length === 0) {
    dispatch(fetchCategories());
  }

  if (ingredients.length === 0) {
    dispatch(fetchIngredients());
  }

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      search: '',
      category: null,
      ingredients: null,
    },
  });

  useEffect(() => {
    console.log('mount');
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
        console.log('data', data);
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
  console.log(drinks);

  const onSubmit = async () => {
    const formData = getValues();
    const { search, category, ingredients } = formData;
    const searchValue = search || '';
    const categoryValue = category ? category.value : '';
    const ingridientValue = ingredients ? ingredients.value : '';
    console.log(formData);
    const querySearch = {
      search: searchValue,
      category: categoryValue,
      ingredients: ingridientValue,
      limit: drinksPerPage,
      page: currentPage,
    };
    getDrinks(querySearch).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };

  const handleCategoryChange = selectedOption => {
    const req = {
      category: selectedOption.value,
    };
    getDrinks(req).then(data => {
      console.log('dataS', data);
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };
  const handleIngredientChange = selectedOption => {
    const req = {
      ingredients: selectedOption.value,
    };
    getDrinks(req).then(data => {
      console.log('dataS', data);
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
          categories={categories}
          ingredients={ingredients}
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
