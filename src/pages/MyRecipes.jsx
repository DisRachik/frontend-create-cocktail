import { Button, EmptyAndError, Section } from 'components';
import { RecipesList } from 'components';
import { useEffect, useState } from 'react';
import { deleteMyRecipe, getMyRecipes } from 'api';

const MyRecipes = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const imagePerRow = 9;
  const [next, setNext] = useState(imagePerRow);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await getMyRecipes();
        setMyRecipes(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleRemoveRecipe = async id => {
    try {
      setIsLoading(true);
      await deleteMyRecipe(id);
      const result = await getMyRecipes();

      setMyRecipes(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const seeMoreDrinks = () => {
    setNext(next + imagePerRow);
  };

  const sliceRecipes = myRecipes.slice(0, next);

  const isMyRecipes = myRecipes.length > 0;

  return (
    <>
      <Section title="My recipes">
        <>
          {isMyRecipes ? (
            <RecipesList
              array={sliceRecipes}
              action={handleRemoveRecipe}
              params={{
                title:
                  'Do you really want to delete this cocktail from your recipes',
                agreementBtnText: 'Yes',
              }}
            />
          ) : (
            <EmptyAndError text="You don't have your recipes" />
          )}
          {myRecipes.length !== sliceRecipes.length && (
            <>
              <div style={{ textAlign: 'center' }}>
                <Button type="button" onClick={seeMoreDrinks}>
                  see other
                </Button>
              </div>
            </>
          )}
          {isLoading && !error && <b>Request in progress...</b>}
        </>
      </Section>
    </>
  );
};

export default MyRecipes;
