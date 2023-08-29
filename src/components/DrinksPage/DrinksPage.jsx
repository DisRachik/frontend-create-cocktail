import { getDrinksByQuery } from 'api';
import { EmptyFavoritePage } from 'components';
import { DrinkList, DrinkSearchBar } from 'components';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export const DrinksPage = () => {
  const [queryData, setQueryData] = useState(null);
  //   const { getValues } = useForm();
  //   const formData = getValues();
  const params = useParams();
  //
  //   useEffect(() => {
  // if (params) {
  //   const queryUrl = params.value.toLowerCase().trim();
  //   getDrinksByQuery(queryUrl)
  //     .then(data => setQueryData(data.results))
  //     .catch(() => window.alert('Network Error. Please, try again later'));
  // }
  // getDrinksByQuery('Cocktail')
  //   .then(data => setQueryData(data.results))
  //   .catch(() => window.alert('Network Error. Please, try again later'));
  //   }, [params]);

  //

  return (
    // <>
    //   {queryData ? (
    <>
      <DrinkSearchBar />
      <DrinkList data={queryData} />
    </>
    //   ) : (
    //     <EmptyFavoritePage />
    //   )}
    // </>
  );
};
