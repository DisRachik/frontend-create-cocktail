// Libs
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Api
import { getPopularRecipes } from 'api';

export const PopularRecipe = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const popular = await getPopularRecipes();
      setPopularRecipes(popular);
    })();
  }, []);

  return (
    <ul>
      {popularRecipes.map(({ _id, drinkThumb, drink, about }) => {
        return (
          <li key={_id}>
            <Link to={`/recipe/${_id}`}>
              <img src={drinkThumb} alt={drink} width="90" height="90" />
              <div>
                <h3>{drink}</h3>
                <p>
                  {about
                    ? about
                    : 'We are sorry, but there is no description for this cocktail yet.'}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
