import { Section } from 'components';
import { DrinkList, DrinkSearchBar } from 'components';
import { Pagination } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories, selectIngredients } from '../redux';
import { useSearchParams } from 'react-router-dom';
import { getDrinks } from 'api';
import { useForm } from 'react-hook-form';

const Drinks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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

  useEffect(() => {
    function handleResize() {
      setDrinksPerPage(calculatePerPage(window.innerWidth));
    }

    setDrinksPerPage(calculatePerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);

    if (searchParams.get('category')) {
      const queryUrl = {
        category: searchParams.get('category'),
        limit: drinksPerPage,
        page: currentPage,
      };
      // setSearchParams(queryUrl);
      getDrinks(queryUrl)
        .then(data => {
          setDrinks(data.results);
          setTotalPages(data.totalPages);
        })
        .catch(console.log);
    }
    const query = {
      category: 'Cocktail' || '',
      limit: drinksPerPage,
      page: currentPage,
    };
    setSearchParams(query);
    getDrinks(query).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
      // setSearchParams({ drink: '', category: '', ingredients: '' });
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage, drinksPerPage]);

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      drink: '',
      category: '',
      ingredients: '',
    },
  });
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
    console.log(querySearch);
    return querySearch;
  };

  const onSubmit = async () => {
    getDrinks(getQuery()).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };

  const handleCategoryChange = () => {
    setCurrentPage(1);
    const queryParams = getValues();
    setSearchParams({
      drink: queryParams.drink || '',
      category: queryParams.category,
      ingredients: queryParams.ingredients || '',
      page: queryParams.page,
    });
    setSearchParams(queryParams);
    getDrinks(getQuery()).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };

  const handleIngredientChange = () => {
    setCurrentPage(1);
    const queryParams = getValues();
    setSearchParams({
      drink: queryParams.drink || '',
      category: queryParams.category,
      ingredients: queryParams.ingredients || '',
      page: queryParams.page,
    });
    getDrinks(getQuery()).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    const queryParams = getValues();
    setSearchParams({
      drink: queryParams.drink || '',
      category: queryParams.category,
      ingredients: queryParams.ingredients || '',
      page: queryParams.page,
    });
    getDrinks(getQuery()).then(data => {
      setDrinks(data.results);
      setTotalPages(data.totalPages);
    });
  };

  const nextPage = () => paginate(currentPage + 1);
  const prevPage = () => paginate(currentPage - 1);

  return (
    <>
      <Section title="Drinks">
        <DrinkSearchBar
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          categoriesList={categoriesList}
          ingredientsList={ingredientsList}
          onChangeCategory={handleCategoryChange}
          onChangeIngredient={handleIngredientChange}
          initialCategory={searchParams.get('category')}
          initialIngredient={searchParams.get('ingredients')}
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
