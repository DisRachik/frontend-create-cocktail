import { EmptyAndError, Section } from 'components';
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
  const page = currentPage;

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
      page: currentPage,
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
  }, [category, currentPage, drink, drinksPerPage, ingredients, searchParams]);

  const updateCatQuery = query => {
    setSearchParams({
      drink,
      category: query,
      ingredients,
      limit,
      page,
    });
  };

  const updateIngrQuery = query => {
    setSearchParams({
      drink,
      category,
      ingredients: query,
      limit,
      page,
    });
  };
  const updateDrinkQuery = query => {
    setSearchParams({
      drink: query,
      category,
      ingredients,
      limit,
      page,
    });
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
    setCurrentPage(1);
    updateDrinkQuery(getValues('drink'));
  };

  const handleCategoryChange = () => {
    setCurrentPage(1);
    updateCatQuery(getValues('category.value'));
  };

  const handleIngredientChange = () => {
    setCurrentPage(1);
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
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </Section>
  );
};

export default Drinks;
