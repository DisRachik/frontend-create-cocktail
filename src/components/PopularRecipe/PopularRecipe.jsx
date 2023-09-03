// Libs
import { useState, useEffect } from 'react';
// Api
import { getPopularRecipes } from 'api';
// Styled components
import {
  CocktailList,
  StyledLink,
  CocktailImg,
  CocktailTitle,
  CocktailText,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const popular = await getPopularRecipes();
      setPopularRecipes(popular);
    })();
  }, []);

  return (
    <CocktailList>
      {popularRecipes.map(({ _id, drinkThumb, drink, about }) => {
        return (
          <li key={_id}>
            <StyledLink to={`/recipe/${_id}`}>
              <CocktailImg
                src={drinkThumb}
                alt={drink}
                width="90"
                height="90"
              />
              <div>
                <CocktailTitle>{drink}</CocktailTitle>
                <CocktailText>
                  {about
                    ? about
                    : 'We are sorry, but there is no description for this cocktail yet.'}
                </CocktailText>
              </div>
            </StyledLink>
          </li>
        );
      })}
    </CocktailList>
  );
};
