import { EmptyAndError, Section } from 'components';
import { DrinkList, DrinkSearchBar } from 'components';
import { Pagination } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchIngredients,
  selectCategories,
  selectIngredients,
} from '../redux';
import { useSearchParams } from 'react-router-dom';
import { getDrinks } from 'api';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

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
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      drink: '',
      category: '',
      ingredients: '',
    },
  });
  const categoriesList = useSelector(selectCategories.data);
  const ingredientsList = useSelector(selectIngredients.data);

  const category = searchParams.get('category') || '';
  const drink = searchParams.get('drink') || '';
  const ingredients = searchParams.get('ingredients') || '';
  const limit = drinksPerPage;
  const page = Number(searchParams.get('page')) || 1;

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchCategories()),
      dispatch(fetchIngredients()),
    ]).catch(() =>
      toast.error('Oops... Something went wrong :( Please try again later.')
    );
  }, [dispatch]);

  useEffect(() => {
    function handleResize() {
      setDrinksPerPage(calculatePerPage(window.innerWidth));
    }

    setDrinksPerPage(calculatePerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);

    const query = {
      drink,
      category,
      ingredients,
      limit: drinksPerPage,
      page,
    };

    getDrinks(query)
      .then(data => {
        setDrinks(data.results);
        setTotalPages(data.totalPages);
      })
      .catch(console.log);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [
    category,
    currentPage,
    drink,
    drinksPerPage,
    ingredients,
    page,
    searchParams,
  ]);

  const updateCatQuery = query => {
    setSearchParams({
      drink,
      category: query,
      ingredients,
      limit,
      page: 1, // Встановлюємо сторінку на 1
    });
    setCurrentPage(1); // Оновлюємо сторінку локально
  };

  const updateIngrQuery = query => {
    setSearchParams({
      drink,
      category,
      ingredients: query,
      limit,
      page: 1, // Встановлюємо сторінку на 1
    });
    setCurrentPage(1); // Оновлюємо сторінку локально
  };

  const updateDrinkQuery = query => {
    setSearchParams({
      drink: query,
      category,
      ingredients,
      limit,
      page: 1, // Встановлюємо сторінку на 1
    });
    setCurrentPage(1); // Оновлюємо сторінку локально
  };

  const updatePagination = query => {
    setSearchParams({
      drink,
      category,
      ingredients,
      limit,
      page: query,
    });
  };

  const onSubmit = async () => {
    updateDrinkQuery(getValues('drink'));
  };

  const handleCategoryChange = () => {
    updateCatQuery(getValues('category.value'));
  };

  const handleIngredientChange = () => {
    updateIngrQuery(getValues('ingredients.value'));
  };

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    updatePagination(pageNumber);
  };

  const nextPage = () => paginate(currentPage + 1);
  const prevPage = () => paginate(currentPage - 1);

  return (
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
      {drinks.length === 0 ? (
        <EmptyAndError
          text={
            "Hmm, it seems like we haven't tasted any drinks matching your search criteria just yet. You might want to adjust your query; we've got plenty to show you!"
          }
        />
      ) : (
        <>
          <DrinkList drinks={drinks} />
          <Pagination
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={page}
            totalPages={totalPages}
          />
        </>
      )}
    </Section>
  );
};

export default Drinks;
